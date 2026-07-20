import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Command, ChevronDown, RefreshCw } from 'lucide-react'
import { navItems } from '../data/dashboardData'
import { cn } from './ui'

export default function Layout({ active, setActive, children }) {
 const [open,setOpen]=useState(false)
 return <div className="min-h-screen text-zinc-100">
   <div className="pointer-events-none fixed inset-0 grid-fade opacity-70"/>
   <header className="sticky top-0 z-40 border-b border-white/[.06] bg-[#080a0f]/85 backdrop-blur-xl">
    <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-3 lg:px-7">
      <div className="flex items-center gap-3"><div className="grid h-8 w-8 place-items-center rounded-xl bg-white text-black"><Command size={17}/></div><div><p className="text-sm font-semibold">Тендерный контур</p><p className="text-[10px] text-zinc-600">МЭР · 2026–2028</p></div></div>
      <div className="hidden items-center gap-2 md:flex"><button className="surface-soft flex items-center gap-2 rounded-lg px-3 py-2 text-xs text-zinc-400">Базовый сценарий <ChevronDown size={13}/></button><button className="surface-soft flex items-center gap-2 rounded-lg px-3 py-2 text-xs text-zinc-400"><RefreshCw size={13}/> Сегодня, 09:30</button></div>
      <button onClick={()=>setOpen(!open)} className="md:hidden">{open?<X/>:<Menu/>}</button>
    </div>
   </header>
   <div className="mx-auto flex max-w-[1600px]">
    <aside className="sticky top-[57px] hidden h-[calc(100vh-57px)] w-60 shrink-0 border-r border-white/[.05] px-4 py-6 lg:block">
      <p className="px-3 text-[10px] font-semibold uppercase tracking-[.18em] text-zinc-700">Контур решения</p>
      <nav className="mt-3 space-y-1">{navItems.map((item,i)=><button key={item.id} onClick={()=>setActive(item.id)} className={cn('relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-xs transition',active===item.id?'text-white':'text-zinc-500 hover:bg-white/[.03] hover:text-zinc-300')}>{active===item.id&&<motion.span layoutId="nav" className="absolute inset-0 rounded-xl bg-white/[.055] ring-1 ring-white/[.07]"/>}<span className="relative text-[10px] text-zinc-700">0{i+1}</span><span className="relative">{item.label}</span></button>)}</nav>
      <div className="absolute bottom-5 left-4 right-4 rounded-xl border border-violet-400/15 bg-violet-400/[.05] p-3"><p className="text-[10px] font-semibold text-violet-300">Требуется решение</p><p className="mt-1 text-[11px] leading-5 text-zinc-500">ИБ → генподряд → экономика → предел демпинга.</p></div>
    </aside>
    <main className="relative min-w-0 flex-1 px-4 py-6 lg:px-7">{children}</main>
   </div>
   <AnimatePresence>{open&&<motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-x-0 top-[57px] z-30 border-b border-white/[.06] bg-[#090b10]/98 p-4 backdrop-blur-xl md:hidden">{navItems.map(item=><button key={item.id} onClick={()=>{setActive(item.id);setOpen(false)}} className="block w-full rounded-lg px-3 py-3 text-left text-sm text-zinc-300 hover:bg-white/[.04]">{item.label}</button>)}</motion.div>}</AnimatePresence>
 </div>
}
