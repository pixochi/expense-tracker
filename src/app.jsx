import Header from "./components/header/header";

export default {
  name: "App",
  render() {
    return (
      <div>
        <Header />
        <router-view />
      </div>
    );
  }
};
