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
    _eventsCount: '1',
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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRouteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute/?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatExpressRoute\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRouteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute\",\r\n  \"etag\": \"W/\\\"b58881fe-aa8b-4005-b337-533fb3cba9c2\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"val1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"6add220a-21c6-43c9-942f-3a99494721b9\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [\r\n      {\r\n        \"name\": \"xplatExpressRouteAuth\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRouteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute/authorizations/xplatExpressRouteAuth\",\r\n        \"etag\": \"W/\\\"b58881fe-aa8b-4005-b337-533fb3cba9c2\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"authorizationKey\": \"6d716f7f-dc30-4cd0-ab5d-fe6f78b6fee6\",\r\n          \"authorizationUseStatus\": \"Available\"\r\n        }\r\n      }\r\n    ],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"InterCloud\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 50\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"serviceKey\": \"607611b8-4874-4cc7-8106-75ae4c910770\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1532',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f4fbda7a-0133-46f4-9a2b-267ec430abf3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': 'c1ae4b42-5ff0-452e-9cd8-680fb9b618a0',
  'x-ms-routing-request-id': 'WESTEUROPE:20160307T133448Z:c1ae4b42-5ff0-452e-9cd8-680fb9b618a0',
  date: 'Mon, 07 Mar 2016 13:34:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRouteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute/?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatExpressRoute\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRouteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute\",\r\n  \"etag\": \"W/\\\"b58881fe-aa8b-4005-b337-533fb3cba9c2\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"val1\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"6add220a-21c6-43c9-942f-3a99494721b9\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [\r\n      {\r\n        \"name\": \"xplatExpressRouteAuth\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRouteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute/authorizations/xplatExpressRouteAuth\",\r\n        \"etag\": \"W/\\\"b58881fe-aa8b-4005-b337-533fb3cba9c2\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"authorizationKey\": \"6d716f7f-dc30-4cd0-ab5d-fe6f78b6fee6\",\r\n          \"authorizationUseStatus\": \"Available\"\r\n        }\r\n      }\r\n    ],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"InterCloud\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 50\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"serviceKey\": \"607611b8-4874-4cc7-8106-75ae4c910770\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1532',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f4fbda7a-0133-46f4-9a2b-267ec430abf3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': 'c1ae4b42-5ff0-452e-9cd8-680fb9b618a0',
  'x-ms-routing-request-id': 'WESTEUROPE:20160307T133448Z:c1ae4b42-5ff0-452e-9cd8-680fb9b618a0',
  date: 'Mon, 07 Mar 2016 13:34:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRouteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute/authorizations/xplatExpressRouteAuth?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatExpressRouteAuth\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRouteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute/authorizations/xplatExpressRouteAuth\",\r\n  \"etag\": \"W/\\\"b58881fe-aa8b-4005-b337-533fb3cba9c2\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"authorizationKey\": \"6d716f7f-dc30-4cd0-ab5d-fe6f78b6fee6\",\r\n    \"authorizationUseStatus\": \"Available\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '482',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2084934b-4670-4e28-b272-c5e016ca27ff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': 'd273fd15-c8a5-4879-a278-e3ad072f4730',
  'x-ms-routing-request-id': 'WESTEUROPE:20160307T133450Z:d273fd15-c8a5-4879-a278-e3ad072f4730',
  date: 'Mon, 07 Mar 2016 13:34:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRouteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute/authorizations/xplatExpressRouteAuth?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"xplatExpressRouteAuth\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGroupExpressRouteAuth/providers/Microsoft.Network/expressRouteCircuits/xplatExpressRoute/authorizations/xplatExpressRouteAuth\",\r\n  \"etag\": \"W/\\\"b58881fe-aa8b-4005-b337-533fb3cba9c2\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"authorizationKey\": \"6d716f7f-dc30-4cd0-ab5d-fe6f78b6fee6\",\r\n    \"authorizationUseStatus\": \"Available\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '482',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2084934b-4670-4e28-b272-c5e016ca27ff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': 'd273fd15-c8a5-4879-a278-e3ad072f4730',
  'x-ms-routing-request-id': 'WESTEUROPE:20160307T133450Z:d273fd15-c8a5-4879-a278-e3ad072f4730',
  date: 'Mon, 07 Mar 2016 13:34:49 GMT',
  connection: 'close' });
 return result; }]];