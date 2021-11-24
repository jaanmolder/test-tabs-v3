import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Provider } from "react-keep-alive";
import ErrorBoundary from "./error-boundry";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ErrorBoundary>
    <Router>
      <Provider>
        <App />
      </Provider>
    </Router>
  </ErrorBoundary>,
  rootElement
);
