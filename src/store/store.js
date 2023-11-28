import { createStore } from 'vuex'

export const store = createStore({
  state() {
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
})