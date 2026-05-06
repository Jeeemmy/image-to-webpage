import LuxurySinglePage from "./LuxurySinglePage.jsx";
import designTokens from "./artifacts/design-tokens.json";
import uiDsl from "./artifacts/ui-dsl.json";
import renderStep from "./artifacts/render-step3.json";

export const luxurySinglePage = {
  id: "luxury-single",
  title: "Luxury Single",
  route: "/pages/luxury-single",
  description: "Screenshot-to-webpage reconstruction of a mobile luxury ring product screen.",
  preview: {
    device: "mobile",
    frame: "camera",
  },
  component: LuxurySinglePage,
  artifacts: {
    designTokens,
    uiDsl,
    renderStep,
  },
};
