import HomeserviceSinglePage from "./HomeserviceSinglePage.jsx";
import designTokens from "./artifacts/design-tokens.json";
import uiDsl from "./artifacts/ui-dsl.json";
import renderStep from "./artifacts/render-step3.json";

export const homeserviceSinglePage = {
  id: "homeservice-single",
  title: "Home Service",
  route: "/pages/homeservice-single",
  description: "Screenshot-to-webpage reconstruction of a mobile home service app screen.",
  preview: {
    device: "mobile",
    frame: "camera",
  },
  component: HomeserviceSinglePage,
  artifacts: {
    designTokens,
    uiDsl,
    renderStep,
  },
};
