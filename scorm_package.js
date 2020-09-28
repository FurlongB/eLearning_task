var scopackager = require('simple-scorm-packager');
var path = require('path');

const config = {
  version: '1.2',
  organization: 'Furlong eLearning Corp',
  title: 'elearning_task',
  language: 'en-US',
  masteryScore: 0,
  startingPage: 'index.html',
  source: path.join(__dirname, 'build'),
  package: {
    version: process.env.npm_package_version,
    zip: true,
    author: 'Brian Furlong',
    outputFolder: path.join(__dirname, 'scorm_packages'),
    description: 'Investigation of novel compounds to treat epilepsy',
    keywords: ['scorm', 'test', 'course'],
    typicalDuration: 'PT0H5M0S',
    rights: `©${new Date().getFullYear()} Furlong Elearning Corp. All right reserved.`,
    vcard: {
      author: 'Brian Furlong',
      org: 'Furlong Elearning Corp',
      tel: '(353) 87-7304887',
      address: 'Wexford, Ireland.',
      mail: 'bfurlong01@gmail.com',
      url: 'https://mydomain.com'
    }
  }
};

scopackager(config, function(msg){
  console.log(msg);
  process.exit(0);
});