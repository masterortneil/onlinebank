<template>
  <ValidationProvider
    :vid="name"
    :name="name"
    :rules="rules"
    v-slot="{ errors }"
  >
    <v-textarea
      outlined
      :label="label"
      :name="label"
      v-model="modelValue"
      :messages="errors.join('. ')"
      class="pa-0"
      dense
      :readonly="readonly"
      value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
    ></v-textarea>
  </ValidationProvider>
</template>
<script lang="ts">
import { ValidationProvider } from "vee-validate/dist/vee-validate.full"
import Vue from "vue"
export default Vue.extend({
  name: "VeeTextarea",
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
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    modelValue: ""
  }),
  watch: {
    value(val) {
      this.modelValue = val
      this.$emit("input", val)
    },
    modelValue(val) {
      this.$emit("input", val)
    }
  }
})
</script>

<style>
.v-messages__message {
  color: red;
}
</style>
