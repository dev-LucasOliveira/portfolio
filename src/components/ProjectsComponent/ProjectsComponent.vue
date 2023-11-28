<template>
  <section>
    <h1>Projects</h1>
    <div v-for="(project, index) in projects" v-bind:key="project.title">
      <div>
        <div>
          <a v-bind:href="project.website" target="_blank"><img v-bind:src="project.image" v-bind:alt="project.title" v-bind:height="200"></a>
        </div>
        <div>
          <p><b>Project Name:</b> {{ project.title }}</p>
          <p><b>Description:</b> {{ project.description }}</p>
          <p><b>Stack Used:</b> {{ project.stack }}</p>
          <a v-if="project.frontUrl" v-bind:href="project.frontUrl" target="_blank" id="front-button"><p><b>See Front-End Repository on Github</b></p></a>
          <a v-if="!project.frontUrl" target="_blank" id="disabled-button"><p><b>Private Repository</b></p></a>
          <a v-if="project.backUrl" v-bind:href="project.backUrl" target="_blank" id="back-button"><p><b>See Back-End Repository on Github</b></p></a>
        </div>
      </div>
      <hr v-if=" index < projects.length - 1">
    </div>
  </section>
</template>

<script>
  export default {
    computed: {
      projects() {
        return this.$store.state.projects;
      }
    }
  }
</script>

<style scoped>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    padding: 8vh 0;
    height: fit-content;
    /* font-size: 18px; */
    color: #e5e5e5;
  }

  h1 {
    font-size: 40px;
    color: #6680A3;
    align-self: center;
    margin-bottom: 2vh;
  }

  p {
    font-size: 18px;
    text-align: justify;
    /* text-indent: 50px; */
    margin-bottom: 18px;
  }

  a {
    text-decoration: none;
    color: #e5e5e5;
    display: flex;
    width: fit-content;
    margin-top: 40px;
  }

  a > p {
    width: max-content;
    font-size: 16px;
    padding: 7px 16px;
    margin-bottom: 0;
  }
  
  #front-button {
    border-radius: 5px;
    background-color: #6680A3;
  }

  #back-button {
    border-radius: 5px;
    background-color: #c4954b;
  }

  #disabled-button {
    border-radius: 5px;
    background-color: #6680A3;
    opacity: 0.4;
  }

  div > div:first-child > a {
    margin-top: 0;
  }

  section > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
  }

  section > div > div {
    display: flex;
    width: 90%;
    padding: 5vh 0;
  }

  section > div > div > div:last-child {
    margin-left: 5vw;
  }

  hr {
    margin: 2vh 0;
    border: none;
    border-bottom: solid 1px rgb(230, 230, 230, 0.2);
    width: 100%;
  }

  a > img {
    border-radius: 5px;
    box-shadow: 0 0 10px rgb(230, 230, 230, 0.2)
  }

  a > img:hover {
    animation: scale-on-hover 1s linear forwards;
  }

  @keyframes scale-on-hover {
    from {
    box-shadow: 0 0 10px rgb(230, 230, 230, 0.2)
    }
    to {
    box-shadow: 0 0 15px rgb(230, 230, 230, 0.8)
    }
  }
</style>