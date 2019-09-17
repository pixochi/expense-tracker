import styles from "./styles";

export default {
  name: "Button",
  props: {
    buttonText: {
      type: String,
      required: true
    },
    handleClick: {
      type: Function,
      required: false,
      default: () => {}
    },
    isLink: {
      type: Boolean,
      required: false
    },
    preventDefault: {
      type: Boolean,
      required: false
    },
    isSubmit: {
      type: Boolean,
      required: false
    },
    to: {
      type: String,
      required: false
    }
  },
  render() {
    const handleClick = e => {
      this.handleClick();
    };

    if (this.isLink) {
      return (
        <router-link class={styles.button} onClick={handleClick} to={this.to}>
          {this.buttonText}
        </router-link>
      );
    } else {
      return (
        <button
          class={styles.button}
          onClick={handleClick}
          v-clickable
          type={this.isSubmit ? "submit" : "button"}
        >
          {this.buttonText}
        </button>
      );
    }
  }
};
