<template>
  <v-app id="app">
    <router-view></router-view>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
    //
  },

  data() {
    return {
      //
    }
  },
};
</script>
<style>
  #app {
    background: #fff;
    overflow-x: hidden !important;
  }
 

  @media only screen and (min-width: 1200px) {
    #app {
      -ms-overflow-style: none !important;  /* IE and Edge */
      scrollbar-width: none !important;
    }
    
     ::-webkit-scrollbar {
      display: none !important;
    }
  }

</style>

