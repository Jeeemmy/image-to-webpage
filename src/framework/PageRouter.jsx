import { useEffect } from "react";
import PageIndex from "./PageIndex.jsx";
import PhonePreviewFrame, {
  isPhoneContentPreview,
} from "./PhonePreviewFrame.jsx";
import { findPageByRoute } from "./pageRegistry.js";
import { normalizePathname } from "./routing.js";

function NotFound({ pathname }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#111111] px-6 text-white">
      <section className="w-full max-w-xl rounded-lg border border-white/20 bg-white/5 p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/55">
          404
        </p>
        <h1 className="mt-3 text-3xl font-semibold">页面未注册</h1>
        <p className="mt-4 break-all text-sm leading-6 text-white/70">
          当前路径没有匹配到实验页面：{pathname}
        </p>
        <a
          href="/"
          className="mt-6 inline-flex h-11 items-center rounded-md bg-white px-4 text-sm font-semibold text-[#111111]"
        >
          返回页面索引
        </a>
      </section>
    </main>
  );
}

function BackToPageIndexButton() {
  return (
    <a
      aria-label="返回列表"
      className="fixed left-4 top-4 z-[9999] flex h-11 min-w-28 items-center justify-center rounded-md border border-[#171713]/20 bg-white/95 px-4 text-sm font-semibold text-[#171713] opacity-0 shadow-[0_8px_24px_rgba(16,16,20,0.10)] outline-none backdrop-blur transition duration-150 hover:opacity-100 focus-visible:opacity-100"
      href="/"
      title="返回列表"
    >
      返回列表
    </a>
  );
}

export default function PageRouter() {
  const pathname = normalizePathname(window.location.pathname);
  const page = pathname === "/" ? null : findPageByRoute(pathname);
  const isEmbeddedPreview = window.self !== window.top;
  const shouldShowBackButton = !isEmbeddedPreview;
  const title =
    pathname === "/" ? "UIWorkflow Lab" : page?.title ?? "页面未注册";

  useEffect(() => {
    document.title = title;
  }, [title]);

  if (pathname === "/") {
    return <PageIndex />;
  }

  if (!page) {
    return <NotFound pathname={pathname} />;
  }

  const PageComponent = page.component;
  if (
    page.preview?.device === "mobile" &&
    !isPhoneContentPreview(window.location.search)
  ) {
    return (
      <>
        {shouldShowBackButton ? <BackToPageIndexButton /> : null}
        <PhonePreviewFrame page={page} />
      </>
    );
  }

  return (
    <>
      {shouldShowBackButton ? <BackToPageIndexButton /> : null}
      <PageComponent artifacts={page.artifacts} />
    </>
  );
}
