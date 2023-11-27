<template>
  <section>
    <h1>About me</h1>
    <p>I have a great aptitude for <b>mathematics</b> and <b>physics</b>, currently working as a <b>Full-Stack engineer</b> and part-time as a teacher of both subjects for high school students. I received some academic medals and awards while in high school, and had the opportunity to <b>represent Brazil</b> in a <b>hackathon in Haifa, Israel</b>, back in 2018. Some years later I decided to make my way to the development area. I've attended an intensive front-end development course, and while in the course I got my first <b>offer from a Silicon Valley company</b>, in which I've been working for since then.</p>
    <p>I have <b>strong knowledge</b> in some technologies as <b>React.js, Node.js, Javascript, Typescript, Redux-Saga, contextAPI, Material UI, Axios, HTML, CSS, AdminJS, PostgreSQL, Express, Sequelize, Neo4j, Cypher Query Language, Git and Github</b>. Besides these technologies, I have been mastering some as <b>Vue.js, MongoDB, Mongoose, Heroku, Jest and React-Testing-Library</b>.</p>
  </section>
</template>

<script>
  export default {
    name: 'AboutComponent',
    // props: [],
  }
</script>

<style scoped>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    padding: 10vh 0;
    height: fit-content;
    /* font-size: 25px; */
    color: #e5e5e5;
  }

  h1 {
    font-size: 40px;
    align-self: center;
    margin-bottom: 5vh;
    color: #6680A3;
  }

  p {
    width: 60%;
    font-size: 18px;
    text-align: justify;
    text-indent: 50px;
    margin-bottom: 18px;
  }
</style>