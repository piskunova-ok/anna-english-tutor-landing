import Reveal from './Reveal.jsx';
import { ArrowRight, CalendarClock, Mic, MonitorPlay, Newspaper, TrendingUp } from 'lucide-react';

const BENEFITS = [
  {
    icon: Mic,
    title: '70% урока — ваша речь',
    text: 'Никаких монологов преподавателя. Говорите вы, я направляю и корректирую.',
  },
  {
    icon: Newspaper,
    title: 'Аутентичный контент',
    text: 'Свежие видео TED, новости BBC, живой Twitter/Reddit вместо советских учебников.',
  },
  {
    icon: CalendarClock,
    title: 'Гибкий график и отмены',
    text: 'Перенос занятия без сгорания оплаты при предупреждении за 12 часов.',
  },
  {
    icon: TrendingUp,
    title: 'Постоянный трекинг прогресса',
    text: 'Ежемесячные срезы знаний, чтобы вы наглядно видели, как растёт уровень.',
  },
  {
    icon: MonitorPlay,
    title: 'Интерактивный кабинет',
    text: 'Материалы, личный словарь и аудиофайлы в одном Notion-пространстве с доступом 24/7.',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-brand-50/70 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow">Преимущества</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="h-display mt-5">Методика, которая приводит к результату</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Современный подход: живая речь, реальные материалы и понятная система обучения без хаоса.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 90} className="h-full">
              <article className="group h-full">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-brand-600 text-white transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand-500">
                  <b.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold uppercase leading-tight text-slate-900">
                  {b.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600">{b.text}</p>
              </article>
            </Reveal>
          ))}

          <Reveal delay={200} className="h-full">
            <article className="flex min-h-64 flex-col justify-center bg-slate-900 p-9 text-white">
              <p className="font-display text-2xl font-semibold uppercase leading-tight">
                Не знаете, с чего начать?
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Приходите на бесплатный пробный урок — определим уровень, разберём цели и составим план.
              </p>
              <a href="#contact" className="btn-gold mt-7 w-fit">
                Начать сейчас
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}