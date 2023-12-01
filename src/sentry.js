import { Integrations } from "@sentry/tracing";
import { init } from "@sentry/react";

function initSentry() {
  init({
    dsn: "https://84531d25957155ee5697fb956fc98ef6@o4506262038052864.ingest.sentry.io/4506262061383680",
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0, // Set to 1.0 to capture 100% of transactions
  });
}

export default initSentry;
