<template>
  <div class="app">
    <HeaderComponent/>
    <MainComponent/>
  </div>
</template>

<script>
  import HeaderComponent from './components/HeaderComponent/HeaderComponent.vue';
  import MainComponent from './components/MainComponent/MainComponent.vue';

  export default {
    name: 'App',
    components: {
      HeaderComponent,
      MainComponent,
    }
  }

</script>

<style>
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  #app {
    font-family: 'Nunito', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    background-color: #1A1D24;
  }
</style>
