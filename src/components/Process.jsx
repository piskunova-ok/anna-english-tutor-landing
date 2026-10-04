import Reveal from './Reveal.jsx';
import { Compass, MessagesSquare, Route, Video } from 'lucide-react';

const STEPS = [
  {
    icon: Video,
    num: '01',
    title: 'Пробная встреча',
    sub: '30 минут',
    text: 'знакомимся онлайн, обсуждаем боли, цели и снимаем стартовое волнение',
    chip: 'Бесплатно',
  },
  {
    icon: Compass,
    num: '02',
    title: 'Диагностика уровня',
    sub: 'Без тестов',
    text: 'выявляем сильные стороны и точки роста без утомительных тестов',
    chip: 'Оценка уровня',
  },
  {
    icon: Route,
    num: '03',
    title: 'Индивидуальная карта',
    sub: 'План и дедлайн',
    text: 'составляю персональную программу с точным дедлайном и фокусом на ваши интересы',
    chip: 'Дорожная карта',
  },
  {
    icon: MessagesSquare,
    num: '04',
    title: 'Регулярные занятия',
    sub: 'И результат',
    text: 'занимаемся 2–3 раза в неделю, общаемся в чате поддержки между уроками',
    chip: '2–3 раза в неделю',
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow">Как мы учимся</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="h-display mt-5">4 шага к свободному общению</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Прозрачный путь без сюрпризов: от первого знакомства до уверенной речи.
            </p>
          </Reveal>
        </div>

        <ol className="relative mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
          <div
            className="pointer-events-none absolute inset-x-12 top-7 hidden h-0.5 bg-brand-100 xl:block"
            aria-hidden="true"
          />
          {STEPS.map((s, i) => (
            <Reveal key={s.num} delay={i * 100} className="h-full">
              <li className="group relative flex h-full flex-col border-t-2 border-slate-200 pt-8 transition-colors duration-300 hover:border-brand-600">
                <div className="flex items-center justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-600 text-white transition-transform duration-300 group-hover:scale-110">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <span className="font-display text-6xl font-semibold leading-none text-slate-100 transition-colors duration-300 group-hover:text-brand-100">
                    {s.num}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold uppercase leading-tight text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-0.5 text-sm font-bold uppercase tracking-[0.18em] text-brand-600">{s.sub}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{s.text}</p>
                <span className="mt-5 w-fit border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-700">
                  {s.chip}
                </span>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}