<template>
    <div>
        <v-btn
            depressed
            x-small
            text
            plain
            color="primary"
            @click="$emit('edit', item)"
        >
            <v-icon dark>edit</v-icon>
        </v-btn>
        <v-btn
            depressed
            text
            plain
            x-small
            color="secondary"
            @click="$emit('transactions', item)"
        >
            <v-icon dark>search</v-icon>
        </v-btn>
    </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "Action",
    components: {},
    props: ["item"]
});
</script>
