<template>
    <div>
        <v-card outlined>
            <v-card-title>
                Transactions
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
                :footer-props="{
                    prevIcon: 'keyboard_arrow_left',
                    nextIcon: 'keyboard_arrow_right'
                }"
                class="elevation-1"
                @update:page="onPageChange"
                @update:items-per-page="onItemsPerPageChange"
                @update:sort-by="onSortBy"
                @update:sort-desc="sortDesc"
            >
            </v-data-table>
        </v-card>
    </div>
</template>

<script>
export default {
    components: {},
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
                    text: "Transaction Date",
                    align: "start",
                    sortable: false,
                    value: "created_at"
                },
                { text: "References / Description", value: "notes" },
                { text: "Type", value: "type" },
                { text: "Amount", value: "amount" },
                { text: "Balance", value: "balance" }
            ]
        };
    },
    methods: {
        loadServerData() {
            this.loading = true;
            axios
                .get(`/accounts/${this.id}/transactions`, {
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
        }
    },
    computed: {
        id() {
            return this.$route.params.id;
        }
    },
    mounted() {
        this.loadServerData();
    }
};
</script>
