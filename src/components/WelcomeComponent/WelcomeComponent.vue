<template>
    <section>
      <div>
        <h5>Welcome, I am</h5>
        <h1>Lucas Oliveira</h1>
        <h6>A Front-End Engineer</h6>
        <div>
          <a href="https://github.com/dev-LucasOliveira" target="_blank"><img src="github.png"></a>
          <a href="https://www.linkedin.com/in/oliveira-lucas-c/" target="_blank"><img src="linkedin.png"></a>
        </div>
      </div>
      <div>
        <img src="myPicture.png" height="500">
      </div>
    </section>
</template>

<script>
  export default {
    name: 'WelcomeComponent',
    // props: [],
  }
</script>

<style scoped>
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-size: 40px;
    color: #2e2e2e;
  }

  section:first-child > div {
    width: 30vw;
  }

  section:first-child > div:last-child {
    display: flex;
    /* align-items: center; */
    justify-content: flex-end;
  }

  section:first-child > div:first-child > div  {
    display: flex;
    margin-top: 12px;
    gap: 12px;
  }

  /* section:first-child > div:first-child > div > a:hover {
  } */
  
  section:first-child > div:first-child > div > a > img:hover {
    opacity: 0.4;
    cursor: pointer;
  }

  h1 {
    width: auto;
    color: #465B71;
  }

  h1:hover {
    cursor: default;
    animation: color 5s ease-in-out infinite;
  }

  @keyframes color {
    0% {
      color: #465B71;
    }
    50% {
      color: #FCA311;
    }
    100% {
      color: #465B71;
    }
  }

  img {
    border-radius: 5px;
  }
</style>