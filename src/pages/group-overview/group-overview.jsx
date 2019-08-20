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
  data: () => ({
    users: [
      {
        id: 1,
        username: "Jack",
        amount: -120.00
      },
      {
        id: 2,
        username: "Bob",
        amount: 70.00
      },
      {
        id: 3,
        username: "Dushan",
        amount: 50.00
      }
    ]
  }),
  methods: {
    deleteUser(userId) {
      const user = this.users.find(user => user.id === userId);
      const shouldDeleteUser = confirm(
        `Are you sure you want to delete ${user.username}?`
      );

      if (shouldDeleteUser) {
        this.users = this.users.filter(user => user.id !== userId);
      }
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      setTimeout(() => {
        this.users = this.users.map(user => {
          return {...user};
        });
      }, 500);
    })
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
