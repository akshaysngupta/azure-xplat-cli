/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var __ = require('underscore');
var util = require('util');
var utils = require('../../../util/utils');
var $ = utils.getLocaleString;
var constants = require('../../arm/network/constants');
var NetworkConfig = require('./networkConfig');

function Subnet(cli, networkManagementClient) {
  this.cli = cli;
  this.networkManagementClient = networkManagementClient;
  this.networkConfig = new NetworkConfig(cli, networkManagementClient);
}

__.extend(Subnet.prototype, {
  create: function (vnetName, subnetName, options, _) {
    var networkConfiguration = this.networkConfig.get(_);
    var vNetList = networkConfiguration.VirtualNetworkConfiguration.VirtualNetworkSites;
    var vNet = utils.findFirstCaseIgnore(vNetList, {Name: vnetName});
    if (!vNet) {
      throw new Error(util.format($('A virtual network with name "%s" not found'), vnetName));
    }
    if (!vNet.Subnets) {
      vNet.Subnets = [];
    }

    var subnetsList = vNet.Subnets;
    var subnet = utils.findFirstCaseIgnore(subnetsList, {Name: subnetName});
    if (subnet) {
      throw new Error(util.format($('A subnet with name "%s" already exists in the virtual network"%s"'), subnetName, vnetName));
    }

    var subnetInput = {
      'Name': subnetName,
      'AddressPrefix': options.addressPrefix
    };

    subnetsList.push(subnetInput);
    var progress = this.cli.interaction.progress(util.format($('Creating subnet "%s"'), subnetName));
    try {
      this.networkConfig.set(networkConfiguration, _);
      if (options.networkSecurityGroupName) {
        this.addNsg(options.networkSecurityGroupName, vnetName, subnetName, options, _);
      }
    } finally {
      progress.end();
    }
    this.show(vnetName, subnetName, options, _);
  },

  set: function (vnetName, subnetName, options, _) {
    var networkConfiguration = this.networkConfig.get(_);
    var vNetList = networkConfiguration.VirtualNetworkConfiguration.VirtualNetworkSites;
    var vNet = utils.findFirstCaseIgnore(vNetList, {Name: vnetName});
    if (!vNet) {
      throw new Error(util.format($('A virtual network with name "%s" not found'), vnetName));
    }

    var subnetList = vNet.Subnets;
    var subnet = utils.findFirstCaseIgnore(subnetList, {Name: subnetName});
    if (!subnet) {
      throw new Error(util.format($('A virtual network "%s" does not contain a subnet with name "%s"'), vnetName, subnetName));
    }

    if (options.addressPrefix) {
      subnet.AddressPrefix = options.addressPrefix;
    }

    var progress = this.cli.interaction.progress(util.format($('Updating subnet "%s"'), subnetName));
    try {
      this.networkConfig.set(networkConfiguration, _);
    } finally {
      progress.end();
    }
    this.show(vnetName, subnetName, options, _);
  },

  list: function (vnetName, options, _) {
    var vNetList = this._getVnetList(options, _);
    var vNet = utils.findFirstCaseIgnore(vNetList, {Name: vnetName});
    var output = this.cli.output;
    if (vNet) {
      this.cli.interaction.formatOutput(vNet.Subnets, function (outputData) {
        if (!outputData || outputData.length === 0) {
          throw new Error($('No virtual network subnets found'));
        } else {
          output.table(outputData, function (row, item) {
            row.cell($('Name'), item.Name);
            row.cell($('Address prefix'), item.AddressPrefix);
          });
        }
      });
    } else {
      output.warn(util.format($('Virtual network with name "%s" not found'), vnetName));
    }
  },

  get: function (vnetName, subnetName, options, _) {
    var progress = this.cli.interaction.progress(util.format($('Looking up the subnet "%s"'), subnetName));
    try {
      var vNetList = this._getVnetList(options, _);
      var vNet = utils.findFirstCaseIgnore(vNetList, {Name: vnetName});
      var output = this.cli.output;
      if (!vNet) {
        output.warn(util.format($('Virtual network with name "%s" not found'), vnetName));
        return;
      }

      var subnetList = vNet.Subnets;
      if (!subnetList || subnetList.length === 0) {
        throw new Error($('Virtual network has no subnets'));
      }
      return utils.findFirstCaseIgnore(subnetList, {Name: subnetName});
    } catch (e) {
      if (e.code === 'NotFound') {
        return null;
      }
      throw e;
    } finally {
      progress.end();
    }
  },

  show: function (vnetName, subnetName, options, _) {
    var subnet = this.get(vnetName, subnetName, options, _);
    var output = this.cli.output;

    this.cli.interaction.formatOutput(subnet, function (subnet) {
      if (subnet) {
        output.nameValue($('Name'), subnet.Name);
        output.nameValue($('Address prefix'), subnet.AddressPrefix);
      } else {
        if (output.format().json) {
          output.json({});
        } else {
          output.warn(util.format($('A virtual network subnet with name "%s" not found'), subnetName));
        }
      }
    });
  },

  delete: function (vnetName, subnetName, options, _) {
    var networkConfiguration = this.networkConfig.get(_);
    var vNetList = networkConfiguration.VirtualNetworkConfiguration.VirtualNetworkSites;
    var vNet = utils.findFirstCaseIgnore(vNetList, {Name: vnetName});
    if (!vNet) {
      throw new Error(util.format($('A virtual network with name "%s" not found'), vnetName));
    }

    var subnetList = vNet.Subnets;
    if (subnetList && subnetList.length > 0) {

      var index = utils.indexOfCaseIgnore(subnetList, {Name: subnetName});
      if (index === null) {
        throw new Error(util.format($('Virtual network subnet with name "%s" not found'), subnetName));
      }

      if (!options.quiet && !this.cli.interaction.confirm(util.format($('Delete the virtual network subnet "%s" ? [y/n] '), subnetName), _)) {
        return;
      }

      subnetList.splice(index, 1);
      var progress = this.cli.interaction.progress(util.format($('Deleting the virtual network subnet "%s"'), subnetName));
      try {
        this.networkConfig.set(networkConfiguration, _);
      } finally {
        progress.end();
      }
    }
  },

  addNsg: function (nsgName, vnetName, subnetName, options, _) {
    var nsg = this._getNsgForSubnet(nsgName, constants.NSG_DEFAULT_DETAIL_LEVEL, _);
    if (!nsg) {
      throw new Error(util.format($('A network security group with name "%s" not found'), nsgName));
    }

    var subnet = this.get(vnetName, subnetName, options, _);
    if (!subnet) {
      throw new Error(util.format($('A subnet with name "%s" was not found in virtual network "%s"'), subnetName, vnetName));
    }

    var parameters = {
      name: nsgName
    };

    var progress = this.cli.interaction.progress(util.format($('Creating a network security group "%s"'), nsgName));
    try {
      this.networkManagementClient.networkSecurityGroups.addToSubnet(vnetName, subnetName, parameters, _);
    } finally {
      progress.end();
    }
  },

  removeNsg: function (nsgName, vnetName, subnetName, options, _) {
    var nsg = this._getNsgForSubnet(nsgName, constants.NSG_DEFAULT_DETAIL_LEVEL, _);
    if (!nsg) {
      throw new Error(util.format($('A network security group with name "%s" not found'), nsgName));
    }

    var subnet = this.get(vnetName, subnetName, options, _);
    if (!subnet) {
      throw new Error(util.format($('A subnet with name "%s" was not found in virtual network "%s"'), subnetName, vnetName));
    }

    if (!options.quiet && !this.cli.interaction.confirm(util.format($('Delete nsg "%s" and subnet "%s" association? [y/n] '), nsgName, subnetName), _)) {
      return;
    }

    var progress = this.cli.interaction.progress(util.format($('Creating a network security group "%s"'), nsgName));
    try {
      this.networkManagementClient.networkSecurityGroups.removeFromSubnet(vnetName, subnetName, nsgName, _);
    } finally {
      progress.end();
    }
  },

  _getNsgForSubnet: function (nsgName, withRules, _) {
    var detailLevel = null;
    if (withRules) detailLevel = 'Full';
    var progress = this.cli.interaction.progress(util.format($('Looking up the network security group "%s"'), nsgName));
    try {
      var nsg = this.networkManagementClient.networkSecurityGroups.get(nsgName, detailLevel, _);
      return nsg;
    } catch (e) {
      if (e.code === 'ResourceNotFound') {
        return null;
      }
      throw e;
    } finally {
      progress.end();
    }
  },

  _getVnetList: function (options, _) {
    var networkConfiguration = this.networkConfig.get(_);
    if (!networkConfiguration.VirtualNetworkConfiguration) {
      networkConfiguration.VirtualNetworkConfiguration = {};
    }
    return networkConfiguration.VirtualNetworkConfiguration.VirtualNetworkSites;
  }
});

module.exports = Subnet;
