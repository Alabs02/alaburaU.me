<template>
  <v-row justify="center">
    <v-dialog persistent v-model="dialog" max-width="290">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" ripple rounded large class="white blue-grey--text text--darken-3">view Project<v-icon right="">mdi-open-in-new</v-icon></v-btn>
      </template>

      <v-card
       class="mx-auto"
       elevation="5"
      >
        <v-toolbar flat>Crosssift</v-toolbar>
        <v-divider></v-divider>
        <div class="project-content">

        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>