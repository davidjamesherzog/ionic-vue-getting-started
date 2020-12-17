<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input type="text" required v-model="enteredTitle" />
      </ion-item>
      <ion-item>
        <ion-label position="floating">Image URL</ion-label>
        <ion-input type="url" required v-model="enteredImageUrl" />
      </ion-item>
      <ion-item>
        <ion-label position="floating">Description</ion-label>
        <ion-textarea rows="5" v-model="enteredDescription"></ion-textarea>
      </ion-item>
    </ion-list>
    <ion-button type="submit" expand="block">Save</ion-button>
  </form>
</template>

<script lang="ts">
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton
} from "@ionic/vue";
import { Options, Vue } from 'vue-class-component';
import { Emit } from 'vue-property-decorator';
import { AddMemory } from "@/models/AddMemory.model";

@Options({
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton
  }
})
export default class MemoryOverview extends Vue {
  private enteredTitle = '';
  private enteredImageUrl = '';
  private enteredDescription = '';

  @Emit('save-memory')
  submitForm() {
    const memory: AddMemory = {
      title: this.enteredTitle,
      imageUrl: this.enteredImageUrl,
      description: this.enteredDescription,
    };

    return memory;
  }
}
</script>
