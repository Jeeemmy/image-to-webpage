import { flowmailPage } from "../pages/flowmail/page.config.js";
import { nuboPage } from "../pages/nubo/page.config.js";

export const pages = [flowmailPage, nuboPage];

export function findPageByRoute(pathname) {
  return pages.find((page) => page.route === pathname);
}
