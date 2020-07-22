<template>
    <div>
        <app-bar />
        <v-content class="main">
            <v-container>
                <v-card
                 class="mx-auto"
                 elevation="5"
                >
                    <v-toolbar
                        class="primary ml-3 mr-3"
                        dark
                        id="tool"
                    >
                        <v-toolbar-title id="skill" class="title">Portfolio</v-toolbar-title>
                    </v-toolbar>

                    <v-container>
                        <v-row>
                            <v-col
                             v-for="n in 12"
                             :key="n"
                             cols="12"
                             md="3"
                             sm="12"
                            >
                                <v-skeleton-loader
                                 :loading="loadingCard"
                                 :transition="transition"
                                 type="card"
                                >
                                    <v-hover>
                                        <template v-slot:default="{ hover }">
                                            <v-card
                                                class="mx-auto"
                                                elevation="4"
                                                height="300"
                                                width="300"
                                            >
                                                <v-img contain src="@/assets/cross.png"></v-img>

                                                <v-fade-transition>
                                                <v-overlay
                                                    v-if="hover"
                                                    absolute
                                                    color="#006064"
                                                >
                                                    <v-btn @click="onClickEvent" ripple rounded large class="white blue-grey--text text--darken-3">view Project<v-icon right="">mdi-open-in-new</v-icon></v-btn>
                                                </v-overlay>
                                                </v-fade-transition>
                                                <!-- <v-expand-transition>
                                                    <v-card
                                                     v-if="hover"
                                                     absolute
                                                    >
                                                        <v-toolbar dark  flat>
                                                            <v-toolbar-title>
                                                                Crosssift {{ model }}
                                                            </v-toolbar-title>
                                                        </v-toolbar>

                                                        <v-sheet>
                                                            <v-list>
                                                                <v-subheader>TECHNOLOGIES</v-subheader>
                                                                <v-list-item-group v-model="item" color="blue">
                                                                    <v-list-item
                                                                     v-for="(item, i) in items"
                                                                     :key="i"
                                                                    >
                                                                        <v-list-item-icon>
                                                                            <v-icon v-text="item.icon"></v-icon>
                                                                        </v-list-item-icon>
                                                                        <v-list-item-content>
                                                                            <v-list-item-title v-text="ite.text"></v-list-item-title>
                                                                        </v-list-item-content>
                                                                    </v-list-item>
                                                                </v-list-item-group>
                                                            </v-list>
                                                        </v-sheet>
                                                    </v-card>
                                                </v-expand-transition> -->
                                            </v-card>
                                        </template>
                                    </v-hover>
                                </v-skeleton-loader>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-container>
        </v-content><br><br>
        <bottom-nav />
    </div>
</template>

<script>
import AppBar from '@/components/core/AppBar.vue'
import BottomNav from '@/components/core/BottomNav.vue';

export default {
    components: {
        'app-bar': AppBar,
        'bottom-nav': BottomNav,
    },
    data() {
        return {
            model: null,
            item: 1, 
            large: 'small',
            loadingCard: false,
            transition: 'scale-transition',
            items: [
                { text: "Vuejs", icon: 'mdi-vuejs' },
                { text: "Vuetifyjs", icon: 'mdi-vuetify' },
                { text: "Firebase", icon: 'mdi-firebase' },
                { text: "Brainjs", icon: 'mdi-brain' },
            ],
        }
    },

    methods: {
        onClickEvent() {
            this.model = true;
            console.log(this.model)
        },
    }
,}
</script>

<style scoped>
    #tool {
        transform: translateY(-2rem) !important;
        border-radius: 15px 0 15px 0 !important;
    }
    .body {
        transform: translateY(-1rem) !important;
    }
    .main {
        margin-top: 40px !important;
    }
    .sub-card {
        background: #003366;
    }
    @media screen and (max-width: 1024px) {
        .project {
            width: 180px !important;
        }
        .btn {
            height: 34px !important;
            min-width: 30px !important
        }
        .main {
            margin-top: 25px !important;
        }
    }
</style>
