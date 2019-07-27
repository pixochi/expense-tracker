<template>
    <div :class="$style.user_container">
    <span :class="$style.username">
      {{user.username}}
    </span>
    <span :class="$style.amount">
      ${{user.amount}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'UserOverview',
  props: {
  	user: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style module>
  .user_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    border-bottom: 1px solid #E0E0E0;
    cursor: pointer;
  }

  .amount {
    font-size: 20px;
  }

  .username {
    font-size: 20px;
  }
</style>


