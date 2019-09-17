import Headline from "../../components/text/headline/headline";
import Body from "../../components/text/body/body";
import Title from "../../components/text/title/title";
import Container from "../../components/layout/container/container";

import textStyles from "../../components/text/styles";
import styles from "./styles";

export default {
  name: "UserExpenses",
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  render() {
    const currentUser = this.users.find(
      user => user.id === this.$route.params.userId
    );

    return (
      <Container>
        {currentUser ? (
          <div>
            <Headline>{currentUser.username}</Headline>
            <div>
              {(currentUser.expenses || []).map(expense => (
                <div class={styles.expenseItem}>
                  <Body>{expense.title}</Body>
                  <span
                    class={
                      expense.amount >= 0
                        ? textStyles.pricePositive
                        : textStyles.priceNegative
                    }
                  >
                    ${expense.amount.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <Title>User not found</Title>
        )}
      </Container>
    );
  }
};
