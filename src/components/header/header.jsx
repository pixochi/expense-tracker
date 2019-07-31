import styles from "./styles";

export default {
  name: "Header",
  render() {
    return (
      <div class={styles.header}>
        <span class={styles.headerTitle}>ExpenseTracker</span>
        <div class={styles.hamburger}>
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }
};
