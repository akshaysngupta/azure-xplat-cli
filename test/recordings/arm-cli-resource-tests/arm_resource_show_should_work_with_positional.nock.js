// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'c9cbd920-c00c-427c-852b-8aaf38badaeb',
    name: 'Azure SDK Powershell Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: ['website'],
    registeredResourceNamespaces: ['successbricks.cleardb', 'microsoft.insights', 'microsoft.web', 'microsoft.visualstudio', 'microsoft.Sql'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'South Central US';
  process.env['AZURE_ARM_TEST_SQL_RESOURCE_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_WEBSITES_RESOURCE_LOCATION'] = 'South Central US';
}

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'ed0f54d994497ac989a59abf24e3c038',
  date: 'Wed, 11 Mar 2015 18:40:08 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/resourcegroups/xTestResource1252?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xTestResource1252' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '31974',
  'x-ms-request-id': 'a7114310-ca23-42f9-9a3f-afb0b964545c',
  'x-ms-correlation-request-id': 'a7114310-ca23-42f9-9a3f-afb0b964545c',
  'x-ms-routing-request-id': 'WESTUS:20150311T184008Z:a7114310-ca23-42f9-9a3f-afb0b964545c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 11 Mar 2015 18:40:08 GMT',
  'content-length': '109' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'dd9c439578e97d008f2f0585f1d3fd75',
  date: 'Wed, 11 Mar 2015 18:40:08 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/resourcegroups/xTestResource1252?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/resourceGroups/xTestResource1252\",\"name\":\"xTestResource1252\",\"location\":\"southcentralus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '205',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1175',
  'x-ms-request-id': '6c2f6762-b1af-47cf-8077-be628dc8cd48',
  'x-ms-correlation-request-id': '6c2f6762-b1af-47cf-8077-be628dc8cd48',
  'x-ms-routing-request-id': 'WESTUS:20150311T184009Z:6c2f6762-b1af-47cf-8077-be628dc8cd48',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 11 Mar 2015 18:40:09 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services?service=sqlserver&action=register')
  .reply(503, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>TooManyRequests</Code><Message>Too many requests received. Retry after some time.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '214',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '16a47b6be70a7935bc51f85221f5c241',
  date: 'Wed, 11 Mar 2015 18:40:10 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/resourcegroups/xTestResource1252/providers/Microsoft.Web//sites/xTestGrpRes4474?api-version=2014-04-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"Resource not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ba0cd093-0277-4365-8929-5e9c83722f3a',
  'x-ms-correlation-request-id': 'ba0cd093-0277-4365-8929-5e9c83722f3a',
  'x-ms-routing-request-id': 'WESTUS:20150311T184010Z:ba0cd093-0277-4365-8929-5e9c83722f3a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 11 Mar 2015 18:40:10 GMT',
  'content-length': '69' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services?service=sqlserver&action=register')
  .reply(503, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>TooManyRequests</Code><Message>Too many requests received. Retry after some time.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '214',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '6dd21f28024c7025b767328cf090940e',
  date: 'Wed, 11 Mar 2015 18:40:10 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/resourcegroups/xTestResource1252/providers/Microsoft.Web//sites/xTestGrpRes4474?api-version=2014-04-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/resourceGroups/xTestResource1252/providers/Microsoft.Web/sites/xTestGrpRes4474\",\"name\":\"xTestGrpRes4474\",\"type\":\"Microsoft.Web/sites\",\"kind\":null,\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"name\":\"xTestGrpRes4474\",\"state\":\"Running\",\"hostNames\":[\"xtestgrpres4474.azurewebsites.net\"],\"webSpace\":\"xTestResource1252-SouthCentralUSwebspace\",\"selfLink\":\"https://waws-prod-sn1-003.api.azurewebsites.windows.net:454/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/webspaces/xTestResource1252-SouthCentralUSwebspace/sites/xTestGrpRes4474\",\"repositorySiteName\":\"xTestGrpRes4474\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xtestgrpres4474.azurewebsites.net\",\"xtestgrpres4474.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xtestgrpres4474.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xtestgrpres4474.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"webHostingPlan\":\"Default1\",\"lastModifiedTimeUtc\":\"2015-03-11T18:40:15.517\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xTestGrpRes4474\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"microService\":\"WebSites\",\"kind\":null,\"cloningInfo\":null}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1836',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'ba2997c4-0e77-4eaf-9f65-a0ec92b22e30',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1176',
  'x-ms-correlation-request-id': 'a80a0782-0d27-4be3-b564-d80a01bd068d',
  'x-ms-routing-request-id': 'WESTUS:20150311T184017Z:a80a0782-0d27-4be3-b564-d80a01bd068d',
  date: 'Wed, 11 Mar 2015 18:40:17 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services?service=sqlserver&action=register')
  .reply(503, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>TooManyRequests</Code><Message>Too many requests received. Retry after some time.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '214',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '51a06b30a6d3749aa6307b8ce0493ed9',
  date: 'Wed, 11 Mar 2015 18:40:18 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/resourcegroups/xTestResource1252/providers/Microsoft.Web//sites/xTestGrpRes4474?api-version=2014-04-01')
  .reply(200, "{\"id\":\"/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/resourceGroups/xTestResource1252/providers/Microsoft.Web/sites/xTestGrpRes4474\",\"name\":\"xTestGrpRes4474\",\"type\":\"Microsoft.Web/sites\",\"kind\":null,\"location\":\"South Central US\",\"tags\":{},\"properties\":{\"name\":\"xTestGrpRes4474\",\"state\":\"Running\",\"hostNames\":[\"xtestgrpres4474.azurewebsites.net\"],\"webSpace\":\"xTestResource1252-SouthCentralUSwebspace\",\"selfLink\":\"https://waws-prod-sn1-003.api.azurewebsites.windows.net:454/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/webspaces/xTestResource1252-SouthCentralUSwebspace/sites/xTestGrpRes4474\",\"repositorySiteName\":\"xTestGrpRes4474\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"xtestgrpres4474.azurewebsites.net\",\"xtestgrpres4474.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"xtestgrpres4474.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"xtestgrpres4474.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":\"Default1\",\"webHostingPlan\":\"Default1\",\"lastModifiedTimeUtc\":\"2015-03-11T18:40:15.633\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"xTestGrpRes4474\",\"trafficManagerHostNames\":null,\"sku\":\"Free\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"microService\":\"WebSites\",\"kind\":null,\"cloningInfo\":null}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1836',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D05C2AD0DDE810"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '33f5d42d-0eaf-4467-b9e1-8ed1745eaecc',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '31934',
  'x-ms-correlation-request-id': 'e03677c5-056b-479b-9a8a-e53c272efb7a',
  'x-ms-routing-request-id': 'WESTUS:20150311T184018Z:e03677c5-056b-479b-9a8a-e53c272efb7a',
  date: 'Wed, 11 Mar 2015 18:40:18 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/resourcegroups/xTestResource1252/providers/Microsoft.Web//sites/xTestGrpRes4474/providers/Microsoft.Authorization/permissions?api-version=2014-07-01-preview')
  .reply(200, "{\"value\":[{\"actions\":[\"*\"],\"notActions\":[]}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '45',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  vary: 'Accept-Encoding',
  'x-ms-request-id': 'westus:99a64b4d-8a2b-49bb-b98f-07d3cc9db799',
  'x-ms-ratelimit-remaining-subscription-reads': '31951',
  'x-ms-correlation-request-id': '3b082a0e-28c6-4a7e-a49e-fb8b3d18b451',
  'x-ms-routing-request-id': 'WESTUS:20150311T184019Z:3b082a0e-28c6-4a7e-a49e-fb8b3d18b451',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 11 Mar 2015 18:40:18 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '7d21d30ba4487cbbadd4549ee055d8bd',
  date: 'Wed, 11 Mar 2015 18:40:19 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/resourcegroups/xTestResource1252?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMTI1Mi1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1181',
  'x-ms-request-id': 'aa4fc0f6-8bec-4097-b11d-d9222ca477f0',
  'x-ms-correlation-request-id': 'aa4fc0f6-8bec-4097-b11d-d9222ca477f0',
  'x-ms-routing-request-id': 'WESTUS:20150311T184022Z:aa4fc0f6-8bec-4097-b11d-d9222ca477f0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 11 Mar 2015 18:40:21 GMT',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '35b5dccfe28172d1aab2f6823199fb96',
  date: 'Wed, 11 Mar 2015 18:40:37 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMTI1Mi1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/c9cbd920-c00c-427c-852b-8aaf38badaeb/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YVEVTVFJFU09VUkNFMTI1Mi1TT1VUSENFTlRSQUxVUyIsImpvYkxvY2F0aW9uIjoic291dGhjZW50cmFsdXMifQ?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '31957',
  'x-ms-request-id': '32089753-7328-4208-86dd-08b7816b72f2',
  'x-ms-correlation-request-id': '32089753-7328-4208-86dd-08b7816b72f2',
  'x-ms-routing-request-id': 'WESTUS:20150311T184039Z:32089753-7328-4208-86dd-08b7816b72f2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 11 Mar 2015 18:40:39 GMT',
  'content-length': '0' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xTestResource1252','xTestGrpRes4474'];};