import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import firebaseConfig from './firebaseConfig'

Vue.config.productionTip = false

let app = ''


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(() => {
  if (!app){
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})


