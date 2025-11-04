import React from 'react';
import Hero3D from './components/Hero3D';
import Features from './components/Features';
import WalletActions from './components/WalletActions';
import TransactionsPanel from './components/TransactionsPanel';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2 text-white">
            <div className="h-3 w-3 rounded-full bg-sky-500" />
            <span className="text-sm font-semibold tracking-wide">Web3 Core</span>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300 sm:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#wallets" className="hover:text-white">Wallets</a>
            <a href="#" className="hover:text-white">Docs</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero3D />
        <Features />
        <WalletActions />
        <TransactionsPanel />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/60 bg-slate-950 py-8">
        <div className="mx-auto max-w-7xl px-6 text-sm text-slate-400">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p>
              Built for modern Web3 apps — wallet connections, SIWE, contracts, tokens, and transactions.
            </p>
            <p className="text-slate-500">© {new Date().getFullYear()} Web3 Core</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
