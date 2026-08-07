"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

function CircuitSchema() {
  return (
    <svg
      viewBox="0 0 880 560"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Schéma du circuit complet de l'e-Voucher AHT"
    >
      <defs>
        <marker
          id="arr-gold"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L0,6 L8,3 z" fill="#C9A059" />
        </marker>
        <marker
          id="arr-blue"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L0,6 L8,3 z" fill="#5B9EF5" />
        </marker>
        <marker
          id="arr-green"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L0,6 L8,3 z" fill="#34D399" />
        </marker>
        <marker
          id="arr-violet"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L0,6 L8,3 z" fill="#A78BFA" />
        </marker>
        <marker
          id="arr-amber"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L0,6 L8,3 z" fill="#FBB040" />
        </marker>
      </defs>

      <rect x="20" y="30" width="130" height="80" rx="10" fill="rgba(201,160,89,.08)" stroke="#C9A059" strokeWidth="1.5" />
      <text x="85" y="60" textAnchor="middle" fontSize="22" fill="#C9A059">👤</text>
      <text x="85" y="80" textAnchor="middle" fontSize="11" fontWeight="700" fill="#FFFFFF">Patient</text>
      <text x="85" y="96" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="8.5" fill="rgba(255,255,255,.4)">Utilisateur IDNS</text>

      <line x1="150" y1="70" x2="210" y2="70" stroke="#C9A059" strokeWidth="1.5" markerEnd="url(#arr-gold)" strokeDasharray="4,3" />
      <text x="180" y="62" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="8" fill="#C9A059">*707#</text>

      <rect x="210" y="20" width="150" height="100" rx="10" fill="rgba(201,160,89,.12)" stroke="#C9A059" strokeWidth="2" />
      <text x="285" y="50" textAnchor="middle" fontSize="20" fill="#C9A059">🪪</text>
      <text x="285" y="72" textAnchor="middle" fontSize="11" fontWeight="800" fill="#FFFFFF">IDNS</text>
      <text x="285" y="87" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="8" fill="#C9A059">ID Santé + Wallet</text>
      <text x="285" y="104" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="7.5" fill="rgba(255,255,255,.35)">Num. unique — 26 provinces</text>

      <line x1="360" y1="70" x2="420" y2="70" stroke="#C9A059" strokeWidth="1.5" markerEnd="url(#arr-gold)" strokeDasharray="4,3" />
      <text x="390" y="62" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="8" fill="#C9A059">Achat AHT</text>

      <rect x="420" y="30" width="130" height="80" rx="10" fill="rgba(26,111,212,.10)" stroke="#5B9EF5" strokeWidth="1.5" />
      <text x="485" y="60" textAnchor="middle" fontSize="22" fill="#5B9EF5">📱</text>
      <text x="485" y="80" textAnchor="middle" fontSize="11" fontWeight="700" fill="#FFFFFF">Mobile Money</text>
      <text x="485" y="92" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="8" fill="rgba(255,255,255,.4)">Cash · Banque</text>
      <text x="485" y="104" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="8" fill="rgba(255,255,255,.4)">Mobile Money</text>

      <line x1="550" y1="70" x2="618" y2="70" stroke="#5B9EF5" strokeWidth="1.5" markerEnd="url(#arr-blue)" />
      <text x="584" y="62" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="8" fill="#5B9EF5">Crédite</text>

      <rect x="618" y="20" width="140" height="100" rx="10" fill="rgba(26,111,212,.15)" stroke="#5B9EF5" strokeWidth="2" />
      <text x="688" y="50" textAnchor="middle" fontSize="20" fill="#5B9EF5">🎫</text>
      <text x="688" y="70" textAnchor="middle" fontSize="11" fontWeight="800" fill="#FFFFFF">e-Voucher AHT</text>
      <text x="688" y="86" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="8" fill="#5B9EF5">1 AHT = 3 640 CDF</text>
      <text x="688" y="102" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="7.5" fill="rgba(255,255,255,.35)">Taux BCC officiel</text>

      <line x1="688" y1="120" x2="688" y2="185" stroke="#34D399" strokeWidth="1.5" markerEnd="url(#arr-green)" />
      <text x="700" y="157" fontFamily="ui-monospace,monospace" fontSize="8" fill="#34D399">Paiement OTP</text>

      <rect x="548" y="185" width="280" height="110" rx="12" fill="rgba(10,138,68,.12)" stroke="#34D399" strokeWidth="2" />
      <text x="688" y="218" textAnchor="middle" fontSize="22" fill="#34D399">🏥</text>
      <text x="688" y="242" textAnchor="middle" fontSize="13" fontWeight="800" fill="#FFFFFF">Point de Soins Partenaire</text>
      <text x="688" y="260" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="8.5" fill="#34D399">Acte ICD-10 · Barème officiel RDC</text>
      <text x="688" y="278" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="8" fill="rgba(255,255,255,.35)">Validation OTP SMS · Paiement confirmé</text>

      <line x1="548" y1="240" x2="440" y2="240" stroke="#A78BFA" strokeWidth="1.5" markerEnd="url(#arr-violet)" />
      <text x="494" y="232" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="8" fill="#A78BFA">Enregistrement</text>

      <rect x="260" y="195" width="180" height="90" rx="10" fill="rgba(109,40,217,.12)" stroke="#A78BFA" strokeWidth="2" />
      <text x="350" y="225" textAnchor="middle" fontSize="18" fill="#A78BFA">🔒</text>
      <text x="350" y="248" textAnchor="middle" fontSize="10" fontWeight="800" fill="#FFFFFF">Azure Confidential</text>
      <text x="350" y="263" textAnchor="middle" fontSize="10" fontWeight="800" fill="#FFFFFF">Ledger</text>
      <text x="350" y="278" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="7.5" fill="rgba(167,139,250,.7)">Immuable · Auditable</text>

      <line x1="350" y1="285" x2="350" y2="350" stroke="#A78BFA" strokeWidth="1.5" markerEnd="url(#arr-violet)" />
      <text x="362" y="322" fontFamily="ui-monospace,monospace" fontSize="8" fill="#A78BFA">Distribution</text>

      <ellipse cx="350" cy="375" rx="70" ry="30" fill="rgba(109,40,217,.15)" stroke="#A78BFA" strokeWidth="1.5" />
      <text x="350" y="371" textAnchor="middle" fontSize="9" fontWeight="800" fill="#A78BFA">BURN</text>
      <text x="350" y="385" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="7.5" fill="rgba(255,255,255,.4)">Automatique · Instantané</text>

      <line x1="290" y1="398" x2="150" y2="455" stroke="#C9A059" strokeWidth="1.5" markerEnd="url(#arr-gold)" />
      <rect x="20" y="455" width="150" height="80" rx="10" fill="rgba(201,160,89,.10)" stroke="#C9A059" strokeWidth="1.5" />
      <text x="95" y="482" textAnchor="middle" fontSize="18" fill="#C9A059">🏥</text>
      <text x="95" y="502" textAnchor="middle" fontSize="10" fontWeight="700" fill="#FFFFFF">Prestataire</text>
      <text x="95" y="518" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="8" fill="#C9A059">Paiement garanti</text>
      <text x="95" y="530" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="7.5" fill="rgba(255,255,255,.35)">Jour même</text>

      <line x1="350" y1="405" x2="350" y2="455" stroke="#FBB040" strokeWidth="1.5" markerEnd="url(#arr-amber)" />
      <rect x="265" y="455" width="170" height="80" rx="10" fill="rgba(251,176,64,.08)" stroke="#FBB040" strokeWidth="1.5" />
      <text x="350" y="482" textAnchor="middle" fontSize="18" fill="#FBB040">🏛️</text>
      <text x="350" y="502" textAnchor="middle" fontSize="10" fontWeight="700" fill="#FFFFFF">DGI — État Congolais</text>
      <text x="350" y="518" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="8" fill="#FBB040">Fiscalité automatique</text>
      <text x="350" y="530" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="7.5" fill="rgba(255,255,255,.35)">Sans agent supplémentaire</text>

      <line x1="410" y1="398" x2="560" y2="455" stroke="#5B9EF5" strokeWidth="1.5" markerEnd="url(#arr-blue)" />
      <rect x="560" y="455" width="150" height="80" rx="10" fill="rgba(26,111,212,.10)" stroke="#5B9EF5" strokeWidth="1.5" />
      <text x="635" y="482" textAnchor="middle" fontSize="18" fill="#5B9EF5">⚙️</text>
      <text x="635" y="502" textAnchor="middle" fontSize="10" fontWeight="700" fill="#FFFFFF">Meduc GM</text>
      <text x="635" y="518" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="8" fill="#5B9EF5">Frais de plateforme</text>
      <text x="635" y="530" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="7.5" fill="rgba(255,255,255,.35)">Pérennité du service</text>

      <rect x="740" y="398" width="125" height="137" rx="8" fill="rgba(255,255,255,.03)" stroke="rgba(255,255,255,.08)" strokeWidth="1" />
      <text x="752" y="416" fontFamily="ui-monospace,monospace" fontSize="8" fontWeight="700" fill="rgba(255,255,255,.4)">ÉTAPES</text>
      <circle cx="755" cy="432" r="5" fill="rgba(201,160,89,.3)" stroke="#C9A059" strokeWidth="1" />
      <text x="765" y="436" fontSize="9" fill="rgba(255,255,255,.6)">01 Créer IDNS</text>
      <circle cx="755" cy="452" r="5" fill="rgba(26,111,212,.3)" stroke="#5B9EF5" strokeWidth="1" />
      <text x="765" y="456" fontSize="9" fill="rgba(255,255,255,.6)">02 Acheter AHT</text>
      <circle cx="755" cy="472" r="5" fill="rgba(10,138,68,.3)" stroke="#34D399" strokeWidth="1" />
      <text x="765" y="476" fontSize="9" fill="rgba(255,255,255,.6)">03 Payer soins</text>
      <circle cx="755" cy="492" r="5" fill="rgba(109,40,217,.3)" stroke="#A78BFA" strokeWidth="1" />
      <text x="765" y="496" fontSize="9" fill="rgba(255,255,255,.6)">04 Distribution</text>
      <line x1="752" y1="508" x2="857" y2="508" stroke="rgba(255,255,255,.06)" strokeWidth="1" />
      <text x="752" y="522" fontFamily="ui-monospace,monospace" fontSize="7.5" fill="rgba(255,255,255,.25)">Azure Confidential</text>
      <text x="752" y="534" fontFamily="ui-monospace,monospace" fontSize="7.5" fill="rgba(255,255,255,.25)">Ledger — immuable</text>
    </svg>
  );
}

function StepVisualCard({ index, lang }: { index: number; lang: string }) {
  const en = lang === "en";

  if (index === 0) {
    return (
      <div className="visual-card vc1">
        <div className="lx-card">
          <div className="lx-lines" aria-hidden />
          <div className="lx-glow-tl" aria-hidden />
          <div className="lx-edge-top" aria-hidden />
          <div className="lx-inner">
            <div className="lx-top">
              <div>
                <div className="lx-brand-name">MeducAHT</div>
                <div className="lx-brand-sub">Africa Health e-Voucher</div>
              </div>
              <div className="lx-logo-wrap" aria-hidden>
                <div className="lx-circle-l" />
                <div className="lx-circle-r" />
              </div>
            </div>
            <div>
              <div className="lx-chip-row">
                <div className="lx-chip" aria-hidden />
              </div>
              <div className="lx-idns-label">
                {en
                  ? "National Health Identifier"
                  : "Identifiant National de Santé"}
              </div>
              <div className="lx-idns-num">AHT7 K3MN 9PQ2 RX5F</div>
            </div>
            <div className="lx-bottom">
              <div>
                <div className="lx-holder-label">
                  {en ? "Holder" : "Titulaire"}
                </div>
                <div className="lx-holder-name">
                  {en ? "IDNS Holder" : "Titulaire IDNS"}
                </div>
                <div className="lx-holder-reg">
                  Meduc GM · RCCM CD/KNG/RCCM/25-B-01820
                </div>
              </div>
              <div className="lx-right">
                <div className="lx-valid-label">
                  {en ? "Valid until" : "Valide jusqu'au"}
                </div>
                <div className="lx-valid-date">12/30</div>
                <div className="lx-status">
                  {en ? "Active · 26 Provinces" : "Actif · 26 Provinces"}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lx-caption">
          IDNS — {en ? "Health ID & e-Voucher Wallet" : "ID Santé & Wallet e-Voucher"}
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="visual-card vc2">
        <div className="vc-label">
          {en ? "AHT e-Voucher — Example" : "E-Voucher AHT — Exemple"}
        </div>
        <div className="voucher-ticket">
          <div className="vt-header">
            <span className="vt-brand">AHT e-VOUCHER</span>
            <span className="vt-status">{en ? "Validated" : "Validé"}</span>
          </div>
          <div className="vt-amount">1 AHT</div>
          <div className="vt-rate">
            3 640 CDF · {en ? "Official BCC rate" : "Taux BCC officiel"}
          </div>
          <hr className="vt-sep" />
          <div className="vt-meta">
            <div className="vtm">
              <div className="vtm-l">{en ? "Usage" : "Utilisation"}</div>
              <div className="vtm-v">Soins ICD-10</div>
            </div>
            <div className="vtm">
              <div className="vtm-l">{en ? "Zone" : "Zone"}</div>
              <div className="vtm-v">26 Provinces</div>
            </div>
            <div className="vtm">
              <div className="vtm-l">{en ? "Status" : "Statut"}</div>
              <div className="vtm-v">{en ? "Active" : "Actif"}</div>
            </div>
          </div>
        </div>
        <div className="purchase-methods">
          <div className="pm">
            <div className="pm-icon" aria-hidden>
              💵
            </div>
            <div className="pm-label">Cash</div>
            <div className="pm-sub">
              {en ? "Via field DS agent" : "Via agent VD terrain"}
            </div>
          </div>
          <div className="pm">
            <div className="pm-icon" aria-hidden>
              🏦
            </div>
            <div className="pm-label">{en ? "Bank" : "Banque"}</div>
            <div className="pm-sub">
              {en ? "Bank transfer" : "Virement bancaire"}
            </div>
          </div>
          <div className="pm">
            <div className="pm-icon" aria-hidden>
              📱
            </div>
            <div className="pm-label">Mobile Money</div>
            <div className="pm-sub">Airtel · Orange · Vodacom</div>
          </div>
        </div>
      </div>
    );
  }

  if (index === 2) {
    return (
      <div className="visual-card vc3">
        <div className="vc-label">
          {en
            ? "ICD-10 acts — Official tariff"
            : "Actes ICD-10 — Barème officiel"}
        </div>
        <div className="icd-grid">
          {[
            ["J06.9", "Infection voies respiratoires", "1 AHT"],
            ["A09", "Diarrhée et gastro-entérite", "1 AHT"],
            ["B54", "Paludisme, non précisé", "2 AHT"],
            ["Z00.0", "Examen médical général", "1 AHT"],
          ].map(([code, name, price]) => (
            <div className="icd-item" key={code}>
              <div className="icd-code">{code}</div>
              <div className="icd-name">{name}</div>
              <div className="icd-price">{price}</div>
            </div>
          ))}
        </div>
        <div className="equity-bar">
          {["Kinshasa", "Bandundu", "Kasaï", "+ 23 provinces"].map((z) => (
            <div className="eb-item" key={z}>
              <div className="eb-dot" />
              {z}
            </div>
          ))}
        </div>
        <div className="equity-note">
          {en
            ? "Uniform prices under the official tariff — identical across all 26 provinces"
            : "Prix uniformés selon le barème officiel — identiques dans les 26 provinces"}
        </div>
      </div>
    );
  }

  return (
    <div className="visual-card vc4">
      <div className="vc-label">
        {en ? "BURN Distribution — Automatic" : "Distribution BURN — Automatique"}
      </div>
      <div className="burn-panel">
        <div className="burn-title">
          {en
            ? "1 AHT e-voucher validated → 3 simultaneous flows"
            : "1 AHT e-voucher validé → 3 flux simultanés"}
        </div>
        <div className="burn-row">
          <div className="burn-icon" aria-hidden>
            🏥
          </div>
          <div className="burn-text">
            <div className="burn-name">
              {en ? "Care provider" : "Prestataire de soins"}
            </div>
            <div className="burn-sub">
              {en ? "Guaranteed payment — same day" : "Paiement garanti — jour même"}
            </div>
          </div>
          <div className="burn-dot">●</div>
        </div>
        <div className="burn-connector" />
        <div className="burn-row">
          <div className="burn-icon" aria-hidden>
            🏛️
          </div>
          <div className="burn-text">
            <div className="burn-name">
              {en ? "DGI — Congolese State" : "DGI — État congolais"}
            </div>
            <div className="burn-sub">
              {en
                ? "Automatic fiscal contribution"
                : "Contribution fiscale automatique"}
            </div>
          </div>
          <div className="burn-dot">●</div>
        </div>
        <div className="burn-connector" />
        <div className="burn-row">
          <div className="burn-icon" aria-hidden>
            ⚙️
          </div>
          <div className="burn-text">
            <div className="burn-name">Meduc GM</div>
            <div className="burn-sub">
              {en ? "Platform sustainability" : "Pérennité de la plateforme"}
            </div>
          </div>
          <div className="burn-dot">●</div>
        </div>
      </div>
      <div className="ledger-note">
        <span aria-hidden>🔒</span>
        <div>
          {en ? "Recorded on " : "Enregistré sur "}
          <strong>Azure Confidential Ledger</strong>
          <br />
          {en
            ? "Immutable · Real-time auditable · Tamper-proof"
            : "Immuable · Auditable en temps réel · Infalsifiable"}
        </div>
      </div>
    </div>
  );
}

export default function EvoucherParcours() {
  const { t, lang } = useLanguage();
  const p = t.evoucherParcours;

  const stepClasses = [
    { sn: "sn1", st: "st1", h2: "h2-1", fd: "fd1" },
    { sn: "sn2", st: "st2", h2: "h2-2", fd: "fd2" },
    { sn: "sn3", st: "st3", h2: "h2-3", fd: "fd3" },
    { sn: "sn4", st: "st4", h2: "h2-4", fd: "fd4" },
  ];

  return (
    <div className="evo-parcours rounded-2xl border border-navy/20">
      <div className="page-header">
        <div className="ph-grid" aria-hidden />
        <div className="ep-w ph-inner">
          <div className="eyebrow">
            <div className="ey-line" />
            <div className="ey-txt">{p.eyebrow}</div>
          </div>
          <h3 className="ep-h1">
            {p.title}
            <br />
            <em>{p.titleEm}</em>
          </h3>
          <p className="lead">{p.lead}</p>
          <div className="ussd-hero">
            <span className="uh-code">*707#</span>
            <div className="uh-sep" />
            <span className="uh-label">{p.ussdLabel}</span>
          </div>
        </div>
      </div>

      {p.steps.map((step, i) => {
        const cls = stepClasses[i];
        const reverse = i === 1 || i === 3;

        return (
          <div className="step-section" key={cls.sn}>
            <div className="ep-w">
              <div className={`step-inner${reverse ? " reverse" : ""}`}>
                <div className="step-copy">
                  <div className="step-num-wrap">
                    <div className={`step-num ${cls.sn}`}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <span className={`step-tag ${cls.st}`}>{step.tag}</span>
                  </div>
                  <h3 className={`ep-h2 ${cls.h2}`}>
                    {step.title}
                    <br />
                    <em>{step.titleEm}</em>
                  </h3>
                  <p className="step-body">{step.body}</p>
                  <ul className="feature-list">
                    {step.features.map((feature) => (
                      <li key={feature.strong}>
                        <div className={`fl-dot ${cls.fd}`} />
                        <div>
                          <strong>{feature.strong}</strong>
                          {feature.rest}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <StepVisualCard index={i} lang={lang} />
              </div>
            </div>
          </div>
        );
      })}

      <div className="schema-section">
        <div className="ep-w">
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            <div className="ey-line" />
            <div className="ey-txt">{p.schemaEyebrow}</div>
            <div className="ey-line" />
          </div>
          <h3 className="schema-title">
            {p.schemaTitle}
            <br />
            <em>{p.schemaTitleEm}</em>
          </h3>
          <p className="schema-sub">{p.schemaSub}</p>
          <div className="schema-wrap">
            <CircuitSchema />
          </div>
        </div>
      </div>

      <div className="ep-w">
        <div className="page-footer">
          <div className="pf-reg">
            Meduc GM SARL · RCCM : CD/KNG/RCCM/25-B-01820
            <br />
            PTY (LTD) : 2025/780904/07 · D-U-N-S : 366868380
            <br />
            meduc.tech · contact@meduc.tech · USSD *707#
          </div>
          <div className="pf-azure">{p.powered}</div>
        </div>
      </div>
    </div>
  );
}
