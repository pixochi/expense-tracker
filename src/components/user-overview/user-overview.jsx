import { TweenLite } from "gsap/TweenMax";

import * as DebugMixins from '../../mixins/debug';

import styles from "./styles";

export default {
  name: "UserOverview",
  data: () => ({
    tweenedNumber: 0
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
      return this.tweenedNumber.toFixed(2);
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
        <span class={styles.username}>{this.user.username}</span>
        <div>
          <span class={styles.amount}>${this.animatedAmount}</span>
          <span class={styles.deleteBtn} onClick={this.deleteUser}>
            X
          </span>
        </div>
      </div>
    );
  }
};
