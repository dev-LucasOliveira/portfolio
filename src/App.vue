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
    /* text-align: center; */
    /* color: #14213D; */
    min-height: 100vh;
    /* width: 100vw; */
    background-color: #E5E5E5;
    /* background-size: 500% 500%;
    animation: color 10s ease-in-out infinite; */
    /* overflow-x: hidden; */
  }
  /* @keyframes color {
    0% {
      background-position: 50% 0%;
    }
    50% {
      background-position: 50% 100%;
    }
    100% {
      background-position: 50% 0%;
    }
  } */
</style>
