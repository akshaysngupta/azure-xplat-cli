// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension1862/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"cb681a74-6915-44ab-8ab0-7ec3b26cc315\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"ubuntuserver\",\r\n        \"sku\": \"14.04.3-LTS\",\r\n        \"version\": \"14.04.201512180\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli7c49b1c09fce0867-os-1471281533324\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext3706.blob.core.windows.net/xplatstoragecntext9909/cli7c49b1c09fce0867-os-1471281533324.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension1862/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatstoragext3706.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension1862/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1627',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': '35ea8ab7-0a9d-45b1-aef0-44a0388181e9',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14974',
  'x-ms-correlation-request-id': '20370418-73d8-474f-8eca-cc1f9048c694',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T172218Z:20370418-73d8-474f-8eca-cc1f9048c694',
  date: 'Mon, 15 Aug 2016 17:22:17 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension1862/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2016-03-30', '*')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"cb681a74-6915-44ab-8ab0-7ec3b26cc315\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"ubuntuserver\",\r\n        \"sku\": \"14.04.3-LTS\",\r\n        \"version\": \"14.04.201512180\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli7c49b1c09fce0867-os-1471281533324\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext3706.blob.core.windows.net/xplatstoragecntext9909/cli7c49b1c09fce0867-os-1471281533324.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": [\r\n        {\r\n          \"lun\": 0,\r\n          \"name\": \"xplatvmExt-20160815-202218273\",\r\n          \"createOption\": \"Empty\",\r\n          \"vhd\": {\r\n            \"uri\": \"https://xplatstoragext3706.blob.core.windows.net/xplatstoragecntext9909/xplatvmExt-20160815-202218273.vhd\"\r\n          },\r\n          \"caching\": \"ReadWrite\",\r\n          \"diskSizeGB\": 1023\r\n        }\r\n      ]\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension1862/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatstoragext3706.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Updating\"\r\n  },\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension1862/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1992',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/operations/9837cb80-2025-4306-9dc1-236c0d98de79?api-version=2016-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': '9837cb80-2025-4306-9dc1-236c0d98de79',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': '562f8c0d-d4f7-431e-a346-de124c6abb40',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T172220Z:562f8c0d-d4f7-431e-a346-de124c6abb40',
  date: 'Mon, 15 Aug 2016 17:22:19 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/operations/9837cb80-2025-4306-9dc1-236c0d98de79?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-08-15T17:22:17.4893069+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"9837cb80-2025-4306-9dc1-236c0d98de79\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': '3fa78bf1-5ec1-4cec-ac1c-11a171f37f16',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14966',
  'x-ms-correlation-request-id': '7d83da68-709c-4440-8cef-46a5c650c746',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T172250Z:7d83da68-709c-4440-8cef-46a5c650c746',
  date: 'Mon, 15 Aug 2016 17:22:50 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/eastus/operations/9837cb80-2025-4306-9dc1-236c0d98de79?api-version=2016-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2016-08-15T17:22:17.4893069+00:00\",\r\n  \"endTime\": \"2016-08-15T17:22:58.3952879+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"9837cb80-2025-4306-9dc1-236c0d98de79\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': '6c4520dc-6710-495b-8978-f7866fef1603',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14965',
  'x-ms-correlation-request-id': '5a0d3e15-a3b1-435b-af7d-c6a65a99270f',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T172321Z:5a0d3e15-a3b1-435b-af7d-c6a65a99270f',
  date: 'Mon, 15 Aug 2016 17:23:20 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension1862/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"cb681a74-6915-44ab-8ab0-7ec3b26cc315\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"ubuntuserver\",\r\n        \"sku\": \"14.04.3-LTS\",\r\n        \"version\": \"14.04.201512180\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli7c49b1c09fce0867-os-1471281533324\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext3706.blob.core.windows.net/xplatstoragecntext9909/cli7c49b1c09fce0867-os-1471281533324.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": [\r\n        {\r\n          \"lun\": 0,\r\n          \"name\": \"xplatvmExt-20160815-202218273\",\r\n          \"createOption\": \"Empty\",\r\n          \"vhd\": {\r\n            \"uri\": \"https://xplatstoragext3706.blob.core.windows.net/xplatstoragecntext9909/xplatvmExt-20160815-202218273.vhd\"\r\n          },\r\n          \"caching\": \"ReadWrite\",\r\n          \"diskSizeGB\": 1023\r\n        }\r\n      ]\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension1862/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatstoragext3706.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGExtension1862/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1993',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': 'cd5aacdc-35a8-41a1-b24b-edcf356d555b',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14966',
  'x-ms-correlation-request-id': 'bc3db09f-83c4-4fe8-aac5-6a080b624037',
  'x-ms-routing-request-id': 'WESTEUROPE:20160815T172321Z:bc3db09f-83c4-4fe8-aac5-6a080b624037',
  date: 'Mon, 15 Aug 2016 17:23:21 GMT' });
 return result; }]];