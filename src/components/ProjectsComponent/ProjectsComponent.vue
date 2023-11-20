<template>
  <section>
    <h1>Projects</h1>
    <div v-for="(project, index) in projects" v-bind:key="project.title">
      <div>
        <div>
          <a v-bind:href="project.frontUrl" target="_blank"><img v-bind:src="project.image" v-bind:alt="project.title" v-bind:height="200"></a>
        </div>
        <div>
          <p><b>Project Name:</b> {{ project.title }}</p>
          <p><b>Description:</b> {{ project.description }}</p>
          <p><b>Stack Used:</b> {{ project.stack }}</p>
          <a v-if="project.backUrl" v-bind:href="project.backUrl" target="_blank"><p><b>See Back-End on Github</b></p></a>
        </div>
      </div>
      <hr v-if=" index < projects.length - 1">
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        projects: [
          {
            image: 'theOmnivore.png',
            title: 'The Omnivore',
            description: 'The Omnivore is a community for insiders where chefs, somms & mixologists from our Napa Valley & SF restaurants riff on new creations and special events we’re hosting. This is the official client description I have been working to for the last year as a Full-Stack Engineer.',
            stack: 'React.js, Node.js, Javascript, Typescript, Redux-Saga, Material UI, Axios, HTML, CSS, AdminJS, PostgreSQL, Express, Sequelize, Nodemon, Heroku, Neo4j, Cypher Query Language, Jest, React-Testing-Library, Git and Github.',
            frontUrl: 'https://www.theomnivore.co/',
          },
          {
            image: 'lawApp.png',
            title: 'The Lawyer Tool',
            description: 'The Laywer Tool is a platform that helps lawyers with managing clients information and allows the lawyer to generate different types of documents with just one click. This project was created by me to help a friend that just became a lawyer and needed it.',
            stack: 'React.js, Node.js, Javascript, Material UI, Axios, HTML, CSS, React-pdf, MongoDB, Mongoose, Express, Nodemon, Git and Github.',
            frontUrl: 'https://github.com/dev-LucasOliveira/user_db_interface',
            backUrl: 'https://github.com/dev-LucasOliveira/api_user_db',
          },
          {
            image: 'firstCrud.png',
            title: 'The Robot Class',
            description: 'The Robot Class is nothing but my first complete CRUD with React. For the final test in the intesive front-end course we had to create an aplication using a public api (dummy json) to exercise crud, iteration and visual concepts.',
            stack: 'React.js, Javascript, HTML, CSS, Git and Github.',
            frontUrl: 'https://github.com/dev-LucasOliveira/react-final-project',
          },
          {
            image: 'schoolTemplate.png',
            title: 'School Template',
            description: 'This is a simple template I have created for schools in general.',
            stack: 'Javascript, HTML, CSS, Git and Github.',
            frontUrl: 'https://dev-lucasoliveira.github.io/site-da-escola/#section1',
          },
          {
            image: 'myPortfolio.png',
            title: 'Lucas Oliveira | Portfolio',
            description: 'This Portfolio was created using Vue.js for study purposes. As you can see, I am very curious and love to explore new technologies, no matter what it is. By the way, I just loved to use Vue.js to create this!',
            stack: 'Vue.js, Javascript, HTML, CSS, Nodemon, Git and Github.',
            frontUrl: '',
          }
        ]
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
    color: #2e2e2e;
  }
  
  h1 {
    font-size: 40px;
    color: #465B71;
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
    background-color: #465B71;
    width: max-content;
    font-size: 16px;
    padding: 7px 16px;
    border-radius: 5px;
    margin-bottom: 0;
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
    border-bottom: solid 1px #2e2e2e20;
    width: 100%;
  }

  a > img {
    border-radius: 5px;
    box-shadow: 10px 10px 10px #2e2e2e90;
  }

  a > img:hover {
    /* scale: 1.1; */
    animation: scale-on-hover 1s linear forwards;
  }

  @keyframes scale-on-hover {
    from {
      box-shadow: 10px 10px 10px #2e2e2e90;
    }
    to {
      box-shadow: 10px 10px 30px #2e2e2e90;
    }
  }
</style>