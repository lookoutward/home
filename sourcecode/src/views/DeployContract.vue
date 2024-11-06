<template>
  <div>
    <h1>Deploy Contract</h1>
    <textarea v-model="contractCode" placeholder="Enter your contract code"></textarea>
    <input v-model="privateKey" type="text" placeholder="Enter your private key"/>
    <button @click="deploy">Deploy</button>
    <p v-if="response">{{ response }}</p>
  </div>
</template>

<script>
import { deployContract } from '@/services/stacksService';

export default {
  data() {
    return {
      contractCode: '',
      privateKey: '',
      response: '',
    };
  },
  methods: {
    async deploy() {
      try {
        const result = await deployContract(this.contractCode, this.privateKey);
        this.response = JSON.stringify(result);
      } catch (error) {
        console.error('Deployment failed', error);
        this.response = 'Deployment failed';
      }
    },
  },
};
</script>
