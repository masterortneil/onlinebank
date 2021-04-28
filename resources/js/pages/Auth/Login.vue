<template>
    <v-app>
        <v-container class="fill-height fill-width" fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="4">
                    <v-card class="elevation-12">
                        <v-toolbar color="primary" dark flat>
                            <v-toolbar-title>Login </v-toolbar-title>
                        </v-toolbar>
                        <validation-observer ref="form" v-slot="{ invalid }">
                            <v-form @submit.prevent="onSubmit">
                                <v-card-text>
                                    <vee-input
                                        v-model="user.email"
                                        name="email"
                                        rules="required|email"
                                        label="Email"
                                    />
                                    <vee-input
                                        v-model="user.password"
                                        name="password"
                                        rules="required|min:8"
                                        label="Password"
                                        type="password"
                                    />
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        type="submit"
                                        align="right"
                                        color="primary"
                                        :disabled="invalid"
                                        :loading="loading"
                                        >Login</v-btn
                                    >
                                </v-card-actions>
                            </v-form>
                        </validation-observer>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>
<script>
import { ValidationObserver } from "vee-validate";

export default {
    components: { ValidationObserver },

    methods: {
        onSubmit() {
            this.loading = true;
            axios
                .post("/login", this.user)
                .then(response => {
                    location.reload();
                })
                .catch(error => {
                    if (error.response.status == 422) {
                        this.$refs.form.setErrors(error.response.data.errors);
                    }
                })
                .finally(() => {
                    this.loading = false;
                });
        }
    },
    data: () => ({
        user: {
            email: "",
            password: "",
            loading: false
        },
        loading: false
    })
};
</script>
