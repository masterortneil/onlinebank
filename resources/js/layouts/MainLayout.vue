<template>
    <v-app>
        <Drawer v-model="drawer" />
        <v-app-bar app color="indigo" dark>
            <v-btn
                class="mx-2"
                text
                fab
                dark
                small
                color="white"
                @click="drawer = !drawer"
                v-if="$vuetify.breakpoint.mobile"
            >
                <v-icon dark>
                    notes
                </v-icon>
            </v-btn>
            <v-toolbar-title
                class="cursor-pointer"
                @click="$router.push({ name: 'home' })"
                >My Bank</v-toolbar-title
            >
            <v-spacer></v-spacer>

            <v-btn text @click="logout" :loading="isLoggingOut">Logout</v-btn>
        </v-app-bar>
        <v-main>
            <v-container>
                <router-view />
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import Drawer from "@components/Drawer.vue";
export default {
    name: "App",
    components: { Drawer },
    data() {
        return {
            isLoggingOut: false,
            drawer: false
        };
    },
    methods: {
        logout() {
            this.isLoggingOut = true;
            axios
                .post("/logout")
                .then(response => {
                    location.reload();
                })

                .finally(() => {
                    this.isLoggingOut = false;
                });
        }
    }
};
</script>
<style scoped>
.app-main {
    width: 90%;
    margin: auto;
}
</style>
