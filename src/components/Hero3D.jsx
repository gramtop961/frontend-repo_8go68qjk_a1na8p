import React from 'react';
import Spline from '@splinetool/react-spline';
import { CheckCircle2, Rocket } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative w-full min-h-[78vh] overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays (do not block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_10%,rgba(59,130,246,0.35),transparent)]" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-800/40 px-3 py-1 text-xs text-slate-300 backdrop-blur">
          <CheckCircle2 className="h-4 w-4 text-sky-400" />
          <span>Core Web3 building blocks</span>
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
          Web3 Core Features, Ready to Ship
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
          Connect wallets, authenticate with SIWE, interact with smart contracts, and manage
          transactions across chains — all in a sleek, modern experience.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-3 text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
          >
            <Rocket className="h-5 w-5" />
            Explore Features
          </a>
          <a
            href="#wallets"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700/70 bg-slate-900/60 px-5 py-3 text-slate-200 backdrop-blur transition hover:border-slate-600 hover:bg-slate-900/80 focus:outline-none focus:ring-2 focus:ring-slate-600/50"
          >
            Connect a Wallet
          </a>
        </div>
      </div>
    </section>
  );
}
