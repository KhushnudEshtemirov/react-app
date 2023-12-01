module.exports = withSentryConfig(moduleExports, {
  dryRun: process.env.VERCEL_ENV !== "production"
});
