import "gsap";

import Header from "./components/header/header";

export default {
  name: "App",
  data: () => ({
    users: [
      {
        id: 1,
        username: "Jack",
        amount: -120.0
      },
      {
        id: 2,
        username: "Bob",
        amount: 70.0
      },
      {
        id: 3,
        username: "Dushan",
        amount: 50.0
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
  mounted: function() {
    this.$nextTick(function() {
      setTimeout(() => {
        this.users = this.users.map(user => {
          return { ...user };
        });
      }, 500);
    });
  },
  render() {
    return (
      <div>
        <Header />
        <router-view users={this.users} deleteUser={this.deleteUser} />
      </div>
    );
  }
};
