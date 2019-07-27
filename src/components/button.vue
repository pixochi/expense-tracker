<template>
  <button :class="$style.button" :onClick="onClick">{{buttonText}}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    buttonText: {
      type: String,
      required: true,
    },
    onClick: {
      type: Function,
      required: false,
    },
  }
}
</script>

<style module>
.button {
  background: #E1DA24;
  border-radius: 8px;
  border: 1px solid #E0E0E0;
  padding: 8px 12px;
  color: #fff;
  width: 100%;
  height: 52px;
  font-size: 20px;
}

.button:not(:first-child) {
  margin-left: 20px;
}
</style>


