<template>
    <div>
        <v-row class="fill-height hidden-md-and-down" no-gutters>
            <v-navigation-drawer
                id="drawer"
                mini-variant
                mini-variant-width="60"
                absolute
            >
                <div class="nav-head">
                <v-list-item>
                    <v-list-item-avatar>
                        <v-img
                            src="@/assets/logo1.svg"
                            contain
                        ></v-img>
                    </v-list-item-avatar>
                </v-list-item>

                <v-list-item-content>
                    <v-list-item-subtitle class="name blue--text text--darken-3">usman</v-list-item-subtitle>
                </v-list-item-content>
                </div>

                <v-divider class="divider"></v-divider>

                <v-list
                    nav
                    dense
                >
                    <v-list-item
                        v-for="(item,i) in items"
                        :key="i"
                        router :to="item.route"
                    >
                        <v-list-item-action>
                            <v-tooltip right>
                                <template v-slot:activator="{ on }">
                                    <v-icon color="primary" v-on="on">{{ item.icon }}</v-icon>
                                </template>
                                <span>{{ item.text }}</span>
                            </v-tooltip>
                        </v-list-item-action>
                    </v-list-item>
                </v-list>
                
                <v-spacer></v-spacer>

                <template v-slot:append>
                    <div>
                        <v-btn
                         text
                         class="blue-grey--text"
                        >
                            <v-icon size="20">mdi-github</v-icon>
                        </v-btn>
                    </div>
                    <div>
                        <v-btn
                         text
                         class="blue-grey--text"
                        >
                            <v-icon size="20">mdi-linkedin</v-icon>
                        </v-btn>
                    </div>
                    <div>
                        <v-btn
                         text
                         class="blue-grey--text"
                        >
                            <v-icon size="20">mdi-twitter</v-icon>
                        </v-btn>
                    </div>
                    <div>
                        <v-btn
                         text
                         class="blue-grey--text"
                        >
                            <v-icon size="20">mdi-facebook</v-icon>
                        </v-btn>
                    </div>
                </template>
            </v-navigation-drawer>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { icon: 'mdi-home-city-outline', text: 'Home', route: '/' },
                { icon: 'mdi-account-box-outline', text: 'About', route: '/about' },
                { icon: 'mdi-certificate-outline', text: 'Skills', route: '/skills' },
                { icon: 'mdi-eye-outline', text: 'Portfolio', route: '/portfolio' },
                { icon: 'mdi-email-outline', text: 'Contact', route: '/contact' },
            ]
        }
    }
}
</script>

<style scoped>
    #drawer {
        border-right: 1px solid #E3F2FD !important;
        background: #fff;
    }
    #avatar {
        display: block !important;
        margin: 0 auto !important;
        align-content: center !important;
    }
    .avatar {
        margin-right: -10px !important;
    }
    .divider {
        background: #E3F2FD;
    }
    .name {
        text-align: center !important;
    }
    #links {
        margin-top: 20px;
    }
    #icon {
        color: #29B6F6;
    }
    #icon:hover {
        color: #90CAF9;
    }
    .v-application--is-ltr .v-responsive__sizer ~ .v-responsive__content {
        margin-left: 0 !important;
    }
</style>