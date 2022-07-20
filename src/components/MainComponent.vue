<template>
  <div class="main">
    <div class="main__container">
      <h1 class="main__title">Место для получения медицинской помощи</h1>
      <div class="main__actions">
        <button @click="showModal = true" class="action-btn login">
          Войти
        </button>
        <button class="action-btn contacts">Контакты</button>
      </div>
    </div>

    <Teleport to="body">
      <Login :show="showModal" @close="showModal = false" />
    </Teleport>
  </div>
</template>

<script>
import Login from "./auth/LoginModal.vue";

export default {
  components: {
    Login,
  },

  data: () => ({
    showModal: false,
  }),
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Open+Sans:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap");

.main__title {
  font-family: "Montserrat";
  font-size: 50px;
}
.main {
  margin-top: 70px;
}
.main__container {
  height: 280px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.main__actions {
  display: flex;
  gap: 10px;
}

/*=============================================
=            Action Buttons            =
=============================================*/
.login {
  color: #fff;
  font-weight: bold;
  background: #ff685b;
  /* padding: 15px 40px; */
}

.contacts {
  width: 155px;
  color: #ff685b;
  font-weight: bold;
  font-size: 20px;

  padding: 15px 30px;

  border-radius: 7px;
  border: #ff685b 1px solid;
}
/*=====  End of Action Buttons  ======*/
.action-btn {
  font-size: 15px;
  text-align: center;
}

@media screen and (max-width: 730px) {
  .main__title {
    font-size: 28px;
  }
}
</style>