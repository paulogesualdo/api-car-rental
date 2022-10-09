const factory = require('./factory');
const config = require('../../config');
const commons = require('../../commons');
const application = require('../../package.json');
const adapters = require('../adapters')({ config, commons, application });

module.exports = factory({ adapters, config });
