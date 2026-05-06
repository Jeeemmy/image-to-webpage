import { flowmailPage } from "../pages/flowmail/page.config.js";
import { flowmailAutomationPage } from "../pages/flowmail-automation/page.config.js";
import { nuboPage } from "../pages/nubo/page.config.js";
import { bizwiseProfilePage } from "../pages/bizwise-profile/page.config.js";
import { raxonTradingPage } from "../pages/raxon-trading/page.config.js";
import { dashboardPage } from "../pages/dashboard/page.config.js";
import { vyraHealthPage } from "../pages/vyra-health/page.config.js";
import { evilRabbitOverviewPage } from "../pages/evilrabbit-overview/page.config.js";
import { homeserviceSinglePage } from "../pages/homeservice-single/page.config.js";
import { luxurySinglePage } from "../pages/luxury-single/page.config.js";
import { smartnoteSinglePage } from "../pages/smartnote-single/page.config.js";
import { weddingSinglePage } from "../pages/wedding-single/page.config.js";

export const pages = [
  flowmailPage,
  flowmailAutomationPage,
  nuboPage,
  bizwiseProfilePage,
  raxonTradingPage,
  dashboardPage,
  vyraHealthPage,
  evilRabbitOverviewPage,
  homeserviceSinglePage,
  luxurySinglePage,
  weddingSinglePage,
  smartnoteSinglePage,
];

export function findPageByRoute(pathname) {
  return pages.find((page) => page.route === pathname);
}
