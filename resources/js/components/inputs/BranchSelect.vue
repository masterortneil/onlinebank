<template>
    <ValidationProvider
        :vid="name"
        :name="name"
        :rules="rules"
        v-slot="{ errors }"
    >
        <v-select
            v-model="selected"
            :items="items"
            item-text="name"
            item-value="id"
            :messages="errors.join('. ')"
            :label="label"
            dense
            clearable
        ></v-select>
    </ValidationProvider>
</template>
<script>
import { ValidationProvider } from "vee-validate/dist/vee-validate.full";

export default {
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
            items: []
        };
    },
    methods: {
        getBranches() {
            axios.get("/branches").then(response => {
                this.items = response.data.data;
            });
        }
    },
    watch: {
        value(val) {
            this.selected = val;
            this.$emit("input", val);
        },
        selected(val) {
            this.$emit("input", val);
        }
    },
    mounted() {
        this.getBranches();
    }
};
</script>

<style>
.v-messages__message {
    color: red;
}
</style>
