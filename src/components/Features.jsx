import React from 'react';
import { Wallet, Code, Layers, Coins, Globe, Terminal, Activity, History, CheckCircle2 } from 'lucide-react';

const FeatureItem = ({ label }) => (
  <li className="flex items-start gap-2 text-slate-300">
    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-sky-400" />
    <span className="leading-relaxed">{label}</span>
  </li>
);

const FeatureBlock = ({ icon: Icon, title, items }) => (
  <div className="group rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/70 to-slate-950 p-6 shadow-lg shadow-black/20 transition hover:border-slate-700">
    <div className="mb-4 flex items-center gap-3">
      <div className="rounded-xl bg-sky-500/10 p-2 ring-1 ring-inset ring-sky-500/30">
        <Icon className="h-5 w-5 text-sky-400" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <ul className="space-y-2">
      {items.map((it) => (
        <FeatureItem key={it} label={it} />
      ))}
    </ul>
  </div>
);

export default function Features() {
  return (
    <section id="features" className="relative bg-slate-950 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Web3 building blocks you actually need
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-400">
            From wallet connection to contract interactions and token flows — everything in one modern toolkit.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureBlock
            icon={Wallet}
            title="Wallet & Identity"
            items={[
              'MetaMask / WalletConnect / Coinbase Wallet integration',
              'Sign-in with Ethereum (SIWE)',
              'Session persistence & auto-reconnect',
            ]}
          />

          <FeatureBlock
            icon={Code}
            title="Smart Contracts"
            items={[
              'Read & write functions',
              'ABI auto-loading',
              'Event listeners & subscriptions',
              'Multichain calls (Ethereum, Polygon, BSC)'
            ]}
          />

          <FeatureBlock
            icon={Activity}
            title="Transactions"
            items={[
              'Gas estimation & custom gas',
              'Pending → confirmed tracking',
              'Transaction history & statuses',
              'Revert reason decoding',
            ]}
          />

          <FeatureBlock
            icon={Coins}
            title="Tokens"
            items={[
              'ERC20 balances & transfers',
              'Approvals & allowances',
              'NFT mint / transfer (ERC721, ERC1155)',
              'Token metadata via IPFS/APIs',
            ]}
          />

          <FeatureBlock
            icon={Layers}
            title="Composability"
            items={[
              'Modular utilities for common flows',
              'Clean UI primitives ready to style',
              'Typed responses & friendly errors',
            ]}
          />

          <FeatureBlock
            icon={Globe}
            title="Multichain"
            items={[
              'Ethereum mainnet & L2s',
              'Polygon, BSC and more',
              'Seamless chain switching',
            ]}
          />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-slate-300">
            <div className="mb-2 flex items-center gap-2 text-white">
              <Terminal className="h-5 w-5 text-sky-400" />
              <span className="font-semibold">Developer-first ergonomics</span>
            </div>
            <p>
              Ship faster with intuitive patterns and thoughtful defaults. Add your own web3 provider,
              wire your contracts, and scale across chains without wrestling the basics.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-slate-300">
            <div className="mb-2 flex items-center gap-2 text-white">
              <History className="h-5 w-5 text-sky-400" />
              <span className="font-semibold">Production ready</span>
            </div>
            <p>
              Robust patterns for handling pending states, confirmations, and edge cases — designed
              for real apps, not just demos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
