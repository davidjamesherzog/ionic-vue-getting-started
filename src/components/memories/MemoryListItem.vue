<template>
  <ion-item :router-link="`/memories/${memory.id}`">
    <ion-thumbnail slot="start">
      <ion-img :src="memory.image" :alt="memory.title"></ion-img>
    </ion-thumbnail>
    <ion-label>
      {{ memory.title }}
    </ion-label>
  </ion-item>
</template>

<script lang="ts">
import { Memory } from '@/models/Memory.model';
import { IonItem, IonThumbnail, IonImg, IonLabel } from '@ionic/vue';
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Options({
  components: {
    IonItem,
    IonThumbnail,
    IonImg,
    IonLabel
  }
})
export default class MemoryListItem extends Vue {
    // props
    @Prop()
    private memory!: Memory;
}
</script>
