// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

interface ERC20Token {
    /// @param _owner The address from which the balance will be retrieved
    /// @return balance the balance
    function balanceOf(address _owner) external view returns (uint256 balance);
}

contract Utility {
  struct tokenBalance {
    address token;
    uint256 balance;
  }

  function getBalances(address walletAddress, address[] memory tokenAddresses) view public returns(tokenBalance[] memory) {
    tokenBalance[] memory balances = new tokenBalance[](tokenAddresses.length);

    for (uint i = 0; i < tokenAddresses.length; i++) {
      address tokenAddress = tokenAddresses[i];
      ERC20Token token = ERC20Token(tokenAddress);
      uint256 balance = token.balanceOf(walletAddress);
      tokenBalance memory temp = tokenBalance(tokenAddress, balance);
      balances[i] = temp;
    }

    return balances;
  }
}
