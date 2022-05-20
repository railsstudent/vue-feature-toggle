import { UnleashClient } from "unleash-proxy-client";

const config = {
  url: "http://localhost:4000/proxy",
  clientKey: "my-secret-key",
  appName: "connie-feature-flag",
  environment: "development",
};

export const unleash = new UnleashClient(config);
