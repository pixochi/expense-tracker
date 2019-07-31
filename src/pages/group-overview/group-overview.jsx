import UserOverview from "../../components/user-overview/user-overview";
import Button from "../../components/button/button";

import styles from './styles';

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
        amount: "-120.00"
      },
      {
        id: 2,
        username: "Bob",
        amount: "70.00"
      },
      {
        id: 3,
        username: "Dushan",
        amount: "50.00"
      }
    ]
  }),
  render() {
    return (
      <div>
        <div class={styles.group_picture_container}>
          <p class={styles.group_name}>Melbourne</p>
        </div>
        {this.users.map(user => (
          <UserOverview key={user.id} user={user} />
        ))}
        <div class={styles.buttonGroup}>
          <Button buttonText="Settle up" />
          <Button buttonText="+" />
        </div>
      </div>
    );
  }
};
