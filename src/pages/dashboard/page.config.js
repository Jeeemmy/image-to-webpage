import DashboardPage from "./DashboardPage.jsx";
import designTokens from "./artifacts/design-tokens.json";
import uiDsl from "./artifacts/ui-dsl.json";
import renderStep from "./artifacts/render-step3.json";

export const dashboardPage = {
  id: "dashboard",
  title: "Dashboard",
  route: "/pages/dashboard",
  description: "Screenshot-to-webpage reconstruction of the Fleety logistics dashboard.",
  component: DashboardPage,
  artifacts: {
    designTokens,
    uiDsl,
    renderStep,
  },
};
