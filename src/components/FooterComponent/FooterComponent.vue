<template>
  <footer>
    <h1>Contact</h1>
    <h2>Do not be shy. Hit me up!</h2>
    <p><b>Email:</b> lucascoliveira.corporate@gmail.com</p>
    <section>
      <p>Developed by Lucas Oliveira | 2023</p>
    </section>
  </footer>
</template>

<script>
</script>

<style scoped>
  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15vh 0 0;
    height: fit-content;
  }

  section {
    /* background-color: rgba(46, 46, 46, 0.1); */
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15vh;
    height: fit-content;
    width: 100%;
  }

  section > p {
    font-size: 16px;
    color: #e5e5e5;
    padding: 2vh 0;
    margin-bottom: 0;
    text-align: center;
  }

  h1 {
    font-size: 32px;
    color: #6680A3;
    margin-bottom: 2vh;
    width: 75%;
  }

  h2 {
    color: #e5e5e5;
    width: 75%;
    font-size: 24px;
    text-align: justify;
    margin-bottom: 18px;
  }

  p {
    color: #e5e5e5;
    width: 75%;
    font-size: 20px;
    text-align: justify;
    margin-bottom: 18px;
  }

  b {
    color: #6680A3;
  }
</style>