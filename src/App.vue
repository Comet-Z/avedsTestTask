<template>
  <div class="main">
    <Header />

    <router-view>

    </router-view>
  </div>
</template>

<script>
import Header from './components/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.content {
  padding: 0px 100px 10rem;
  
}

/* responsive area: */
/* mobile */
@media screen and (max-width: 1137px) {
 .header__menu {
    gap: 10px;
 }

 .header__content {
    margin: 28px 10px;
 }
 
 .login {
    padding: 6px 20px;
 }

 .main__actions {
    margin-top: 35px;
    height: 52px;
    width: 128px;
 }

 .action-btn {
    height: 50px;
    width: 140px;
 }
 
 .card__container {
  width: 100px;
 }

 .modal__container {
    width: 87%;
    left: 0%;  
 }
}

/* tablets: */
@media screen and (max-width: 1223px) {
  .content {
    padding: 0px 10px;
  }
  .main-services {
    gap: 10px;
  }

  .card__container {
    width: 285px;
  }

  /* .modal__container {
    left: 26%;
    width: 550px;
  } */
}
</style>
