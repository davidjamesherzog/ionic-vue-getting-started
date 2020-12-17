<template>
  <base-layout
    :page-title="loadedMemory ? loadedMemory.title : 'Loading...'"
    page-default-back-link="/memories"
  >
    <h2 v-if="!loadedMemory">Could not find a memory for the given id.</h2>
    <memory-overview 
      v-else 
      :title="loadedMemory.title" 
      :image="loadedMemory.image" 
      :description="loadedMemory.description"></memory-overview>
  </base-layout>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { namespace } from 'vuex-class';
import MemoryOverview from '../components/memories/MemoryOverview.vue';

const memoriesModule = namespace('memories');

@Options({
  components: {
    MemoryOverview
  }
})
export default class MemoryDetailsPage extends Vue {

  @memoriesModule.Getter('memory') memory: any;

  get memoryId() {
    return this.$route.params.id;
  }

  get loadedMemory() {
    return this.memory(this.memoryId);
  }
}
</script>
