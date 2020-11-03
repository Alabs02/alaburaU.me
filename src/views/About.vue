<template>
  <div class="about">
    <app-bar />  
    <v-content class="main">
      <v-container>
        <v-row justify="center">
          <v-col
           cols="12"
           md="7"
           sm="12"
          >
            <v-card
             class="mx-auto"
             elevation="4"
            >
              <v-toolbar
                class="ml-3 mr-3 primary"
                dark
                id="tool"
                >
                  <v-toolbar-title id="about" class="title">About me</v-toolbar-title>
              </v-toolbar>

              <v-container class="body">
                <v-container>
                  <v-row justify="center">
                    
                    <v-col
                    cols="12"
                    md="6"
                    sm="6"
                    >
                      <div id="usman">
                        <v-avatar size="100">
                          <v-img
                          src="@/assets/logo1.svg"
                          ></v-img>
                        </v-avatar>
                      </div>
                    </v-col>

                    <v-col
                    cols="12"
                    md="6"
                    sm="6"
                    >
                      <div class="title blue-grey--text text--darken-4 name" id="name">My name is <span class="name__me">Alabura Usman Aliyu</span></div>
                    </v-col>
                    
                  </v-row>
                </v-container>
                <v-card-text class="text-justify body-1 blue-grey--text text--darken-3">
                    I am a Web Designer and Front-end Developer based in Jos, Plateau State Nigeria. And a member of UJ hub, University of Jos, I have worked as a part time Front-end Developer in Rimotli Corp in Jos.
                </v-card-text>

                <v-card-text class="text-justify body-1 blue-grey--text text--darken-3">
                    I have also worked individually as a UI Developer on some projects.
                </v-card-text>
            
                <v-card-text class="text-justify body-1 blue-grey--text text--darken-3">
                    I am interested in the entire front-end spectrum and working on ambitious projects with optimistic people and also love learning new technologies, building fast and also improving my skill set on new and current jobs.
                </v-card-text>
              </v-container>
            </v-card>
          </v-col><br>

          <v-col
           cols="12"
           md="5"
           sm="12"
           id="col2"
          >
            <v-container class="content">
                <v-card
                 flat
                 class="mx-auto"
                >
                  <v-row justify="center">
                    <v-card elevation="4" width="80" height="80" class="card item-1">
                      <v-container>
                        <div class="text-center">
                          <v-icon class="icon" color="teal lighten-1" size="50">mdi-vuejs</v-icon>
                        </div>
                      </v-container>
                    </v-card>
                    <v-card elevation="4" width="80" height="80" class="card item-2">
                      <v-container>
                        <div class="text-center">
                          <v-icon class="icon" color="blue-grey" size="50">mdi-ethereum</v-icon>
                        </div>
                      </v-container>
                    </v-card>
                    <v-card elevation="4" width="80" height="80" class="card item-3">
                      <v-container>
                        <div class="text-center">
                          <v-icon class="icon" color="amber" size="50">mdi-language-javascript</v-icon>
                        </div>
                      </v-container>
                    </v-card>
                    <v-card elevation="4" width="80" height="80" class="card item-4">
                      <v-container>
                        <div class="text-center">
                          <v-icon class="icon" color="primary" size="50">mdi-language-css3</v-icon>
                        </div>
                      </v-container>
                    </v-card>
                    <v-card elevation="4" width="80" height="80" class="card item-5">
                      <v-container>
                        <div class="text-center">
                          <v-icon class="icon" color="red" size="50">mdi-language-html5</v-icon>
                        </div>
                      </v-container>
                    </v-card>
                  </v-row>
                </v-card>
            </v-container>
            <br><br><br>
          </v-col>
        </v-row>
      </v-container>
    </v-content><br><br>
    <bottom-nav />
  </div>
</template>

<script>
import AppBar from '@/components/core/AppBar.vue'
import BottomNav from '@/components/core/BottomNav.vue'
// import Web from '@/components/material/Web.vue'

export default {
    components: {
      'app-bar': AppBar,
      'bottom-nav': BottomNav,
      // 'web': Web,
    },

    data() {
      return {
        //
      }
    }
}
</script>

<style scoped>
  .card {
    transform: rotate(-45deg);
    margin: -72px;
    background: #fafafa;
    transition: .5s !important;
    overflow: hidden;
    opacity: 1;
  }
  #name {
    margin-top: 30px !important;
    transform: translateX(-8rem) !important;
    font-size: 1.5rem;
  }
  .card:hover {
    opacity: .8;
  }

  .item-2 {
    margin-top: -10px;
  }
  .item-4 {
    margin-top: -10px;
  }
  #tool {
    transform: translateY(-2rem) !important;
    border-radius: 15px 0 15px 0 !important;
  }
  .main {
    margin-top: 30px;
  }
  .content {
    margin-top: 120px;
  }
  .body {
    transform: translateY(-1rem) !important;
  }
  @media screen and (max-width: 1024px) {
    .main {
      margin-top: 20px;
    }
    .card {
      width: 60px !important;
      height: 60px !important;
      margin: -57px;
    }
    .icon {
      font-size: 40px !important;
    }
    .item-2 {
      margin-top: -10px;
    }
    .item-4 {
      margin-top: -10px;
    }
    .content {
      margin-top: 70px;
    }
    #name {
      margin-top: 0px !important;
      transform: translateX(-0rem) !important;
      text-align: center !important;
    }
    #usman {
      text-align: center !important;
    }
    .name {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
    }
  }

  @media screen and (max-width: 768px) {
      .name__me {
         display: block !important; 
      }
  }
</style>
