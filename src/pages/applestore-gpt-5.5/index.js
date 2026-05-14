import AppleStorePage from "./AppleStorePage.jsx";
import designTokens from "./artifacts/design-tokens.json";
import uiDsl from "./artifacts/ui-dsl.json";

export const appleStoreGpt55Page = {
  id: "applestore-gpt-5.5",
  title: "Apple Store - GPT-5.5",
  route: "/pages/applestore-gpt-5.5",
  component: AppleStorePage,
  preview: {
    device: "desktop",
  },
  artifacts: {
    designTokens,
    uiDsl,
  },
};

export default AppleStorePage;
