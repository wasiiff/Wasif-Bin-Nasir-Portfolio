import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import { ReactLenis } from "lenis/react";

import MainLayout from "@/layout/main-layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ReactLenis
      root
      options={{
        duration: 1.4,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      }}
    >
      <ThemeProvider attribute="class" defaultTheme="dark">
        <MainLayout>
          <AnimatePresence mode="wait" initial={false}>
            <Component key={router.asPath} {...pageProps} />
          </AnimatePresence>
        </MainLayout>
      </ThemeProvider>
    </ReactLenis>
  );
}
