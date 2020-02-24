import * as React from "react";
import * as ReactDOM from "react-dom";
import './app.scss';
import { Head } from "./pages/head/Head";
import { Nav } from "./pages/nav/Nav";
import { Content } from "./pages/content/Content";

ReactDOM.render(
    [
      <Head/>,
      <Nav/>,
      <Content/>
    ],
  document.getElementById("app")
)
