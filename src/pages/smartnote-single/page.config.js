import SmartnoteSinglePage from "./SmartnoteSinglePage.jsx";
import designTokens from "./artifacts/design-tokens.json";
import uiDsl from "./artifacts/ui-dsl.json";
import renderStep from "./artifacts/render-step3.json";

export const smartnoteSinglePage = {
  id: "smartnote-single",
  title: "SmartNote Single",
  route: "/pages/smartnote-single",
  description: "Screenshot-to-webpage reconstruction of a mobile AI notes app screen.",
  preview: {
    device: "mobile",
    frame: "camera",
  },
  component: SmartnoteSinglePage,
  artifacts: {
    designTokens,
    uiDsl,
    renderStep,
  },
};
