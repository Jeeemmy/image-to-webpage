import WeddingSinglePage from "./WeddingSinglePage.jsx";
import designTokens from "./artifacts/design-tokens.json";
import uiDsl from "./artifacts/ui-dsl.json";
import renderStep from "./artifacts/render-step3.json";

export const weddingSinglePage = {
  id: "wedding-single",
  title: "Wedding Single",
  route: "/pages/wedding-single",
  description: "Screenshot-to-webpage reconstruction of a mobile wedding venue detail screen.",
  preview: {
    device: "mobile",
    frame: "camera",
  },
  component: WeddingSinglePage,
  artifacts: {
    designTokens,
    uiDsl,
    renderStep,
  },
};
