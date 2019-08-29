import styles from "./styles";

export default {
  name: "Input",
  props: {
    value: {
      type: String,
      required: true
    },
    title: {
      type: String
    },
    handleChange: {
      type: Function,
      required: true
    },
    isRequired: {
      type: Boolean
    }
  },
  render() {
    return (
      <div class={styles.inputContainer}>
        {this.title}
        <input
          class={styles.input}
          value={this.value}
          onChange={this.handleChange}
          required={this.isRequired}
        />
      </div>
    );
  }
};
