<template>
  <base-layout page-title="All Memories">
    <template v-slot:actions-end>
      <ion-button router-link="/memories/add">
        <ion-icon slot="icon-only" :icon="iconAdd"></ion-icon>
      </ion-button>
    </template>
    <memories-list :memories="memories"></memories-list>
  </base-layout>
</template>

<script lang="ts">
import { IonButton, IonIcon } from '@ionic/vue';
import { add } from 'ionicons/icons';
import { Options, Vue } from 'vue-class-component';
import { namespace } from 'vuex-class';
import MemoriesList from '../components/memories/MemoriesList.vue';

const memoriesModule = namespace('memories');

@Options({
  components: {
    MemoriesList,
    IonButton,
    IonIcon
  }
})
export default class MemoriesPage extends Vue {
  private iconAdd = add;

  @memoriesModule.State('_memories')
  private memories!: Array<any>;
}
</script>
