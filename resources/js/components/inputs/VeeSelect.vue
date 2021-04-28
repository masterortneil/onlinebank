<template>
    <ValidationProvider
        :vid="name"
        :name="label"
        :rules="rules"
        v-slot="{ errors }"
    >
        <v-select
            :items="items"
            v-model="modelValue"
            :messages="errors.join('. ')"
            :label="label"
            :item-text="itemText"
            :item-value="itemValue"
            class="pa-0"
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
            required: true
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
        },
        itemValue: {
            type: String,
            default: "id"
        },
        itemText: {
            type: String,
            default: "text"
        },
        items: Array
    },
    data: () => ({
        modelValue: ""
    }),
    watch: {
        value(val) {
            this.modelValue = val;
            this.$emit("input", val);
        },
        modelValue(val) {
            this.$emit("input", val);
        }
    },
    mounted() {
        if (this.value) {
            this.modelValue = this.value;
        }
    }
});
</script>

<style>
.v-messages__message {
    color: red;
}
</style>
