import FlowMailPage from "./FlowMailPage.jsx";
import designTokens from "./artifacts/design-tokens.json";
import renderStep from "./artifacts/render-step3.json";
import uiDsl from "./artifacts/ui-dsl.json";

export const flowmailPage = {
  id: "flowmail",
  title: "FlowMail Integrations",
  route: "/pages/flowmail",
  description: "Screenshot-to-webpage reconstruction of the FlowMail integrations dashboard.",
  component: FlowMailPage,
  artifacts: {
    designTokens,
    uiDsl,
    renderStep,
  },
};
