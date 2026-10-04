import Reveal from './Reveal.jsx';

const METRICS = [
  { value: 'C2 Mastery', text: 'подтверждённый наивысший уровень владения языком' },
  { value: 'Cambridge CELTA', text: 'международный кембриджский диплом преподавателя' },
  { value: '8.5 баллов', text: 'личный результат сдачи академического IELTS' },
  { value: '8+ лет', text: 'непрерывного преподавания взрослым и подросткам' },
];

export default function About() {
  return (
    <section id="about" className="bg-paper py-20 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div className="relative">
          <Reveal>
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
              alt="Анна Смирнова — преподаватель английского языка"
              className="aspect-[4/5] w-full object-cover"
              width="600"
              height="750"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={200}>
            <div className="absolute -bottom-6 -right-3 bg-brand-600 px-7 py-5 text-white sm:-right-6">
              <p className="font-display text-2xl font-semibold uppercase leading-none">CELTA · C2</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-100">
                международная квалификация
              </p>
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <p className="eyebrow">О преподавателе</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="h-display mt-5">
              Привет! Меня зовут <span className="text-brand-600">Анна Смирнова</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-lg font-semibold text-slate-800">
              Сертифицированный преподаватель английского языка с международной квалификацией CELTA
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Я верю, что выучить язык может каждый — если перестать зубрить оторванные от жизни упражнения. Моя цель —
              помочь вам свободно выражать мысли, шутить, вести деловые переговоры и чувствовать себя комфортно в любой
              точке мира. На уроках мы разбираем реальные подкасты, статьи и ситуации, а не тексты 20-летней давности.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
              {METRICS.map((m, i) => (
                <div
                  key={m.value}
                  className={`border-t-2 border-slate-200 pt-5 ${i % 2 === 1 ? 'sm:border-t-slate-300' : ''}`}
                >
                  <p className="font-display text-3xl font-semibold leading-none text-brand-600">{m.value}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{m.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={320}>
            <blockquote className="mt-10 border-l-2 border-gold-500 pl-5 text-lg font-semibold leading-relaxed text-slate-800 sm:text-xl">
              «Мой главный принцип — 70% урока говорит ученик. Остальное — моя задача, чтобы это было легко и
              интересно.»
            </blockquote>
          </Reveal>

          <Reveal delay={380}>
            <div className="mt-8 flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
                alt="Анна Смирнова"
                className="h-14 w-14 rounded-full object-cover ring-2 ring-brand-100"
                width="56"
                height="56"
                loading="lazy"
              />
              <div>
                <p className="font-display text-lg font-semibold uppercase tracking-wide text-slate-900">
                  Анна Смирнова
                </p>
                <p className="text-sm text-slate-500">Ваш преподаватель и наставник</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}