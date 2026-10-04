import Reveal from './Reveal.jsx';
import { Briefcase, GraduationCap, MessageCircle, Plane } from 'lucide-react';

const PROGRAMS = [
  {
    icon: MessageCircle,
    title: 'Разговорный английский',
    subtitle: 'General & Speaking',
    forWhom: 'тем, кто знает грамматику, но боится говорить вслух',
    result: 'снятие барьера, богатый словарный запас, понимание беглой речи на слух',
  },
  {
    icon: Briefcase,
    title: 'Английский для работы и IT',
    subtitle: 'Business English',
    forWhom: 'специалисты, планирующие переход в международные компании',
    result: 'подготовка к собеседованию, деловая переписка, питчи и участие в митингах',
  },
  {
    icon: GraduationCap,
    title: 'Подготовка к экзаменам',
    subtitle: 'IELTS / TOEFL',
    forWhom: 'поступающие в зарубежные вузы или подающие на релокацию',
    result: 'отработка структуры экзамена, стратегии для Writing/Speaking на 7.5+',
  },
  {
    icon: Plane,
    title: 'Путешествия и релокация',
    subtitle: 'Travel & Relocation',
    forWhom: 'для комфортной адаптации в другой стране и поездок',
    result: 'бронирование жилья, решение бытовых вопросов, смол-токи и экстренные ситуации',
  },
];

export default function Programs() {
  return (
    <section id="programs" className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow">Форматы</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="h-display mt-5">Программы обучения</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Подбираем вектор под вашу текущую задачу и дедлайн
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 xl:grid-cols-4">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) * 90} className="h-full">
              <article className="group flex h-full flex-col border-t-2 border-slate-200 pt-8 transition-colors duration-300 hover:border-brand-600">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-brand-50 text-brand-600 ring-1 ring-brand-200 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                  <p.icon className="h-7 w-7" />
                </div>
                <p className="mt-6 font-display text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                  0{i + 1}
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold uppercase leading-tight text-slate-900">
                  {p.title}
                </h3>
                <p className="mt-0.5 text-sm font-semibold text-brand-600">{p.subtitle}</p>

                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">Для кого</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{p.forWhom}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">Результат</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-700">{p.result}</p>
                  </div>
                </div>

                <a href="#contact" className="link-underline mt-auto pt-8">
                  Выбрать формат
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}