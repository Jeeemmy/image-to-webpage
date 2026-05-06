import FlowMailAutomationPage from "./FlowMailAutomationPage.jsx";
import designTokens from "./artifacts/design-tokens.json";
import renderStep from "./artifacts/render-step3.json";
import uiDsl from "./artifacts/ui-dsl.json";

export const flowmailAutomationPage = {
  id: "flowmail-automation",
  title: "FlowMail Automation",
  route: "/pages/flowmail-automation",
  description: "Screenshot-to-webpage reconstruction of the FlowMail automation builder.",
  component: FlowMailAutomationPage,
  artifacts: {
    designTokens,
    uiDsl,
    renderStep,
  },
};
