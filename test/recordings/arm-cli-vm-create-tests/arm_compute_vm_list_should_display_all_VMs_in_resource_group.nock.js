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
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate3424/providers/Microsoft.Compute/virtualMachines?api-version=2016-03-30')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"properties\": {\r\n        \"vmId\": \"f9d2fee8-368a-414d-b098-17f47f8cff10\",\r\n        \"availabilitySet\": {\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate3424/providers/Microsoft.Compute/availabilitySets/XPLATTESTAAVAIL6270\"\r\n        },\r\n        \"hardwareProfile\": {\r\n          \"vmSize\": \"Standard_D1\"\r\n        },\r\n        \"storageProfile\": {\r\n          \"imageReference\": {\r\n            \"publisher\": \"canonical\",\r\n            \"offer\": \"UbuntuServer\",\r\n            \"sku\": \"15.10\",\r\n            \"version\": \"latest\"\r\n          },\r\n          \"osDisk\": {\r\n            \"osType\": \"Linux\",\r\n            \"name\": \"cli1c14f40b0859afe9-os-1471333729372\",\r\n            \"createOption\": \"FromImage\",\r\n            \"vhd\": {\r\n              \"uri\": \"https://xplatteststorage12584.blob.core.windows.net/xplatteststoragecnt15038/cli1c14f40b0859afe9-os-1471333729372.vhd\"\r\n            },\r\n            \"caching\": \"ReadWrite\"\r\n          },\r\n          \"dataDisks\": []\r\n        },\r\n        \"osProfile\": {\r\n          \"computerName\": \"xplatvm\",\r\n          \"adminUsername\": \"azureuser\",\r\n          \"linuxConfiguration\": {\r\n            \"disablePasswordAuthentication\": false,\r\n            \"ssh\": {\r\n              \"publicKeys\": [\r\n                {\r\n                  \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n                  \"keyData\": \"MIID/zCCAuegAwIBAgIJAMUAa+XVLvAeMA0GCSqGSIb3DQEBBQUAMIGVMQswCQYD\\r\\nVQQGEwJJbjESMBAGA1UECAwJS2FybmF0YWthMRIwEAYDVQQHDAlCYW5nYWxvcmUx\\r\\nEDAOBgNVBAoMB2JyaWxsaW8xEjAQBgNVBAsMCW1pY3Jvc29mdDEQMA4GA1UEAwwH\\r\\nYnJpbGxpbzEmMCQGCSqGSIb3DQEJARYXc3JlZWthbnRoYnNAeWFob28uY28uaW4w\\r\\nHhcNMTUwMzA1MTE1MzEyWhcNMTYwMzA0MTE1MzEyWjCBlTELMAkGA1UEBhMCSW4x\\r\\nEjAQBgNVBAgMCUthcm5hdGFrYTESMBAGA1UEBwwJQmFuZ2Fsb3JlMRAwDgYDVQQK\\r\\nDAdicmlsbGlvMRIwEAYDVQQLDAltaWNyb3NvZnQxEDAOBgNVBAMMB2JyaWxsaW8x\\r\\nJjAkBgkqhkiG9w0BCQEWF3NyZWVrYW50aGJzQHlhaG9vLmNvLmluMIIBIjANBgkq\\r\\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyUNKaOuT0NK+S8Ck81zy9xJ6hXfZvAC6\\r\\nlhbmf/6s/WVimJ/TX5NMhQJwC9k6ZIF92KfYrojHNvHDufSZ3EtKUVwRFCDjmgMT\\r\\nDL09WkGaZt7gROYFK0iZ4KrYGovUwlwum9fHB24OJiOV4bi0ek62/rHx9fjYZpvp\\r\\naIH2PV/hN8SCZ0x7HJMberD4gVoU/Kv42nNvwjLUW6IZfVx/Gv5OeFDtWHfSvUEF\\r\\ndadHKTPn3Ab20Iu6gZIbLO9Vuf38/IpaYGfnFCouHdzmiTiLieYNe3CUPcOJNSv7\\r\\n1G8KYpx3uNJRkJPab5OsRyJw75Gvzkr9OgaPss9tVD6Gt68u3WQtVQIDAQABo1Aw\\r\\nTjAdBgNVHQ4EFgQUogvhXB+xZ2JJPfLO6cVs4ForzscwHwYDVR0jBBgwFoAUogvh\\r\\nXB+xZ2JJPfLO6cVs4ForzscwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOC\\r\\nAQEAdDj7qUNJ45xlF5cjd+4x5NHvAD1VTjOKu+Xh/uzSSjXqB2F0aOMWA9lx0qaQ\\r\\noJgHkGxj3zz/W7ik/cVGL2O+vRIOKv/y0OPogEmS3Hw+P+O6OGE7x1G6YN0zLVoL\\r\\nu4BN/BEYmjttxM9I7qqL7C5cJoE+K3s/w1/pt/68ohJcr7F9Ohi7cso62xuGY1Rm\\r\\nksAh2EUDsU9JV/P+C9AMpLSrb03JJYzVj4w1RHbrmw2AjFyGXdQYkggyXisg+Ifr\\r\\n5gbNN7HigpHf7b2i3CQBUqp9m23frh5AhnLI2qp3UXgc52U5ieLdi/t6j0TTZqqY\\r\\nHhHqofKrj938HHlBNpC5/LVh3w==\\r\\n\"\r\n                }\r\n              ]\r\n            }\r\n          },\r\n          \"secrets\": []\r\n        },\r\n        \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate3424/providers/Microsoft.Network/networkInterfaces/xplattestnic\"}]},\r\n        \"diagnosticsProfile\": {\r\n          \"bootDiagnostics\": {\r\n            \"enabled\": true,\r\n            \"storageUri\": \"https://xplatteststorage12584.blob.core.windows.net/\"\r\n          }\r\n        },\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate3424/providers/Microsoft.Compute/virtualMachines/xplatvm\",\r\n      \"name\": \"xplatvm\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines\",\r\n      \"location\": \"eastus\",\r\n      \"tags\": {\r\n        \"a\": \"b\",\r\n        \"b\": \"c\",\r\n        \"d\": \"\"\r\n      }\r\n    },\r\n    {\r\n      \"properties\": {\r\n        \"vmId\": \"b2fcef5a-de75-49b6-8f35-ef1edb6b0ec0\",\r\n        \"availabilitySet\": {\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate3424/providers/Microsoft.Compute/availabilitySets/XPLATTESTAAVAIL6270\"\r\n        },\r\n        \"hardwareProfile\": {\r\n          \"vmSize\": \"Standard_D1\"\r\n        },\r\n        \"storageProfile\": {\r\n          \"imageReference\": {\r\n            \"publisher\": \"MicrosoftWindowsServerEssentials\",\r\n            \"offer\": \"WindowsServerEssentials\",\r\n            \"sku\": \"WindowsServerEssentials\",\r\n            \"version\": \"1.0.20131018\"\r\n          },\r\n          \"osDisk\": {\r\n            \"osType\": \"Windows\",\r\n            \"name\": \"cli29f3dfc61ae7d5b9-os-1471333859445\",\r\n            \"createOption\": \"FromImage\",\r\n            \"vhd\": {\r\n              \"uri\": \"https://xplatteststorage12584.blob.core.windows.net/xplatteststoragecnt15038/cli29f3dfc61ae7d5b9-os-1471333859445.vhd\"\r\n            },\r\n            \"caching\": \"ReadWrite\"\r\n          },\r\n          \"dataDisks\": []\r\n        },\r\n        \"osProfile\": {\r\n          \"computerName\": \"xplatvm2\",\r\n          \"adminUsername\": \"azureuser\",\r\n          \"windowsConfiguration\": {\r\n            \"provisionVMAgent\": true,\r\n            \"enableAutomaticUpdates\": true\r\n          },\r\n          \"secrets\": []\r\n        },\r\n        \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate3424/providers/Microsoft.Network/networkInterfaces/xplattestnic2\"}]},\r\n        \"diagnosticsProfile\": {\r\n          \"bootDiagnostics\": {\r\n            \"enabled\": false\r\n          }\r\n        },\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"resources\": [\r\n        {\r\n          \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate3424/providers/Microsoft.Compute/virtualMachines/xplatvm2/extensions/BGInfo\"\r\n        }\r\n      ],\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate3424/providers/Microsoft.Compute/virtualMachines/xplatvm2\",\r\n      \"name\": \"xplatvm2\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines\",\r\n      \"location\": \"eastus\",\r\n      \"tags\": {\r\n        \"a\": \"b\",\r\n        \"b\": \"c\",\r\n        \"d\": \"\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '6113',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': '5e718c5d-ca22-4c5d-b686-8311c556d88f',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14951',
  'x-ms-correlation-request-id': '771d0d42-64e2-422a-a40d-1ed5732473e4',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T075730Z:771d0d42-64e2-422a-a40d-1ed5732473e4',
  date: 'Tue, 16 Aug 2016 07:57:30 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate3424/providers/Microsoft.Compute/virtualMachines/xplatvm?$expand=instanceView&api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"f9d2fee8-368a-414d-b098-17f47f8cff10\",\r\n    \"availabilitySet\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate3424/providers/Microsoft.Compute/availabilitySets/XPLATTESTAAVAIL6270\"\r\n    },\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_D1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"15.10\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli1c14f40b0859afe9-os-1471333729372\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage12584.blob.core.windows.net/xplatteststoragecnt15038/cli1c14f40b0859afe9-os-1471333729372.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIID/zCCAuegAwIBAgIJAMUAa+XVLvAeMA0GCSqGSIb3DQEBBQUAMIGVMQswCQYD\\r\\nVQQGEwJJbjESMBAGA1UECAwJS2FybmF0YWthMRIwEAYDVQQHDAlCYW5nYWxvcmUx\\r\\nEDAOBgNVBAoMB2JyaWxsaW8xEjAQBgNVBAsMCW1pY3Jvc29mdDEQMA4GA1UEAwwH\\r\\nYnJpbGxpbzEmMCQGCSqGSIb3DQEJARYXc3JlZWthbnRoYnNAeWFob28uY28uaW4w\\r\\nHhcNMTUwMzA1MTE1MzEyWhcNMTYwMzA0MTE1MzEyWjCBlTELMAkGA1UEBhMCSW4x\\r\\nEjAQBgNVBAgMCUthcm5hdGFrYTESMBAGA1UEBwwJQmFuZ2Fsb3JlMRAwDgYDVQQK\\r\\nDAdicmlsbGlvMRIwEAYDVQQLDAltaWNyb3NvZnQxEDAOBgNVBAMMB2JyaWxsaW8x\\r\\nJjAkBgkqhkiG9w0BCQEWF3NyZWVrYW50aGJzQHlhaG9vLmNvLmluMIIBIjANBgkq\\r\\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyUNKaOuT0NK+S8Ck81zy9xJ6hXfZvAC6\\r\\nlhbmf/6s/WVimJ/TX5NMhQJwC9k6ZIF92KfYrojHNvHDufSZ3EtKUVwRFCDjmgMT\\r\\nDL09WkGaZt7gROYFK0iZ4KrYGovUwlwum9fHB24OJiOV4bi0ek62/rHx9fjYZpvp\\r\\naIH2PV/hN8SCZ0x7HJMberD4gVoU/Kv42nNvwjLUW6IZfVx/Gv5OeFDtWHfSvUEF\\r\\ndadHKTPn3Ab20Iu6gZIbLO9Vuf38/IpaYGfnFCouHdzmiTiLieYNe3CUPcOJNSv7\\r\\n1G8KYpx3uNJRkJPab5OsRyJw75Gvzkr9OgaPss9tVD6Gt68u3WQtVQIDAQABo1Aw\\r\\nTjAdBgNVHQ4EFgQUogvhXB+xZ2JJPfLO6cVs4ForzscwHwYDVR0jBBgwFoAUogvh\\r\\nXB+xZ2JJPfLO6cVs4ForzscwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOC\\r\\nAQEAdDj7qUNJ45xlF5cjd+4x5NHvAD1VTjOKu+Xh/uzSSjXqB2F0aOMWA9lx0qaQ\\r\\noJgHkGxj3zz/W7ik/cVGL2O+vRIOKv/y0OPogEmS3Hw+P+O6OGE7x1G6YN0zLVoL\\r\\nu4BN/BEYmjttxM9I7qqL7C5cJoE+K3s/w1/pt/68ohJcr7F9Ohi7cso62xuGY1Rm\\r\\nksAh2EUDsU9JV/P+C9AMpLSrb03JJYzVj4w1RHbrmw2AjFyGXdQYkggyXisg+Ifr\\r\\n5gbNN7HigpHf7b2i3CQBUqp9m23frh5AhnLI2qp3UXgc52U5ieLdi/t6j0TTZqqY\\r\\nHhHqofKrj938HHlBNpC5/LVh3w==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate3424/providers/Microsoft.Network/networkInterfaces/xplattestnic\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatteststorage12584.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"instanceView\": {\r\n      \"platformUpdateDomain\": 0,\r\n      \"platformFaultDomain\": 0,\r\n      \"vmAgent\": {\r\n        \"vmAgentVersion\": \"2.1.3\",\r\n        \"statuses\": [\r\n          {\r\n            \"code\": \"ProvisioningState/succeeded\",\r\n            \"level\": \"Info\",\r\n            \"displayStatus\": \"Ready\",\r\n            \"message\": \"Guest Agent is running\",\r\n            \"time\": \"2016-08-16T07:57:09+00:00\"\r\n          }\r\n        ],\r\n        \"extensionHandlers\": []\r\n      },\r\n      \"disks\": [\r\n        {\r\n          \"name\": \"cli1c14f40b0859afe9-os-1471333729372\",\r\n          \"statuses\": [\r\n            {\r\n              \"code\": \"ProvisioningState/succeeded\",\r\n              \"level\": \"Info\",\r\n              \"displayStatus\": \"Provisioning succeeded\",\r\n              \"time\": \"2016-08-16T07:48:51.8715928+00:00\"\r\n            }\r\n          ]\r\n        }\r\n      ],\r\n      \"bootDiagnostics\": {\r\n        \"consoleScreenshotBlobUri\": \"https://xplatteststorage12584.blob.core.windows.net/bootdiagnostics-xplatvm-f9d2fee8-368a-414d-b098-17f47f8cff10/xplatvm.f9d2fee8-368a-414d-b098-17f47f8cff10.screenshot.bmp\",\r\n        \"serialConsoleLogBlobUri\": \"https://xplatteststorage12584.blob.core.windows.net/bootdiagnostics-xplatvm-f9d2fee8-368a-414d-b098-17f47f8cff10/xplatvm.f9d2fee8-368a-414d-b098-17f47f8cff10.serialconsole.log\"\r\n      },\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"time\": \"2016-08-16T07:50:40.9795476+00:00\"\r\n        },\r\n        {\r\n          \"code\": \"PowerState/running\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"VM running\"\r\n        }\r\n      ]\r\n    }\r\n  },\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate3424/providers/Microsoft.Compute/virtualMachines/xplatvm\",\r\n  \"name\": \"xplatvm\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"a\": \"b\",\r\n    \"b\": \"c\",\r\n    \"d\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '5207',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': 'a4f14a13-353e-436a-95bc-afd5184e4dd0',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14915',
  'x-ms-correlation-request-id': '1ac71b5e-e97d-48fa-adcd-1b32ba0fac2e',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T075730Z:1ac71b5e-e97d-48fa-adcd-1b32ba0fac2e',
  date: 'Tue, 16 Aug 2016 07:57:30 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate3424/providers/Microsoft.Compute/virtualMachines/xplatvm2?$expand=instanceView&api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"b2fcef5a-de75-49b6-8f35-ef1edb6b0ec0\",\r\n    \"availabilitySet\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate3424/providers/Microsoft.Compute/availabilitySets/XPLATTESTAAVAIL6270\"\r\n    },\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_D1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServerEssentials\",\r\n        \"offer\": \"WindowsServerEssentials\",\r\n        \"sku\": \"WindowsServerEssentials\",\r\n        \"version\": \"1.0.20131018\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"cli29f3dfc61ae7d5b9-os-1471333859445\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage12584.blob.core.windows.net/xplatteststoragecnt15038/cli29f3dfc61ae7d5b9-os-1471333859445.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvm2\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate3424/providers/Microsoft.Network/networkInterfaces/xplattestnic2\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": false\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"instanceView\": {\r\n      \"platformUpdateDomain\": 1,\r\n      \"platformFaultDomain\": 1,\r\n      \"vmAgent\": {\r\n        \"vmAgentVersion\": \"2.7.1198.778\",\r\n        \"statuses\": [\r\n          {\r\n            \"code\": \"ProvisioningState/succeeded\",\r\n            \"level\": \"Info\",\r\n            \"displayStatus\": \"Ready\",\r\n            \"message\": \"GuestAgent is running and accepting new configurations.\",\r\n            \"time\": \"2016-08-16T07:57:27+00:00\"\r\n          }\r\n        ],\r\n        \"extensionHandlers\": [\r\n          {\r\n            \"type\": \"Microsoft.Compute.BGInfo\",\r\n            \"typeHandlerVersion\": \"2.1\",\r\n            \"status\": {\r\n              \"code\": \"ProvisioningState/succeeded\",\r\n              \"level\": \"Info\",\r\n              \"displayStatus\": \"Ready\",\r\n              \"message\": \"Plugin enabled (name: Microsoft.Compute.BGInfo, version: 2.1).\"\r\n            }\r\n          }\r\n        ]\r\n      },\r\n      \"disks\": [\r\n        {\r\n          \"name\": \"cli29f3dfc61ae7d5b9-os-1471333859445\",\r\n          \"statuses\": [\r\n            {\r\n              \"code\": \"ProvisioningState/succeeded\",\r\n              \"level\": \"Info\",\r\n              \"displayStatus\": \"Provisioning succeeded\",\r\n              \"time\": \"2016-08-16T07:55:54.4286127+00:00\"\r\n            }\r\n          ]\r\n        }\r\n      ],\r\n      \"extensions\": [\r\n        {\r\n          \"name\": \"BGInfo\",\r\n          \"type\": \"Microsoft.Compute.BGInfo\",\r\n          \"typeHandlerVersion\": \"2.1\",\r\n          \"statuses\": [\r\n            {\r\n              \"code\": \"ProvisioningState/succeeded\",\r\n              \"level\": \"Info\",\r\n              \"displayStatus\": \"Provisioning succeeded\",\r\n              \"message\": \"Plugin enabled (name: Microsoft.Compute.BGInfo, version: 2.1).\"\r\n            }\r\n          ]\r\n        }\r\n      ],\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"time\": \"2016-08-16T07:57:00.8340903+00:00\"\r\n        },\r\n        {\r\n          \"code\": \"PowerState/running\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"VM running\"\r\n        }\r\n      ]\r\n    }\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"BGInfo\",\r\n        \"typeHandlerVersion\": \"2.1\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate3424/providers/Microsoft.Compute/virtualMachines/xplatvm2/extensions/BGInfo\",\r\n      \"name\": \"BGInfo\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"eastus\"\r\n    }\r\n  ],\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate3424/providers/Microsoft.Compute/virtualMachines/xplatvm2\",\r\n  \"name\": \"xplatvm2\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"a\": \"b\",\r\n    \"b\": \"c\",\r\n    \"d\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4560',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'f1952173-7412-4020-8c98-fffca6509750_131118073625769552',
  'x-ms-request-id': '59957f19-d800-4cf2-8c25-190be7f37148',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14873',
  'x-ms-correlation-request-id': 'a6ed8b47-3371-4087-b92d-79a84c93f661',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T075731Z:a6ed8b47-3371-4087-b92d-79a84c93f661',
  date: 'Tue, 16 Aug 2016 07:57:30 GMT' });
 return result; }]];