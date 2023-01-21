<template>
  <header class="banner" role="banner">
    <div class="banner-container">
      <a class="banner-logo" href="/">
        <img src="../assets/logo.png" alt="btafforeau logo"/>
      </a>
      <div class="banner-menu">
        <ul>
          <li><router-link to="/about">A propos</router-link></li>
          <li><a href="/course">Parcours</a></li>
          <li><a href="/portfolio">Portefolio</a></li>
          <li><a href="/skills">Compétences</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComp",
}
</script>

<style scoped>
  .banner {
    align-items: center;
    display: flex;
    padding: 30px 0;
    position: absolute;
    width: 100%;
  }

  .banner-container {
    padding: 0 30px;
    width: 100%;
  }

  .banner-logo {
    display: block;
    float: left;
    position: relative;
  }

  .banner-logo img {
    display: block;
    max-height: 50px;
    position: relative;
  }

  .banner-menu ul {
    float: right;
    list-style: none;
    position: relative;
  }

  .banner-menu li {
    float: left;
    position: relative;
    padding-left: 30px;
  }
</style>