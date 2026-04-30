import NuboPage from "./NuboPage.jsx";
import designTokens from "./artifacts/design-tokens.json";
import uiDsl from "./artifacts/ui-dsl.json";
import renderStep from "./artifacts/render-step3.json";

export const nuboPage = {
  id: "nubo",
  title: "Nubo Storage Dashboard",
  route: "/pages/nubo",
  description: "Screenshot-to-webpage reconstruction of the Nubo cloud storage dashboard.",
  component: NuboPage,
  artifacts: {
    designTokens,
    uiDsl,
    renderStep,
  },
};
