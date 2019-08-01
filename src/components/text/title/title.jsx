import styles from './styles';

export default {
  name: "Title",
  render() {
    return (
      <h2 class={styles.title}>
        {this.$slots.default}
      </h2>
    );
  }
};
