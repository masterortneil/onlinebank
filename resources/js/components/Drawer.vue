<template>
    <div>
        <v-navigation-drawer
            absolute
            left
            :expand-on-hover="$vuetify.breakpoint.mdAndUp"
            v-model="isDrawerOpen"
            :permanent="$vuetify.breakpoint.mdAndUp"
        >
            <v-list>
                <v-list-item class="px-2">
                    <v-list-item-avatar color="blue">
                        <span class="white--text headline">A</span>
                    </v-list-item-avatar>
                </v-list-item>

                <v-list-item link @click="$router.push('/')">
                    <v-list-item-content>
                        <v-list-item-title class="title"
                            >Admin</v-list-item-title
                        >
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list nav dense v-for="(item, i) in items" :key="i">
                <v-list-item link :to="{ name: item.name }" exact>
                    <v-list-item-icon>
                        <v-icon v-text="item.icon" />
                    </v-list-item-icon>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    data() {
        return {
            isDrawerOpen: this.value
        };
    },
    props: {
        value: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        value(val) {
            this.isDrawerOpen = val;
        },
        isDrawerOpen(val) {
            this.$emit("input", val);
        }
    },
    computed: {
        items() {
            return [
                {
                    name: "home",
                    title: "All Accounts",
                    icon: "people"
                },
                {
                    name: "account.create",
                    title: "Create New",
                    icon: "account_circle"
                },
                {
                    name: "transaction.create",
                    title: "Transfer",
                    icon: "multiple_stop"
                }
            ];
        }
    }
});
</script>
