<template>
  <div v-if="show" class="modal__container">
    <div class="modal__content">
      <h2 class="modal__title">Создайте аккаунт:</h2>

      <div class="modal__auth">
        <label for="">Email:</label>
        <input v-model="email" type="email" />
        <br />
        <label for="">Пароль:</label>
        <input v-model="password" type="password" />
      </div>

      <div class="modal__buttons">
        <button v-on:focusout="submit" @click="register" class="auth-btn">
          Создать аккаунт
        </button>

        <button @click="$emit('close')" class="auth-btn">Отмена</button>
      </div>
    </div>
  </div>
</template>

<script >
// vue:
import { ref } from "vue";
// firebase:
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// router
import { useRouter } from "vue-router";

export default {
  props: {
    show: Boolean,
  },

  setup() {
    const email = ref("");
    const password = ref("");
    const router = useRouter();

    // TODO: create a register function with firebase
    const register = () => {
      createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then(() => {
          console.log("Logged In!");
          router.push("/user");
        })
        .catch((error) => {
          console.log(error.code);
          alert(error.message);
        });
    };

    return {
      email,
      password,
      router,
      register,
    };
  },
};
</script>

<style>
input {
  padding: 10px;
  border-radius: 7px;
  border: none;
  background: rgb(223, 223, 223);
}
.modal__container {
  display: flex;
  justify-content: center;
  flex-direction: column;

  position: absolute;

  padding: 20px;
  font-family: "Montserrat";

  top: 150px;
  right: 0;
  left: 30%;

  height: 550px;
  width: 550px;

  box-shadow: 0px 13px 13px rgba(0, 0, 0, 0.144);
  border-radius: 7px;
  background: #fff;
}

.auth-btn {
  background: none;
  padding: 7px 20px;

  border: 1px #ff685b solid;
  border-radius: 7px;
}
.auth-btn:nth-child(1) {
  background: #ff685b;
  font-weight: bold;
  color: #fff;
}

.modal__buttons {
  display: flex;
  justify-content: space-evenly;

  border: none;
  margin-top: 4rem;
}

.modal__auth {
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.modal__title {
  margin-bottom: 4rem;
  text-align: center;
}
</style>