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
                            class="ml-3 mr-3 primary"
                            dark
                            id="tool"
                            >
                                <v-toolbar-title id="skill" class="title">Contact me</v-toolbar-title>
                            </v-toolbar>

                            <v-container class="body">
                                <keep-alive>
                                    <v-form @submit.prevent="sendMsg" ref="form">
                                        <v-row justify="center" align="center">
                                            <v-col
                                            cols="12"
                                            md="6"
                                            sm="12"
                                            >
                                                <v-text-field
                                                v-model.trim="formData.name"
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
                                                v-model.trim="formData.email"
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
                                                v-model.trim="formData.phone"
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
                                                v-model.trim="formData.subject"
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
                                                v-model="formData.msg"
                                                outlined
                                                name="input-7-1"
                                                label="Message"
                                                ></v-textarea>
                                            </v-col>
                                        </v-row>

                                        <v-divider class="grey lighten-2"></v-divider>

                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <!-- <v-btn
                                                class="blue-grey darken-2"
                                                large
                                                dark
                                                @click="revertToOriginal"
                                            >
                                                <v-icon left>mdi-autorenew</v-icon>
                                                revert to original
                                            </v-btn> -->
                                            <v-btn
                                            dark
                                            class="blue darken-1"
                                            large
                                            type="submit"
                                            @click="sendMsg"
                                            >
                                                send
                                                <v-icon right>mdi-send</v-icon>
                                            </v-btn>
                                        </v-card-actions>
                                    </v-form>
                                </keep-alive>
                            </v-container>
                        </v-card><br>

                        <v-container>
                        </v-container>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
        <bottom-nav />
    </div>
</template>

<script>
import AppBar from '@/components/core/AppBar.vue'
import BottomNav from '@/components/core/BottomNav.vue'
import { db } from '../firebase'
// import { debounce } from 'debounce'

const documentPath = 'contacts'

export default {
    name: 'contactForm',
    components: {
        'app-bar': AppBar,
        'bottom-nav': BottomNav
    },

    data() {
        return {
            contactData: null,
            formData: {
                name: '',
                email: '',
                phone: '',
                subject: '',
                msg: '',
                sentOn: new Date()
            },

            success: false,
            error: false,
            state: 'loading',
            originalData: null
        }
    },

    created: async function() {
        const docRef = db(documentPath)
        
        console.log(await docRef)
        let data = (await docRef.get()).data()

        if (!data) {
            data = {
                name: '',
                email: '',
                phone: '',
                subject: '',
                msg: '',
                sentOn: new Date()
            }
            docRef.set(data)
        }

        // this.formData = data
        
        this.originalData = { ...data }
        
        this.state = 'synced'
        await this.dispatchData()
    },

    methods: {
        reset() {
            this.$refs.form.reset()
        },
        
        async sendMsg() {
            // do stuffs
            try {
                await db.collection('contacts').add(this.formData)
                this.state = 'synced'
                this.reset()
            } catch (err) {
                this.errorMsg = JSON.stringify(err)
                this.state = 'error'
            }
        },

        async dispatchData() {
            await this.$store.commit('CONTACT_DATA', this.contactData)
        },

        // fieldUpdate() {
        //     this.state = 'modified'
        //     this.sendMsg()
        // }, 
        
        // debouncedUpdate: debounce(() => {
        //     this.sendMsg()
        // }, 1500),


        // revertToOriginal() {
        //     this.state = 'revoked'
        //     this.formData = { ...this.originalData }
        // },
    },

    firestore() {
        return {
            contactData: db.doc(documentPath)
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
    .download-btn:hover {
        background-color: #C8E6C9 !important;
    }
    @media screen and (max-width: 1024px) {
        .main {
            margin-top: 20px !important;
        }
    }
</style>