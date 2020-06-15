const path = require("path");

const pathComponents = path.join(__dirname, "components");
const pathPages = path.join(__dirname, "pages");
const pathConfiguration = path.join(__dirname, "configuration");
const pathServices = path.join(__dirname, "services");
const pathEnvironment = path.join(__dirname, "environment");
const pathScreens = path.join(__dirname, "screens");
const pathUtils = path.join(__dirname, "utils");

module.exports = {
  webpack(config) {
    config.resolve.alias["@components"] = pathComponents;
    config.resolve.alias["@configuration"] = pathConfiguration;
    config.resolve.alias["@pages"] = pathPages;
    config.resolve.alias["@services"] = pathServices;
    config.resolve.alias["@environment"] = pathEnvironment;
    config.resolve.alias["@screens"] = pathScreens;
    config.resolve.alias["@utils"] = pathUtils;
    return config;
  },
  env: {
    API: process.env.API,
  },
};
