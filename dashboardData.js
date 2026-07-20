export const navItems = [
  { id: 'overview', label: 'Главная' },
  { id: 'win', label: 'Вероятность победы' },
  { id: 'finance', label: 'Финансовая модель' },
  { id: 'risks', label: 'Риски' },
  { id: 'delivery', label: 'Исполнение' },
]

export const readiness = [
  { name: 'Стратегия', value: 70 }, { name: 'Квалификация', value: 55 },
  { name: 'Генподрядчик', value: 40 }, { name: 'ИБ и лицензии', value: 25 },
  { name: 'Техническая оценка', value: 90 }, { name: 'Финансовая модель', value: 75 },
]

export const financeTrend = [
  { discount: '15%', win: 38, profit: 4.1 }, { discount: '18%', win: 44, profit: 2.7 },
  { discount: '20%', win: 53, profit: 1.6 }, { discount: '23%', win: 62, profit: -0.5 },
  { discount: '25%', win: 67, profit: -1.3 }, { discount: '27%', win: 71, profit: -2.1 },
  { discount: '30%', win: 78, profit: -3.4 }, { discount: '35%', win: 85, profit: -5.6 },
]

export const competitorScores = [
  { name: 'ARTWELL', price: 24.6, qualification: 64.5, total: 89.1 },
  { name: 'РЕАКТИВ', price: 25.8, qualification: 60.6, total: 86.4 },
  { name: 'MINVAIL', price: 26.7, qualification: 57.8, total: 84.5 },
  { name: 'ENSIGN', price: 26.8, qualification: 43, total: 69.8 },
]

export const waterfall = [
  { name: 'Бюджет', value: 38.9 }, { name: 'Демпинг', value: 29.95 },
  { name: 'После генподряда', value: 27.2 }, { name: 'После подрядчиков', value: 13.1 },
  { name: 'Себестоимость', value: -13.6 }, { name: 'Прибыль', value: -0.5 },
]

export const riskMap = [
  { id: 'R-001', name: 'Демпинг', likelihood: 82, impact: 88, exposure: 2.38 },
  { id: 'R-002', name: 'ИБ', likelihood: 72, impact: 95, exposure: 1.68 },
  { id: 'R-003', name: 'Генподряд', likelihood: 45, impact: 100, exposure: 1.2 },
  { id: 'R-004', name: 'Опыт', likelihood: 58, impact: 78, exposure: .72 },
  { id: 'R-005', name: 'ФОТ', likelihood: 62, impact: 55, exposure: .42 },
]

export const team = [
  { role: 'Руководитель проекта', required: 1, assigned: 1, load: 60, status: 'Готов' },
  { role: 'Системный аналитик', required: 1, assigned: 1, load: 90, status: 'Готов' },
  { role: 'Backend', required: 2, assigned: 1, load: 95, status: 'Дефицит' },
  { role: 'Frontend', required: 1, assigned: 1, load: 55, status: 'Готов' },
  { role: 'QA', required: 2, assigned: 2, load: 70, status: 'Готов' },
  { role: 'DevOps', required: 1, assigned: 0, load: 0, status: 'Нет' },
]

export const partners = [
  { name: 'BLACK', work: 'Информационное сопровождение', readiness: 95, contract: 'Согласование', risk: 'Низкий' },
  { name: 'ИБ-партнер', work: 'ИБ и лицензии', readiness: 60, contract: 'КП отсутствует', risk: 'Высокий' },
  { name: 'Айти Ресурс', work: 'Генподряд', readiness: 82, contract: 'Условия 5%', risk: 'Средний' },
  { name: 'Облако', work: 'Инфраструктура', readiness: 100, contract: 'Подтвержден', risk: 'Низкий' },
]

export const licenses = [
  { name: 'ФСТЭК', required: true, owner: 'Генподрядчик', status: 'Есть' },
  { name: 'ФСБ', required: true, owner: 'Генподрядчик', status: 'Есть' },
  { name: 'Криптография', required: true, owner: 'ИБ-партнер', status: 'Проверка' },
  { name: 'ЭЦП', required: true, owner: 'Реактив', status: 'Есть' },
  { name: 'Рутокены', required: true, owner: 'Не определен', status: 'Нет' },
]
