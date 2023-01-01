// import logo from "./logo.svg";
import "./App.scss";
// import LoginForm from "./pages/login/loginForm";
import Header from "./components/header";
import Main from "./components/Main";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <>
      {/* <LoginForm /> */}
      <div className="container">
        <Header />
        <Sidebar />
        <Main />
      </div>
    </>
  );
}

export default App;
