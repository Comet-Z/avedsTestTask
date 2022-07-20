<template>
  <div class="main">
    <h1>Привет, {{ user }}</h1>
    <br />
    <div class="links">
      <button @click="handleSignOut" class="auth-btn login">
        Выйти из аккаунта
      </button>

      <router-link to="/contacts" class="router-link contacts">
        Перейти в контакты
      </router-link>
    </div>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { onMounted, ref } from "vue";
import router from "@/router";

export default {
  setup() {
    let auth = getAuth();
    const user = auth.currentUser.email;

    const isLoggedIn = ref(false);

    onMounted(() => {
      auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          isLoggedIn.value = true;
        } else {
          isLoggedIn.value = false;
        }
      });
    });

    const handleSignOut = () => {
      signOut(auth).then(() => {
        router.push("/");
      });
    };

    return {
      auth,
      user,
      isLoggedIn,
      handleSignOut,
    };
  },
};
</script>

<style scoped>
.main {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff;
  border: 1px black solid;

  padding: 100px 120px;

  font-family: "Montserrat";
  font-weight: bold;
  font-size: 28px;
}

.auth-btn {
  background: #ff685b;
  color: #fff;
  /* padding: 16px; */
}
.router-link {
  background: none;
  padding: 7px 20px;
  color: #ff685b;

  border: 1px #ff685b solid;
  border-radius: 7px;
}

.links {
  display: flex;
  width: 100%;
  gap: 20px;
}
</style>