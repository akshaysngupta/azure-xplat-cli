// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '26d6d535-5164-443d-82f6-4c695caf7688',
    name: 'BDHadoopHumboldtCRPAdhocTestShortTerm',
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'NorthCentralUS';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3171Premium?api-version=2015-03-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3171Premium\",\"name\":\"xplatTestHDInsightClusterCreate3171Premium\",\"type\":\"Microsoft.HDInsight/clusters\",\"location\":\"North Central US\",\"etag\":\"d409ec5c-65bd-4ed8-ba42-00d16d06e5cc\",\"tags\":null,\"properties\":{\"clusterVersion\":\"3.4.1000.0\",\"osType\":\"Linux\",\"clusterDefinition\":{\"blueprint\":\"https://blueprints.azurehdinsight.net/hadoop-3.4.1000.0.7583620.json\",\"kind\":\"Hadoop\"},\"computeProfile\":{\"roles\":[{\"name\":\"headnode\",\"targetInstanceCount\":2,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"},\"osProfile\":{\"linuxOperatingSystemProfile\":{\"username\":\"xplattestsshuser\"}}},{\"name\":\"workernode\",\"targetInstanceCount\":3,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"},\"osProfile\":{\"linuxOperatingSystemProfile\":{\"username\":\"xplattestsshuser\"}}},{\"name\":\"zookeepernode\",\"targetInstanceCount\":3,\"hardwareProfile\":{\"vmSize\":\"Medium\"},\"osProfile\":{\"linuxOperatingSystemProfile\":{\"username\":\"xplattestsshuser\"}}}]},\"provisioningState\":\"Succeeded\",\"clusterState\":\"Running\",\"createdDate\":\"2016-05-17T23:38:19.493\",\"quotaInfo\":{\"coresUsed\":20},\"connectivityEndpoints\":[{\"name\":\"SSH\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate3171Premium-ssh.azurehdinsight.net\",\"port\":22},{\"name\":\"HTTPS\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate3171Premium.azurehdinsight.net\",\"port\":443}],\"tier\":\"premium\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1486',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e05c699e-d09a-4af5-b561-aaaed947e121',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14686',
  'x-ms-correlation-request-id': '3d52ed06-8317-40ef-9e91-f41a0f73a86a',
  'x-ms-routing-request-id': 'WESTUS:20160517T235919Z:3d52ed06-8317-40ef-9e91-f41a0f73a86a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 17 May 2016 23:59:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3171Premium?api-version=2015-03-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3171Premium\",\"name\":\"xplatTestHDInsightClusterCreate3171Premium\",\"type\":\"Microsoft.HDInsight/clusters\",\"location\":\"North Central US\",\"etag\":\"d409ec5c-65bd-4ed8-ba42-00d16d06e5cc\",\"tags\":null,\"properties\":{\"clusterVersion\":\"3.4.1000.0\",\"osType\":\"Linux\",\"clusterDefinition\":{\"blueprint\":\"https://blueprints.azurehdinsight.net/hadoop-3.4.1000.0.7583620.json\",\"kind\":\"Hadoop\"},\"computeProfile\":{\"roles\":[{\"name\":\"headnode\",\"targetInstanceCount\":2,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"},\"osProfile\":{\"linuxOperatingSystemProfile\":{\"username\":\"xplattestsshuser\"}}},{\"name\":\"workernode\",\"targetInstanceCount\":3,\"hardwareProfile\":{\"vmSize\":\"Standard_D3\"},\"osProfile\":{\"linuxOperatingSystemProfile\":{\"username\":\"xplattestsshuser\"}}},{\"name\":\"zookeepernode\",\"targetInstanceCount\":3,\"hardwareProfile\":{\"vmSize\":\"Medium\"},\"osProfile\":{\"linuxOperatingSystemProfile\":{\"username\":\"xplattestsshuser\"}}}]},\"provisioningState\":\"Succeeded\",\"clusterState\":\"Running\",\"createdDate\":\"2016-05-17T23:38:19.493\",\"quotaInfo\":{\"coresUsed\":20},\"connectivityEndpoints\":[{\"name\":\"SSH\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate3171Premium-ssh.azurehdinsight.net\",\"port\":22},{\"name\":\"HTTPS\",\"protocol\":\"TCP\",\"location\":\"xplatTestHDInsightClusterCreate3171Premium.azurehdinsight.net\",\"port\":443}],\"tier\":\"premium\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1486',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e05c699e-d09a-4af5-b561-aaaed947e121',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14686',
  'x-ms-correlation-request-id': '3d52ed06-8317-40ef-9e91-f41a0f73a86a',
  'x-ms-routing-request-id': 'WESTUS:20160517T235919Z:3d52ed06-8317-40ef-9e91-f41a0f73a86a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 17 May 2016 23:59:19 GMT',
  connection: 'close' });
 return result; }]];