// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
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
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateSubnet/providers/Microsoft.Network/virtualnetworks/xplatTestVnet/subnets/xplatTestSubnet?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestSubnet\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateSubnet/providers/Microsoft.Network/virtualNetworks/xplatTestVnet/subnets/xplatTestSubnet\",\r\n  \"etag\": \"W/\\\"51cfa3a8-827f-40fb-b36b-7158c3fc505e\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.3.0/24\",\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateSubnet/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg\"\r\n    },\r\n    \"routeTable\": {\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateSubnet/providers/Microsoft.Network/routeTables/ArmRtTblSubnet\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '770',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"51cfa3a8-827f-40fb-b36b-7158c3fc505e"',
  'x-ms-request-id': 'b11da33b-24e1-43cc-a440-3e546adedcd3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14979',
  'x-ms-correlation-request-id': 'a9d21397-5a5f-4dcc-ad25-5cfa0c666431',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150727T095334Z:a9d21397-5a5f-4dcc-ad25-5cfa0c666431',
  date: 'Mon, 27 Jul 2015 09:53:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateSubnet/providers/Microsoft.Network/virtualnetworks/xplatTestVnet/subnets/xplatTestSubnet?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestSubnet\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateSubnet/providers/Microsoft.Network/virtualNetworks/xplatTestVnet/subnets/xplatTestSubnet\",\r\n  \"etag\": \"W/\\\"51cfa3a8-827f-40fb-b36b-7158c3fc505e\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.3.0/24\",\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateSubnet/providers/Microsoft.Network/networkSecurityGroups/xplatTestNsg\"\r\n    },\r\n    \"routeTable\": {\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateSubnet/providers/Microsoft.Network/routeTables/ArmRtTblSubnet\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '770',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"51cfa3a8-827f-40fb-b36b-7158c3fc505e"',
  'x-ms-request-id': 'b11da33b-24e1-43cc-a440-3e546adedcd3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14979',
  'x-ms-correlation-request-id': 'a9d21397-5a5f-4dcc-ad25-5cfa0c666431',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150727T095334Z:a9d21397-5a5f-4dcc-ad25-5cfa0c666431',
  date: 'Mon, 27 Jul 2015 09:53:33 GMT',
  connection: 'close' });
 return result; }]];