  
<template>
  <ion-img :src="image" :alt="title"></ion-img>
  <h2 class="ion-text-center">{{ title }}</h2>
  <p class="ion-text-center">{{ description }}</p>
</template>

<script lang="ts">
import { IonImg } from '@ionic/vue';
import { Options, Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Options({
  components: {
    IonImg
  }
})
export default class MemoryOverview extends Vue {
    // props
    @Prop({type: String})
    private title!: string;

    @Prop({type: String})
    private image!: string;

    @Prop({type: String})
    private description!: string;
}
</script>
