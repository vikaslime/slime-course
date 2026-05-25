import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, Zap, CheckCircle2, MessageCircle, Gift, PlayCircle, Heart, ChevronDown } from 'lucide-react';

const CTA_LINK = 'https://t.me/slimewowchallenge_bot';

const problems = [
  'Дитина щодня просить нові розваги',
  'Ви втомилися вигадувати, чим її зайняти',
  'Хочеться активності без телефону та мультиків',
  'Потрібні прості інструкції без хаосу й помилок',
  'Важко знайти рецепти, які справді працюють',
  'Дитина обожнює кольори, блискітки й текстури',
  'Хочеться 20 хвилин спокою вдома',
  'Потрібне заняття, яке викликає щире “вау!”',
];

const included = [
  '3 покрокові уроки',
  'Перевірені рецепти слаймів',
  'Список усіх матеріалів',
  'Бонусний slime-рецепт',
  'Printable stickers',
  'Сертифікат юного науковця',
  'Прості інструкції для дітей',
  'Доступ відразу після оплати',
  'Готові пропорції без помилок',
  'Яскраві slime-ідеї для творчості',
];

const program = [
  {
    day: 'День 1',
    title: 'Перший WOW-слайм',
    text: 'Дитина знайомиться з базовою текстурою, змішує інгредієнти та створює свій перший м’який антистрес.',
    icon: '💚',
  },
  {
    day: 'День 2',
    title: 'Колір, блискітки та магія',
    text: 'Додаємо кольори, декор і блискітки. Дитина експериментує та створює унікальний дизайн.',
    icon: '✨',
  },
  {
    day: 'День 3',
    title: 'Авторський slime-челендж',
    text: 'Фінальний творчий проєкт: дитина комбінує текстури, презентує результат і отримує сертифікат.',
    icon: '🏆',
  },
];

const reviews = [
  {
    name: 'Олена, мама Марійки 7 років',
    text: 'Марійка зробила слайм сама і була така горда! Я думала, буде безлад, але все виявилось дуже зрозуміло.',
  },
  {
    name: 'Ірина, мама Артема 9 років',
    text: 'Нарешті активність без телефону. Син сам просив наступний урок і потім ще годину грався готовим слаймом.',
  },
  {
    name: 'Катерина, мама Софії 6 років',
    text: 'Дуже сподобалось, що матеріали прості. Не треба купувати дорогі набори, а результат реально вау.',
  },
];

const faqs = [
  ['Моя дитина постійно сидить у телефоні. Чи їй буде цікаво?', 'Так. Курс побудований так, щоб дитина одразу отримувала результат своїми руками — це захоплює сильніше, ніж пасивний перегляд відео.'],
  ['У нас немає часу на складні творчі заняття', 'Один урок займає приблизно 15–25 хвилин і не потребує довгої підготовки.'],
  ['Чи не буде вдома безладу?', 'У курсі є рекомендації, як організувати процес акуратно та комфортно для батьків. Але трішки творчого хаосу — це теж частина магії 😊'],
  ['Я не хочу витрачати багато грошей на матеріали', 'Для курсу потрібні прості та доступні інгредієнти, які легко знайти.'],
  ['Моя дитина швидко втрачає інтерес. Чи вистачить мотивації?', 'Діти люблять швидкий “вау-результат”. Уже в перший день дитина створить власний слайм і захоче робити наступні.'],
  ['Для якого віку курс?', 'Курс розрахований на дітей 6–12 років. Молодшим дітям краще проходити уроки разом із дорослими.'],
  ['Це відеоуроки чи PDF?', 'У курсі є покрокові відео та PDF-матеріали.'],
  ['Коли я отримаю доступ?', 'Одразу після оплати. Доступ залишається назавжди.'],
];

function Blob({ className }) {
  return <div className={`absolute rounded-full blur-3xl opacity-60 ${className}`} />;
}

function CtaButton({ children = '🚀 Приєднатися до челенджу зараз', className = '' }) {
  return (
    <a
      href={CTA_LINK}
      className={`inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-fuchsia-500 via-pink-500 to-amber-400 px-6 py-4 text-center text-base font-black uppercase tracking-wide text-white shadow-xl shadow-pink-200 transition hover:scale-[1.02] active:scale-[0.98] ${className}`}
    >
      {children}
    </a>
  );
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="mb-6 text-center">
      {eyebrow && <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-fuchsia-500">{eyebrow}</p>}
      <h2 className="text-3xl font-black leading-tight text-slate-900">{title}</h2>
      {text && <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-slate-600">{text}</p>}
    </div>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full rounded-3xl bg-white/85 p-5 text-left shadow-lg shadow-pink-100 backdrop-blur transition"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-extrabold text-slate-900">{q}</h3>
        <ChevronDown className={`mt-1 h-5 w-5 shrink-0 text-fuchsia-500 transition ${open ? 'rotate-180' : ''}`} />
      </div>
      {open && <p className="mt-3 leading-relaxed text-slate-600">{a}</p>}
    </button>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff7fb] font-sans text-slate-900">
      <div className="relative mx-auto max-w-[430px] bg-gradient-to-b from-pink-50 via-violet-50 to-cyan-50 pb-28 shadow-2xl">
        <Blob className="-right-16 top-10 h-48 w-48 bg-pink-300" />
        <Blob className="-left-20 top-52 h-56 w-56 bg-cyan-300" />

        <section className="relative px-5 pb-10 pt-6 text-center">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-bold text-fuchsia-600 shadow-md shadow-pink-100 backdrop-blur">
              <Sparkles className="h-4 w-4" /> 3 дні творчого slime-челенджу
            </div>

            <div className="relative mx-auto mb-6 flex h-48 w-full items-center justify-center rounded-[2rem] bg-gradient-to-br from-lime-200 via-cyan-200 to-pink-200 p-4 shadow-2xl shadow-pink-100">
              <div className="absolute left-5 top-5 text-3xl">✨</div>
              <div className="absolute bottom-5 right-7 text-3xl">💖</div>
              <motion.div animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }} transition={{ repeat: Infinity, duration: 3 }} className="rounded-[2.5rem] bg-white/55 p-7 shadow-inner">
                <div className="text-7xl">🧪</div>
              </motion.div>
              <div className="absolute bottom-4 left-6 rounded-full bg-lime-300 px-4 py-2 text-sm font-black text-lime-900 shadow">slime magic</div>
            </div>

            <h1 className="text-4xl font-black leading-[0.95] tracking-tight text-slate-950">
              Вже 500+ дітей створили свій перший слайм! Ваша черга?
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-700">
              Уявіть обличчя вашої дитини, коли вона вперше створить ідеальний слайм. 3 дні захопливих експериментів без складних інгредієнтів — тільки WOW-ефект!
            </p>
            <div className="mt-6">
              <CtaButton />
            </div>
            <p className="mt-3 text-sm font-semibold text-slate-500">Доступ одразу після оплати · 6–12 років · з телефону</p>
          </motion.div>
        </section>

        <section className="px-5 py-8">
          <SectionTitle eyebrow="Знайомо?" title="Коли дитині знову нудно — у мами починається квест" text="Цей мінікурс перетворює звичайний день удома на яскравий творчий експеримент." />
          <div className="grid gap-3">
            {problems.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-3xl bg-white/80 p-4 shadow-lg shadow-pink-100">
                <Zap className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
                <p className="font-semibold text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-5 py-8">
          <div className="rounded-[2rem] bg-gradient-to-br from-white to-lime-50 p-6 shadow-xl shadow-cyan-100">
            <SectionTitle eyebrow="Користь" title="Дитина не просто повторює рецепт — вона створює" />
            <div className="grid gap-3">
              {['Експериментує з матеріалами', 'Досліджує текстури руками', 'Комбінує кольори та декор', 'Створює унікальні слайми', 'Розвиває креативне мислення через гру'].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  <span className="font-bold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-8">
          <SectionTitle eyebrow="Програма" title="3 дні — 3 яскраві результати" text="Короткі уроки по 15–25 хвилин, які легко пройти вдома." />
          <div className="grid gap-4">
            {program.map((item) => (
              <div key={item.day} className="rounded-[2rem] bg-white/85 p-5 shadow-xl shadow-violet-100">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-fuchsia-100 px-4 py-2 text-sm font-black text-fuchsia-600">{item.day}</span>
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-black text-slate-900">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-5 py-8">
          <SectionTitle eyebrow="Що входить" title="Все готово — вам не потрібно нічого вигадувати" />
          <div className="grid grid-cols-2 gap-3">
            {included.map((item) => (
              <div key={item} className="rounded-3xl bg-white/85 p-4 text-center shadow-lg shadow-pink-100">
                <Gift className="mx-auto mb-2 h-5 w-5 text-fuchsia-500" />
                <p className="text-sm font-extrabold leading-snug text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-5 py-8">
          <SectionTitle eyebrow="Відгуки" title="Мами вже побачили цей дитячий захват" />
          <div className="grid gap-4">
            {reviews.map((review) => (
              <div key={review.name} className="rounded-[2rem] bg-white p-5 shadow-xl shadow-cyan-100">
                <div className="mb-3 flex gap-1 text-amber-400">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                <p className="leading-relaxed text-slate-700">“{review.text}”</p>
                <p className="mt-4 font-black text-fuchsia-600">{review.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-5 py-8">
          <div className="rounded-[2rem] bg-gradient-to-br from-fuchsia-500 via-pink-500 to-amber-400 p-6 text-center text-white shadow-2xl shadow-pink-200">
            <Heart className="mx-auto mb-3 h-9 w-9 fill-current" />
            <h2 className="text-3xl font-black leading-tight">Улюблена творчість дітей тепер у вас вдома</h2>
            <p className="mt-3 text-white/90">Створіть момент, коли дитина скаже: “Мамо, дивись, я зробив сам!”</p>
            <CtaButton className="mt-5 bg-white text-fuchsia-600 shadow-none" >Створити WOW-слайм</CtaButton>
          </div>
        </section>

        <section className="px-5 py-8">
          <SectionTitle eyebrow="FAQ" title="Питання, які часто хвилюють батьків" />
          <div className="grid gap-3">
            {faqs.map(([q, a]) => <FAQItem key={q} q={q} a={a} />)}
          </div>
        </section>

        <footer className="px-5 py-8 text-center">
          <div className="rounded-[2rem] bg-white/75 p-6 shadow-lg shadow-pink-100">
            <PlayCircle className="mx-auto mb-3 h-9 w-9 text-fuchsia-500" />
            <h2 className="text-2xl font-black">Те, що діти справді люблять</h2>
            <p className="mt-2 text-slate-600">Слайми, блискітки, експерименти й гордість за власний результат.</p>
            <div className="mt-5 flex gap-3">
              <a href="#" className="flex-1 rounded-2xl bg-slate-100 px-4 py-3 font-bold text-slate-700">Instagram</a>
              <a href={CTA_LINK} className="flex-1 rounded-2xl bg-cyan-100 px-4 py-3 font-bold text-cyan-700">Telegram</a>
            </div>
          </div>
        </footer>

        <div className="fixed inset-x-0 bottom-0 z-50 mx-auto max-w-[430px] bg-white/80 p-4 shadow-[0_-10px_30px_rgba(236,72,153,0.18)] backdrop-blur-xl">
          <a href={CTA_LINK} className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-5 py-4 text-center text-base font-black uppercase text-white shadow-lg">
            <MessageCircle className="h-5 w-5" /> Забрати доступ у Telegram
          </a>
        </div>
      </div>
    </main>
  );
}
