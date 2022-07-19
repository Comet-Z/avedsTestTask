<template>
  <div class="main">
    <div class="header__container">
      <div class="header__content">
        <div class="header__logo">
          <a href="#">
            <img src="../assets/logo1.png" alt="">
          </a>
        </div>
        <div class="header__menu">
          <button 
            href="#"
            class="contacts"
          >
            Контакты
          </button>

          <button 
            @click="showModal = true"
            href="#"
            class="login"
          >
            Войти
          </button>
        </div>
      </div>
    </div>
    
     <Teleport to="body">
        <Registration 
            :show="showModal"
            @close="showModal = false"
        />
    </Teleport>
  </div>
</template>

<script>
import Registration from './auth/RegistrationModal.vue'

export default {
    components: {
        Registration,
    },

    data: () => ({
        showModal: false
    })
}
</script>

<style>
/* fonts: */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Open+Sans:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');
* {
  margin: 0;
  padding: 0;
}

a {
  color: #000;
  text-decoration: none;
}


.header__container {
  border-bottom: 2px black solid;
  height: fit-content;
}

.header__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 70px;
  
}

.header__menu {
  display: flex;
  align-items: center;

  gap: 59px ;
}

.contacts {
  font-size: 15px;
  font-family: 'Open Sans';
  color: #737373;
  background: none;
  border: none;
}

.login {
  font-size: 20px;
  font-family: 'Montserrat';
  color: #FF685B;

  background: none;
  padding: 8px 60px;

  border: 2px solid #FF685B;
  border-radius: 7px;
}

.login, .contacts {
  cursor: pointer;
}


</style>