<template>
  <base-layout page-title="Add a Memory" page-default-back-link="/memories">
    <create-memory-form @save-memory="saveMemory"></create-memory-form>
  </base-layout>
</template>

<script lang="ts">
import { AddMemory } from '@/models/AddMemory.model';
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

  saveMemory(memoryData: AddMemory) {
    this.addMemory(memoryData);
    this.$router.replace('/memories');
  }
}
</script>
