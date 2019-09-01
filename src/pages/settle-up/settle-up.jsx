import Headline from "../../components/text/headline/headline";
import Body from "../../components/text/body/body";
import Title from "../../components/text/title/title";
import Subtitle from "../../components/text/subtitle/subtitle";
import Container from "../../components/layout/container/container";

import textStyles from "../../components/text/styles";
import styles from "./styles";

export default {
  name: "SettleUp",
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  computed: {
    settlingUpUsers() {
      return this.users.reduce((acc, user) => {
        const resolvedUser = user.expenses.reduce(
          (acc, expense) => {
            if (expense.amount > 0) {
              const boughtForUser = this.users.find(
                user => user.id === expense.boughtForId
              );
              return {
                ...acc,
                getsFrom: {
                  ...acc.getsFrom,
                  [boughtForUser.id]: {
                    username: boughtForUser.username,
                    amount: acc.getsFrom[boughtForUser.id]
                      ? acc.getsFrom[boughtForUser.id].amount + expense.amount
                      : expense.amount
                  }
                }
              };
            } else {
              const paidByUser = this.users.find(
                user => user.id === expense.paidById
              );
              return {
                ...acc,
                owesTo: {
                  ...acc.owesTo,
                  [paidByUser.id]: {
                    username: paidByUser.username,
                    amount: acc.owesTo[paidByUser.id]
                      ? acc.owesTo[paidByUser.id].amount + expense.amount
                      : expense.amount
                  }
                }
              };
            }
          },
          { owesTo: {}, getsFrom: {}, user }
        );
        return [...acc, resolvedUser];
      }, []);
    }
  },
  render() {
    console.log({ settlingUpUsers: this.settlingUpUsers });
    return (
      <Container>
        <Headline>Settle up</Headline>
        {this.settlingUpUsers.map(user => {
          return (
            <div>
              <Title>{user.user.username}</Title>
              {Boolean(Object.keys(user.owesTo).length) && (
                <div>
                  <Subtitle>owes</Subtitle>
                  {Object.values(user.owesTo).map(owesTo => (
                    <div key={owesTo.username} class={styles.balanceLine}>
                      <span>{owesTo.username}</span>
                      <span
                        class={
                          owesTo.amount >= 0
                          ? textStyles.pricePosive
                          : textStyles.priceNegative
                        }
                        >
                        ${owesTo.amount.toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              )}
              {Boolean(Object.keys(user.getsFrom).length) && (
                <div>
                  <Subtitle>will be given from</Subtitle>
                  {Object.values(user.getsFrom).map(getsFrom => (
                    <div key={getsFrom.username} class={styles.balanceLine}>
                      <span>{getsFrom.username}</span>
                      <span
                        class={
                          getsFrom.amount >= 0
                            ? textStyles.pricePositive
                            : textStyles.priceNegative
                        }
                      >
                        ${getsFrom.amount.toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </Container>
    );
  }
};
