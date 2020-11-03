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
                    </thead>
                    <tbody>
                        <tr v-for="(skill, i) in skills" :key="i">
                            <td class="blue-grey--text text--darken-2">{{ skill.name }}</td>
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
                    name: 'HTML 5',
                    qualification: 'Advanced'
                },
                {
                    name: 'Cascading Stylesheet (css3)',
                    qualification: 'Advanced'
                },
                {
                    name: 'Javascript',
                    qualification: 'Intermediate'
                },
                {
                    name: 'JQuery',
                    qualification: 'Intermediate'
                },
                {
                    name: 'Syntactically Awesome Style Sheets (SASS)',
                    qualification: 'Beginner'
                },
                {
                    name: 'Node JS',
                    qualification: 'Advanced'
                },
                {
                    name: 'Nodejs Package Manager (npm)',
                    qualification: 'Advanced'
                },
                {
                    name: 'Vue JS',
                    qualification: 'Intermediate'
                },
                {
                    name: 'Vuex',
                    qualification: 'Beginner'
                },
                {
                    name: 'Vuetify JS (UI Framework made for Vue JS)',
                    qualification: 'Intermediate'
                },
                {
                    name: 'Iview JS (UI Framework)',
                    qualification: 'Beginner'
                },
                {
                    name: 'Tailwind CSS',
                    qualification: 'Advanced'
                },
                {
                    name: 'Bootstrap CSS',
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
                {
                    name: 'Solidity Ethereum',
                    qualification: 'Intermediate'
                },
                {
                    name: 'Firebase',
                    qualification: 'Intermediate'
                },
                {
                    name: 'GraphQL',
                    qualification: 'Intermediate'
                },
                {
                    name: 'Git',
                    qualification: 'Intermediate'
                },
                {
                    name: 'Version Control: Github and Bitbucket',
                    qualification: 'Advanced'
                },
                 {
                    name: 'Editors: VS Code and Atom',
                    qualification: 'Advanced'
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