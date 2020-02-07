import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App from "./src/App.js";

const singleSpaReactLifecycle = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App
});

export const bootstrap = [singleSpaReactLifecycle.bootstrap];
export const mount = [singleSpaReactLifecycle.mount];
export const unmount = [singleSpaReactLifecycle.unmount];
