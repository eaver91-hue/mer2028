import { AlertTriangle, Gauge, Target, Wallet, TrendingDown, Clock3 } from 'lucide-react'
import { Card, CardHeader, KPI, ProgressRow, Badge, DecisionBar } from '../components/ui'
import { ReadinessArea, WinProfitChart } from '../charts/charts'
import { readiness } from '../data/dashboardData'

export default function Overview(){return <Page title="Главная" subtitle="Сводный командный экран конкурса">
 <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-6"><KPI label="Вероятность победы" value="62%" sub="Диапазон 45–72%" trend="−4 п.п." tone="amber" icon={<Target size={16}/>}/><KPI label="Готовность" value="68%" sub="3 критических блокера" trend="+6 п.п." tone="amber" icon={<Gauge size={16}/>}/><KPI label="Прибыль" value="−0,5 млн ₽" sub="При текущем демпинге" trend="−1,1 млн" tone="red" icon={<Wallet size={16}/>}/><KPI label="Маржа" value="−3,8%" sub="Цель — не ниже 12%" trend="−7,2 п.п." tone="red" icon={<TrendingDown size={16}/>}/><KPI label="Предел демпинга" value="21,7%" sub="Текущий сценарий — 23%" tone="red" icon={<AlertTriangle size={16}/>}/><KPI label="До подачи" value="39 дней" sub="Критический путь −4 дня" tone="amber" icon={<Clock3 size={16}/>}/></div>
 <div className="mt-4 grid gap-4 xl:grid-cols-[.9fr_1.1fr]">
  <Card><CardHeader eyebrow="Контроль" title="Ключевые риски" description="То, что требует вмешательства"/><div className="space-y-3 p-5">{[['ИБ и лицензии','Допуск + до −3,2 млн ₽','red'],['Генподрядчик','Блокирует схему и экономику','red'],['Демпинг выше предела','Победа становится убыточной','red'],['Цена подрядчика','Не зафиксирована','amber']].map(([a,b,t])=><div key={a} className="surface-soft flex items-center justify-between rounded-xl p-3"><div><p className="text-xs font-medium">{a}</p><p className="mt-1 text-[11px] text-zinc-500">{b}</p></div><Badge tone={t}>{t==='red'?'Критично':'Внимание'}</Badge></div>)}</div></Card>
  <Card><CardHeader eyebrow="Готовность" title="Подготовка к конкурсу" description="Взвешенная готовность обязательных блоков"/><div className="grid gap-6 p-5 md:grid-cols-2"><div className="space-y-4">{readiness.map(x=><ProgressRow key={x.name} {...x} label={x.name}/>)}</div><ReadinessArea data={readiness}/></div></Card>
 </div>
 <Card className="mt-4"><CardHeader eyebrow="Экономика" title="Вероятность победы и прибыль" description="Как демпинг меняет результат"/><div className="p-3"><WinProfitChart/></div></Card>
 <div className="mt-4"><DecisionBar title="Нужно решить: выбрать схему ИБ и генподрядчика" text="Это разблокирует договорную модель, подтвердит комиссии и позволит окончательно рассчитать предел демпинга." actions={['Сравнить варианты','Зафиксировать решение']}/></div>
 </Page>}

export function Page({title,subtitle,children}){return <div><div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between"><div><p className="text-[10px] font-semibold uppercase tracking-[.22em] text-violet-300/80">МЭР · сопровождение сайта</p><h1 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">{title}</h1><p className="mt-2 text-sm text-zinc-500">{subtitle}</p></div><Badge tone="amber">Требуется решение</Badge></div>{children}</div>}
