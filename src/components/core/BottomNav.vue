<template>
  <div class="hidden-lg-only">
    <v-bottom-navigation
      color="blue"
      class="bottom space-between"
      id="bottom-nav"
    >
        <v-btn 
         v-for="(item, i) in items"
         :key="i"
         router :to="item.route"
         x-small
        >
            <v-icon class="icon">{{ item.icon }}</v-icon>
        </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Home', icon: 'mdi-home-city', route: '/' },
          { title: 'About', icon: 'mdi-account-box', route: '/about' },
          { title: 'Skills', icon: 'mdi-certificate', route: '/skills' },
          // { title: 'Portfolio', icon: 'mdi-eye', route: '/portfolio' },
          { title: 'Contact', icon: 'mdi-email', route: '/contact' }
        ]
      }
    },
  }
</script>

<style scoped>
    .bottom {
        position: fixed;
        bottom: 0 !important;
        width: 100%;
    }
    .nav-items {
        margin-top: 10px !important;
    }
    .v-btn:not(.v-btn--round).v-size--x-small {
      padding-top: 5px;
      padding-right: 6px;
      padding-bottom: 0px;
      padding-left: 6px;
    }
    #bottom-nav {
      z-index: 10;
    }
    @media screen and (max-width: 1024px) {
        .nav-items {
            margin-top: 8px !important;
        }
        .text {
            font-size: 10px !important;
        }
        .v-btn:not(.v-btn--round).v-size--x-small {
          padding-top: 3px;
          padding-right: 4px;
          padding-bottom: 0px;
          padding-left: 4px;
        }
        .icon {
          font-size: 20px !important;
        }
    }
</style>