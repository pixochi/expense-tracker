import styles from "./styles";

export default {
  name: "Header",
  data() {
    return {
      isOptionsMenuShown: false
    };
  },
  methods: {
    toggleOptionsMenu() {
      this.isOptionsMenuShown = !this.isOptionsMenuShown;
    }
  },
  render() {
    return (
      <div class={styles.header}>
        <span class={styles.headerTitle}>
          <router-link to="/">ExpenseTracker</router-link>
        </span>
        <div class={styles.hamburger} onClick={this.toggleOptionsMenu}>
          <div class={styles.hamburger_toggler}>
            <span />
            <span />
            <span />
          </div>
          {this.isOptionsMenuShown && (
            <div class={styles.optionsMenu}>
              <ul>
                <router-link to="/about">
                  <li class={styles.menuOptionItem}>About</li>
                </router-link>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
};
