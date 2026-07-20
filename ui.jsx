import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, AlertTriangle, CheckCircle2, Clock3 } from 'lucide-react'

export const cn = (...v) => v.filter(Boolean).join(' ')

export function Card({ children, className = '', delay = 0 }) {
  return <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .35, delay }} className={cn('surface rounded-2xl', className)}>{children}</motion.section>
}

export function CardHeader({ eyebrow, title, description, action }) {
  return <div className="flex items-start justify-between gap-4 border-b border-white/[.06] px-5 py-4">
    <div><p className="text-[10px] font-semibold uppercase tracking-[.2em] text-violet-300/80">{eyebrow}</p><h3 className="mt-1 text-sm font-semibold text-white">{title}</h3>{description && <p className="mt-1 text-xs text-zinc-500">{description}</p>}</div>{action}
  </div>
}

const toneMap = { green: 'text-emerald-300 bg-emerald-400/10 border-emerald-400/15', red: 'text-rose-300 bg-rose-400/10 border-rose-400/15', amber: 'text-amber-300 bg-amber-400/10 border-amber-400/15', blue: 'text-sky-300 bg-sky-400/10 border-sky-400/15', neutral: 'text-zinc-300 bg-white/[.04] border-white/[.07]' }

export function Badge({ children, tone = 'neutral' }) { return <span className={cn('inline-flex items-center rounded-full border px-2 py-1 text-[10px] font-medium', toneMap[tone])}>{children}</span> }

export function KPI({ label, value, sub, trend, tone='neutral', icon }) {
  const up = trend?.startsWith('+') || trend?.includes('↑')
  return <Card className="min-h-[132px] p-4">
    <div className="flex items-center justify-between"><p className="text-xs text-zinc-500">{label}</p><div className="text-zinc-600">{icon}</div></div>
    <div className="mt-5 flex items-end justify-between gap-3"><p className={cn('text-2xl font-semibold tracking-tight', tone==='red'&&'text-rose-300',tone==='green'&&'text-emerald-300',tone==='amber'&&'text-amber-300')}>{value}</p>{trend && <span className={cn('flex items-center gap-1 text-[10px]', up?'text-emerald-400':'text-rose-400')}>{up?<ArrowUpRight size={12}/>:<ArrowDownRight size={12}/>} {trend}</span>}</div>
    <p className="mt-2 text-[11px] leading-5 text-zinc-500">{sub}</p>
  </Card>
}

export function ProgressRow({ label, value, meta }) { const color = value<45?'bg-rose-400':value<70?'bg-amber-400':'bg-emerald-400'; return <div className="space-y-2"><div className="flex justify-between text-xs"><span className="text-zinc-300">{label}</span><span className="text-zinc-500">{meta || `${value}%`}</span></div><div className="h-1.5 overflow-hidden rounded-full bg-white/[.05]"><motion.div initial={{width:0}} animate={{width:`${value}%`}} transition={{duration:.7}} className={cn('h-full rounded-full',color)} /></div></div> }

export function StatusIcon({ status }) { return status==='Готов'||status==='Есть'||status==='Подтвержден'?<CheckCircle2 size={15} className="text-emerald-400"/>:status==='Нет'?<AlertTriangle size={15} className="text-rose-400"/>:<Clock3 size={15} className="text-amber-400"/> }

export function DataTable({ columns, rows }) { return <div className="overflow-x-auto"><table className="w-full min-w-[620px] text-left text-xs"><thead className="text-[10px] uppercase tracking-wider text-zinc-600"><tr>{columns.map(c=><th key={c.key} className="border-b border-white/[.06] px-4 py-3 font-medium">{c.label}</th>)}</tr></thead><tbody>{rows.map((r,i)=><tr key={i} className="border-b border-white/[.045] last:border-0 hover:bg-white/[.02]">{columns.map(c=><td key={c.key} className="px-4 py-3 text-zinc-300">{c.render?c.render(r[c.key],r):r[c.key]}</td>)}</tr>)}</tbody></table></div> }

export function DecisionBar({ title, text, actions = ['Открыть детали','Принять решение'] }) { return <Card className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between"><div><div className="flex items-center gap-2"><AlertTriangle size={15} className="text-amber-400"/><p className="text-sm font-semibold">{title}</p></div><p className="mt-2 max-w-3xl text-xs leading-5 text-zinc-500">{text}</p></div><div className="flex flex-wrap gap-2">{actions.map((a,i)=><button key={a} className={cn('rounded-lg px-3 py-2 text-xs font-medium transition',i===actions.length-1?'bg-white text-black hover:bg-zinc-200':'border border-white/[.08] bg-white/[.035] text-zinc-300 hover:bg-white/[.07]')}>{a}</button>)}</div></Card> }
