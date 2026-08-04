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
      <text x="350" y="371" textAnchor="middle" fontSize="9" fontWeight="800" fill="#A78BFA">BURN SPLIT</text>
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

export default function EvoucherParcours() {
  return (
    <div className="evo-parcours rounded-2xl border border-navy/20">
      {/* Intro */}
      <div className="page-header">
        <div className="ph-grid" aria-hidden />
        <div className="ep-w ph-inner">
          <div className="eyebrow">
            <div className="ey-line" />
            <div className="ey-txt">Meduc GM — MeducAHT — Guide utilisateur</div>
          </div>
          <h3 className="ep-h1">
            Comment fonctionne
            <br />
            <em>l&apos;e-Voucher AHT ?</em>
          </h3>
          <p className="lead">
            En 4 étapes simples, tout Congolais avec une carte SIM accède aux
            soins de santé ICD-10 — sans banque, sans smartphone, sans
            intermédiaire.
          </p>
          <div className="ussd-hero">
            <span className="uh-code">*707#</span>
            <div className="uh-sep" />
            <span className="uh-label">
              Composer sur n&apos;importe quel téléphone
            </span>
          </div>
        </div>
      </div>

      {/* Étape 1 */}
      <div className="step-section">
        <div className="ep-w">
          <div className="step-inner">
            <div className="step-copy">
              <div className="step-num-wrap">
                <div className="step-num sn1">01</div>
                <span className="step-tag st1">Étape 1 — Identité</span>
              </div>
              <h3 className="ep-h2 h2-1">
                Créez votre
                <br />
                <em>Identifiant National de Santé</em>
              </h3>
              <p className="step-body">
                L&apos;<strong>IDNS (Identifiant National de Santé)</strong> est
                votre numéro unique sur la plateforme MeducAHT. En composant{" "}
                <strong>*707#</strong>, vous créez en quelques secondes un
                identifiant personnel qui joue un <strong>double rôle</strong> :
                celui d&apos;une <strong>identité de santé numérique</strong> et
                celui d&apos;un <strong>wallet de e-vouchers</strong>. Une seule
                création, une seule fois, valable dans les 26 provinces de la
                RDC.
              </p>
              <ul className="feature-list">
                <li>
                  <div className="fl-dot fd1" />
                  <div>
                    <strong>Sans document physique requis</strong> — la
                    vérification se fait via votre numéro de téléphone SIM
                  </div>
                </li>
                <li>
                  <div className="fl-dot fd1" />
                  <div>
                    <strong>Numéro unique et irrévocable</strong> — 12 caractères
                    alphanumériques, format sécurisé
                  </div>
                </li>
                <li>
                  <div className="fl-dot fd1" />
                  <div>
                    <strong>Double fonction</strong> — ID de santé + wallet
                    e-voucher dans un seul identifiant
                  </div>
                </li>
                <li>
                  <div className="fl-dot fd1" />
                  <div>
                    <strong>Valable dans tous les points de soins</strong>{" "}
                    partenaires MeducAHT en RDC
                  </div>
                </li>
              </ul>
            </div>
            <div className="visual-card vc1">
              <div className="lx-card">
                <div className="lx-lines" aria-hidden />
                <div className="lx-glow-tl" aria-hidden />
                <div className="lx-edge-top" aria-hidden />
                <div className="lx-inner">
                  <div className="lx-top">
                    <div>
                      <div className="lx-brand-name">MeducAHT</div>
                      <div className="lx-brand-sub">
                        Africa Health e-Voucher
                      </div>
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
                      Identifiant National de Santé
                    </div>
                    <div className="lx-idns-num">AHT7 K3MN 9PQ2 RX5F</div>
                  </div>
                  <div className="lx-bottom">
                    <div>
                      <div className="lx-holder-label">Titulaire</div>
                      <div className="lx-holder-name">Titulaire IDNS</div>
                      <div className="lx-holder-reg">
                        Meduc GM · RCCM CD/KNG/RCCM/25-B-01820
                      </div>
                    </div>
                    <div className="lx-right">
                      <div className="lx-valid-label">Valide jusqu&apos;au</div>
                      <div className="lx-valid-date">12/30</div>
                      <div className="lx-status">Actif · 26 Provinces</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lx-caption">
                IDNS — ID Santé &amp; Wallet e-Voucher
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Étape 2 */}
      <div className="step-section">
        <div className="ep-w">
          <div className="step-inner reverse">
            <div className="step-copy">
              <div className="step-num-wrap">
                <div className="step-num sn2">02</div>
                <span className="step-tag st2">Étape 2 — Achat</span>
              </div>
              <h3 className="ep-h2 h2-2">
                Achetez votre
                <br />
                <em>e-Voucher AHT</em>
              </h3>
              <p className="step-body">
                Une fois votre IDNS créé, vous rechargez votre wallet en
                achetant des e-vouchers AHT via{" "}
                <strong>trois modes de paiement</strong> : en{" "}
                <strong>espèces</strong> auprès d&apos;un agent Vendeur Direct
                terrain, par <strong>virement bancaire</strong>, ou via{" "}
                <strong>Mobile Money</strong> (Airtel Money, Orange Money,
                Vodacom M-Pesa). Le montant est crédité instantanément en
                e-vouchers AHT dans votre wallet IDNS, ancré au taux officiel de
                la Banque Centrale du Congo.
              </p>
              <ul className="feature-list">
                <li>
                  <div className="fl-dot fd2" />
                  <div>
                    <strong>Cash</strong> — via un agent Vendeur Direct MeducAHT
                    sur le terrain
                  </div>
                </li>
                <li>
                  <div className="fl-dot fd2" />
                  <div>
                    <strong>Banque</strong> — virement vers le compte Meduc GM,
                    crédit IDNS instantané
                  </div>
                </li>
                <li>
                  <div className="fl-dot fd2" />
                  <div>
                    <strong>Via *707# USSD</strong> — sur tout téléphone, même
                    sans Internet
                  </div>
                </li>
                <li>
                  <div className="fl-dot fd2" />
                  <div>
                    <strong>Via l&apos;application mobile</strong> — iOS et
                    Android
                  </div>
                </li>
                <li>
                  <div className="fl-dot fd2" />
                  <div>
                    <strong>Mobile Money accepté</strong> — Airtel Money, Orange
                    Money, Vodacom M-Pesa
                  </div>
                </li>
                <li>
                  <div className="fl-dot fd2" />
                  <div>
                    <strong>Créditage instantané</strong> — e-vouchers
                    disponibles immédiatement dans le wallet
                  </div>
                </li>
              </ul>
            </div>
            <div className="visual-card vc2">
              <div className="vc-label">E-Voucher AHT — Exemple</div>
              <div className="voucher-ticket">
                <div className="vt-header">
                  <span className="vt-brand">AHT e-VOUCHER</span>
                  <span className="vt-status">Validé</span>
                </div>
                <div className="vt-amount">1 AHT</div>
                <div className="vt-rate">
                  3 640 CDF · Taux BCC officiel
                </div>
                <hr className="vt-sep" />
                <div className="vt-meta">
                  <div className="vtm">
                    <div className="vtm-l">Utilisation</div>
                    <div className="vtm-v">Soins ICD-10</div>
                  </div>
                  <div className="vtm">
                    <div className="vtm-l">Zone</div>
                    <div className="vtm-v">26 Provinces</div>
                  </div>
                  <div className="vtm">
                    <div className="vtm-l">Statut</div>
                    <div className="vtm-v">Actif</div>
                  </div>
                </div>
              </div>
              <div className="purchase-methods">
                <div className="pm">
                  <div className="pm-icon" aria-hidden>
                    💵
                  </div>
                  <div className="pm-label">Cash</div>
                  <div className="pm-sub">Via agent VD terrain</div>
                </div>
                <div className="pm">
                  <div className="pm-icon" aria-hidden>
                    🏦
                  </div>
                  <div className="pm-label">Banque</div>
                  <div className="pm-sub">Virement bancaire</div>
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
          </div>
        </div>
      </div>

      {/* Étape 3 */}
      <div className="step-section">
        <div className="ep-w">
          <div className="step-inner">
            <div className="step-copy">
              <div className="step-num-wrap">
                <div className="step-num sn3">03</div>
                <span className="step-tag st3">Étape 3 — Soins</span>
              </div>
              <h3 className="ep-h2 h2-3">
                Accédez aux soins
                <br />
                <em>de façon équitable</em>
              </h3>
              <p className="step-body">
                Au point de soins partenaire MeducAHT, vous présentez votre
                IDNS. Le prestataire identifie l&apos;acte médical par son{" "}
                <strong>code ICD-10</strong> et son prix fixé selon le barème
                officiel de l&apos;autorité de régulation des prix de santé en
                RDC. Vous confirmez le paiement par <strong>OTP SMS</strong>.{" "}
                <strong>
                  Le même acte, le même prix, pour chaque Congolais — à Kinshasa
                  comme en zone rurale.
                </strong>{" "}
                Zéro négociation. Zéro discrimination tarifaire.
              </p>
              <ul className="feature-list">
                <li>
                  <div className="fl-dot fd3" />
                  <div>
                    <strong>Barème officiel RDC</strong> — prix fixés par
                    l&apos;autorité de régulation, traduits en ICD-10
                  </div>
                </li>
                <li>
                  <div className="fl-dot fd3" />
                  <div>
                    <strong>Équité tarifaire totale</strong> — même code ICD-10,
                    même prix partout en RDC
                  </div>
                </li>
                <li>
                  <div className="fl-dot fd3" />
                  <div>
                    <strong>Validation OTP SMS</strong> — sécurité du paiement
                    en temps réel
                  </div>
                </li>
                <li>
                  <div className="fl-dot fd3" />
                  <div>
                    <strong>Accessibles en milieu rural</strong> — via USSD
                    *707# sans Internet
                  </div>
                </li>
              </ul>
            </div>
            <div className="visual-card vc3">
              <div className="vc-label">Actes ICD-10 — Barème officiel</div>
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
                {["Kinshasa", "Bandundu", "Kasaï", "+ 23 provinces"].map(
                  (z) => (
                    <div className="eb-item" key={z}>
                      <div className="eb-dot" />
                      {z}
                    </div>
                  )
                )}
              </div>
              <div className="equity-note">
                Prix uniformés selon le barème officiel — identiques dans les 26
                provinces
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Étape 4 */}
      <div className="step-section">
        <div className="ep-w">
          <div className="step-inner reverse">
            <div className="step-copy">
              <div className="step-num-wrap">
                <div className="step-num sn4">04</div>
                <span className="step-tag st4">Étape 4 — Distribution</span>
              </div>
              <h3 className="ep-h2 h2-4">
                Distribution automatique
                <br />
                <em>immuable &amp; instantanée</em>
              </h3>
              <p className="step-body">
                Dès que le soin est validé{" "}
                <strong>au niveau du point de soins</strong>, la plateforme
                MeducAHT déclenche automatiquement une{" "}
                <strong>distribution en trois flux simultanés</strong>,
                enregistrée de manière immuable sur le{" "}
                <strong>Microsoft Azure Confidential Ledger</strong>. La taxe de
                l&apos;État est collectée automatiquement auprès de la Direction
                Générale des Impôts (DGI), la structure de santé est
                approvisionnée de sa part garantie le jour même, et Meduc GM
                reçoit sa part pour l&apos;entretien et la pérennité de la
                plateforme. Aucun intermédiaire humain. Aucun virement manuel.
                Aucun délai.
              </p>
              <ul className="feature-list">
                <li>
                  <div className="fl-dot fd4" />
                  <div>
                    <strong>Prestataire de soins</strong> — paiement garanti le
                    jour même, directement sur son compte
                  </div>
                </li>
                <li>
                  <div className="fl-dot fd4" />
                  <div>
                    <strong>DGI — contribution fiscale</strong> — automatique,
                    sans agent supplémentaire
                  </div>
                </li>
                <li>
                  <div className="fl-dot fd4" />
                  <div>
                    <strong>Meduc GM</strong> — frais de plateforme pour la
                    durabilité du service
                  </div>
                </li>
                <li>
                  <div className="fl-dot fd4" />
                  <div>
                    <strong>Azure Confidential Ledger</strong> — enregistrement
                    immuable, auditable en temps réel
                  </div>
                </li>
              </ul>
            </div>
            <div className="visual-card vc4">
              <div className="vc-label">Distribution BURN — Automatique</div>
              <div className="burn-panel">
                <div className="burn-title">
                  1 AHT e-voucher validé → 3 flux simultanés
                </div>
                <div className="burn-row">
                  <div className="burn-icon" aria-hidden>
                    🏥
                  </div>
                  <div className="burn-text">
                    <div className="burn-name">Prestataire de soins</div>
                    <div className="burn-sub">
                      Paiement garanti — jour même
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
                    <div className="burn-name">DGI — État congolais</div>
                    <div className="burn-sub">
                      Contribution fiscale automatique
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
                      Pérennité de la plateforme
                    </div>
                  </div>
                  <div className="burn-dot">●</div>
                </div>
              </div>
              <div className="ledger-note">
                <span aria-hidden>🔒</span>
                <div>
                  Enregistré sur{" "}
                  <strong>Azure Confidential Ledger</strong>
                  <br />
                  Immuable · Auditable en temps réel · Infalsifiable
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schéma */}
      <div className="schema-section">
        <div className="ep-w">
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            <div className="ey-line" />
            <div className="ey-txt">Schéma global du circuit AHT</div>
            <div className="ey-line" />
          </div>
          <h3 className="schema-title">
            Le circuit complet
            <br />
            <em>de l&apos;e-Voucher AHT</em>
          </h3>
          <p className="schema-sub">
            De la création de l&apos;IDNS au paiement du prestataire — un
            système fermé, traçable et immuable
          </p>
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
          <div className="pf-azure">
            Propulsé par Microsoft Azure — South Africa North
          </div>
        </div>
      </div>
    </div>
  );
}
