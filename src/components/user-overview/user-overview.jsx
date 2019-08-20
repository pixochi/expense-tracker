import styles from "./styles";

export default {
  name: "UserOverview",
  props: {
    user: {
      type: Object,
      required: true
    },
    deleteUser: {
      type: Function,
      default: () => null,
    }
  },
  render() {
    return (
      <div class={[styles.user_container]}>
        <span class={styles.username}>{this.user.username}</span>
        <div>
          <span class={styles.amount}>${this.user.amount}</span>
          <span class={styles.deleteBtn} onClick={this.deleteUser}>X</span>
        </div>
      </div>
    );
  }
};
