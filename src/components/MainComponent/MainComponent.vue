<template>
  <main>
    <WelcomeComponent/>
    <hr>
    <AboutComponent/>
    <hr>
    <ProjectsComponent/>
    <hr>
    <FooterComponent/>
  </main>
</template>

<script>
  import WelcomeComponent from '../WelcomeComponent/WelcomeComponent.vue';
  import AboutComponent from '../AboutComponent/AboutComponent.vue';
  import ProjectsComponent from '../ProjectsComponent/ProjectsComponent.vue';
  import FooterComponent from '../FooterComponent/FooterComponent.vue';
  
  export default {
    name: 'MainComponent',
    components: {
      WelcomeComponent,
      AboutComponent,
      ProjectsComponent,
      FooterComponent,
    }
    // props: [],
  }
</script>

<style scoped>
  hr {
    margin: auto;
    border: none;
    border-bottom: solid 1px #2e2e2e40;
    width: 80%;
  }
</style>