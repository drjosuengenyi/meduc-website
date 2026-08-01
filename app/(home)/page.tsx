"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import "./home.css";

type Lang = "fr" | "en";

const LANG_STORAGE_KEY = "meduc-lang";

const USSD_FLOW: { fr: string; en: string }[] = [
  {
    fr: "Bienvenue sur MeducAHT\n1. Créer mon compte IDNS\n2. Acheter e-Voucher AHT\n3. Payer mes soins\n4. Consulter mon solde",
    en: "Welcome to MeducAHT\n1. Create IDNS account\n2. Buy AHT e-Voucher\n3. Pay for care\n4. Check balance",
  },
  {
    fr: "Achat e-Voucher AHT\nMontant disponible :\n3 640 CDF = 1 AHT\nEntrez le montant en CDF :",
    en: "Buy AHT e-Voucher\nAvailable:\n3,640 CDF = 1 AHT\nEnter amount in CDF:",
  },
  {
    fr: "Confirmation\n1 AHT = 1.30 USD\nDestinataire : Clinique Centrale\nEntrez votre code PIN :",
    en: "Confirmation\n1 AHT = $1.30 USD\nRecipient: Central Clinic\nEnter your PIN:",
  },
  {
    fr: "✓ Paiement réussi !\nSoin ICD-10 validé\nDistribution automatique :\n→ Clinique : part garantie\n→ DGI : contribution fiscale\n→ Meduc GM : plateforme\nMerci d’utiliser MeducAHT.",
    en: "✓ Payment successful!\nICD-10 care validated\nAutomatic distribution:\n→ Clinic: guaranteed share\n→ DGI: fiscal contribution\n→ Meduc GM: platform\nThank you for using MeducAHT.",
  },
];

const NAV_SECTIONS = [
  "hero",
  "probleme",
  "solution",
  "comment",
  "acteurs",
  "technologie",
  "faq",
  "contact",
] as const;

/** Compteur animé au défilement (rendu statique = valeur finale, pour le SEO). */
function CountUp({
  target,
  suffix = "",
  decimals = 0,
}: {
  target: number;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);
  const [display, setDisplay] = useState(
    () => target.toFixed(decimals) + suffix
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || startedRef.current) return;
          startedRef.current = true;
          const duration = 1800;
          const steps = 60;
          let step = 0;
          const timer = window.setInterval(() => {
            step += 1;
            const ease = 1 - Math.pow(1 - step / steps, 3);
            const value = target * ease;
            setDisplay(value.toFixed(decimals) + suffix);
            if (step >= steps) {
              setDisplay(target.toFixed(decimals) + suffix);
              window.clearInterval(timer);
            }
          }, duration / steps);
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix, decimals]);

  return (
    <div className="stat-n" ref={ref}>
      {display}
    </div>
  );
}

/** Élément de FAQ dépliable, accessible au clavier. */
function FaqItem({
  questionFr,
  questionEn,
  children,
}: {
  questionFr: string;
  questionEn: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? " open" : ""}`}>
      <button
        type="button"
        className="faq-q"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="fr">{questionFr}</span>
        <span className="en">{questionEn}</span>
        <span className="faq-arrow" aria-hidden>
          ▼
        </span>
      </button>
      <div className="faq-a">{children}</div>
    </div>
  );
}

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("fr");
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const [ussdStep, setUssdStep] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Langue sauvegardée (après hydratation, pour éviter tout décalage SSG/client).
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(LANG_STORAGE_KEY);
      if (saved === "fr" || saved === "en") setLang(saved);
    } catch {
      /* stockage indisponible : on reste en français */
    }
  }, []);

  const switchLang = useCallback((next: Lang) => {
    setLang(next);
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, next);
    } catch {
      /* stockage indisponible */
    }
  }, []);

  // Fond du body en navy profond (#00040F) sur la page d'accueil,
  // pour éviter tout flash clair au sur-défilement ; restauré en quittant.
  useEffect(() => {
    const previous = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#00040f";
    return () => {
      document.body.style.backgroundColor = previous;
    };
  }, []);

  // Fond de navigation au défilement.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lien actif dans la navigation selon la section visible.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    NAV_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const goTo = useCallback(
    (id: string) => (event: React.MouseEvent) => {
      event.preventDefault();
      setMenuOpen(false);
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    []
  );

  const navLink = (id: string, labelFr: string, labelEn?: string) => (
    <>
      <a
        className={`nl fr${activeId === id ? " on" : ""}`}
        href={`#${id}`}
        onClick={goTo(id)}
      >
        {labelFr}
      </a>
      {labelEn !== undefined && (
        <a
          className={`nl en${activeId === id ? " on" : ""}`}
          href={`#${id}`}
          onClick={goTo(id)}
        >
          {labelEn}
        </a>
      )}
    </>
  );

  const isLastUssdStep = ussdStep === USSD_FLOW.length - 1;

  return (
    <div className="aht" data-lang={lang}>
      {/* ── NAVIGATION ── */}
      <nav
        id="main-nav"
        className={scrolled || menuOpen ? "scrolled" : undefined}
      >
        <a className="nav-brand" href="#hero" onClick={goTo("hero")}>
          Meduc<em>AHT</em>
        </a>
        <div className={`nav-links${menuOpen ? " open" : ""}`}>
          {navLink("probleme", "Problème", "Problem")}
          {navLink("solution", "Solution", "Solution")}
          {navLink("comment", "Comment ça marche", "How it works")}
          {navLink("acteurs", "Acteurs", "Stakeholders")}
          {navLink("technologie", "Technologie", "Technology")}
          <a
            className={`nl${activeId === "faq" ? " on" : ""}`}
            href="#faq"
            onClick={goTo("faq")}
          >
            FAQ
          </a>
          {navLink("contact", "Contact", "Contact")}
        </div>
        <div className="nav-right">
          <div className="lang-toggle">
            <button
              type="button"
              className={`btn-lang${lang === "fr" ? " active" : ""}`}
              onClick={() => switchLang("fr")}
            >
              FR
            </button>
            <button
              type="button"
              className={`btn-lang${lang === "en" ? " active" : ""}`}
              onClick={() => switchLang("en")}
            >
              EN
            </button>
          </div>
          <a className="nav-cta fr" href="#contact" onClick={goTo("contact")}>
            Devenir Partenaire
          </a>
          <a className="nav-cta en" href="#contact" onClick={goTo("contact")}>
            Partner with Us
          </a>
          <button
            type="button"
            className="nav-burger"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="hero" className="hero">
        <div className="hero-bg" aria-hidden />
        <div className="hero-grid" aria-hidden />
        <div className="w">
          <div className="hero-left">
            <div className="eyebrow">
              <div className="ey-line" aria-hidden />
              <div className="ey-txt">Meduc GM Africa</div>
              <div className="ey-badge">Africa Health e-Voucher</div>
            </div>

            <h1 className="fr">
              Accès Inclusif
              <br />
              aux Soins de Santé.
              <br />
              Une Crise
              <br />
              <em>Transformée.</em>
            </h1>
            <h1 className="en">
              Inclusive Access
              <br />
              to Healthcare.
              <br />A Crisis
              <br />
              <em>Transformed.</em>
            </h1>

            <p className="hero-hook fr">
              La RDC à l’heure de l’innovation. Une infrastructure de
              confiance basée sur le VMS, inscrite sur Azure Ledger, pour un
              accès inclusif et équitable aux soins de santé.
            </p>
            <p className="hero-hook en">
              The DRC in the age of innovation. A trusted infrastructure built
              on VMS, recorded on Azure Ledger, for inclusive and equitable
              access to healthcare.
            </p>

            <p className="hero-body fr">
              <strong>50 millions de Congolais</strong> n’ont pas accès au
              financement des soins. MeducAHT introduit l’
              <span className="hl">Africa Health e-Voucher (AHT)</span> — un
              système de paiement santé à réserve intégrale, accessible via{" "}
              <strong>USSD *707#</strong>, sans banque ni smartphone. Chaque
              paiement est distribué automatiquement et enregistré de façon
              immuable sur <strong>Microsoft Azure Confidential Ledger</strong>
              .
            </p>
            <p className="hero-body en">
              <strong>50 million Congolese</strong> have no access to
              healthcare financing. MeducAHT introduces the{" "}
              <span className="hl">Africa Health e-Voucher (AHT)</span> — a
              full-reserve health payment system accessible via{" "}
              <strong>USSD *707#</strong>, without a bank account or
              smartphone. Every payment is automatically distributed and
              immutably recorded on{" "}
              <strong>Microsoft Azure Confidential Ledger</strong>.
            </p>

            <div className="cta-row">
              <button
                type="button"
                className="btn-primary fr"
                onClick={goTo("comment")}
              >
                Découvrir l’AHT
              </button>
              <button
                type="button"
                className="btn-primary en"
                onClick={goTo("comment")}
              >
                Discover AHT
              </button>
              <button
                type="button"
                className="btn-outline fr"
                onClick={goTo("contact")}
              >
                Devenir partenaire
              </button>
              <button
                type="button"
                className="btn-outline en"
                onClick={goTo("contact")}
              >
                Partner with us
              </button>
              <div className="ussd-chip">*707#</div>
            </div>
            <div className="hero-badges">
              <span className="hb hb-g">HealthTech</span>
              <span className="hb hb-g">FinTech</span>
              <span className="hb hb-a">Microsoft Azure</span>
              <span className="hb hb-a">Confidential Ledger</span>
              <span className="hb hb-w">ICD-10</span>
              <span className="hb hb-w">USSD *707#</span>
            </div>
          </div>

          {/* Simulateur USSD */}
          <div className="phone-wrap">
            <div className="phone">
              <div className="phone-bar">
                <span className="phone-time">09:41</span>
                <span className="phone-sig">Airtel ●●●</span>
              </div>
              <div className="phone-ussd-hd">
                <div className="phone-ussd-title">MeducAHT — *707#</div>
                <div className="phone-ussd-num">USSD Interactive Demo</div>
              </div>
              <div id="ussd-screen">{USSD_FLOW[ussdStep][lang]}</div>
              <div className="phone-btns">
                <span className="ussd-step-lbl">
                  {ussdStep + 1} / {USSD_FLOW.length}
                </span>
                {!isLastUssdStep ? (
                  <button
                    type="button"
                    id="ussd-next"
                    onClick={() =>
                      setUssdStep((s) => Math.min(s + 1, USSD_FLOW.length - 1))
                    }
                  >
                    ▶ Suite
                  </button>
                ) : (
                  <button
                    type="button"
                    id="ussd-reset"
                    onClick={() => setUssdStep(0)}
                  >
                    ↻ Reset
                  </button>
                )}
              </div>
            </div>
            <div className="phone-credit fr">
              Simulation interactive USSD *707#
            </div>
            <div className="phone-credit en">
              Interactive USSD *707# simulation
            </div>
          </div>
        </div>
      </section>

      {/* ── BANDEAU DE STATISTIQUES ── */}
      <div className="stats-strip">
        <div className="w-wide">
          <div className="stats-grid">
            <div className="stat-item">
              <CountUp target={50} suffix="M+" />
              <div className="stat-l fr">
                Congolais
                <br />
                non-bancarisés
              </div>
              <div className="stat-l en">
                Unbanked
                <br />
                Congolese
              </div>
            </div>
            <div className="stat-item">
              <CountUp target={38} suffix="M" />
              <div className="stat-l fr">
                Objectif
                <br />
                2030
              </div>
              <div className="stat-l en">
                Target
                <br />
                2030
              </div>
            </div>
            <div className="stat-item">
              <CountUp target={26} />
              <div className="stat-l fr">
                Provinces
                <br />
                RDC
              </div>
              <div className="stat-l en">
                DRC
                <br />
                Provinces
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-n">100M</div>
              <div className="stat-l fr">
                Phase 2<br />
                Pan-africaine
              </div>
              <div className="stat-l en">
                Phase 2<br />
                Pan-African
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-n">*707#</div>
              <div className="stat-l fr">
                USSD direct
                <br />
                sans smartphone
              </div>
              <div className="stat-l en">
                Direct USSD
                <br />
                no smartphone
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── PROBLÈME ── */}
      <section id="probleme" className="section-light">
        <div className="w">
          <div className="section-label">
            <div className="sl-line" aria-hidden />
            <div className="sl-txt fr">01 — Problème</div>
            <div className="sl-txt en">01 — Problem</div>
          </div>
          <h2 className="fr">
            Une crise sanitaire
            <br />
            <em>structurelle.</em>
          </h2>
          <h2 className="en">
            A structural
            <br />
            <em>healthcare crisis.</em>
          </h2>
          <p className="section-sub fr">
            En RDC, le système de santé ne souffre pas d’un manque de volonté —
            il souffre d’une absence d’infrastructure de paiement fiable et
            traçable.
          </p>
          <p className="section-sub en">
            In the DRC, the healthcare system doesn’t lack goodwill — it lacks
            a reliable, traceable payment infrastructure.
          </p>
          <div className="prob-grid">
            <div className="prob-card">
              <div className="pc-icon" aria-hidden>
                👨‍⚕️
              </div>
              <div className="pc-title fr">50M+ sans financement</div>
              <div className="pc-title en">50M+ without financing</div>
              <div className="pc-body fr">
                50 millions de Congolais ne peuvent pas accéder aux soins faute
                de mécanisme de paiement adapté. Pas de banque, pas de
                smartphone, pas d’accès.
              </div>
              <div className="pc-body en">
                50 million Congolese cannot access care due to the lack of a
                suitable payment mechanism. No bank, no smartphone, no access.
              </div>
            </div>
            <div className="prob-card">
              <div className="pc-icon" aria-hidden>
                🏥
              </div>
              <div className="pc-title fr">Hôpitaux insolvables</div>
              <div className="pc-title en">Insolvent hospitals</div>
              <div className="pc-body fr">
                Les établissements de santé accumulent les créances impayées.
                Sans trésorerie garantie, ils ne peuvent ni investir ni se
                moderniser.
              </div>
              <div className="pc-body en">
                Healthcare facilities accumulate unpaid receivables. Without
                guaranteed cash flow, they can neither invest nor modernize.
              </div>
            </div>
            <div className="prob-card">
              <div className="pc-icon" aria-hidden>
                📋
              </div>
              <div className="pc-title fr">Subventions détournées</div>
              <div className="pc-title en">Diverted subsidies</div>
              <div className="pc-body fr">
                Les subventions étatiques pour la santé sont systématiquement
                non-traçables et détournées avant d’atteindre les
                bénéficiaires.
              </div>
              <div className="pc-body en">
                State health subsidies are systematically untrackable and
                diverted before reaching beneficiaries.
              </div>
            </div>
            <div className="prob-card">
              <div className="pc-icon" aria-hidden>
                📄
              </div>
              <div className="pc-title fr">Fiscalité non-collectée</div>
              <div className="pc-title en">Uncollected fiscal revenue</div>
              <div className="pc-body fr">
                Les transactions santé se font en espèces, hors système fiscal.
                L’État perd des milliards de revenus fiscaux générés par la
                santé.
              </div>
              <div className="pc-body en">
                Health transactions happen in cash, outside the fiscal system.
                The state loses billions in health-generated tax revenue.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLUTION ── */}
      <section id="solution">
        <div className="w">
          <div className="section-label">
            <div className="sl-line" aria-hidden />
            <div className="sl-txt fr">02 — Solution</div>
            <div className="sl-txt en">02 — Solution</div>
          </div>
          <h2 className="fr">
            L’Africa Health e-Voucher —<br />
            <em>AHT.</em>
          </h2>
          <h2 className="en">
            The Africa Health e-Voucher —<br />
            <em>AHT.</em>
          </h2>
          <p className="section-sub fr">
            Un e-voucher de santé à réserve intégrale qui résout simultanément
            les quatre problèmes. Sans banque. Sans smartphone. Sans
            intermédiaire.
          </p>
          <p className="section-sub en">
            A full-reserve health e-voucher that simultaneously solves all four
            problems. No bank. No smartphone. No intermediary.
          </p>

          <div className="arrow-row" aria-hidden>
            <div className="arrow-line" />
            <div className="arrow-icon">▼</div>
            <div className="arrow-line right" />
          </div>

          <div className="prob-grid">
            <div className="sol-card">
              <div className="pc-icon" aria-hidden>
                📲
              </div>
              <div className="pc-title fr">USSD *707# — Accès universel</div>
              <div className="pc-title en">USSD *707# — Universal access</div>
              <div className="pc-body fr">
                N’importe quel téléphone avec une SIM Airtel, Orange, Vodacom
                ou Africell. En zone rurale comme urbaine. Inclusif par
                architecture.
              </div>
              <div className="pc-body en">
                Any phone with an Airtel, Orange, Vodacom or Africell SIM.
                Rural or urban. Inclusive by architecture.
              </div>
            </div>
            <div className="sol-card">
              <div className="pc-icon" aria-hidden>
                ⚙️
              </div>
              <div className="pc-title fr">Distribution automatique BURN</div>
              <div className="pc-title en">Automatic BURN distribution</div>
              <div className="pc-body fr">
                Chaque paiement distribue automatiquement les fonds en trois
                flux immuables dès que le soin est validé. Zéro intermédiaire
                humain.
              </div>
              <div className="pc-body en">
                Every payment automatically distributes funds in three
                immutable flows the moment care is validated. Zero human
                intermediary.
              </div>
            </div>
            <div className="sol-card">
              <div className="pc-icon" aria-hidden>
                🔓
              </div>
              <div className="pc-title fr">ICD-10 — Zéro détournement</div>
              <div className="pc-title en">ICD-10 — Zero diversion</div>
              <div className="pc-body fr">
                L’AHT ne peut être utilisé que pour des actes médicaux codés
                ICD-10. Impossible de le convertir en espèces. Zéro
                détournement possible.
              </div>
              <div className="pc-body en">
                AHT can only be used for ICD-10 coded medical acts. Cannot be
                converted to cash. Zero diversion possible.
              </div>
            </div>
            <div className="sol-card">
              <div className="pc-icon" aria-hidden>
                📄
              </div>
              <div className="pc-title fr">Fiscalité automatique DGI</div>
              <div className="pc-title en">Automatic DGI fiscal revenue</div>
              <div className="pc-body fr">
                Chaque transaction génère automatiquement une contribution
                fiscale vers la DGI — enregistrée sur Azure Confidential
                Ledger. Sans agent fiscal supplémentaire.
              </div>
              <div className="pc-body en">
                Every transaction automatically generates a fiscal contribution
                to the DGI — recorded on Azure Confidential Ledger. No
                additional tax agent required.
              </div>
            </div>
          </div>

          {/* Répartition automatique */}
          <div className="burn-section">
            <div className="burn-title fr">
              Distribution automatique — par e-voucher
            </div>
            <div className="burn-title en">
              Automatic BURN split — per e-voucher
            </div>
            <div className="burn-sub fr">
              Chaque e-voucher AHT dépensé déclenche trois flux garantis,
              immuables, enregistrés sur Microsoft Azure Confidential Ledger.
            </div>
            <div className="burn-sub en">
              Every AHT e-voucher spent triggers three guaranteed, immutable
              flows recorded on Microsoft Azure Confidential Ledger.
            </div>
            <div className="burn-bar" aria-hidden>
              <div className="bh" />
              <div className="bd" />
              <div className="bm" />
            </div>
            <div className="burn-legend">
              <div className="bl-card">
                <div className="bl-dot" style={{ background: "var(--gold)" }} />
                <div className="bl-name fr" style={{ color: "var(--gold)" }}>
                  Prestataire de soins
                </div>
                <div className="bl-name en" style={{ color: "var(--gold)" }}>
                  Healthcare Facility
                </div>
                <div className="bl-desc fr">
                  Paiement garanti le jour même — directement sur le compte de
                  l’établissement
                </div>
                <div className="bl-desc en">
                  Same-day guaranteed payment — directly to the facility’s
                  account
                </div>
              </div>
              <div className="bl-card">
                <div
                  className="bl-dot"
                  style={{ background: "var(--azure)" }}
                />
                <div className="bl-name fr" style={{ color: "#5B9EF5" }}>
                  Autorité fiscale (DGI)
                </div>
                <div className="bl-name en" style={{ color: "#5B9EF5" }}>
                  Tax Authority (DGI)
                </div>
                <div className="bl-desc fr">
                  Contribution fiscale automatique — infalsifiable sur le
                  Ledger Azure
                </div>
                <div className="bl-desc en">
                  Automatic fiscal contribution — tamper-proof on Azure Ledger
                </div>
              </div>
              <div className="bl-card">
                <div
                  className="bl-dot"
                  style={{ background: "rgba(255,255,255,.35)" }}
                />
                <div className="bl-name" style={{ color: "var(--w3)" }}>
                  Meduc GM Africa
                </div>
                <div className="bl-desc fr">
                  Pérennité et développement de la plateforme
                </div>
                <div className="bl-desc en">
                  Platform sustainability and development
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMENT ÇA MARCHE ── */}
      <section id="comment">
        <div className="w">
          <div className="section-label">
            <div className="sl-line" aria-hidden />
            <div className="sl-txt fr">03 — Comment ça marche</div>
            <div className="sl-txt en">03 — How it works</div>
          </div>
          <h2 className="fr">
            5 étapes.
            <br />
            <em>Du SMS aux soins.</em>
          </h2>
          <h2 className="en">
            5 steps.
            <br />
            <em>From SMS to care.</em>
          </h2>
          <div className="steps-flow">
            <div className="flow-step fs1">
              <div className="fs-num">01</div>
              <div className="fs-icon" aria-hidden>
                📲
              </div>
              <div className="fs-title fr">Composer *707#</div>
              <div className="fs-title en">Dial *707#</div>
              <div className="fs-body fr">
                Sur n’importe quel téléphone — feature phone ou smartphone
              </div>
              <div className="fs-body en">
                On any phone — feature or smartphone
              </div>
            </div>
            <div className="flow-step fs2">
              <div className="fs-num">02</div>
              <div className="fs-icon" aria-hidden>
                💳
              </div>
              <div className="fs-title fr">Créer son IDNS</div>
              <div className="fs-title en">Create IDNS wallet</div>
              <div className="fs-body fr">
                Identité de santé numérique — sans document physique requis
              </div>
              <div className="fs-body en">
                Digital health identity — no physical document required
              </div>
            </div>
            <div className="flow-step fs3">
              <div className="fs-num">03</div>
              <div className="fs-icon" aria-hidden>
                🛒
              </div>
              <div className="fs-title fr">Acheter des AHT</div>
              <div className="fs-title en">Buy AHT e-vouchers</div>
              <div className="fs-body fr">
                Via Mobile Money (Airtel, Orange) — 3 640 CDF = 1 AHT
              </div>
              <div className="fs-body en">
                Via Mobile Money (Airtel, Orange) — 3,640 CDF = 1 AHT
              </div>
            </div>
            <div className="flow-step fs4">
              <div className="fs-num">04</div>
              <div className="fs-icon" aria-hidden>
                🏥
              </div>
              <div className="fs-title fr">Payer ses soins ICD-10</div>
              <div className="fs-title en">Pay for ICD-10 care</div>
              <div className="fs-body fr">
                Validation OTP SMS — acte codé ICD-10 uniquement
              </div>
              <div className="fs-body en">
                OTP SMS validation — ICD-10 coded acts only
              </div>
            </div>
            <div className="flow-step fs5">
              <div className="fs-num">05</div>
              <div className="fs-icon" aria-hidden>
                ⚡
              </div>
              <div className="fs-title fr">Distribution automatique</div>
              <div className="fs-title en">Automatic distribution</div>
              <div className="fs-body fr">
                3 flux immuables sur Azure Confidential Ledger — instantanément
              </div>
              <div className="fs-body en">
                3 immutable flows on Azure Confidential Ledger — instantly
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACTEURS ── */}
      <section id="acteurs">
        <div className="w">
          <div className="section-label">
            <div className="sl-line" aria-hidden />
            <div className="sl-txt fr">04 — Acteurs</div>
            <div className="sl-txt en">04 — Stakeholders</div>
          </div>
          <h2 className="fr">
            Une opportunité
            <br />
            <em>pour chaque acteur.</em>
          </h2>
          <h2 className="en">
            An opportunity
            <br />
            <em>for every stakeholder.</em>
          </h2>
          <p className="section-sub fr">
            MeducAHT restructure une économie de santé dysfonctionnelle en un
            écosystème profitable pour tous.
          </p>
          <p className="section-sub en">
            MeducAHT restructures a broken healthcare economy into a profitable
            ecosystem for all.
          </p>
          <div className="stake-grid">
            <div className="stake-card sc-patient">
              <div className="sc-icon" aria-hidden>
                👤
              </div>
              <div className="sc-label fr">Pour les Patients</div>
              <div className="sc-label en">For Patients</div>
              <div className="sc-title fr">
                Égalité d’accès, où que vous soyez
              </div>
              <div className="sc-title en">
                Equity of access, wherever you are
              </div>
              <div className="sc-body fr">
                En zone rurale comme urbaine, tout Congolais avec une SIM
                accède aux soins via <strong>USSD *707#</strong> sans
                smartphone ni banque. Les e-vouchers AHT sont exclusivement
                utilisables pour des <strong>actes ICD-10</strong> —
                garantissant que chaque franc atteint un soin qualifié.{" "}
                <em>Inclusif par conception. Équitable par architecture.</em>
              </div>
              <div className="sc-body en">
                Rural or urban, any Congolese with a SIM accesses care via{" "}
                <strong>USSD *707#</strong> without a smartphone or bank
                account. AHT e-vouchers are exclusively redeemable for{" "}
                <strong>ICD-10 coded acts</strong> — guaranteeing every franc
                reaches qualified care.{" "}
                <em>Inclusive by design. Equitable by architecture.</em>
              </div>
            </div>
            <div className="stake-card sc-hp">
              <div className="sc-icon" aria-hidden>
                🏥
              </div>
              <div className="sc-label fr">
                Pour les Établissements de Santé
              </div>
              <div className="sc-label en">For Healthcare Facilities</div>
              <div className="sc-title fr">
                Paiement garanti. Solvabilité structurelle.
              </div>
              <div className="sc-title en">
                Guaranteed payment. Structural solvency.
              </div>
              <div className="sc-body fr">
                Paiement <strong>automatique dès le soin réalisé</strong> — le
                jour même, directement sur le compte. Zéro créance, zéro
                mauvaise dette. Une clinique solvable est une clinique
                bancable :{" "}
                <strong>
                  transformez vos flux garantis en attractivité pour les
                  investisseurs
                </strong>
                , modernisation et expansion des services.
              </div>
              <div className="sc-body en">
                Payment <strong>automatically upon care delivery</strong> —
                same day, directly to the account. Zero receivables, zero bad
                debt. A solvent clinic is a bankable clinic:{" "}
                <strong>
                  transform guaranteed cash flow into investor appeal
                </strong>
                , infrastructure upgrades, and service expansion.
              </div>
            </div>
            <div className="stake-card sc-inv">
              <div className="sc-icon" aria-hidden>
                📈
              </div>
              <div className="sc-label fr">
                Pour les Investisseurs &amp; Partenaires
              </div>
              <div className="sc-label en">For Investors &amp; Partners</div>
              <div className="sc-title fr">
                Un actif de santé traçable et scalable
              </div>
              <div className="sc-title en">
                A traceable, scalable healthcare asset
              </div>
              <div className="sc-body fr">
                MeducAHT convertit un marché informel en un{" "}
                <strong>écosystème auditable et investissable</strong>. Chaque
                transaction est immuable sur Azure Confidential Ledger —
                accessible pour due diligence en temps réel.{" "}
                <strong>38M d’utilisateurs cibles d’ici 2030</strong>, 26
                provinces, chemin clair vers l’échelle panafricaine.
              </div>
              <div className="sc-body en">
                MeducAHT converts an informal market into a{" "}
                <strong>structured, auditable, investable ecosystem</strong>.
                Every transaction is immutable on Azure Confidential Ledger —
                available for real-time due diligence.{" "}
                <strong>38M target users by 2030</strong>, 26 provinces, clear
                path to pan-African scale.
              </div>
            </div>
            <div className="stake-card sc-state">
              <div className="sc-icon" aria-hidden>
                🏭
              </div>
              <div className="sc-label fr">Pour l’État Congolais</div>
              <div className="sc-label en">For the DRC State</div>
              <div className="sc-title fr">
                Infrastructure fiscale de santé auto-financée
              </div>
              <div className="sc-title en">
                Self-financing healthcare tax infrastructure
              </div>
              <div className="sc-body fr">
                Chaque e-voucher AHT génère une{" "}
                <strong>contribution fiscale automatique à la DGI</strong> —
                infalsifiable, auditable en temps réel. Aucun agent fiscal
                supplémentaire. À 38M d’utilisateurs, MeducAHT devient{" "}
                <strong>
                  l’instrument fiscal de santé le plus efficace d’Afrique
                  subsaharienne
                </strong>
                .
              </div>
              <div className="sc-body en">
                Every AHT e-voucher generates an{" "}
                <strong>automatic fiscal contribution to the DGI</strong> —
                tamper-proof, real-time auditable. No additional tax agent. At
                38M users, MeducAHT becomes{" "}
                <strong>
                  the most efficient healthcare fiscal instrument in
                  sub-Saharan Africa
                </strong>
                .
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGIE ── */}
      <section id="technologie">
        <div className="w">
          <div className="section-label">
            <div className="sl-line" aria-hidden />
            <div className="sl-txt fr">05 — Technologie</div>
            <div className="sl-txt en">05 — Technology</div>
          </div>
          <h2 className="fr">
            Infrastructure de niveau
            <br />
            <em>bancaire central.</em>
          </h2>
          <h2 className="en">
            Central bank–grade
            <br />
            <em>infrastructure.</em>
          </h2>
          <p className="section-sub fr">
            100% Microsoft Azure — South Africa North. Les données des patients
            restent sur le continent africain. SLA 99.95%. Conformité RGPD +
            HL7 FHIR R4.
          </p>
          <p className="section-sub en">
            100% Microsoft Azure — South Africa North. Patient data stays on
            the African continent. SLA 99.95%. GDPR + HL7 FHIR R4 compliant.
          </p>
          <div className="tech-grid">
            <div className="tech-item">
              <div className="ti-label">Azure Functions EP1</div>
              <div className="ti-name fr">Backend API</div>
              <div className="ti-name en">API Backend</div>
              <div className="ti-desc fr">
                Node 20 / TypeScript — SLA 99.95% — Plans Premium sans cold
                start
              </div>
              <div className="ti-desc en">
                Node 20 / TypeScript — SLA 99.95% — Premium plans, no cold
                start
              </div>
            </div>
            <div className="tech-item">
              <div className="ti-label">Confidential Ledger</div>
              <div className="ti-name fr">Registre immuable</div>
              <div className="ti-name en">Immutable ledger</div>
              <div className="ti-desc fr">
                Chaque transaction BURN enregistrée et infalsifiable. Audit en
                temps réel.
              </div>
              <div className="ti-desc en">
                Every BURN transaction recorded and tamper-proof. Real-time
                audit access.
              </div>
            </div>
            <div className="tech-item">
              <div className="ti-label">Key Vault HSM</div>
              <div className="ti-name fr">Clé MintManager</div>
              <div className="ti-name en">MintManager key</div>
              <div className="ti-desc fr">
                RSA 4096 non-exportable. Aucun acteur, y compris Meduc GM, ne
                peut signer manuellement.
              </div>
              <div className="ti-desc en">
                RSA 4096 non-exportable. No actor, including Meduc GM, can sign
                manually.
              </div>
            </div>
            <div className="tech-item">
              <div className="ti-label">Entra External ID</div>
              <div className="ti-name fr">Identité 6 profils</div>
              <div className="ti-name en">6-profile identity</div>
              <div className="ti-desc fr">
                IDNS / VD / HP / DSP / PS / SP — chaque rôle cloisonné et
                audité
              </div>
              <div className="ti-desc en">
                IDNS / VD / HP / DSP / PS / SP — each role isolated and audited
              </div>
            </div>
            <div className="tech-item">
              <div className="ti-label">API Management</div>
              <div className="ti-name fr">Passerelle centrale</div>
              <div className="ti-name en">Central gateway</div>
              <div className="ti-desc fr">
                WAF, throttling, validation JWT, versioning. Point d’entrée
                unique et sécurisé.
              </div>
              <div className="ti-desc en">
                WAF, throttling, JWT validation, versioning. Single, secured
                entry point.
              </div>
            </div>
            <div className="tech-item">
              <div className="ti-label">Private Endpoints + VNet</div>
              <div className="ti-name fr">Zéro exposition</div>
              <div className="ti-name en">Zero exposure</div>
              <div className="ti-desc fr">
                SQL, Key Vault et Service Bus sans exposition Internet.
                Architecture zéro-trust.
              </div>
              <div className="ti-desc en">
                SQL, Key Vault and Service Bus with no Internet exposure.
                Zero-trust architecture.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq">
        <div className="w">
          <div className="section-label">
            <div className="sl-line" aria-hidden />
            <div className="sl-txt">FAQ</div>
          </div>
          <h2 className="fr">Questions fréquentes</h2>
          <h2 className="en">Frequently asked questions</h2>
          <div className="faq-list">
            <FaqItem
              questionFr="Comment un patient sans smartphone utilise MeducAHT ?"
              questionEn="How does a patient without a smartphone use MeducAHT?"
            >
              <div className="faq-a-inner fr">
                En composant <strong>*707#</strong> sur n’importe quel
                téléphone avec une carte SIM (Airtel, Orange, Vodacom,
                Africell). Le menu USSD guide le patient étape par étape pour
                créer son compte IDNS, acheter des e-vouchers AHT et payer ses
                soins. Aucun accès Internet requis.
              </div>
              <div className="faq-a-inner en">
                By dialing <strong>*707#</strong> on any phone with a SIM card
                (Airtel, Orange, Vodacom, Africell). The USSD menu guides the
                patient step by step to create their IDNS account, buy AHT
                e-vouchers, and pay for care. No internet access required.
              </div>
            </FaqItem>
            <FaqItem
              questionFr="L’AHT peut-il être converti en espèces ?"
              questionEn="Can AHT be converted to cash?"
            >
              <div className="faq-a-inner fr">
                <strong>Non.</strong> C’est l’une des garanties fondamentales
                du système. Un e-voucher AHT ne peut être utilisé{" "}
                <strong>que</strong> pour des actes médicaux codés ICD-10.
                Cette restriction est appliquée au niveau protocolaire — aucun
                acteur, y compris Meduc GM Africa, ne peut la contourner.
              </div>
              <div className="faq-a-inner en">
                <strong>No.</strong> This is one of the system’s fundamental
                guarantees. An AHT e-voucher can <strong>only</strong> be used
                for ICD-10 coded medical acts. This restriction is enforced at
                the protocol level — no actor, including Meduc GM Africa, can
                bypass it.
              </div>
            </FaqItem>
            <FaqItem
              questionFr="Comment les hôpitaux reçoivent-ils leur paiement ?"
              questionEn="How do hospitals receive their payment?"
            >
              <div className="faq-a-inner fr">
                Dès qu’un acte ICD-10 est validé par le prestataire de soins,
                la distribution BURN est déclenchée automatiquement. La part de
                l’établissement arrive directement sur son compte bancaire
                partenaire <strong>le jour même</strong>. Aucune démarche
                administrative n’est requise de la part de l’hôpital.
              </div>
              <div className="faq-a-inner en">
                As soon as an ICD-10 act is validated by the healthcare
                provider, the BURN distribution is automatically triggered. The
                facility’s share arrives directly in its partner bank account{" "}
                <strong>on the same day</strong>. No administrative process is
                required from the hospital.
              </div>
            </FaqItem>
            <FaqItem
              questionFr="Pourquoi Microsoft Azure ?"
              questionEn="Why Microsoft Azure?"
            >
              <div className="faq-a-inner fr">
                Azure est le seul cloud offrant le{" "}
                <strong>Confidential Ledger</strong> — un registre immuable de
                niveau bancaire central. La région{" "}
                <strong>South Africa North</strong> garantit que les données
                patients restent sur le continent africain. Le{" "}
                <strong>Key Vault HSM</strong> protège la clé de signature
                MintManager (RSA 4096, non-exportable). SLA 99.95%.
              </div>
              <div className="faq-a-inner en">
                Azure is the only cloud offering{" "}
                <strong>Confidential Ledger</strong> — a central bank-grade
                immutable ledger. The <strong>South Africa North</strong>{" "}
                region guarantees patient data remains on the African
                continent. <strong>Key Vault HSM</strong> protects the
                MintManager signing key (RSA 4096, non-exportable). SLA 99.95%.
              </div>
            </FaqItem>
            <FaqItem
              questionFr="Où en est le projet ? Quelle est la prochaine étape ?"
              questionEn="Where is the project today? What’s next?"
            >
              <div className="faq-a-inner fr">
                Meduc GM Africa est <strong>double-incorporé</strong> (RDC :
                RCCM CD/KNG/RCCM/25-B-01820, Afrique du Sud : D-U-N-S
                366868380). L’infrastructure Azure est déployée en production.
                Nous sommes en discussions avec 5 hôpitaux et 2 opérateurs
                télécom. La prochaine étape est le{" "}
                <strong>pilote 3 provinces</strong> (Kinshasa, Nord-Kivu,
                Katanga), suivi du déploiement national 26 provinces.
              </div>
              <div className="faq-a-inner en">
                Meduc GM Africa is <strong>dual-incorporated</strong> (DRC:
                RCCM CD/KNG/RCCM/25-B-01820, South Africa: D-U-N-S 366868380).
                Azure infrastructure is deployed in production. We are in
                discussions with 5 hospitals and 2 telecom operators. The next
                step is the <strong>3-province pilot</strong> (Kinshasa,
                Nord-Kivu, Katanga), followed by national 26-province
                deployment.
              </div>
            </FaqItem>
          </div>
        </div>
      </section>

      {/* ── CONTACT / CTA ── */}
      <section id="contact" style={{ background: "var(--n2)" }}>
        <div className="w">
          <div className="cta-section">
            <div
              className="section-label"
              style={{ justifyContent: "center" }}
            >
              <div className="sl-line" aria-hidden />
              <div className="sl-txt fr">Rejoignez l’écosystème</div>
              <div className="sl-txt en">Join the ecosystem</div>
            </div>
            <h2 className="fr">
              Construisons ensemble
              <br />
              la santé de <em>38 millions</em> de Congolais.
            </h2>
            <h2 className="en">
              Let’s build together
              <br />
              healthcare for <em>38 million</em> Congolese.
            </h2>
            <p className="fr">
              Vous êtes investisseur, institution bancaire, opérateur télécom,
              hôpital ou fondation ? Contactez-nous pour découvrir comment
              MeducAHT crée de la valeur pour votre organisation.
            </p>
            <p className="en">
              Are you an investor, banking institution, telecom operator,
              hospital or foundation? Contact us to discover how MeducAHT
              creates value for your organization.
            </p>
            <div className="cta-btns">
              <a className="btn-primary fr" href="mailto:contact@meduc.tech">
                Contacter Dr. Ngenyibungi M.J.
              </a>
              <a className="btn-primary en" href="mailto:contact@meduc.tech">
                Contact Dr. Ngenyibungi M.J.
              </a>
              <a className="btn-outline" href="mailto:contact@meduc.tech">
                contact@meduc.tech
              </a>
              <div className="ussd-chip">*707#</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PIED DE PAGE ── */}
      <footer>
        <div className="w">
          <div>
            <div className="ft-brand">
              Meduc<em>AHT</em>
            </div>
            <div className="ft-reg">
              Meduc GM Africa SARL
              <br />
              RCCM : CD/KNG/RCCM/25-B-01820
              <br />
              D-U-N-S : 366868380
              <br />
              meduc.tech · contact@meduc.tech
              <br />
              Dr. Ngenyibungi M.J. — DG/COO &amp; IP Holder
            </div>
            <div className="ft-azure">
              <div className="ft-azure-dot" aria-hidden />
              Powered by Microsoft Azure — South Africa North
            </div>
          </div>
          <div className="ft-col">
            <div className="ft-col-title">Navigation</div>
            <a href="#probleme" onClick={goTo("probleme")} className="fr">
              Problème
            </a>
            <a href="#probleme" onClick={goTo("probleme")} className="en">
              Problem
            </a>
            <a href="#solution" onClick={goTo("solution")}>
              Solution AHT
            </a>
            <a href="#comment" onClick={goTo("comment")} className="fr">
              Comment ça marche
            </a>
            <a href="#comment" onClick={goTo("comment")} className="en">
              How it works
            </a>
            <a href="#acteurs" onClick={goTo("acteurs")} className="fr">
              Acteurs
            </a>
            <a href="#acteurs" onClick={goTo("acteurs")} className="en">
              Stakeholders
            </a>
            <a href="#technologie" onClick={goTo("technologie")} className="fr">
              Technologie
            </a>
            <a href="#technologie" onClick={goTo("technologie")} className="en">
              Technology
            </a>
            <a href="#faq" onClick={goTo("faq")}>
              FAQ
            </a>
          </div>
          <div className="ft-col">
            <div className="ft-col-title">Contact</div>
            <a href="mailto:contact@meduc.tech">contact@meduc.tech</a>
            <a href="https://meduc.tech">meduc.tech</a>
            <a href="tel:*707%23">USSD *707#</a>
          </div>
        </div>
        <div className="w">
          <div className="ft-bottom">
            <div className="ft-copy fr">
              © 2026 Meduc GM Africa SARL — Tous droits réservés — Propriété
              intellectuelle : Dr. Ngenyibungi M.J.
            </div>
            <div className="ft-copy en">
              © 2026 Meduc GM Africa SARL — All rights reserved — IP: Dr.
              Ngenyibungi M.J.
            </div>
            <div className="ft-conf fr">DOCUMENT CONFIDENTIEL</div>
            <div className="ft-conf en">CONFIDENTIAL DOCUMENT</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
