import RaxonTradingPage from "./RaxonTradingPage.jsx";
import designTokens from "./artifacts/design-tokens.json";
import uiDsl from "./artifacts/ui-dsl.json";
import renderStep from "./artifacts/render-step3.json";

export const raxonTradingPage = {
  id: "raxon-trading",
  title: "Raxon Trading Dashboard",
  route: "/pages/raxon-trading",
  description: "Screenshot-to-webpage reconstruction of the Raxon crypto trading dashboard.",
  component: RaxonTradingPage,
  artifacts: {
    designTokens,
    uiDsl,
    renderStep,
  },
};
