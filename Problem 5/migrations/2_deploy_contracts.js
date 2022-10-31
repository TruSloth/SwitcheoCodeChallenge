var GetBalances = artifacts.require("../contracts/Utility.sol");

module.exports = function(deployer) {
    deployer.deploy(GetBalances);
}