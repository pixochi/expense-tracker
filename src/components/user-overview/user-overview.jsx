import styles from './styles';

export default {
  name: "UserOverview",
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  render() {
    <div class={styles.user_container}>
      <span class={styles.username}>{this.user.username}</span>
      <span class={styles.amount}>${this.user.amount}</span>
    </div>;
  }
};
