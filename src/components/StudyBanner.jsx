import Reveal from './Reveal.jsx';
import { ArrowRight, MessageCircle, MonitorPlay, Video } from 'lucide-react';

const POINTS = [
  { icon: Video, text: 'Занятия 1 на 1 по видеосвязи' },
  { icon: MonitorPlay, text: 'Интерактивный кабинет с материалами' },
  { icon: MessageCircle, text: 'Чат поддержки между уроками' },
];

export default function StudyBanner() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-24 sm:py-28">
      <img
        src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=2000&q=80"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="lazy"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-slate-950/80" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="eyebrow text-gold-400">Онлайн-формат</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-5 font-display text-4xl font-semibold uppercase leading-tight tracking-tight text-white sm:text-5xl">
            Обучение проходит онлайн — из любой точки мира
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Не нужно тратить время на дорогу. Всё, что нужно, — ноутбук или смартфон, наушники и желание начать.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <ul className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap sm:gap-x-10">
            {POINTS.map((p) => (
              <li key={p.text} className="flex items-center gap-2.5 text-sm font-semibold text-slate-200">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-gold-400">
                  <p.icon className="h-4 w-4" />
                </span>
                {p.text}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={260}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#contact" className="btn-gold">
              Записаться на пробный урок
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#reviews" className="link-underline-white">
              Смотреть отзывы
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}