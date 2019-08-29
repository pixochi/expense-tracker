import "gsap";

import Header from "./components/header/header";

export default {
  name: "App",
  data: () => ({
    users: {
      1: {
        id: 1,
        username: "Jack"
      },
      2: {
        id: 2,
        username: "Bob"
      },
      3: {
        id: 3,
        username: "Dushan"
      }
    },
    expenses: [
      {
        id: 1,
        paidById: 2,
        boughtForId: 1,
        amount: 70
      },
      {
        id: 2,
        paidById: 3,
        boughtForId: 1,
        amount: 50
      }
    ]
  }),
  computed: {
    usersWithExpenses: function() {
      const users = this.expenses.reduce((acc, expense) => {
        return {
          ...acc,
          [expense.paidById]: {
            ...acc[expense.paidById],
            amount: (acc[expense.paidById].amount || 0) + Number(expense.amount)
          },
          [expense.boughtForId]: {
            ...acc[expense.boughtForId],
            amount: (acc[expense.boughtForId].amount || 0) - Number(expense.amount)
          }
        };
      }, this.users);

      return Object.values(users);
    }
  },
  methods: {
    deleteUser(userId) {
      const user = this.users[userId];
      const shouldDeleteUser = confirm(
        `Are you sure you want to delete ${user.username}?`
      );

      if (shouldDeleteUser) {
        const expensesCount = this.expenses.length;

        for (var i = this.expenses.length - 1; i >= 0; i--) {
          if (
            this.expenses[i].paidById === userId ||
            this.expenses[i].boughtForId === userId
          ) {
            this.expenses.splice(i, 1);
          }
        }

        if (expensesCount === 0) {
          this.expenses = [...this.expenses];
        }

        delete this.users[userId];
      }
    },
    addExpense(newExpense) {
      this.expenses.push(newExpense);
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      setTimeout(() => {
        this.users = Object.keys(this.users).reduce((acc, userId) => {
          return {
            ...acc,
            [userId]: {
              ...acc[userId],
              amount: acc[userId].amount
            }
          };
        }, this.users);
      }, 500);
    });
  },
  render() {
    return (
      <div>
        <Header />
        <router-view
          users={this.usersWithExpenses}
          deleteUser={this.deleteUser}
          addExpense={this.addExpense}
        />
      </div>
    );
  }
};
