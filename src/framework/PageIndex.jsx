import { pages } from "./pageRegistry.js";

function getDeviceLabel(page) {
  return page.preview?.device === "mobile" ? "Mob" : "PC";
}

export default function PageIndex() {
  return (
    <main className="min-h-screen bg-[#f7f7f4] px-6 py-10 text-[#171713]">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <header className="border-b border-[#d9d7cf] pb-6">
          <h1 className="text-4xl font-semibold leading-tight">
            UIWorkflow Lab
          </h1>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          {pages.map((page) => (
            <a
              key={page.id}
              href={page.route}
              className="group rounded-lg border border-[#d9d7cf] bg-white p-5 transition hover:border-[#171713]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex min-w-0 items-start gap-3">
                  <span
                    className={`mt-1 inline-flex h-6 shrink-0 items-center rounded border px-2 text-[11px] font-bold leading-none ${
                      page.preview?.device === "mobile"
                        ? "border-[#2f6f52] bg-[#e7f3ec] text-[#21513b]"
                        : "border-[#4b5563] bg-[#f3f4f6] text-[#262b32]"
                    }`}
                  >
                    {getDeviceLabel(page)}
                  </span>
                  <h2 className="text-xl font-semibold">{page.title}</h2>
                </div>
                <span className="shrink-0 whitespace-nowrap text-sm font-semibold text-[#171713] group-hover:underline">
                  打开
                </span>
              </div>
              <p className="mt-5 rounded-md bg-[#f1f0eb] px-3 py-2 font-mono text-xs text-[#555145]">
                {page.route}
              </p>
            </a>
          ))}
        </section>
      </div>
    </main>
  );
}
