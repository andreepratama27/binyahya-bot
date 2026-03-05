import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Bin Yahya Bot — Family AI Assistants",
      },
      {
        name: "description",
        content:
          "A family of personal AI assistants built for the Bin Yahya household, powered by OpenClaw. Meet Along, Angah, and Alang.",
      },
      {
        name: "og:title",
        content: "Bin Yahya Bot — Family AI Assistants",
      },
      {
        name: "og:description",
        content:
          "Three personal AI bots — scheduling, research, and productivity — built for the Bin Yahya family.",
      },
      {
        name: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Bin Yahya Bot — Family AI Assistants",
      },
      {
        name: "twitter:description",
        content:
          "Three personal AI bots — scheduling, research, and productivity — built for the Bin Yahya family.",
      },
      {
        name: "og:image",
        content: "/binyahya-family-photo.png",
      },
      {
        name: "twitter:image",
        content: "/binyahya-family-photo.png",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon.png",
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased [overflow-wrap:anywhere] selection:bg-[rgba(79,184,178,0.24)]">
        {children}
        {import.meta.env.DEV && (
          <TanStackDevtools
            config={{
              position: "bottom-right",
            }}
            plugins={[
              {
                name: "Tanstack Router",
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
        )}
        <Scripts />
      </body>
    </html>
  );
}
