<template>
    <div class="login">
        <h3>Sign In</h3>
        <div class="container">
        <div class="row">
        <input class="form-control form-control-lg col-md-5 mb-3" v-model="email" type="text" placeholder="Email">
        <input class="form-control form-control-lg col-md-5" v-model="password" type="text" placeholder="Password">
        <button @click="login" type="button" class="btn btn-secondary btn-lg">Login</button>
        </div>
        </div>
        <p>
            or Sign In with Google <br>
            <button @click="socialLogin" class="social-button">
                <img alt="Google Logo" src="../assets/google-logo.png">
            </button>
        </p>
        <p>Não tem conta? Você pode <router-link to="/sign-up">criar uma</router-link></p>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'login',
    data(){
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                (user) => {
                    this.$router.replace('home')
                    user
                },
                (err) => {
                    alert(`Oops. ${err.message}`)
                }
            )
        },
        socialLogin() {
            const provider = new firebase.auth.GoogleAuthProvider();
            // eslint-disable-next-line no-unused-vars
            firebase.auth().signInWithPopup(provider).then((result) => {
                this.$router.replace('home')
            }).catch((err) => {
                alert(`Oops. ${err.message}`)
            })
        }
    }
}
</script>

<style scoped>
    .login {
        margin-top: 40px;
    }

    .row {
        display: flex;  
        flex-wrap: wrap;
        flex-direction: column; 
        align-items: center;
    }

    button {
        margin-top: 20px;
        
        cursor: pointer;
    }

    p {
        margin-top: 40px;
        font-size: 13px;
    }

    p a {
        text-decoration: underline;
        cursor: pointer;
    }

    .social-button {
        width: 75px;
        background: white;
        padding: 10px;
        border-radius: 100%;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
        outline: 0;
        border: 0;
    }

    .social-button:active {
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
    }

    .social-button img {
        width: 100%;
    }
</style>