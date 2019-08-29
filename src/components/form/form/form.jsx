import styles from "./styles";

export default {
  name: "Input",
  props: {
    // children: {
    //   type: Object,
    //   required: true
    // }
  },
  render() {
    return (
      <form class={styles.form}>
        {this.$slots.default}
      </form>
    );
  }
};
