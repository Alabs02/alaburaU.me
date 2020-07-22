<template>
  <div class="home">
    <app-bar />
    <v-content>
      <v-container class="content">
        <v-row justify="center">
          <v-col
           cols="12"
           md="7"
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
                <v-toolbar-title class="title">Alabura Usman</v-toolbar-title>
              </v-toolbar>
              
              <v-container class="body">
                <v-card-text style="font-family: Fantasy;" class="text-justify display-1 font-weight-bold blue--text text--darken-3">
                  Hi, <br>
                  I'm Usman <br>
                  blockchain & web developer.
                </v-card-text> 

                <v-card-text class="text-uppercase overline blue-grey--text text--lighten-2 sub">etheruem solidity / hyperledger / frontend developer</v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-btn 
                    large
                    dark
                    color="primary"
                    router to="/contact"
                  >
                    contact me
                    <v-icon right>mdi-email</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-container>
            </v-card>
          </v-col>

          <v-col
           cols="12"
           md="5"
           sm="12"
          >
            <v-card
             class="mx-auto u-img"
             flat
            >
              <v-container>
                <v-row justify="center">
                  <v-img
                    contain
                    max-width="300"
                    max-height="300"
                    src="@/assets/logo2.svg"
                    class="logo"
                  ></v-img>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content><br><br>
    <bottom-nav />
  </div>
</template>

<script>
// @ is an alias to /src
import AppBar from '@/components/core/AppBar.vue';
import BottomNav from '@/components/core/BottomNav.vue';

export default {
  name: 'Home',
  components: {
    'app-bar': AppBar,
    'bottom-nav': BottomNav,
  },

  data() {
    return {
      
    }
  }
}
</script>
<style scoped>
  .content {
    margin-top: 30px !important;
  }
  #tool {
    transform: translateY(-2rem) !important;
    border-radius: 15px 0 15px 0 !important;
  }
  .body {
    transform: translateY(-1rem) !important;
  }
  #logo {
    background: transparent;
  }
  .logo {
    transform: rotate(-30deg) !important; 
  }
  .u-img {
    margin-top: 10px !important;
  }
  .sub {
    font-size: 1rem !important;
  }
 
  @media screen and (max-width: 1024px) {
    .content {
      margin-top: 20px !important;
    }
    #text {
      font-size: 1.4rem !important;
      font-family:fantasy !important;
    }
    .sub {
      font-size: .51rem !important;
      letter-spacing: .6px !important;
      word-break: keep-all !important;
    }
    .u-img {
      margin-top: 15px !important;
    }
    .logo {
      width: 200px;
      height: 200px;
    }
  }
</style>
