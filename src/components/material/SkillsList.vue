<template>
    <div class="skills-list">
        <v-card
         class="mx-auto"
         elevation="5"
        >
            <v-simple-table
             fixed-header
             height="450"
            >
                <template v-slot:default>
                    <thead>
                        <th class="text-left blue-grey--text text--darken-4 blue-grey lighten-4 overline font-weight-bold">Skill</th>
                        <th class="text-left blue-grey--text text--darken-4 blue-grey lighten-5 overline font-weight-bold">Level of Qualification</th>
                    </thead>
                    <tbody>
                        <tr v-for="(skill, i) in skills" :key="i">
                            <td class="blue-grey--text text--darken-2">{{ skill.name }}</td>
                            <td class="blue-grey--text text--darken-3">{{ skill.qualification }}</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </v-card>
    </div>
</template>

<script>

export default {
    data() {
        return {
            skills: [
                {
                    name: 'HTMl 5',
                    qualification: 'Advanced'
                },
                {
                    name: 'Cascading Stylesheet (css)',
                    qualification: 'Advanced'
                },
                {
                    name: 'Javascript',
                    qualification: 'Intermediate'
                },
                {
                    name: 'Python',
                    qualification: 'Intermediate'
                },
                {
                    name: 'Hypertext Preprocessor (php)',
                    qualification: 'Beginner'
                },
                {
                    name: 'Solidity',
                    qualification: 'Intermediate'
                },
                {
                    name: 'Dart',
                    qualification: 'Beginner'
                },
                {
                    name: 'Nodejs',
                    qualification: 'Intermediate'
                },
                {
                    name: 'Nodejs Package Manager (npm)',
                    qualification: 'Advanced'
                },
                {
                    name: 'Vuejs',
                    qualification: 'Intermediate'
                },
                {
                    name: 'Reactjs',
                    qualification: 'Beginner'
                },
                {
                    name: 'Firebase',
                    qualification: 'Intermediate'
                },
                {
                    name: 'Git',
                    qualification: 'Intermediate'
                },
                {
                    name: 'Vuetifyjs',
                    qualification: 'Advanced'
                },
                {
                    name: 'Materialize Css',
                    qualification: 'Advanced'
                },
                {
                    name: 'Material Design Lite',
                    qualification: 'Advanced'
                },
                {
                    name: 'Flutter Web',
                    qualification: 'Intermediate'
                },
            ],
        }
    },

    mounted() {
        
    },
}
</script>

<style scoped>

</style>