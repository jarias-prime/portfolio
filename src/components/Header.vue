<template>
  <div>
    <q-header elevated>
      <q-bar
        class="white"
        style="height: 50px;"
      >
        <div class="col">
          <q-slide-item
            left-color="teal-6"
            @left="developers_auth"
            style="width:30%"
          >
            <template v-slot:left>
              <span class="rs-fs-12 font-weight-bold text-white pos-center">Enable Developers Console</span>
            </template>
            <q-item class="bg-grey-2">
              <q-item-section>
                <span class="rs-fs-16 font-weight-bold text-teal">My Portfolio</span>
              </q-item-section>
            </q-item>
          </q-slide-item>
        </div>
        <div class="col text-right">
          <q-btn
            to="/"
            dense
            flat
            round
            icon="account_circle"
            size="15px"
            color="teal"
          >
            <q-tooltip
              content-class="bg-indigo"
              :offset="[10, 10]"
            >My Profile</q-tooltip>
          </q-btn>
          <q-btn
            to="projects"
            dense
            flat
            round
            icon="folder"
            size="15px"
            color="teal"
          >
            <q-tooltip
              content-class="bg-indigo"
              :offset="[10, 10]"
            >My Projects</q-tooltip>
          </q-btn>
          <q-btn
            to="contact"
            dense
            flat
            round
            icon="contact_phone"
            size="15px"
            color="teal"
          >
            <q-tooltip
              content-class="bg-indigo"
              :offset="[10, 10]"
            >Contacts</q-tooltip>
          </q-btn>

        </div>
      </q-bar>
    </q-header>

    <!-- Developers Login -->
    <q-dialog
      v-model="developers_dialog_box"
      persistent
      transition-show="flip-down"
      transition-hide="flip-up"
    >
      <q-card class="text-white width-80">
        <q-bar
          id="developers_content"
          class="black"
        >
          <span class="rs-fs-12">Developers Console</span>
          <q-space />
          <q-btn
            dense
            flat
            icon="close"
            v-close-popup
          >
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <form
          @submit.prevent.stop="developers_authentication"
          @reset.prevent.stop="onReset"
        >
          <div>
            <q-card-section>
              <div class="pos-center">
                <q-btn
                  type="submit"
                  class="shadow-none"
                  round
                  size="50px"
                >
                  <q-avatar size="150px">
                    <img
                      id="logo-black"
                      src="@/assets/images/main-logo/main-logo-animated-black.svg"
                      alt="Root Logo"
                    >
                    <img
                      id="logo-red"
                      class="pos-absolute-center"
                      src="@/assets/images/main-logo/main-logo-animated-red.svg"
                      alt="Root Logo"
                    >
                  </q-avatar>
                </q-btn>
              </div>
            </q-card-section>
            <q-card-section>
              <q-input
                class="m-1"
                ref="email"
                v-model="email"
                type="email"
                color="green"
                outlined
                label="Email Address"
                lazy-rules
                :rules="[val => !!val || 'Email is required']"
              >
                <template v-slot:prepend>
                  <q-avatar
                    font-size="25px"
                    color="black"
                    text-color="white"
                    icon="account_circle"
                  />
                </template>
              </q-input>
              <q-input
                class="m-1"
                ref="password"
                v-model="password"
                :type="isPwd ? 'password' : 'text'"
                color="green"
                outlined
                label="Password"
                :rules="[val => !!val || 'Password is required']"
              >
                <template v-slot:prepend>
                  <q-avatar
                    font-size="25px"
                    color="black"
                    text-color="white"
                    icon="lock"
                  />
                </template>
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
            </q-card-section>
          </div>
        </form>

      </q-card>
    </q-dialog>
  </div>
</template>

<style scoped>
#logo-black {
  opacity: 1;
  transition: 1s all ease;
}

#logo-red {
  opacity: 0;
  transition: 0.5s all ease;
}

#gradient {
  width: 100%;
  height: 800px;
  padding: 0px;
  margin: 0px;
}

#developers_content {
  background: linear-gradient(-45deg, #fafafa, #fafafa, #979ba7, #979ba7);
  background-size: 400% 400%;
  color: #000;
  animation: developers_bg 15s ease infinite;
}

@keyframes developers_bg {
  0% {
    background-position: 30% 70%;
  }
  50% {
    background-position: 100% 70%;
  }
  100% {
    background-position: 30% 70%;
  }
}
</style>

<script>
// import { usersRef } from '@/components/firebaseConfig'
import firebase from 'firebase'

export default {
  mounted () { },
  data () {
    return {
      developers_dialog_box: false,
      isPwd: true,
      email: null,
      password: null
    }
  },
  methods: {
    developers_auth ({ reset }) {
      let self = this

      this.$q.notify('developers authentication is required. Please Login.')
      this.developers_auth_reset(reset)

      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          self.$router.push({ name: 'dashboard' })
        } else {
          self.developers_dialog_box = true
        }
      })          
    },
    developers_auth_reset (reset) {
      this.timer = setTimeout(() => {
        reset()
      }, 3000)
    },
    developers_authentication: function () {
      this.$refs.email.validate()
      this.$refs.password.validate()

      if (this.$refs.email.hasError || this.$refs.password.hasError) {
        this.formHasError = true
        errorFeedback()
      } else {
        this.loginUser()
      }

      function errorFeedback () {
        let logoBlack = document.getElementById('logo-black')
        let logoRed = document.getElementById('logo-red')

        logoBlack.style.opacity = 0

        setTimeout(() => {
          logoRed.style.opacity = 1
        }, 600)
        setTimeout(() => {
          logoRed.style.opacity = 0
        }, 2000)
        setTimeout(() => {
          logoBlack.style.opacity = 1
        }, 2300)
      }
    },
    loginUser () {
      // // Insert to Users to database
      // usersRef.push({
      //   access_role: 1,
      //   email: 'root.jarias@gmail.com',
      //   last_signed_in: '11-11-11:11-11-11',
      //   name: 'John Rafael M. Arias',
      //   phone: '09216980972',
      //   photo_url: 'https://arias-portfolio.firebaseapp.com/img/main-logo-animated.235d1cb7.svg'
      // }).then(function (e) {
      //   console.log('Document successfully written!');
      // })
      //   .catch(function (error) {
      //     console.error('Error writing document: ', error)
      //   })

      let userEmail = this.email
      let userPassword = this.password
      let self = this

      firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).then(function () {
        // Valid email and password from database
        self.$q.notify({
          icon: 'verified_user',
          color: 'positive',
          message: 'Developers Console Activated'
        })

        self.$router.push({ name: 'dashboard' })
      }).catch(function (error) {
        // Invalid email and password from database
        self.$q.notify({
          icon: 'verified_user',
          color: 'negative',
          message: error.message
        })

        console.log('Error: ' + error.message)
      })
    }

  }
}
</script>
