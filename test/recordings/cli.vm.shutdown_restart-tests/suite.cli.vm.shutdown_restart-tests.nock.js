// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addEnvironment(new profile.Environment({
    name: 'dogfood',
    portalUrl: 'https://windows.azure-test.net/',
    publishingProfileUrl: 'https://windows.azure-test.net/publishsettings/index',
    managementEndpointUrl: 'https://management-preview.core.windows-int.net/',
    resourceManagerEndpointUrl: 'https://api-dogfood.resources.windows-int.net/',
    sqlManagementEndpointUrl: 'test',
    hostNameSuffix: 'undefined',
    sqlServerHostNameSuffix: 'test',
    activeDirectoryEndpointUrl: 'https://login.windows-ppe.net/',
    commonTenantName: 'undefined',
    storageEndpoint: 'undefined',
    galleryEndpointUrl: 'https://df.gallery.azure-test.net/'
  }));

  newProfile.addSubscription(new profile.Subscription({
    id: 'b9870bc5-ba3d-4d70-a222-1aec79235f13',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'sub2',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['dogfood']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'West US';
};

exports.scopes = [];

 exports.randomTestIdsGenerated = function() { return ['CliTestVm897'];};