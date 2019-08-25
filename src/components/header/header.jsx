import styles from "./styles";

const fadeTransitionCSS = `
  .out {
    height: 0;
  }
`;

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
        <span class={styles.headerTitle} v-clickable>
          <router-link to="/">ExpenseTracker</router-link>
        </span>
        <div class={styles.hamburger} onClick={this.toggleOptionsMenu} v-clickable>
          <div class={styles.hamburger_toggler}>
            <span />
            <span />
            <span />
          </div>
          <transition enter-class="out" leave-to-class="out">
            {this.isOptionsMenuShown ? (
              <div class={styles.optionsMenu}>
                <ul>
                  <router-link to="/about">
                    <li class={styles.menuOptionItem}>About</li>
                  </router-link>
                </ul>
              </div>
            ) : null}
          </transition>
        </div>
        <style>{fadeTransitionCSS}</style>
      </div>
    );
  }
};
