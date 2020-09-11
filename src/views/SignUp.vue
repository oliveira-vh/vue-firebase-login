<template>
    <div class="sign-up">
        <p>Vamos criar uma nova conta!</p>
        <div class="container">
        <div class="row">
        <input class="form-control form-control-lg col-md-5 mb-3" v-model="email" type="text" placeholder="Email">
        <input class="form-control form-control-lg col-md-5" v-model="password" type="password" placeholder="Password">
        <button @click="signUp" type="button" class="btn btn-secondary btn-lg">Sign up</button>
        </div>
        </div>
        <span>ou volte para <router-link to="/login">login</router-link>.</span>
        
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'signUp',
    data(){
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        signUp: function() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then(
                // eslint-disable-next-line no-unused-vars
                   (user) => {
                        alert(`Hey, ${this.email} Your account has been created!`)
                        this.$router.replace('home')
                    },
                    (err) => {
                        alert(`Oops. ${err.message}`)
                    }
                )
        }

    }
}
</script>

<style scoped>
    .signUp {
        margin-top: 40px;
    }
    .row {
        display: flex;  
        flex-wrap: wrap;
        flex-direction: column; 
        align-items: center;
    }

    button {
        margin-top: 10px;
        cursor: pointer;
    }
    span {
        display: block;
        margin-top: 20px;
        font-size: 11px;
    }
</style>