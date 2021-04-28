<template>
    <v-card outlined>
        <v-card-title class=" py-2"> Add New Account </v-card-title>
        <validation-observer ref="form" v-slot="{ invalid }">
            <v-form @submit.prevent="onSubmit">
                <v-card-text>
                    <v-row>
                        <v-col cols="12" sm="12" md="6">
                            <vee-input
                                v-model="account.full_name"
                                name="full_name"
                                rules="required"
                                label="Full Name"
                            />
                        </v-col>
                        <v-col cols="12" sm="12" md="6">
                            <vee-input
                                v-model="account.full_address"
                                name="full_address"
                                rules="required"
                                label="Full Address"
                            />
                        </v-col>
                        <v-col cols="12" sm="12" md="6">
                            <BranchSelect
                                v-model="account.branch_id"
                                name="branch_id"
                                rules="required"
                                label="Branch"
                            />
                        </v-col>
                        <v-col cols="12" sm="12" md="6">
                            <vee-select
                                v-model="account.type"
                                name="type"
                                rules="required"
                                label="Type"
                                :items="accountTypes"
                            />
                        </v-col>
                        <v-col cols="12" sm="12" md="6">
                            <vee-input
                                v-model="account.email"
                                name="email"
                                rules="required|email"
                                label="Email"
                            />
                        </v-col>
                        <v-col cols="12" sm="12" md="6">
                            <vee-input
                                v-model="account.cell"
                                name="cell"
                                rules="required"
                                label="Cell"
                            />
                        </v-col>

                        <v-col cols="12" sm="12" md="6">
                            <vee-input
                                v-model="account.balance"
                                name="balance"
                                rules="required"
                                label="Balance"
                                type="number"
                            />
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <div class="text-h6">Documents</div>
                        </v-col>
                        <v-col cols="12" sm="12" md="4">
                            <vee-file
                                v-model="account.document.passport"
                                name="passport"
                                rules="required"
                                label="Passport"
                            />
                        </v-col>
                        <v-col cols="12" sm="12" md="4">
                            <vee-file
                                v-model="account.document.utility_document"
                                name="utility_document"
                                rules="required"
                                label="Utility Bill"
                            />
                        </v-col>
                        <v-col cols="12" sm="12" md="4">
                            <vee-file
                                v-model="account.document.driver_license"
                                name="driver_license"
                                rules="required"
                                label="Dirver License"
                            />
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        type="submit"
                        align="right"
                        color="primary"
                        :disabled="invalid"
                        :loading="loading"
                    >
                        Save
                    </v-btn>
                </v-card-actions>
            </v-form>
        </validation-observer>
    </v-card>
</template>
<script>
import { ValidationObserver } from "vee-validate";
import BranchSelect from "@/components/inputs/BranchSelect.vue";
export default {
    components: { ValidationObserver, BranchSelect },
    data() {
        return {
            loading: false,
            account: {
                type: 1,
                full_name: "",
                email: "",
                cell: "",
                full_address: "",
                balance: "",
                document: {
                    passport: "",
                    utility_document: "",
                    driver_license: ""
                }
            },
            accountTypes: [
                {
                    id: 1,
                    text: "Personal"
                },
                {
                    id: 2,
                    text: "Company"
                },
                {
                    id: 3,
                    text: "Other"
                }
            ]
        };
    },
    methods: {
        onSubmit() {
            this.loading = true;
            axios
                .post("/accounts", this.account)
                .then(() => {
                    this.$router.go(-1);
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
    }
};
</script>
