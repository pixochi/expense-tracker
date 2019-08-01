import Container from "../../components/layout/container/container";
import Section from "../../components/layout/section/section";
import Headline from "../../components/text/headline/headline";
import Title from "../../components/text/title/title";
import Subtitle from "../../components/text/subtitle/subtitle";
import Body from "../../components/text/body/body";

import styles from './styles';

export default {
  name: "About",
  render() {
    return (
      <Container>
        <Headline>About ExpenseTracker</Headline>
        <Section>
          <Title>Summary</Title>
          <Body>
            The project - ExpenseTracker is a responsive web application for
            easier and more transparent management of expenses. Users do not
            have to remember who paid for what, how much and when anymore. The
            application keeps all that information in a single place that can be
            easily accessed via any modern web browser. It does not matter
            whether the user is using his/her desktop computer with a large
            monitor, laptop or a mobile device(smartphone, tablet, phablet), the
            application accessibility should not be affected. That is a great
            advantage - having the overview of expenses at hand almost anywhere
            and anytime.
          </Body>
        </Section>
        <Section>
          <Title>Asset list</Title>
          <Body>
            Before starting to write the code necessary to make the app work as
            intended, scope of the project should be specified to clearly
            understand boundaries of the system. Due to the frontend
            functionality and specification of this project, the overall product
            is specified more closely in the form of a list of components that
            are used to build the application.
          </Body>
          <Subtitle>Components</Subtitle>
          <table border="1">
            <thead>
              <tr>
                <td>Component</td>
                <td>Description</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Button</td>
                <td>props - buttonText, onClick, isLink, linkTo</td>
              </tr>
            </tbody>
          </table>
        </Section>
      </Container>
    );
  }
};
