import BizwiseProfilePage from "./BizwiseProfilePage.jsx";
import designTokens from "./artifacts/design-tokens.json";
import uiDsl from "./artifacts/ui-dsl.json";
import renderStep from "./artifacts/render-step3.json";

export const bizwiseProfilePage = {
  id: "bizwise-profile",
  title: "Bizwise Customer Profile",
  route: "/pages/bizwise-profile",
  description: "Screenshot-to-webpage reconstruction of the Bizwise customer profile workspace.",
  component: BizwiseProfilePage,
  artifacts: {
    designTokens,
    uiDsl,
    renderStep,
  },
};
