import * as logger from "loglevel";

if (process.env.NODE_ENV === "production") {
  logger.setLevel("info");
} else {
  logger.setLevel("trace");
}

export default logger;
