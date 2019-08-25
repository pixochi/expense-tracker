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
      default: () => {}
    },
    isLink: {
      type: Boolean,
      required: false
    },
    to: {
      type: String,
      required: false
    }
  },
  render() {

    const props = {
      onClick: this.onClick,
      class: styles.button,
    };

    if (this.isLink) {
      return (
        <router-link class={styles.button} onClick={this.onClick} to={this.to}>
          {this.buttonText}
        </router-link>
      );
    } else {
      return (
        <button class={styles.button} onClick={this.onClick} v-clickable>
          {this.buttonText}
        </button>
      );
    }
  }
};
