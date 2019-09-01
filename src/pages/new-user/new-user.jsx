import Container from "../../components/layout/container/container";
import Headline from "../../components/text/headline/headline";
import Form from "../../components/form/form/form";
import Input from "../../components/form/input/input";
import Button from "../../components/button/button";

export default {
  name: "NewUser",
  data: () => ({
    form: {
      username: "",
    }
  }),
  props: {
    addUser: {
      type: Function,
      required: true,
    }
  },
  render() {
    const handleAddUser = () => {
      if (Object.values(this.form).filter(_ => _).length === 1) {
        this.addUser(this.form);
        this.$router.push('/');
      }
    }

    return (
      <Container>
        <Headline>New user</Headline>
        <Form>
          <Input
            value={this.form.username}
            title="Username"
            handleChange={e => (this.form.username = e.target.value)}
            isRequired
          />
          <Button
            buttonText="+"
            handleClick={handleAddUser}
            isSubmit
            preventDefault
          />
        </Form>
      </Container>
    );
  }
};
