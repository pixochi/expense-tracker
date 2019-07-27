<template>
  <div :class="$style.header">
    <span :class="$style.headerTitle">ExpenseTracker</span>
    <div :class="$style.hamburger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";

  export default {
    name: 'Header'
  };
</script>


<style module>
  .header {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background: #00FFB2;
    padding: 20px 24px;
    cursor: pointer;
  }

  .headerTitle {
    color: #fff;
    font-size: 28px;
    font-weight: 600;
  }

  .hamburger span {
    display: block;
    width: 32px;
    height: 4px;
    margin-bottom: 4px;
    position: relative;
    background: #fff;
    border-radius: 3px;
  }
</style>