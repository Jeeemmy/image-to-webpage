import VyraHealthPage from "./VyraHealthPage.jsx";
import designTokens from "./artifacts/design-tokens.json";
import uiDsl from "./artifacts/ui-dsl.json";
import renderStep from "./artifacts/render-step3.json";

export const vyraHealthPage = {
  id: "vyra-health",
  title: "Vyra Health",
  route: "/pages/vyra-health",
  description: "Screenshot-to-webpage reconstruction of the Vyra health intelligence dashboard.",
  component: VyraHealthPage,
  artifacts: {
    designTokens,
    uiDsl,
    renderStep,
  },
};
