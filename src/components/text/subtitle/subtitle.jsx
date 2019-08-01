import styles from './styles';

export default {
  name: "Subtitle",
  render() {
    return (
      <h3 class={styles.subtitle}>
        {this.$slots.default}
      </h3>
    );
  }
};
