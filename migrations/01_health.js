const Health = artifacts.require("HealthcarePlatform");

module.exports = function (deployer) {
  deployer.deploy(Health);
};
