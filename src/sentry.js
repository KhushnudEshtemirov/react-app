import { Integrations } from "@sentry/tracing";
import { init } from "@sentry/react";

function initSentry() {
  init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0, // Set to 1.0 to capture 100% of transactions
  });
}

export default initSentry;
