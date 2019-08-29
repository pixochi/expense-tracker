import UserOverview from "../../components/user-overview/user-overview";
import Button from "../../components/button/button";

import styles from "./styles";

const listTransitionCSS = `
  .userOverviewList-leave-active {
    animation: userOverviewList-out 1s ease-out forwards;
    opacity: 0;
    transition: opacity 1s;
    position: absolute;
  }

  .userOverviewList-move {
    transition: transform 1s; 
  }

  @keyframes userOverviewList-out {
    from {
      transform: translateY(0)
    }
    to {
      transform: translateY(20px)
    }
  }
`;

export default {
  name: "GroupOverview",
  components: {
    UserOverview,
    Button
  },
  props: {
    users: {
      type: Array,
      required: true
    },
    deleteUser: {
      type: Function,
      default: () => null
    }
  },
  render() {
    return (
      <div>
        <div class={styles.group_picture_container}>
          <p class={styles.group_name}>Melbourne</p>
        </div>
        <div id="user-overview-container">
          <transition-group
            name="userOverviewList"
            tag="div"
          >
            {this.users.map(user => (
              <UserOverview
                key={user.id}
                user={user}
                deleteUser={() => this.deleteUser(user.id)}
              />
            ))}
          </transition-group>
        </div>
        <div class={styles.buttonGroup}>
          <Button buttonText="Settle up" to="/settle-up" isLink />
          <Button buttonText="+" to="new-expense" isLink />
        </div>
        <style>{listTransitionCSS}</style>
      </div>
    );
  }
};
