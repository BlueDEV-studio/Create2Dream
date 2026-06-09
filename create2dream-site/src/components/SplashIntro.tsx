import { useEffect, useState } from "react";
import { Logo } from "./Logo";

export function SplashIntro() {
  const [stage, setStage] = useState<"in" | "out" | "done">("in");

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Show once per session
    if (sessionStorage.getItem("c2d-splash") === "1") {
      setStage("done");
      return;
    }
    sessionStorage.setItem("c2d-splash", "1");
    const t1 = setTimeout(() => setStage("out"), 2200);
    const t2 = setTimeout(() => setStage("done"), 3100);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (stage === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center transition-opacity duration-700 ${stage === "out" ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      aria-hidden
    >
      <div className="animate-splash-in flex flex-col items-center gap-4">
        <Logo className="size-32 md:size-40" />
        <p className="font-display text-6xl md:text-7xl text-white pb-3" style={{ lineHeight: 1.2 }}>
          Welcome
        </p>
      </div>
    </div>
  );
}
