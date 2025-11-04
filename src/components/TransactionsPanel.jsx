import React from 'react';
import { History, Activity, CheckCircle2, Timer } from 'lucide-react';

const TxRow = ({ status, hash, desc, time }) => {
  const statusStyles = {
    pending: 'text-amber-400 bg-amber-400/10 ring-amber-400/30',
    confirmed: 'text-emerald-400 bg-emerald-400/10 ring-emerald-400/30',
    failed: 'text-rose-400 bg-rose-400/10 ring-rose-400/30',
  };

  const badge =
    status === 'pending' ? (
      <Timer className="h-4 w-4" />
    ) : status === 'confirmed' ? (
      <CheckCircle2 className="h-4 w-4" />
    ) : (
      <Activity className="h-4 w-4" />
    );

  return (
    <div className="flex items-start justify-between rounded-xl border border-slate-800 bg-slate-900/60 p-4">
      <div className="flex items-start gap-3">
        <div className={`mt-0.5 flex h-7 w-7 items-center justify-center rounded-lg ring-1 ${statusStyles[status]}`}>
          {badge}
        </div>
        <div>
          <div className="text-sm font-medium text-white">{desc}</div>
          <div className="text-xs text-slate-400">{hash}</div>
        </div>
      </div>
      <div className="text-xs text-slate-400">{time}</div>
    </div>
  );
};

export default function TransactionsPanel() {
  return (
    <section className="relative bg-slate-950 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 flex items-center gap-2">
          <History className="h-5 w-5 text-sky-400" />
          <h3 className="text-xl font-semibold text-white">Recent activity</h3>
        </div>
        <p className="mb-6 max-w-2xl text-sm text-slate-400">
          Track pending and confirmed transactions with helpful context. Wire this to your backend or
          provider events to display live history for your users.
        </p>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <TxRow
            status="pending"
            desc="ERC20 transfer 25.0 USDC"
            hash="0x8d6c...fa2e"
            time="Just now"
          />
          <TxRow
            status="confirmed"
            desc="Contract call: mint() #721"
            hash="0x21a1...cc10"
            time="1m ago"
          />
          <TxRow
            status="confirmed"
            desc="Approval set for marketplace"
            hash="0xa4b2...89fe"
            time="8m ago"
          />
          <TxRow
            status="failed"
            desc="Swap transaction reverted"
            hash="0x9f55...3012"
            time="12m ago"
          />
        </div>
      </div>
    </section>
  );
}
