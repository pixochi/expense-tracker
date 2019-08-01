import styles from './styles';

export default {
  name: "Section",
  render() {
    return (
      <div class={styles.section}>
        {this.$slots.default}
      </div>
    );
  }
};
