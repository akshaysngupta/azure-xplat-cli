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
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Compute/locations/westus/usages?api-version=2016-03-30')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"unit\": \"Count\",\r\n      \"currentValue\": 0,\r\n      \"limit\": 2000,\r\n      \"name\": {\r\n        \"value\": \"availabilitySets\",\r\n        \"localizedValue\": \"Availability Sets\"\r\n      }\r\n    },\r\n    {\r\n      \"unit\": \"Count\",\r\n      \"currentValue\": 3,\r\n      \"limit\": 100,\r\n      \"name\": {\r\n        \"value\": \"cores\",\r\n        \"localizedValue\": \"Total Regional Cores\"\r\n      }\r\n    },\r\n    {\r\n      \"unit\": \"Count\",\r\n      \"currentValue\": 3,\r\n      \"limit\": 10000,\r\n      \"name\": {\r\n        \"value\": \"virtualMachines\",\r\n        \"localizedValue\": \"Virtual Machines\"\r\n      }\r\n    },\r\n    {\r\n      \"unit\": \"Count\",\r\n      \"currentValue\": 0,\r\n      \"limit\": 200,\r\n      \"name\": {\r\n        \"value\": \"virtualMachineScaleSets\",\r\n        \"localizedValue\": \"Virtual Machine Scale Sets\"\r\n      }\r\n    },\r\n    {\r\n      \"unit\": \"Count\",\r\n      \"currentValue\": 1,\r\n      \"limit\": 100,\r\n      \"name\": {\r\n        \"value\": \"standardA0_A7Family\",\r\n        \"localizedValue\": \"Standard A0-A7 Family Cores\"\r\n      }\r\n    },\r\n    {\r\n      \"unit\": \"Count\",\r\n      \"currentValue\": 2,\r\n      \"limit\": 100,\r\n      \"name\": {\r\n        \"value\": \"standardDFamily\",\r\n        \"localizedValue\": \"Standard D Family Cores\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1231',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'bf4ad5b5-9365-4946-8733-54147d64a4fd_131146145068840527',
  'x-ms-request-id': '2cbb4dd5-658a-41c4-ae74-d54a5c5b9c5e',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14975',
  'x-ms-correlation-request-id': 'aa901300-1485-459f-8cc0-e84f557dc6f2',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T093840Z:aa901300-1485-459f-8cc0-e84f557dc6f2',
  date: 'Tue, 16 Aug 2016 09:38:40 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/usages?api-version=2016-06-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"currentValue\": 31.0,\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/usages/VirtualNetworks\",\r\n      \"limit\": 50.0,\r\n      \"name\": {\r\n        \"localizedValue\": \"Virtual Networks\",\r\n        \"value\": \"VirtualNetworks\"\r\n      },\r\n      \"unit\": \"Count\"\r\n    },\r\n    {\r\n      \"currentValue\": 0.0,\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/usages/NetworkWatchers\",\r\n      \"limit\": 1.0,\r\n      \"name\": {\r\n        \"localizedValue\": \"Network Watchers\",\r\n        \"value\": \"NetworkWatchers\"\r\n      },\r\n      \"unit\": \"Count\"\r\n    },\r\n    {\r\n      \"currentValue\": 8.0,\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/usages/StaticPublicIPAddresses\",\r\n      \"limit\": 20.0,\r\n      \"name\": {\r\n        \"localizedValue\": \"Static Public IP Addresses\",\r\n        \"value\": \"StaticPublicIPAddresses\"\r\n      },\r\n      \"unit\": \"Count\"\r\n    },\r\n    {\r\n      \"currentValue\": 10.0,\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/usages/NetworkSecurityGroups\",\r\n      \"limit\": 100.0,\r\n      \"name\": {\r\n        \"localizedValue\": \"Network Security Groups\",\r\n        \"value\": \"NetworkSecurityGroups\"\r\n      },\r\n      \"unit\": \"Count\"\r\n    },\r\n    {\r\n      \"currentValue\": 32.0,\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/usages/PublicIPAddresses\",\r\n      \"limit\": 60.0,\r\n      \"name\": {\r\n        \"localizedValue\": \"Public IP Addresses\",\r\n        \"value\": \"PublicIPAddresses\"\r\n      },\r\n      \"unit\": \"Count\"\r\n    },\r\n    {\r\n      \"currentValue\": 8.0,\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/usages/NetworkInterfaces\",\r\n      \"limit\": 300.0,\r\n      \"name\": {\r\n        \"localizedValue\": \"Network Interfaces\",\r\n        \"value\": \"NetworkInterfaces\"\r\n      },\r\n      \"unit\": \"Count\"\r\n    },\r\n    {\r\n      \"currentValue\": 4.0,\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/usages/LoadBalancers\",\r\n      \"limit\": 100.0,\r\n      \"name\": {\r\n        \"localizedValue\": \"Load Balancers\",\r\n        \"value\": \"LoadBalancers\"\r\n      },\r\n      \"unit\": \"Count\"\r\n    },\r\n    {\r\n      \"currentValue\": 1.0,\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/usages/ApplicationGateways\",\r\n      \"limit\": 50.0,\r\n      \"name\": {\r\n        \"localizedValue\": \"Application Gateways\",\r\n        \"value\": \"ApplicationGateways\"\r\n      },\r\n      \"unit\": \"Count\"\r\n    },\r\n    {\r\n      \"currentValue\": 3.0,\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus/usages/RouteTables\",\r\n      \"limit\": 100.0,\r\n      \"name\": {\r\n        \"localizedValue\": \"Route Tables\",\r\n        \"value\": \"RouteTables\"\r\n      },\r\n      \"unit\": \"Count\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3086',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f3c2d564-0615-42b3-8893-6ba0b0460c1d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '0e002f02-9b79-46c1-bf83-a2469bc8dec9',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T093841Z:0e002f02-9b79-46c1-bf83-a2469bc8dec9',
  date: 'Tue, 16 Aug 2016 09:38:41 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Storage/usages?api-version=2016-01-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"unit\": \"Count\",\r\n      \"currentValue\": 60,\r\n      \"limit\": 250,\r\n      \"name\": {\r\n        \"value\": \"StorageAccounts\",\r\n        \"localizedValue\": \"Storage Accounts\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '218',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '605ab332-99b4-4140-be0a-27f100f8d71f',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-correlation-request-id': '605ab332-99b4-4140-be0a-27f100f8d71f',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T093843Z:605ab332-99b4-4140-be0a-27f100f8d71f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 16 Aug 2016 09:38:42 GMT' });
 return result; }]];