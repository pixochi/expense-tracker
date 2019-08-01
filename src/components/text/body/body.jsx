import styles from './styles';

export default {
  name: "Body",
  render() {
    return (
      <p class={styles.body}>
        {this.$slots.default}
      </p>
    );
  }
};
