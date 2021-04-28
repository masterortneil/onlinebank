<template>
    <ValidationProvider
        :vid="label"
        :name="label"
        :rules="rules"
        v-slot="{ errors }"
    >
        <v-select
            v-model="selected"
            :items="items"
            item-text="text"
            item-value="value"
            :messages="errors.join('. ')"
            :label="label"
            class="pa-0"
            chips
            multiple
            dense
        ></v-select>
    </ValidationProvider>
</template>
<script lang="ts">
import { ValidationProvider } from "vee-validate/dist/vee-validate.full";
import Vue from "vue";

export default Vue.extend({
    components: { ValidationProvider },
    props: {
        value: {
            required: true
        },
        name: {
            required: false
        },
        rules: {
            type: [String, Object]
        },
        label: String,
        prependIcon: String,
        appendIcon: String,
        type: {
            type: String,
            default: "text"
        }
    },
    data() {
        return {
            selected: "",
            items: [
                {
                    text: "aldf",
                    value: "user"
                },
                {
                    text: "Two",
                    value: "company-admin"
                }
            ]
        };
    },
    methods: {},
    watch: {
        value(val) {
            this.selected = val;
            this.$emit("input", val);
        },
        selected(val) {
            this.$emit("input", val);
        }
    }
});
</script>

<style>
.v-messages__message {
    color: red;
}
</style>
