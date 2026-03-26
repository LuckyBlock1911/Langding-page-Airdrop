"use client";
import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

export function TurnstileGate({ children }: { children: React.ReactNode }) {
  const [isPassed, setIsPassed] = useState(false);

  //  check bot ->  show Website
  if (isPassed) {
    return <>{children}</>;
  }

  //  show Turnstile
  return (
    <div className="fixed inset-0 z-[9999] flex h-screen w-screen flex-col items-center justify-center bg-[#0B0F14] text-white">
      <div className="mb-8 flex flex-col items-center gap-4">
        {/* Logo chữ WikaEX chớp tắt báo hiệu đang load */}
        <h1 className="text-4xl font-extrabold text-cyan-400 animate-pulse tracking-widest">
          WikaEX
        </h1>
        <p className="text-slate-400 text-sm">
          Checking your connection to WikaEX...
        </p>
      </div>

      <div className="rounded-xl">
        <Turnstile
          //  Dummy Key  Cloudflare  npm run dev (localhost)
          //  publish web Internet
          siteKey={
            process.env.NODE_ENV === "development"
              ? "1x00000000000000000000AA"
              : process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "0x4AAAAAAAcwCDFRWOUelDvWs"
          }
          onSuccess={() => setIsPassed(true)}
          options={{
            theme: "dark",
            size: "normal",
          }}
        />
      </div>
    </div>
  );
}
