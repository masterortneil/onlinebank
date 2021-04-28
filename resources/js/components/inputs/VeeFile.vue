<template>
    <ValidationProvider
        :vid="name"
        :name="label"
        :rules="rules"
        v-slot="{ errors }"
    >
        <v-file-input
            :label="label"
            :name="label"
            :prepend-icon="prependIcon"
            :messages="errors.join('. ')"
            dense
            @change="onFileLoad"
            clear-icon="clear"
        >
        </v-file-input>
    </ValidationProvider>
</template>
<script>
import { ValidationProvider } from "vee-validate/dist/vee-validate.full";
import Vue from "vue";
export default {
    components: { ValidationProvider },
    props: {
        value: {
            required: false
        },
        name: {
            required: false
        },
        rules: {
            type: [String, Object]
        },
        label: String,
        prependIcon: {
            type: String,
            default: "attachment"
        },
        appendIcon: String,
        type: {
            type: String,
            default: "text"
        },
        accept: {
            type: String,
            default: "image/*,.pdf"
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
    },
    methods: {
        onFileLoad(data) {
            this.getBase64(data).then(response => {
                this.$emit("input", response);
            });
        },
        getBase64(file) {
            return new Promise(resolve => {
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function() {
                    resolve(reader.result);
                };
            });
        }
    }
};
</script>

<style>
.v-messages__message {
    color: red;
}
</style>
