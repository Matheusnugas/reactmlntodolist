import React from "react";
import { Provider } from "./Context/Provider";
import ToDoPage from "./pages/ToDoPage";
import logo from "./images/todo-logo.png";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider>
      <div className="logoWrap">
        <img src={logo} alt="todoLogo" />
      </div>
      <ToDoPage />
      <Footer />
    </Provider>
  );
}

export default App;
