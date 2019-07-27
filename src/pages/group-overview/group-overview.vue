<template>
  <div>
    <div :class="$style.group_picture_container">
      <p :class="$style.group_name">Melbourne</p>
    </div>
    <div v-for="user in users" v-bind:key="user.id">
      <UserOverview :user="user" />
    </div>
    <div :class="$style.buttonGroup">
      <Button buttonText="Settle up" />
      <Button buttonText="+" />
    </div>
  </div>
</template>

<script>
  import UserOverview from '../../components/user-overview.vue';
  import Button from '../../components/button.vue';

  export default {
    name: 'GroupOverview',
    components: {
      UserOverview,
      Button,
    },
    data: () => ({
      users: [
        {
          id: 1,
          username: 'Jack',
          amount: "-120.00"
        },
        {
          id: 2,
          username: 'Bob',
          amount: "70.00"
        },
        {
          id: 3,
          username: 'Dushan',
          amount: "50.00",  
        }
      ]
    }),
  };
</script>

<style module>
  .group_picture_container {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../../assets/images/group-picture.jpg');
    background-position: center top;
    width: 100%;
    height: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .group_name {
    text-align: center;
    color: #fff;
    font-size: 28px;
    position: relative;
    bottom: 20%;
  }

  .buttonGroup {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 32px 16px;
  }
</style>

