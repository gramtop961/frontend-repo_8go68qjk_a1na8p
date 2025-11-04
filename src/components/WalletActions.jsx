import React from 'react';
import { Wallet, Github, Shield, Link } from 'lucide-react';

export default function WalletActions() {
  return (
    <section id="wallets" className="relative bg-slate-950 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h3 className="text-2xl font-semibold text-white">Connect a wallet</h3>
            <p className="mt-2 max-w-xl text-slate-400">
              Choose your preferred provider. Sessions persist and auto-reconnect when you return.
            </p>
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <Shield className="h-4 w-4 text-emerald-400" />
            <span className="text-sm">Non-custodial • SIWE supported</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <button className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-left transition hover:border-slate-700 hover:bg-slate-900">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-orange-500/15 p-2 ring-1 ring-inset ring-orange-500/30">
                <Wallet className="h-5 w-5 text-orange-400" />
              </div>
              <div>
                <div className="font-medium text-white">MetaMask</div>
                <div className="text-sm text-slate-400">Browser extension</div>
              </div>
            </div>
            <Link className="h-4 w-4 text-slate-500" />
          </button>

          <button className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-left transition hover:border-slate-700 hover:bg-slate-900">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-blue-500/15 p-2 ring-1 ring-inset ring-blue-500/30">
                <Wallet className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <div className="font-medium text-white">WalletConnect</div>
                <div className="text-sm text-slate-400">QR / Mobile wallets</div>
              </div>
            </div>
            <Link className="h-4 w-4 text-slate-500" />
          </button>

          <button className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-left transition hover:border-slate-700 hover:bg-slate-900">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-sky-500/15 p-2 ring-1 ring-inset ring-sky-500/30">
                <Wallet className="h-5 w-5 text-sky-400" />
              </div>
              <div>
                <div className="font-medium text-white">Coinbase Wallet</div>
                <div className="text-sm text-slate-400">Mobile & extension</div>
              </div>
            </div>
            <Link className="h-4 w-4 text-slate-500" />
          </button>
        </div>

        <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-slate-300">
          <div className="flex items-center gap-2 text-slate-200">
            <Github className="h-4 w-4 text-slate-400" />
            <span className="text-sm font-medium">Developer note</span>
          </div>
          <p className="mt-2 text-sm">
            These actions are styled and ready for wiring to your preferred web3 library (e.g., wagmi, viem, ethers).
            Add your provider, then bind click handlers to trigger real connections and SIWE flows.
          </p>
        </div>
      </div>
    </section>
  );
}
