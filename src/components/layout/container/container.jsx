import styles from './styles';

export default {
  name: "Container",
  render() {
    return (
      <div class={styles.container}>
        {this.$slots.default}
      </div>
    );
  }
};
