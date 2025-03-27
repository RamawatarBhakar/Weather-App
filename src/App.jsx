import { useState } from "react";
import GetData from "./component/GetData.jsx";
import Header from "./component/Header.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Post from "./component/Post.jsx";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Wellcome from "./component/Wellcome.jsx";
import ContextProvider from "../store/DataStore.jsx";
import GetPost from "./component/GetPOst.jsx";

function App() {
  return (
    <ContextProvider>
      <Header />
      <div className="cont">
        <GetPost />{" "}
      </div>
    </ContextProvider>
  );
}

export default App;
