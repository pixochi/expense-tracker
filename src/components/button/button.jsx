import styles from "./styles";

export default {
  name: "Button",
  props: {
    buttonText: {
      type: String,
      required: true
    },
    onClick: {
      type: Function,
      required: false,
      default: () => {},
    }
  },
  render() {
    return (
      <button class={styles.button} onClick={this.onClick}>
        {this.buttonText}
      </button>
    );
  }
};

