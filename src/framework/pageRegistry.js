import { flowmailGpt55Page } from "../pages/flowmail-gpt-5.5/index.js";
import { appleStoreGpt55Page } from "../pages/applestore-gpt-5.5/index.js";
import { evilRabbitGpt55Page } from "../pages/evilrabbit-gpt-5.5/index.js";

export const pages = [
  flowmailGpt55Page,
  appleStoreGpt55Page,
  evilRabbitGpt55Page,
];

export function findPageByRoute(pathname) {
  return pages.find((page) => page.route === pathname);
}
