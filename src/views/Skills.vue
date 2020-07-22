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
              class="primary ml-3 mr-3"
              dark
              id="tool"
              >
                <v-toolbar-title id="skill" class="title">Skills &  Experience</v-toolbar-title>
              </v-toolbar>

              <v-container class="body">
                <v-card-text class="body-1 text-justify blue-grey--text text--darken-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos laborum est culpa? Eaque qui laborum blanditiis nesciunt, 
                  optio earum cum repellendus asperiores corporis consectetur recusandae harum adipisci ut accusamus ab!
                </v-card-text>
                
                <v-card-text class="body-1 text-justify blue-grey--text text--darken-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos laborum est culpa? Eaque qui laborum blanditiis nesciunt, 
                  optio earum cum repellendus asperiores corporis consectetur recusandae harum adipisci ut accusamus ab!
                </v-card-text>
                
                <v-card-text class="hidden-md-and-down body-2 ml-2 mr-2 blue-grey--text text--darken-4">Vist my <v-btn class="linked" text @click="linkedinUrl">Linkedin</v-btn> profile for more details or you can as well <v-btn text class="linked" router to="/contact">contact me</v-btn></v-card-text>
                
                <div class="mt-1 mb-1" id="resume">
                  <v-btn @click="download" dark color="green" ripple>Download my resume<v-icon right>mdi-cloud-download-outline</v-icon></v-btn>
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
                        v-for="(item, i) in items"
                        @click="sendUrl"
                        :key="i" 
                        :value="item.value"
                      >
                        <v-icon :class="item.color" size="30">{{ item.icon }}</v-icon>
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
    }
  }
}
</script>

<style scoped>
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
  .linked {
    text-transform: capitalize !important;
    padding: 0 !important;
    color: #1976d2;
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
