<template>
    <ValidationProvider
        :vid="name"
        :name="label"
        :rules="rules"
        v-slot="{ errors }"
    >
        <v-text-field
            :label="label"
            :name="label"
            :prepend-icon="prependIcon"
            :append-icon="appendIcon"
            v-model="modelValue"
            :messages="errors.join('. ')"
            class="pa-0"
            dense
        >
        </v-text-field>
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
    }
});
</script>

<style>
.v-messages__message {
    color: red;
}
</style>
