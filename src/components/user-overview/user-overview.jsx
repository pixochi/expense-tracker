import { TweenLite } from "gsap/TweenMax";

import * as DebugMixins from "../../mixins/debug";

import textStyles from "../text/styles";
import styles from "./styles";

export default {
  name: "UserOverview",
  data: () => ({
    tweenedNumber: 0.0001
  }),
  props: {
    user: {
      type: Object,
      required: true
    },
    deleteUser: {
      type: Function,
      default: () => null
    }
  },
  computed: {
    animatedAmount: function() {
      if (this.user.amount !== 0 && this.tweenedNumber === 0.0001) {
        return (this.user.amount || 0).toFixed(2);
      }
      return (Number(this.tweenedNumber) || 0).toFixed(2);
    }
  },
  watch: {
    user: function(newValue) {
      TweenLite.to(this, 0.5, { tweenedNumber: newValue.amount });
    }
  },
  mixins: [DebugMixins.didMount, DebugMixins.didUpdate],
  render() {
    return (
      <div class={[styles.user_container]} v-clickable>
        <router-link to={`/user/${this.user.id}`} class={styles.userLink}>
          <span class={styles.username}>{this.user.username}</span>
        </router-link>
        <div>
          <span
            class={[
              styles.amount,
              this.animatedAmount >= 0
                ? textStyles.pricePositive
                : textStyles.priceNegative
            ]}
          >
            ${this.animatedAmount}
          </span>
          <span class={styles.deleteBtn} onClick={this.deleteUser}>
            X
          </span>
        </div>
      </div>
    );
  }
};
