<template>
    <div>
        <v-card outlined>
            <v-card-title>
                All Accounts
                <v-spacer></v-spacer>
                <div align="right" justify="right"></div>
            </v-card-title>
            <v-data-table
                :headers="headers"
                :items="serverData"
                :options.sync="options"
                :server-items-length="totalItems"
                :items-per-page="options.itemsPerPage"
                :loading="loading"
                class="elevation-1"
                :footer-props="{
                    prevIcon: 'keyboard_arrow_left',
                    nextIcon: 'keyboard_arrow_right'
                }"
                @update:page="onPageChange"
                @update:items-per-page="onItemsPerPageChange"
                @update:sort-by="onSortBy"
                @update:sort-desc="sortDesc"
            >
                <template v-slot:top>
                    <v-row class="d-flex justify-space-between ma-1">
                        <v-col cols="3">
                            <v-btn
                                depressed
                                color="success"
                                @click="
                                    $router.push({ name: 'account.create' })
                                "
                            >
                                Create
                            </v-btn>
                        </v-col>
                        <v-col cols="3">
                            <v-text-field
                                v-model="search"
                                append-icon="search"
                                label="Enter Account Number"
                                single-line
                                hide-details
                                @input="onSearch"
                                class="pa-1"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </template>
                <template v-slot:item.actions="{ item }">
                    <Actions
                        :item="item"
                        @edit="onEdit"
                        @transactions="onViewTransactions"
                    />
                </template>
            </v-data-table>
        </v-card>
    </div>
</template>

<script>
import Actions from "./Action";
export default {
    components: { Actions },
    data() {
        return {
            options: {
                page: 1,
                itemsPerPage: 10,
                query: "",
                sortField: "created_at",
                sortOrder: "desc"
            },
            totalItems: 0,

            loading: false,
            search: "",
            serverData: [],
            headers: [
                {
                    text: "Account Number",
                    align: "start",
                    sortable: false,
                    value: "account_number"
                },
                { text: "Account Type", value: "type" },
                { text: "Status", value: "status" },
                { text: "Account Holder", value: "full_name" },
                { text: "Available Balance", value: "balance" },

                {
                    text: "Actions",
                    value: "actions",
                    sortable: false,
                    align: "center"
                }
            ]
        };
    },
    methods: {
        loadServerData() {
            this.loading = true;
            axios
                .get(`/accounts`, {
                    params: {
                        query: this.options.query,
                        page: this.options.page,
                        perPage: this.options.itemsPerPage
                    }
                })
                .then(response => {
                    this.serverData = response.data.data;
                    this.setOptions(response.data.meta);
                })
                .finally(() => {
                    this.loading = false;
                });
        },

        onPageChange(page) {
            this.options.page = page;
            this.loadServerData();
        },
        onItemsPerPageChange(perPage) {
            this.options.itemsPerPage = perPage;
            this.loadServerData();
        },
        onSortBy(field) {
            this.options.sortField = field;
        },
        sortDesc(isDesc) {
            if (isDesc) this.options.sortOrder = "desc";
            else this.options.sortOrder = "asc";
        },
        setOptions(data) {
            this.options.page = data.page;
            this.options.itemsPerPage = parseInt(data.per_page);
            this.totalItems = data.total;
        },
        onSearch(query) {
            this.options.query = query;
            this.loadServerData();
        },
        onEdit(account) {
            this.$router.push({
                name: "account.edit",
                params: {
                    id: account.id
                }
            });
        },
        onViewTransactions(account) {
            this.$router.push({
                name: "account.transactions",
                params: {
                    id: account.id
                }
            });
        }
    },
    mounted() {
        this.loadServerData();
    }
};
</script>
