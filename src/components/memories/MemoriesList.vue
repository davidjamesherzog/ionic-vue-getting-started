<template>
  <ion-list>
    <memory-list-item
      v-for="memory in memories"
      :key="memory.id"
      :memory="memory"
    ></memory-list-item>
  </ion-list>
</template>

<script lang="ts">
import { Memory } from '@/models/Memory.model';
import { IonList } from '@ionic/vue';
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import MemoryListItem from './MemoryListItem.vue';

@Options({
  components: {
    IonList,
    MemoryListItem
  }
})
export default class MemoriesList extends Vue {
    // props
    @Prop()
    private memories!: Array<Memory>;
}
</script>
