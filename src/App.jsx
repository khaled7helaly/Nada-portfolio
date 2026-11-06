import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import ErrorBoundary from "@/components/ErrorBoundary";
import useDocumentMeta from "@/hooks/useDocumentMeta";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import { site } from "@/data";

// The Work page is only downloaded when someone opens it.
const WorkPage = lazy(() => import("@/pages/WorkPage"));

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  useDocumentMeta(site);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-card focus:px-3 focus:py-2 focus:text-[13px]"
        >
          Skip to content
        </a>
        <ScrollToTop />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
