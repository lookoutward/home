<template>
  <div class="container">
    <van-nav-bar title="Donation" />

    <div class="content">
      <p>
        Note: Please install the
        <a href="https://www.xverse.app/download" target="_blank" rel="noopener noreferrer">Xverse Wallet</a>
      </p>

      <van-button type="primary" @click="deposit" class="payment-button">Test</van-button>
      <input v-model="amount" type="number" placeholder="Enter amount" class="input-field" />

    </div>

  </div>
</template>

<script>
import { ref } from 'vue';
import { request } from 'sats-connect'; // 确保你使用的库支持这些导入
// import { uintCV } from '@stacks/transactions'; // 正确的导入位置
import { Button, NavBar } from 'vant';
export default {
  components: {
    'van-button': Button,
    'van-nav-bar': NavBar,
  },
  setup() {
    const amount = ref('');

    // 合约信息
    const contractAddress = 'ST1MFQKYE1TDJ7Z7SKJBJ32THGEPVZTEEZM62S27H';
    const contractName = 'token1';
    const functionName = 'deposit';
    const functionArgs = [amount.value]; // 使用用户输入的金额作为参数


    async function deposit() {
      try {
        console.log('functionArgs==='+functionArgs)

        const response = await request("stx_callContract", {
          contract: `${contractAddress}.${contractName}`,
          functionName,
          arguments: functionArgs, // 传递已经是对象数组的参数

        });

        if (response.status === "success") {
          console.log('Transaction successful:', response.result);
        } else {
          console.error('Transaction failed:', response.error);
        }
      } catch (error) {
        console.error('An error occurred:', error);
        alert('An error occurred: ' + error.message);
      }
    }
    // deposit(100);
    return {
      amount,
      deposit,
    };
  },
};
</script>


<style scoped>
.custom-width {
  width: 5ch;
}

.unit {
  color: #e20e0e;
}

.tabbar-link {
  display: flex;
  flex: 1;
  justify-content: center;
}

.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
}

p {
  margin-bottom: 16px;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.input-field {
  margin-bottom: 16px;
  width: 100%;
  max-width: 400px;
}

.payment-button {
  width: 100%;
  max-width: 400px;
}

.van-tabbar {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
