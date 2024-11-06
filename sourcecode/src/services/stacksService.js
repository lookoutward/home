// src/services/stacksService.js
import { StacksTestnet } from '@stacks/network';
import { makeContractDeploy, broadcastTransaction, AnchorMode, makeContractCall, uintCV } from '@stacks/transactions';

// 配置网络
const network = new StacksTestnet();

// 部署合约
export async function deployContract(contractCode, privateKey) {
  const txOptions = {
    contractName: 'my-token-contract',
    codeBody: contractCode,
    senderKey: privateKey,
    network,
    anchorMode: AnchorMode.OnChainOnly,
  };

  const transaction = await makeContractDeploy(txOptions);
  const broadcastResponse = await broadcastTransaction(transaction, network);
  return broadcastResponse;
}

// 调用合约
export async function callContractFunction(contractAddress, contractName, functionName, functionArgs, privateKey) {
  const txOptions = {
    contractAddress,
    contractName,
    functionName,
    functionArgs,
    senderKey: privateKey,
    network,
  };

  const transaction = await makeContractCall(txOptions);
  const broadcastResponse = await broadcastTransaction(transaction, network);
  return broadcastResponse;
}
