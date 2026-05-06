import EvilRabbitOverviewPage from "./EvilRabbitOverviewPage.jsx";
import designTokens from "./artifacts/design-tokens.json";
import uiDsl from "./artifacts/ui-dsl.json";
import renderStep from "./artifacts/render-step3.json";

export const evilRabbitOverviewPage = {
  id: "evilrabbit-overview",
  title: "Evil Rabbit Overview",
  route: "/pages/evilrabbit-overview",
  description: "Screenshot-to-webpage reconstruction of the Evil Rabbit device overview dashboard.",
  component: EvilRabbitOverviewPage,
  artifacts: {
    designTokens,
    uiDsl,
    renderStep,
  },
};
