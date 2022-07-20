import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACsGfIjLOHyESN1MYdVYM0iTwKFhkDalk",
  authDomain: "aveds-task.firebaseapp.com",
  projectId: "aveds-task",
  storageBucket: "aveds-task.appspot.com",
  messagingSenderId: "953863091897",
  appId: "1:953863091897:web:3d3d3088922e22cdee4d68"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app') 

