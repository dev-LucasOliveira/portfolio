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
    data() {
      return {
        projects: [
          {
            image: 'theOmnivore.png',
            title: 'The Omnivore',
            description: 'The Omnivore is a community for insiders where chefs, somms & mixologists from our Napa Valley & SF restaurants riff on new creations and special events we’re hosting. This is the official client description I have been working to for the last year as a Full-Stack Engineer.',
            stack: 'React.js, Node.js, Javascript, Typescript, Redux-Saga, Material UI, Axios, HTML, CSS, AdminJS, PostgreSQL, Express, Sequelize, Nodemon, Heroku, Neo4j, Cypher Query Language, Jest, React-Testing-Library, Git and Github.',
            website: 'https://www.theomnivore.co/',
            frontUrl: null,
            backUrl: null,
          },
          {
            image: 'lawApp.png',
            title: 'The Lawyer Tool',
            description: 'The Laywer Tool is a platform that helps lawyers with managing clients information and allows the lawyer to generate different types of documents with just one click. This project was created by me to help a friend that just became a lawyer and needed it.',
            stack: 'React.js, Node.js, Javascript, Material UI, Axios, HTML, CSS, React-pdf, MongoDB, Mongoose, Express, Nodemon, Git and Github.',
            website: 'https://github.com/dev-LucasOliveira/user_db_interface',
            frontUrl: 'https://github.com/dev-LucasOliveira/user_db_interface',
            backUrl: 'https://github.com/dev-LucasOliveira/api_user_db',
          },
          {
            image: 'firstCrud.png',
            title: 'The Robot Class',
            description: 'The Robot Class is nothing but my first complete CRUD with React. For the final test in the intesive front-end course we had to create an aplication using a public api (dummy json) to exercise crud, iteration and visual concepts.',
            stack: 'React.js, Javascript, HTML, CSS, Git and Github.',
            website: 'https://react-final-project-three.vercel.app/',
            frontUrl: 'https://github.com/dev-LucasOliveira/react-final-project',
            backUrl: null,
          },
          {
            image: 'schoolTemplate.png',
            title: 'School Template',
            description: 'This is a simple template I have created for schools in general.',
            stack: 'Javascript, HTML, CSS, Git and Github.',
            website: 'https://dev-lucasoliveira.github.io/site-da-escola/',
            frontUrl: 'https://github.com/dev-LucasOliveira/site-da-escola',
            backUrl: null,
          },
          {
            image: 'dailyVerse.png',
            title: 'Daily Verse',
            description: 'Daily Verse is a page where you can have access to a daily bible verse. The verse is generate by "NET Bible Web Service (API)".',
            stack: 'Vue.js, Javascript, HTML, CSS, Axios, NET Bible Web Service (API), Git and Github.',
            website: 'https://dailybibleverse.vercel.app/',
            frontUrl: 'https://github.com/dev-LucasOliveira/daily-bible-verse',
            backUrl: null,
          },
          {
            image: 'myPortfolio.png',
            title: 'Lucas Oliveira | Portfolio',
            description: 'This Portfolio was created using Vue.js for study purposes. As you can see, I am very curious and love to explore new technologies, no matter what it is. By the way, I just loved to use Vue.js to create this!',
            stack: 'Vue.js, Javascript, HTML, CSS, Nodemon, Git and Github.',
            website: '',
            frontUrl: 'https://github.com/dev-LucasOliveira/portfolio',
            backUrl: null,
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