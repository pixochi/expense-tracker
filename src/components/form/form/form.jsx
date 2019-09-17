import styles from "./styles";

export default {
  name: "Input",
  props: {},
  render() {
    return (
      <form class={styles.form}>
        {this.$slots.default}
      </form>
    );
  }
};
