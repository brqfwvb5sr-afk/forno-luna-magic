import { useState, type FormEvent } from "react";
import heroPizza from "@/assets/hero-pizza.jpg";
import oven from "@/assets/oven.jpg";
import galDough from "@/assets/gal-dough.jpg";
import galInterior from "@/assets/gal-interior.jpg";
import galSpicy from "@/assets/gal-spicy.jpg";
import galBurrata from "@/assets/gal-burrata.jpg";

const pizzas = [
  {
    name: "Margherita Dorata",
    desc: "San-Marzano, Fior di Latte, Basilikum, kaltgepresstes Olivenöl.",
    price: "13,50",
    n: "01",
  },
  {
    name: "Funghi Selvatica",
    desc: "Steinpilze, Champignons, Taleggio, Thymian, schwarzer Pfeffer.",
    price: "16,80",
    n: "02",
  },
  {
    name: "Piccante Luna",
    desc: "Nduja, scharfe Salami, Chili-Honig, geräucherter Scamorza.",
    price: "17,40",
    n: "03",
  },
  {
    name: "Burrata Verde",
    desc: "Pugliese-Burrata, Pistazienpesto, Rucola, Zitronenschale.",
    price: "18,20",
    n: "04",
  },
];

const Index = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "19:30",
    guests: "2",
    phone: "",
    note: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 group">
            <svg width="22" height="22" viewBox="0 0 24 24" className="text-tomato" fill="none">
              <path d="M21 13.5A9 9 0 1 1 10.5 3a7 7 0 0 0 10.5 10.5Z" fill="currentColor"/>
            </svg>
            <span className="font-serif text-xl tracking-tight">Forno Luna</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#menue" className="hover:text-tomato transition-colors">Menü</a>
            <a href="#handwerk" className="hover:text-tomato transition-colors">Handwerk</a>
            <a href="#galerie" className="hover:text-tomato transition-colors">Galerie</a>
            <a href="#reservieren" className="hover:text-tomato transition-colors">Reservieren</a>
          </nav>
          <a
            href="#reservieren"
            className="hidden md:inline-flex items-center gap-2 text-sm border border-ink/80 px-4 py-2 rounded-full hover:bg-ink hover:text-cream transition-colors"
          >
            Tisch reservieren
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-16 overflow-hidden bg-olive">
        <div className="absolute inset-0 ember-glow pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-12 gap-10 items-center relative">
          <div className="md:col-span-6 text-cream animate-rise">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-gold mb-8">
              <span className="h-px w-10 bg-gold/60" />
              Pizzeria · Zürich · seit MMXVIII
            </div>
            <h1 className="font-serif text-[clamp(3rem,7vw,6.5rem)] leading-[0.95] font-light">
              Pizza,<br />
              <span className="italic text-gold">Feuer,</span><br />
              Abendlicht.
            </h1>
            <p className="mt-8 max-w-md text-cream/80 text-lg leading-relaxed">
              Neapolitanische Teige, wilde Kräuter und ein Ofen, der jeden Abend leuchtet.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#reservieren"
                className="inline-flex items-center gap-2 bg-tomato text-cream px-7 py-4 rounded-full text-sm font-medium hover:bg-[hsl(var(--tomato-deep))] transition-colors shadow-[0_20px_60px_-20px_hsl(8_80%_40%/0.6)]"
              >
                Tisch reservieren →
              </a>
              <a
                href="#menue"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-medium border border-cream/30 text-cream hover:bg-cream hover:text-ink transition-colors"
              >
                Menü ansehen
              </a>
            </div>
          </div>

          <div className="md:col-span-6 relative animate-rise delay-2">
            <div className="relative aspect-[4/5] md:aspect-[5/6] overflow-hidden rounded-sm shadow-[var(--shadow-ember)]">
              <img
                src={heroPizza}
                alt="Margherita aus dem Holzofen"
                className="w-full h-full object-cover animate-flicker"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-olive/60 via-transparent to-transparent" />
            </div>
            <div className="hidden md:flex absolute -left-10 bottom-10 flex-col items-center gap-3 text-gold/80 text-[10px] uppercase tracking-[0.35em] [writing-mode:vertical-rl] rotate-180">
              <span>485°C · Buchenholz · 90 Sekunden</span>
            </div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menue" className="bg-cream py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-tomato mb-4">Signatur — Pizze</div>
              <h2 className="font-serif text-5xl md:text-6xl leading-none max-w-2xl">
                Vier Pizzen, jede mit <span className="italic">eigener Geschichte</span>.
              </h2>
            </div>
            <p className="text-ink/60 max-w-sm text-sm leading-relaxed">
              Die Karte bleibt klein, damit jeder Teig in Ruhe gehen darf. Wechselnde Spezialitäten findest du auf der Schiefertafel.
            </p>
          </div>

          <ul className="divide-y divide-ink/15 border-y border-ink/15">
            {pizzas.map((p) => (
              <li
                key={p.name}
                className="group grid grid-cols-12 gap-4 md:gap-8 py-7 md:py-9 items-baseline hover:bg-ink/[0.03] transition-colors px-2"
              >
                <span className="col-span-2 md:col-span-1 font-serif text-tomato text-sm md:text-base">{p.n}</span>
                <div className="col-span-10 md:col-span-7">
                  <h3 className="font-serif text-2xl md:text-3xl mb-2 group-hover:italic transition-all">
                    {p.name}
                  </h3>
                  <p className="text-ink/65 text-sm md:text-base max-w-xl">{p.desc}</p>
                </div>
                <div className="col-span-12 md:col-span-4 flex items-center md:justify-end gap-4">
                  <span className="hidden md:block flex-1 h-px rule text-ink/40" />
                  <span className="font-serif text-2xl md:text-3xl">
                    <span className="text-ink/40 text-sm align-top mr-1">CHF</span>
                    {p.price}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HANDWERK */}
      <section id="handwerk" className="bg-ink text-cream py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img src={oven} alt="Holzofen mit Flammen" loading="lazy" className="w-full h-full object-cover animate-flicker" />
            </div>
          </div>
          <div className="md:col-span-7 md:pl-8">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-6">Das Handwerk</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] mb-10 font-light">
              Geduld ist die wichtigste <span className="italic text-gold">Zutat</span>.
            </h2>

            <div className="grid sm:grid-cols-3 gap-10">
              <div>
                <div className="font-serif text-5xl text-gold mb-3">72h</div>
                <div className="text-xs uppercase tracking-widest text-cream/50 mb-2">Teigruhe</div>
                <p className="text-cream/70 text-sm leading-relaxed">
                  Lange kalte Gärung mit Caputo-Mehl. Bekömmlich, leicht, mit leoparden­geflecktem Cornicione.
                </p>
              </div>
              <div>
                <div className="font-serif text-5xl text-gold mb-3">D.O.P.</div>
                <div className="text-xs uppercase tracking-widest text-cream/50 mb-2">San Marzano</div>
                <p className="text-cream/70 text-sm leading-relaxed">
                  Tomaten aus vulkanischer Erde am Fuss des Vesuvs. Nur Salz, nur Basilikum, sonst nichts.
                </p>
              </div>
              <div>
                <div className="font-serif text-5xl text-gold mb-3">485°</div>
                <div className="text-xs uppercase tracking-widest text-cream/50 mb-2">Buchenholzofen</div>
                <p className="text-cream/70 text-sm leading-relaxed">
                  Neunzig Sekunden über offener Flamme. Rauch, Charakter und eine Kruste mit Erinnerung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section id="galerie" className="bg-cream py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-tomato mb-4">Galerie</div>
              <h2 className="font-serif text-4xl md:text-5xl max-w-xl">Abende, Teige, Schatten.</h2>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-3 md:gap-5">
            <figure className="col-span-12 md:col-span-7 aspect-[4/3] overflow-hidden rounded-sm group">
              <img src={galInterior} alt="Innenraum bei Kerzenlicht" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            </figure>
            <figure className="col-span-6 md:col-span-5 aspect-[4/5] overflow-hidden rounded-sm group">
              <img src={galBurrata} alt="Burrata Verde Pizza" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            </figure>
            <figure className="col-span-6 md:col-span-5 aspect-square overflow-hidden rounded-sm group">
              <img src={galSpicy} alt="Piccante Luna" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            </figure>
            <figure className="col-span-12 md:col-span-7 aspect-[16/10] overflow-hidden rounded-sm group">
              <img src={galDough} alt="Teig wird von Hand geknetet" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            </figure>
          </div>
        </div>
      </section>

      {/* RESERVIEREN */}
      <section id="reservieren" className="bg-olive text-cream py-24 md:py-32 relative">
        <div className="absolute inset-0 ember-glow opacity-60 pointer-events-none" />
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 relative grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-6">Reservieren</div>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight">
              Setz dich ans <span className="italic text-gold">Feuer</span>.
            </h2>
            <p className="mt-6 text-cream/75 leading-relaxed max-w-sm">
              Wir halten gern einen Tisch für dich frei. Lieber zuhause? Bestelle direkt unter{" "}
              <a href="tel:+41445551872" className="underline decoration-gold/60 underline-offset-4 hover:text-gold">
                +41 44 555 18 72
              </a>{" "}
              — Abholung in 20 Minuten.
            </p>

            <div className="mt-10 space-y-2 text-sm text-cream/70">
              <div className="flex gap-3"><span className="text-gold">→</span> Di–So · 17:00–23:00</div>
              <div className="flex gap-3"><span className="text-gold">→</span> Via del Fuoco 12, 8000 Zürich</div>
            </div>
          </div>

          <div className="md:col-span-7">
            {sent ? (
              <div className="border border-gold/40 bg-ink/40 backdrop-blur-sm p-10 md:p-14 rounded-sm animate-rise">
                <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Grazie mille</div>
                <h3 className="font-serif text-3xl md:text-4xl mb-4">Wir sehen uns am Ofen.</h3>
                <p className="text-cream/75 leading-relaxed">
                  Wir haben deine Anfrage für <span className="text-gold">{form.guests} Personen</span> am{" "}
                  <span className="text-gold">{form.date || "gewünschten Datum"}</span> um{" "}
                  <span className="text-gold">{form.time}</span> Uhr erhalten. Eine kurze Bestätigung folgt telefonisch.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 text-sm underline decoration-gold/60 underline-offset-4 hover:text-gold"
                >
                  Neue Reservierung
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="border border-cream/15 bg-ink/30 backdrop-blur-sm p-6 md:p-10 rounded-sm space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Name">
                    <input required value={form.name} onChange={update("name")} className={inputCls} placeholder="Vor- und Nachname" />
                  </Field>
                  <Field label="Telefon">
                    <input required value={form.phone} onChange={update("phone")} className={inputCls} placeholder="+41 …" />
                  </Field>
                </div>
                <div className="grid sm:grid-cols-3 gap-5">
                  <Field label="Datum">
                    <input required type="date" value={form.date} onChange={update("date")} className={inputCls} />
                  </Field>
                  <Field label="Uhrzeit">
                    <select value={form.time} onChange={update("time")} className={inputCls}>
                      {["17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30"].map(t => (
                        <option key={t} value={t} className="bg-ink">{t}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Personen">
                    <select value={form.guests} onChange={update("guests")} className={inputCls}>
                      {[1,2,3,4,5,6,7,8].map(n => (
                        <option key={n} value={n} className="bg-ink">{n}</option>
                      ))}
                    </select>
                  </Field>
                </div>
                <Field label="Anmerkung (optional)">
                  <textarea rows={3} value={form.note} onChange={update("note")} className={inputCls + " resize-none"} placeholder="Allergien, Anlass, Tischwunsch…" />
                </Field>
                <button
                  type="submit"
                  className="w-full bg-tomato text-cream py-4 rounded-full text-sm font-medium hover:bg-[hsl(var(--tomato-deep))] transition-colors"
                >
                  Tisch anfragen
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-cream/80 py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" className="text-tomato" fill="none">
                <path d="M21 13.5A9 9 0 1 1 10.5 3a7 7 0 0 0 10.5 10.5Z" fill="currentColor"/>
              </svg>
              <span className="font-serif text-xl text-cream">Forno Luna</span>
            </div>
            <p className="text-sm max-w-sm leading-relaxed text-cream/60">
              Eine kleine neapolitanische Pizzeria im Zürcher Kreis 4. Holzofen, lange Teigruhe, kurze Karte.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-gold mb-4">Besuch</div>
            <p className="text-sm leading-relaxed">
              Via del Fuoco 12<br />
              8000 Zürich
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-gold mb-4">Kontakt</div>
            <p className="text-sm leading-relaxed">
              Di–So · 17:00–23:00<br />
              <a href="tel:+41445551872" className="hover:text-gold">+41 44 555 18 72</a>
            </p>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 mt-12 pt-6 border-t border-cream/10 flex flex-wrap justify-between gap-4 text-xs text-cream/40">
          <span>© {new Date().getFullYear()} Forno Luna · Zürich</span>
          <span className="font-serif italic">Pizza, Feuer, Abendlicht.</span>
        </div>
      </footer>
    </div>
  );
};

const inputCls =
  "w-full bg-transparent border border-cream/20 rounded-sm px-4 py-3 text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold transition-colors text-sm";

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <label className="block">
    <span className="block text-[10px] uppercase tracking-[0.25em] text-cream/50 mb-2">{label}</span>
    {children}
  </label>
);

export default Index;
