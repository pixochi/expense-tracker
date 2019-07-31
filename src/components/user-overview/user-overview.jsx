export default {
  name: "UserOverview",
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  render() {
    <div class={style.user_container}>
      <span class={style.username}>{this.user.username}</span>
      <span class={style.amount}>${this.user.amount}</span>
    </div>;
  }
};
