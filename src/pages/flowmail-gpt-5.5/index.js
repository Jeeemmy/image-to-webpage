import FlowmailPage from "./FlowmailPage.jsx";
import designTokens from "./artifacts/design-tokens.json";
import uiDsl from "./artifacts/ui-dsl.json";

export const flowmailGpt55Page = {
  id: "flowmail-gpt-5.5",
  title: "FlowMail Integrations - GPT-5.5",
  route: "/pages/flowmail-gpt-5.5",
  component: FlowmailPage,
  preview: {
    device: "desktop",
  },
  artifacts: {
    designTokens,
    uiDsl,
  },
};

export default FlowmailPage;
