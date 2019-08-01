import Container from "../../components/layout/container/container";
import Section from "../../components/layout/section/section";
import Headline from "../../components/text/headline/headline";
import Title from "../../components/text/title/title";
import Subtitle from "../../components/text/subtitle/subtitle";
import Body from "../../components/text/body/body";

import styles from "./styles";

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
                <td>props</td>
                <td>slots</td>
                <td>data</td>
                <td>methods</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Button</td>
                <td>buttonText, onClick, isLink, linkTo</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>User summary</td>
                <td>user</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Header</td>
                <td>-</td>
                <td>-</td>
                <td>isOptionsMenuShown</td>
                <td>toggleOptionsMenu</td>
              </tr>
              <tr>
                <td>Text input</td>
                <td>value, placeholder, onChange</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Select</td>
                <td>value, placeholder, onChange</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Expense item</td>
                <td>item</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Title</td>
                <td>-</td>
                <td>default: text</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Body</td>
                <td>-</td>
                <td>default: text</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
          <Subtitle>Pages</Subtitle>
          <ol>
            <li>Overview</li>
            <li>New expense</li>
            <li>User overview</li>
            <li>New user</li>
            <li>Settle up</li>
          </ol>
        </Section>
        <Section>
          <Title>Product purpose</Title>
          <Subtitle>Target audience</Subtitle>
          <Body>
            The main focus on users for this application is aimed at all the
            people who often share bills. This could be a group of people who
            travel together and have to pay common items, such as entry tickets
            to museums/galleries/concerts, food, rental expenses, gas, etc.
            Another group that should be targeted is people who live together.
            More precisely they can be identified as rather younger audience in
            their 20s living in rented accomodation. The target audience could
            be updated after initial application release and further analysis of
            gathered data.
          </Body>
          <Subtitle>
            Reasoning of how the project demonstrates creativity
          </Subtitle>
          <Body>
            The initial idea and concept of the product for management of
            expenses require thorough thinking and planning. The right
            formulation of the project needs utilizes creative and critical
            abilities of developers. In the next stage a more precise
            description of visuals has to be conveyed in order to reduce
            uncertainty or ambiguity in development. The application must
            satisfy the latest trends expected for any high-quality software by
            end users nowadays. That covers ease of use, fast performance,
            responsivity, high availability and other quality factors. From the
            perspective of the app developer, such requirements can be
            accomplished by applying creativity not only in the design that end-users
            can see, but the code structure as well.
          </Body>
        </Section>
        <Section>
          <Title>Explanation of at least 3 complex components</Title>
          <Body>
            The final product is a web application, therefore it is divided into
            multiple routes the user can navigate to within a browser. Due to
            composability of the used framework - VueJS, each route/page is
            designed as a single component composed of other VueJS components.
            That enables us to write smaller components of high cohesion in a
            declarative manner.
          </Body>
          <ul>
            <li>
              <Subtitle>1. Overview</Subtitle>
              <Body>
                It is the first component that the user can see after loading
                the application. The component holds Header containing the name
                of the app and an options-button(a.k.a hamburger) that can be
                used to offer multiple options to the user. Starting with Header
                at the top, there will be a section with a group image and a
                group name over the image. The most important element shown on
                this page will be a list of users and sum of their individual
                expenses. At the bottom of the page the user can click the
                buttons - “Settle up” and “Add expense” that will navigate the
                user to another page appropriately.
              </Body>
              <Body>Components*: Header, User summary, Button</Body>
              <Body>User story:</Body>
              <table border="1">
                <thead>
                  <tr>
                    <td>Statement</td>
                    <td>Acceptance criteria</td>
                    <td>Estimation (story points)</td>
                    <td>Priority</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      As a user, I want to see an overview of all users in my
                      group and their total expenses, so that I know about all
                      group members and their current financial status.
                    </td>
                    <td>
                      1. A list of all usernames is shown with a sum of all
                      expenses for an individual user.
                    </td>
                    <td>8</td>
                    <td>High</td>
                  </tr>
                </tbody>
              </table>
            </li>
            <li>
              <Subtitle>2. New expense</Subtitle>
              <Body>
                Another crucial page of the app that allows the user to record
                an expense in the system. Starting from the top again, the page
                will contain Title, a generic text component with specific
                styling, with a name invoking the purpose of the page - “New
                expense”. The form for submitting a new expense will accept 4
                inputs(title, amount, paid by, bought for) from the user. Those
                inputs will be accepted with 2 other generic components - Text
                input and Select. The form will be submitted by clicking “Save”
                button below the inputs.
              </Body>
              <Body>
                Components*: Header, Title, Text input, Select, Button
              </Body>
              <Body>User story:</Body>
              <table border="1">
                <thead>
                  <tr>
                    <td>Statement</td>
                    <td>Acceptance criteria</td>
                    <td>Estimation (story points)</td>
                    <td>Priority</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      As a user, I want to be able to add new expense, so that
                      all expenses can be recorded.
                    </td>
                    <td>
                      1. A new expense including amount, a payer. users who
                      should contribute to the expense and their individual
                      split.
                    </td>
                    <td>13</td>
                    <td>High</td>
                  </tr>
                </tbody>
              </table>
            </li>
            <li>
              <Subtitle>3. User overview</Subtitle>
              <Body>
                The Overview page will list all group members and only the sum
                of their expenses. However, that is not sufficient for storing
                details about each payment. The user must be able to open
                details of any user, by clicking/tapping the User summary
                component, and get an overview of all expenses that belong to
                him/her. That increases transparency among all the group
                members.
              </Body>
              <Body>Components*: Header, Title, Expense item</Body>
              <Body>User story:</Body>
              <table border="1">
                <thead>
                  <tr>
                    <td>Statement</td>
                    <td>Acceptance criteria</td>
                    <td>Estimation (story points)</td>
                    <td>Priority</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      As a user, I want to be able to see all expenses for users
                      individually, so that details of all previous expenses can
                      be checked.
                    </td>
                    <td>
                      1. A list of all expenses including the selected user is
                      shown.
                    </td>
                    <td>8</td>
                    <td>High</td>
                  </tr>
                </tbody>
              </table>
            </li>
          </ul>
          <Subtitle>
            * more details about the components can be found in the Asset list
            section
          </Subtitle>
        </Section>
        <Section>
          <Title>Summary of how the web system will function</Title>
          <Body>
            For development purposes a JavaScript framework called VueJS has
            been selected as the main tool. The framework allows developers to
            write highly declarative components. Besides being declarative,
            their advantages are also reusability, extensibility, increased time
            efficiency for developers and more. To make the application
            responsive for a wide range of screen sizes; media queries, CSS
            flexbox and conditional rendering will be used. All files containing
            raw code will be bundled by Webpack. At the end of the pipeline,
            only 2 files will be generated: index.html file with a basic HTML
            skeleton and a placeholder for the app, and a JavaScript bundle file
            to convey dynamic functionality and desired behavior.
          </Body>
        </Section>
      </Container>
    );
  }
};
