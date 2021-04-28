<template>
    <v-card outlined>
        <v-card-title class=" py-2">Transfers</v-card-title>
        <validation-observer ref="form" v-slot="{ invalid }">
            <v-form @submit.prevent="onSubmit">
                <v-card-text>
                    <v-row>
                        <v-col cols="12" sm="12" md="6">
                            <vee-select
                                v-model="transaction.source_account_id"
                                name="source_account_id"
                                rules="required"
                                label="Source Account"
                                :items="accounts"
                                item-value="id"
                                item-text="full_name"
                            />
                        </v-col>
                        <v-col cols="12" sm="12" md="6">
                            <vee-select
                                v-model="transaction.destination_account_id"
                                name="destination_account_id"
                                rules="required"
                                label="Destination Account"
                                :items="accounts"
                                item-value="id"
                                item-text="full_name"
                            />
                        </v-col>
                        <v-col cols="12" sm="12" md="6">
                            <vee-input
                                v-model="transaction.amount"
                                name="amount"
                                rules="required"
                                label="Amount"
                                type="number"
                            />
                        </v-col>
                        <v-col cols="12">
                            <vee-input
                                v-model="transaction.source_reference"
                                name="source_reference"
                                rules="required"
                                label="Source Account References"
                            />
                        </v-col>
                        <v-col cols="12">
                            <vee-input
                                v-model="transaction.destination_reference"
                                name="destination_reference"
                                rules="required"
                                label="Destination Account References"
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
            transaction: {
                source_account_id: "",
                destination_account_id: "",
                amount: "",
                source_reference: "",
                destination_reference: ""
            },
            accounts: []
        };
    },
    methods: {
        onSubmit() {
            axios
                .post("/transactions", this.transaction)
                .then(() => {
                    this.$router.push({ name: "home" });
                })
                .catch(error => {
                    if (error.response.status == 422) {
                        this.$refs.form.setErrors(error.response.data.errors);
                    }
                });
        },
        getAccounts() {
            axios.get("/accounts-all").then(response => {
                this.accounts = response.data.data;
            });
        }
    },
    mounted() {
        this.getAccounts();
    }
};
</script>
