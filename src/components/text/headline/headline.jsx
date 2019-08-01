import styles from './styles';

export default {
  name: "Headline",
  render() {
    return (
      <h1 class={styles.headline}>
        {this.$slots.default}
      </h1>
    );
  }
};
