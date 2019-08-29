import Container from "../../components/layout/container/container";
import Headline from "../../components/text/headline/headline";
import Form from "../../components/form/form/form";
import Input from "../../components/form/input/input";
import Select from "../../components/form/select/select";
import Button from "../../components/button/button";

export default {
  name: "NewExpense",
  data: () => ({
    form: {
      title: "",
      amount: "",
      paidById: "",
      boughtForId: ""
    }
  }),
  props: {
    users: {
      type: Array,
      required: true
    },
    addExpense: {
      type: Function,
      default: () => null
    }
  },
  computed: {
    userOptions: function() {
      return this.users.map(user => ({
        label: user.username,
        value: user.id
      }));
    }
  },
  render() {

    const handleAddExpense = () => {
      this.addExpense(this.form);
    }

    return (
      <Container>
        <Headline>New Expense</Headline>
        <Form>
          <Input
            value={this.form.title}
            title="Title"
            handleChange={e => (this.form.title = e.target.value)}
            isRequired
          />
          <Input
            value={this.form.amount}
            title="Amount"
            handleChange={e => (this.form.amount = e.target.value)}
            isRequired
            />
          <Select
            value={this.form.paidById}
            title="Paid by"
            options={this.userOptions}
            handleChange={e => (this.form.paidById = e.target.value)}
            isRequired
            />
          <Select
            value={this.form.boughtForId}
            title="Bought for"
            options={this.userOptions}
            handleChange={e => (this.form.boughtForId = e.target.value)}
            isRequired
          />
          <Button
            buttonText="+"
            handleClick={handleAddExpense}
            isSubmit
            preventDefault
          />
        </Form>
      </Container>
    );
  }
};
