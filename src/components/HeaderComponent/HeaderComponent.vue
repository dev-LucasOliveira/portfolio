<template>
  <header>
    <h1>
      <span>lucas</span>
      <span>Oliveira</span>
    </h1>
    <!-- <nav>
      <a>About</a>
      <a>Projects</a>
      <a>Contact Me</a>
    </nav> -->
  </header>
</template>

<script>
  export default {
    name: 'HeaderComponent',
    // props: [],
  }
</script>

<style scoped>
  header {
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7vh;
    padding: 0 15vw 0 3vw;
    width: 100vw;
    color: #E5E5E5;
    /* background-color: #2e2e2e; */
    /* background-color: transparent; */
  }

  h1 {
    font-size: 24px;
  }

  /* h1:hover {
    cursor: pointer;
  } */

  h1 span:last-child {
    color: #6680A3;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
  }

  nav a {
    margin: 0 2vw;
    font-weight: 700;
    color: #E5E5E5;
  }

  nav a:hover {
    cursor: pointer;
  }
</style>