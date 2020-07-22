<template>
    <div class="contact">
        <app-bar />
        <v-content class="main">
            <v-container>
                <v-row
                >
                    <v-col
                     cols="12"
                     md="7"
                     sm="12"
                    >
                        <v-card 
                        class="mx-auto mb-6"
                        elevation="5"
                        >
                            <v-toolbar
                            class="primary ml-3 mr-3"
                            dark
                            id="tool"
                            >
                                <v-toolbar-title id="skill" class="title">Contact me</v-toolbar-title>
                            </v-toolbar>

                            <v-container class="body">
                                <keep-alive>
                                    <v-form @submit.prevent="sendMail">
                                        <v-row justify="center" align="center">
                                            <v-col
                                            cols="12"
                                            md="6"
                                            sm="12"
                                            >
                                                <v-text-field
                                                v-model.lazy="contactFormData.name"
                                                outlined
                                                label="Name"
                                                type="text"
                                                clearable
                                                ></v-text-field>
                                            </v-col>
                                            <v-col
                                            cols="12"
                                            md="6"
                                            sm="12"
                                            >
                                                <v-text-field
                                                v-model.lazy="contactFormData.email"
                                                outlined
                                                label="Email"
                                                type="email"
                                                clearable
                                                ></v-text-field>
                                            </v-col>
                                        </v-row>
                                        <v-row justify="center" align="center">
                                            <v-col
                                            cols="12"
                                            md="6"
                                            sm="12"
                                            >
                                                <v-text-field
                                                v-model.lazy="contactFormData.contact"
                                                outlined
                                                label="Phone Number (Optional)"
                                                type="tel"
                                                clearable
                                                ></v-text-field>
                                            </v-col>

                                            <v-col
                                            cols="12"
                                            md="6"
                                            sm="12"
                                            >
                                                <v-text-field
                                                v-model.lazy="contactFormData.subject"
                                                outlined
                                                label="Subject"
                                                type="text"
                                                clearable
                                                ></v-text-field>
                                            </v-col>
                                        </v-row>
                                        <v-row justify="center" align="center">
                                            <v-col
                                            cols="12"
                                            md="12"
                                            sm="12"
                                            >
                                                <v-textarea
                                                v-model="contactFormData.message"
                                                outlined
                                                name="input-7-1"
                                                label="Message"
                                                ></v-textarea>
                                            </v-col>
                                        </v-row>

                                        <v-divider class="grey lighten-2"></v-divider>

                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn
                                            dark
                                            class="blue darken-1"
                                            large
                                            type="submit"
                                            @click="storeMessage"
                                            >
                                                send
                                                <v-icon right>mdi-send</v-icon>
                                            </v-btn>
                                        </v-card-actions>
                                    </v-form>
                                </keep-alive>
                            </v-container>
                        </v-card><br>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
        <bottom-nav />
    </div>
</template>

<script>
import AppBar from '@/components/core/AppBar.vue'
import BottomNav from '@/components/core/BottomNav.vue';

export default {
    name: 'contactForm',
    components: {
        'app-bar': AppBar,
        'bottom-nav': BottomNav
    },

    data() {
        return {
            forms: [],
            contactFormData: {
                name: '',
                email: '',
                contact: '',
                subject: '',
                message: '',
                timeStamp: new Date()
            },

            success: false,
            error: false,
        }
    },

    methods: {
        sendMail() {
            // do stuffs
        },
        storeMessage() {
            // do stuffs
            console.log(
                this.contactFormData.name,
                this.contactFormData.email,
                this.contactFormData.contact,
                this.contactFormData.subject,
                this.contactFormData.message,
                this.contactFormData.timeStamp
            );
        }
    }
}
</script>

<style scoped>
    #tool {
        transform: translateY(-2rem) !important;
        border-radius: 15px 0 15px 0 !important;
    }
    .main {
        margin-top: 15px !important;
    }
    .part {
        background: #000;
    }
    .body {
        transform: translateY(-1rem) !important;
    }
    @media screen and (max-width: 1024px) {
        .main {
            margin-top: 20px !important;
        }
    }
</style>