<template>
  <base-layout page-title="Add a Memory" page-default-back-link="/memories">
    <create-memory-form @save-memory="saveMemory"></create-memory-form>
  </base-layout>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { namespace } from 'vuex-class';
import CreateMemoryForm from '../components/memories/CreateMemoryForm.vue';

const memoriesModule = namespace('memories');

@Options({
  components: {
    CreateMemoryForm
  }
})
export default class AddMemoryPage extends Vue {

  @memoriesModule.Action
  private addMemory: any;

  saveMemory(memoryData: any) {
    this.addMemory(memoryData);
    this.$router.replace('/memories');
  }
}
</script>
