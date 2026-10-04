import Reveal from './Reveal.jsx';
import { Star } from 'lucide-react';

const REVIEWS = [
  {
    quote:
      'Пришел с уровнем Pre-Intermediate и страхом заговорить на английском дейли. За 6 месяцев с Анной подготовились к собеседованиям: сейчас работаю в берлинском финтехе, ежедневно общаюсь с коллегами без ступора!',
    badge: 'Получил оффер в ЕС',
    initials: 'МБ',
    name: 'Михаил Белов',
    role: 'Senior Frontend Dev, 31',
  },
  {
    quote:
      'Мне нужно было сдать IELTS Academic минимум на 7.0 для магистратуры в Нидерландах. До занятий Writing казался непреодолимой стеной. Анна дала четкие структуры эссе. Итог: общий балл 7.5!',
    badge: 'IELTS 7.5 · Writing 7.0 · Speaking 8.0',
    initials: 'ЕМ',
    name: 'Екатерина Морозова',
    role: 'Студентка, 22',
  },
  {
    quote:
      'Много путешествую, но раньше все диалоги сводились к "one coffee please". За 4 месяца занятий наконец-то начал свободно шутить с местными и легко решать вопросы на таможне и в отелях.',
    badge: 'Свободный разговорный B2',
    initials: 'ДВ',
    name: 'Денис Власов',
    role: 'Предприниматель, 39',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-paper py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow">Отзывы</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="h-display mt-5">Истории успеха моих студентов</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Реальные люди, реальные цели — и результаты, о которых приятно рассказывать.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 100} className="h-full">
              <figure className="flex h-full flex-col border-t-2 border-slate-200 pt-8 transition-colors duration-300 hover:border-brand-600">
                <div className="flex items-center gap-4">
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-slate-900 font-display text-lg font-semibold uppercase text-gold-400">
                    {r.initials}
                  </span>
                  <div>
                    <figcaption className="font-display text-lg font-semibold uppercase leading-tight tracking-wide text-slate-900">
                      {r.name}
                    </figcaption>
                    <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">{r.role}</p>
                  </div>
                </div>
                <span className="mt-5 flex gap-0.5 text-gold-500" aria-label="Оценка 5 из 5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </span>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-600">«{r.quote}»</blockquote>
                <p className="mt-6 border-b-2 border-brand-200 pb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-600">
                  {r.badge}
                </p>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}