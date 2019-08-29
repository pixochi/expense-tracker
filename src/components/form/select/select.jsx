import styles from "./styles";

export default {
  name: "Select",
  props: {
    value: {
      type: String,
      required: true
    },
    title: {
      type: String
    },
    options: {
      type: Array,
      required: true,
    },
    handleChange: {
      type: Function,
      required: true,
    },
    isRequired: {
      type: Boolean
    }
  },
  render() {
    return (
      <div class={styles.inputContainer}>
        {this.title}
        <select class={styles.input} value={this.value} onChange={this.handleChange} required={this.isRequired}>
          {this.options.map(option => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    );
  }
};
