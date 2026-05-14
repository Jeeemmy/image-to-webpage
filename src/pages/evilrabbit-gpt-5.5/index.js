import EvilRabbitPage from "./EvilRabbitPage.jsx";
import designTokens from "./artifacts/design-tokens.json";
import uiDsl from "./artifacts/ui-dsl.json";

export const evilRabbitGpt55Page = {
  id: "evilrabbit-gpt-5.5",
  title: "Evil Rabbit - GPT-5.5",
  route: "/pages/evilrabbit-gpt-5.5",
  component: EvilRabbitPage,
  preview: {
    device: "desktop",
  },
  artifacts: {
    designTokens,
    uiDsl,
  },
};

export default EvilRabbitPage;
