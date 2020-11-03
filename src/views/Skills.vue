<template>
  <div class="skills">
    <app-bar />  
    <v-content class="main">
      <v-container>
        <v-row justify="center">
          <v-col
           cols="12"
           md="6"
           sm="12"
          >
            <v-card
             class="mx-auto"
             elevation="5"
            >
              <v-toolbar
              class="ml-3 mr-3 primary"
              dark
              id="tool"
              >
                <v-toolbar-title id="skill" class="title">Skills &  Experience</v-toolbar-title>
              </v-toolbar>

              <v-container class="body">
                <v-card-text class="body-1 blue-grey--text text--darken-3">
                  The main area of my expertise is front-end development (client side of the web).
                  HTML5, CSS and Javascript, building small and medium scale web applications with Vue JS, custom plugins, frameworks, custom user friendly UIs and powerful interactive layouts. 
                </v-card-text>
                
                <ul>
                  <li class="text-justify body-1 blue-grey--text text--darken-3">Blockchain Developer at KusuConsult, Jos, Plateau State
                    January 2019 – Present
                    Using Blockchain Technology to build real world solutions that will soon gain mass adoption in this part of the world.
                  </li>

                  <li class="text-justify body-1 blue-grey--text text--darken-3">
                    Front-end Developer at Rimotli Corp, Jos, plateau State, Nigeria
                    September 2020 – October 2020
                    <ul>
                      <li class="text-justify body-1 blue-grey--text text--darken-4">
                        Organized and prioritized work flow to complete task in a timely manner.
                      </li>

                      <li class="text-justify body-1 blue-grey--text text--darken-4">
                        I build most of the user interface components using HTML5, Syntactically Awesome Style Sheets(SASS) and JavaScript
                      </li>
                    </ul>
                  </li>

                  <li class="text-justify body-1 blue-grey--text text--darken-3">
                    Instructor and Developer at GiantSec Academy Nigeria(giantsec.com)
                    July 2020 - Present
                  </li>
                </ul>
                
                <v-card-text class="ml-2 mr-2 hidden-md-and-down body-2 blue-grey--text text--darken-4">
                  Vist my 
                  <v-btn class="linked-profile" text @click="linkedinUrl">Linkedin</v-btn> 
                  profile for more details or you can as well 
                  <v-btn text class="linked-profile" router to="/contact">contact me</v-btn>
                </v-card-text>
                
                <div class="mt-1 mb-1" id="resume">
                  <v-btn class="download-btn" @click="download" dark color="green"><a class="white--text" href="https://firebasestorage.googleapis.com/v0/b/alaburausmanportfolio.appspot.com/o/docs%2FALABURA%20USMAN%20ALIYU%20%20RESUME.pdf?alt=media&token=cb28ccea-5a7f-4886-87a4-0d90f6a1ca3d">Download my resume</a><v-icon right>mdi-cloud-download-outline</v-icon></v-btn>
                </div>
              </v-container>

              <div>
                <v-divider></v-divider>
                <v-bottom-navigation
                 class="hidden-lg-only"
                 v-model="bottomNav"
                >
                  <div class="soc">
                    <!-- <router-link
                     to="#!"
                    > -->
                      <v-btn
                        @click="openGithub"
                      >
                        <v-icon class="grey--text text--darken-4" size="30">mdi-github</v-icon>
                      </v-btn>

                      <v-btn
                        @click="openlinkedin"
                      >
                        <v-icon class="blue--text text--darken-3" size="30">mdi-linkedin</v-icon>
                      </v-btn>

                      <v-btn
                        icon
                        @click="openFacebook"
                      >
                        <v-icon class="blue--text text--darken-4" size="30">mdi-facebook</v-icon>
                      </v-btn>

                      <v-btn
                        @click="sendUrl"
                      >
                        <v-icon class="red--text" size="30">mdi-mail</v-icon>
                      </v-btn>
                    <!-- </router-link> -->
                  </div>
                </v-bottom-navigation>
              </div>
            </v-card>
          </v-col>

          <v-col
           cols="12"
           md="6"
           sm="12"
          >
            <v-card
             class="mx-auto"
             elevation="5"
            >
              <skill-list />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content><br><br>
    <bottom-nav />
  </div>
</template>

<script>
import AppBar from '@/components/core/AppBar.vue'
import BottomNav from '@/components/core/BottomNav.vue';
import Skills from '@/components/material/SkillsList.vue';

export default {
  components: {
      'app-bar': AppBar,
      'bottom-nav': BottomNav,
      'skill-list': Skills,
  },

  data() {
    return {
      bottomNav: 'github',
      linkedin: 'https://www.linkedin.com/in/alabura-usman-581015188/',
      items: [
        { icon: 'mdi-github', color: 'grey--text text--darken-4', value: 'github' },
        { icon: 'mdi-linkedin', color: 'blue--text text--darken-3', value: 'linkedin' },
        { icon: 'mdi-facebook', color: 'blue--text text--darken-4', value: 'twitter' },
        { icon: 'mdi-twitter', color: 'blue--text', value: 'facebook'}
      ],
      links: [
        { to: 'https://github.com/Alabs02' },
        { to: 'https://www.linkedin.com/in/alabura-usman-581015188/' },
        { to: '#!' },
        { to: 'https://web.facebook.com/usman.alabura.3' }
      ],
    }
  },

  methods: {
    download() {
      alert("Resume will be available in a moment!")
    },
    linkedinUrl() {
      return this.linkedin;
    },
    sendUrl() {
      //
    },

    openGithub() {
      window.open("https://github.com/Alabs02", "_blank")
    },
    openlinkedin() {
        window.open("https://www.linkedin.com/in/alabura-usman-581015188/", "_blank")
    },
    openFacebook() {
        window.open("https://web.facebook.com/usman.alabura.3/", "_blank")
    },
  }
}
</script>

<style scoped>
  li {
    list-style-type: disc;
    padding: 5px 0px;
  }
  .main {
      margin-top: 30px;
  }
  a {
    text-decoration: none !important;
  }
  #tool {
    transform: translateY(-2rem) !important;
    border-radius: 15px 0 15px 0 !important;
  }
  .body {
    transform: translateY(-1rem) !important;
  }
  .linked-profile {
    text-transform: capitalize !important;
    padding: 0 !important;
    color: #1976d2;
  }

  .linked-profile:hover {
    text-decoration: underline;
  }
  #resume {
    text-align: center !important;
  }
  .soc {
    margin-top: 10px !important;
  }
  @media screen and (max-width: 1024px) {
    .main {
      margin-top: 25px;
    }
  }
</style>
