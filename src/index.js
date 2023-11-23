import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import * as Sentry from "@sentry/react";

// Sentry.init({
//   environment: "production",
//   dsn: "https://84531d25957155ee5697fb956fc98ef6@o4506262038052864.ingest.sentry.io/4506262061383680",
//   integrations: [
//     new Sentry.BrowserTracing({
//       routingInstrumentation: Sentry.reactRouterV6Instrumentation(),
//     }),
//     new Sentry.Replay(),
//   ],

//   tracesSampleRate: 1.0,

//   tracePropagationTargets: [
//     "localhost",
//     "https://react-app-green-psi.vercel.app",
//   ],

//   replaysSessionSampleRate: 0.1,
//   replaysOnErrorSampleRate: 1.0,
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
