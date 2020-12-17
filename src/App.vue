<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
    IonApp,
    IonRouterOutlet
  }
})
export default class App extends Vue {}
</script>
