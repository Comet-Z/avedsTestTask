<template>
  <div v-if="show" class="modal__container">
    <div class="modal__content">
        <h2 class="modal__title">Создайте аккаунт:</h2>

        <div class="modal__auth">
            <label for="">Email:</label>
            <input 
                v-model="email"
                type="email"
            >
            <span v-if="v$.email.$error"> 
                <p>Неверный формат почты!</p>
            </span>

            <br>

            <label for="">Пароль:</label>
            <input 
                v-model="password.password"
                type="password"
            >
            <span v-if="v$.password.$error"> 
                <p>Пароль должен содержать хотя бы 6 чичел!</p>
            </span>

            <label>Подтвердите пароль:</label>
            <input 
                type="password"
                v-model="confirm.confirm"
            >
            <span v-if="v$.confirm.$error"> 
                <p>Пароли не совпадают</p>
            </span>
        </div>

        <div class="modal__buttons">
            <button
                @click="submit" 
                class="auth-btn"
            >
                Создать аккаунт
            </button>

            <button 
                @click="$emit('close')"
                class="auth-btn"
            >
                Отмена
            </button>
        </div>
    </div>
  </div>
</template>

<script>
// vuelidate:
import useValidate from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'

export default {
    props: {
        show: Boolean
    },

    data() {
        return {
            v$: useValidate(),
            email: '',
            password: {
                password: '',
            },
            confirm: {
                confirm: ''
            }
        }
    },

    methods: {
        submit() {
            this.v$.$validate()
        }
    },

    validations() {
        return {
            email: { required, email },
            password: {
                password: { required, minLength: minLength(6) },
            },
            confirm: {
                confirm: {required, sameAs: sameAs(this.password.password)}
            }
        }
    }
}
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
    font-family: 'Montserrat';

    top: 150px;
    right: 0;
    left: 30%;

    height: 550px;
    width: 550px;

    box-shadow: 0px 13px 13px rgba(0, 0, 0, 0.144);
    border-radius: 7px;
    background: #FFF;
}

.auth-btn {
    background: none;
    padding: 7px 20px;

    border: 1px #FF685B solid;
    border-radius: 7px;
}
.auth-btn:nth-child(1) {
    background: #FF685B;
    font-weight: bold;
    color: #FFF;
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