<template>
  <div class="main">
    <Header />

    <AuthModal />
    
    <div class="content">
      <Main />
      <Services />

    </div>

  </div>
</template>

<script>
import Header from './components/HeaderComponent.vue'
import Main from './components/MainComponent.vue'
import Services from './components/ServicesComponent.vue'
import AuthModal from './components/auth/RegistrationModal.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Services,
    AuthModal
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

 .main-services {
    align-items: center;
    flex-direction: column;
 }

 .action-btn {
    height: 50px;
    width: 140px;
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
}
</style>
