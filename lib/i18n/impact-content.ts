export type ImpactPsRow = {
  problemStrong: string;
  problemRest: string;
  solutionStrong: string;
  solutionRest: string;
};

export type ImpactCardVariant =
  | "access"
  | "hp"
  | "state"
  | "pop"
  | "sponsor"
  | "trust"
  | "inv"
  | "bank";

export type ImpactCard = {
  icon: string;
  cat: string;
  title: string;
  body: string;
  tags: string[];
  variant: ImpactCardVariant;
};

export type ImpactContent = {
  eyebrow: string;
  h1Line1: string;
  h1Em: string;
  leadParts: { before: string; strong: string; after: string };
  resultBanner: { strong: string; rest: string };
  sec1: {
    label: string;
    title: string;
    titleEm: string;
    sub: string;
    probHd: string;
    solHd: string;
    rows: ImpactPsRow[];
  };
  sec2: {
    label: string;
    title: string;
    titleEm: string;
    sub: string;
    cards: ImpactCard[];
  };
  sec3: {
    label: string;
    title: string;
    titleEm: string;
    sub: string;
    stats: { n: string; l: string }[];
    closingTitle: string;
    closingTitleEm: string;
    closingBody: string;
    closingStrong: string;
  };
  powered: string;
};

export const impactContent: Record<"fr" | "en", ImpactContent> = {
  fr: {
    eyebrow: "Meduc GM — Cas d'investissement",
    h1Line1: "La crise de santé en RDC",
    h1Em: "transformée en\nopportunité.",
    leadParts: {
      before:
        "Le système de santé congolais est en difficulté. Ce n'est pas une impasse — c'est une infrastructure financière manquante. ",
      strong: "MeducAHT la construit.",
      after:
        " Et en la construisant, il crée de la valeur mesurable pour chaque partie prenante : patients, hôpitaux, État, investisseurs, banques, sponsors, diaspora. La crise devient le marché. Le vide devient l'opportunité.",
    },
    resultBanner: {
      strong: "Résultat central :",
      rest: " le renforcement structurel et durable du système de santé congolais — à travers une infrastructure financière transparente, automatisée et auditable, construite sur Microsoft Azure.",
    },
    sec1: {
      label: "01 — Diagnostic & Réponses",
      title: "Les problèmes du secteur",
      titleEm: "et ce que Meduc GM apporte",
      sub: "Chaque problème identifié dans le système de santé congolais reçoit une réponse directe, structurelle et vérifiable de la part de la plateforme MeducAHT.",
      probHd: "✗ Problème identifié",
      solHd: "✓ Solution MeducAHT",
      rows: [
        {
          problemStrong: "Exclusion financière.",
          problemRest:
            " Plus de 50 millions de Congolais sont non-bancarisés et ne disposent d'aucun instrument de paiement pour accéder aux soins.",
          solutionStrong: "USSD *707# universel.",
          solutionRest:
            " Accès aux soins ICD-10 via n'importe quel téléphone avec une SIM — sans banque, sans smartphone, sans document physique.",
        },
        {
          problemStrong: "Insolvabilité hospitalière.",
          problemRest:
            " Les établissements accumulent des créances impayées sans recours, rendant tout investissement impossible.",
          solutionStrong: "Paiement garanti le jour même.",
          solutionRest:
            " Dès l'acte validé, le prestataire reçoit automatiquement sa part — zéro créance, zéro mauvaise dette.",
        },
        {
          problemStrong: "Données fragmentées.",
          problemRest:
            " Transactions en espèces, pas d'identité patient, pas de registre numérique — le marché santé est invisible.",
          solutionStrong: "IDNS + Confidential Ledger.",
          solutionRest:
            " Chaque patient a un identifiant unique. Chaque acte est codé ICD-10 et enregistré immuablement sur Azure.",
        },
        {
          problemStrong: "Opacité financière.",
          problemRest:
            " Le marché santé est non-traçable, non-auditable, et donc non-investissable pour les DFI et impact investors.",
          solutionStrong: "Ledger auditable en temps réel.",
          solutionRest:
            " Chaque transaction est accessible aux investisseurs, auditeurs et régulateurs sur Azure Confidential Ledger.",
        },
        {
          problemStrong: "Évasion fiscale.",
          problemRest:
            " Les paiements cash ne génèrent aucune recette fiscale pour la DGI, malgré des milliards de CDF de flux annuels.",
          solutionStrong: "Fiscalité automatique.",
          solutionRest:
            " Chaque e-voucher génère une contribution DGI automatique — sans agent supplémentaire, sans évasion possible.",
        },
        {
          problemStrong: "Subventions détournées.",
          problemRest:
            " Les aides publiques et internationales arrivent sans traçabilité et sont systématiquement détournées avant d'atteindre les bénéficiaires.",
          solutionStrong: "E-vouchers dédiés (Sponsor).",
          solutionRest:
            " Les sponsors publics ou privés émettent des e-vouchers utilisés uniquement pour des soins ICD-10 vérifiés — zéro détournement.",
        },
        {
          problemStrong: "Désert médical rural.",
          problemRest:
            " Les zones rurales sont inaccessibles financièrement et logistiquement pour les soins d'urgence et les évacuations.",
          solutionStrong: "USSD + évacuation médicale AHT.",
          solutionRest:
            " Les e-vouchers couvrent les soins de proximité ET les évacuations médicales codées — accessibles *707# même en zone isolée.",
        },
        {
          problemStrong: "Diaspora sans canal de santé.",
          problemRest:
            " Les Congolais de l'étranger ne disposent d'aucun mécanisme fiable pour financer les soins de leurs proches en RDC.",
          solutionStrong: "Transfert santé diaspora (DSP).",
          solutionRest:
            " Les DSP envoient des e-vouchers AHT depuis l'étranger, directement au wallet IDNS du bénéficiaire en RDC — frais 2,5%.",
        },
      ],
    },
    sec2: {
      label: "02 — Pourquoi c'est incroyable",
      title: "Un système qui crée",
      titleEm: "de la valeur pour tous",
      sub: "MeducAHT est le seul système où chaque partie prenante gagne simultanément — pas un transfert de richesse d'un acteur vers un autre, mais une création nette de valeur pour l'ensemble de l'écosystème.",
      cards: [
        {
          icon: "👤",
          cat: "Accès inclusif",
          title: "La santé pour chaque Congolais, sans exception",
          body: "En zone rurale comme urbaine, tout Congolais avec une SIM accède aux soins ICD-10 via USSD *707# — sans smartphone, sans compte bancaire, sans paperasse. L'IDNS créé en quelques secondes est à la fois une identité de santé numérique et un wallet e-voucher. Le barème officiel RDC traduit en codes ICD-10 garantit le même prix pour le même acte partout dans les 26 provinces. Inclus par conception. Équitable par architecture. Accessible même là où aucune banque n'a jamais ouvert une agence.",
          tags: ["*707# USSD", "ICD-10", "26 Provinces", "Zéro discrimination"],
          variant: "access",
        },
        {
          icon: "🏥",
          cat: "Hôpitaux & cliniques",
          title:
            "Paiement garanti. Solvabilité structurelle. Capacité d'investissement.",
          body: "Dès l'acte validé, l'établissement est payé automatiquement, le jour même, directement sur son compte. Zéro créance. Zéro mauvaise dette. Zéro délai. Un établissement avec une trésorerie garantie et prévisible devient bancable : il peut emprunter pour moderniser ses équipements, recruter du personnel qualifié, étendre ses services. La solvabilité crée la crédibilité — et la crédibilité attire l'investissement privé. MeducAHT convertit une clinique en difficulté en une institution financièrement viable.",
          tags: ["Paiement J+0", "Solvabilité", "Bancabilité", "Investissement"],
          variant: "hp",
        },
        {
          icon: "🏛️",
          cat: "État Congolais",
          title:
            "Fiscalité santé automatique & données nationales en temps réel",
          body: "Chaque transaction AHT génère automatiquement une contribution fiscale à la DGI — enregistrée immuablement sur Azure Confidential Ledger, sans agent fiscal supplémentaire. Le Ministère de la Santé dispose pour la première fois d'un dataset national ICD-10 auditable en temps réel — outil indispensable pour planifier la CSU, allouer les budgets santé, et présenter des preuves d'impact aux bailleurs internationaux. MeducAHT est l'infrastructure d'exécution que la politique de CSU attendait.",
          tags: ["DGI auto.", "Dataset CSU", "Planification", "Preuve impact"],
          variant: "state",
        },
        {
          icon: "🌐",
          cat: "Population — Services étendus",
          title: "Bien plus que les soins : un écosystème de services santé",
          body: "L'IDNS est la porte d'entrée vers un écosystème complet. Microfinance santé : crédits e-vouchers remboursables en plusieurs fois (BNPL santé). Évacuation médicale : e-vouchers AHT couvrent le transport et les soins d'urgence codés. Diaspora (DSP) : envoi d'e-vouchers depuis l'étranger directement au wallet IDNS du proche en RDC (frais 2,5%). Assurance santé : les assureurs émettent des e-vouchers pré-financés pour leurs assurés. Un seul identifiant IDNS, un accès à l'ensemble de l'écosystème.",
          tags: [
            "Microfinance",
            "BNPL Santé",
            "Évacuation",
            "Diaspora",
            "Assurance",
          ],
          variant: "pop",
        },
        {
          icon: "🌟",
          cat: "Sponsors & Donateurs",
          title: "Chaque centime traçable jusqu'au soin réalisé",
          body: "Les sponsors — entreprises, fondations, ONG, gouvernements, individus — émettent des e-vouchers AHT dédiés à des bénéficiaires ciblés. Ces e-vouchers ne peuvent être utilisés que pour des soins ICD-10 vérifiés — zéro détournement possible. Le sponsor reçoit un rapport d'impact en temps réel : quel soin, pour qui, dans quelle province, à quelle date. Une fondation internationale peut enfin prouver à ses donateurs que chaque dollar a atteint un acte médical. La philanthropie devient auditable.",
          tags: [
            "Zéro détournement",
            "Rapport impact",
            "Auditable",
            "Bénéficiaires ciblés",
          ],
          variant: "sponsor",
        },
        {
          icon: "🔒",
          cat: "Traçabilité & Confiance",
          title: "Transparence, crédibilité et confiance institutionnelle",
          body: "Chaque transaction AHT est enregistrée sur Microsoft Azure Confidential Ledger — infalsifiable, auditable en temps réel, accessible aux régulateurs, auditeurs et partenaires institutionnels avec les droits d'accès appropriés. Aucun acteur, y compris Meduc GM, ne peut modifier un enregistrement. Cette transparence structurelle crée une confiance institutionnelle que aucune promesse commerciale ne peut construire — elle est garantie par l'architecture. OMS, USAID, bailleurs DFI, ministères : chacun voit ce qu'il a besoin de voir, rien de plus.",
          tags: [
            "Immuable",
            "Azure Ledger",
            "Audit temps réel",
            "Confiance OMS/DFI",
          ],
          variant: "trust",
        },
        {
          icon: "📈",
          cat: "Investisseurs",
          title: "La solvabilité hospitalière comme moteur de rendement",
          body: "MeducAHT crée un effet domino d'investissement. Des hôpitaux solvables sont des hôpitaux bancables — ils peuvent recevoir des prêts, des obligations santé, des financements d'infrastructure. Un marché santé autrefois opaque devient un actif investissable traçable : data auditable, revenus prévisibles, risk profile connu. Les DFI, impact investors et fonds de santé disposent pour la première fois d'un canal d'entrée structuré dans le marché de la santé congolais. Due diligence en temps réel sur Azure Confidential Ledger.",
          tags: [
            "Hôpitaux bancables",
            "Due diligence live",
            "DFI ready",
            "Rendement mesurable",
          ],
          variant: "inv",
        },
        {
          icon: "🏦",
          cat: "Banques & Opérateurs",
          title: "38 millions de clients. Des milliards en flux traçables.",
          body: "Pour les banques partenaires MeducAHT, l'enjeu est historique. En devenant la banque de remise des hôpitaux partenaires (HP Main Hub), elles accèdent à des flux financiers santé prédictibles et traçables — le type de donnée qui permet d'octroyer des crédits, de structurer des produits santé, de fidéliser des clients institutionnels. Les opérateurs télécom (Airtel, Orange) bénéficient d'un volume de transactions Mobile Money santé additionnel — un segment à forte valeur et faible attrition. MeducAHT est leur meilleur canal d'acquisition de clients à impact.",
          tags: [
            "Flux prédictibles",
            "HP Main Hub",
            "Crédit santé",
            "Mobile Money",
            "38M clients",
          ],
          variant: "bank",
        },
      ],
    },
    sec3: {
      label: "03 — Résultat",
      title: "Le renforcement du système",
      titleEm: "de santé en chiffres",
      sub: "Ce que MeducAHT produit à 38 millions d'utilisateurs d'ici 2030 — non pas des projections théoriques, mais les conséquences mécaniques du système.",
      stats: [
        { n: "38M", l: "Congolais avec\naccès aux soins financés" },
        { n: "26", l: "Provinces RDC\ncouvertes par *707#" },
        { n: "100M", l: "Phase 2\nPan-africaine 2035" },
        { n: "ICD-10", l: "Premier dataset santé\nnational auditable RDC" },
        { n: "0", l: "Agent fiscal supplém.\npour collecter la DGI" },
        { n: "J+0", l: "Paiement garanti\npour chaque hôpital" },
      ],
      closingTitle: "Meduc GM ne comble pas un vide —",
      closingTitleEm: "il construit un marché.",
      closingBody:
        "Quand une infrastructure financière manque, le système s'effondre. Quand elle est construite, tout le monde gagne : les patients accèdent aux soins, les hôpitaux récupèrent leur solvabilité, l'État collecte ses revenus, les investisseurs trouvent un actif traçable, les banques ouvrent de nouveaux marchés, les sponsors voient leur impact prouvé. ",
      closingStrong:
        "C'est ce que fait MeducAHT — propulsé par Microsoft Azure, porté par Meduc GM, pour 38 millions de Congolais.",
    },
    powered: "Propulsé par Microsoft Azure — South Africa North",
  },

  en: {
    eyebrow: "Meduc GM — Investment case",
    h1Line1: "DRC's health crisis",
    h1Em: "turned into\nopportunity.",
    leadParts: {
      before:
        "The Congolese health system is under strain. This is not a dead end — it is a missing financial infrastructure. ",
      strong: "MeducAHT builds it.",
      after:
        " And in building it, it creates measurable value for every stakeholder: patients, hospitals, the State, investors, banks, sponsors, and the diaspora. The crisis becomes the market. The gap becomes the opportunity.",
    },
    resultBanner: {
      strong: "Central outcome:",
      rest: " the structural and lasting strengthening of the Congolese health system — through a transparent, automated, and auditable financial infrastructure built on Microsoft Azure.",
    },
    sec1: {
      label: "01 — Diagnosis & Responses",
      title: "Sector problems",
      titleEm: "and what Meduc GM delivers",
      sub: "Every problem identified in the Congolese health system receives a direct, structural, and verifiable response from the MeducAHT platform.",
      probHd: "✗ Identified problem",
      solHd: "✓ MeducAHT solution",
      rows: [
        {
          problemStrong: "Financial exclusion.",
          problemRest:
            " More than 50 million Congolese are unbanked and have no payment instrument to access care.",
          solutionStrong: "Universal USSD *707#.",
          solutionRest:
            " Access to ICD-10 care via any phone with a SIM — no bank, no smartphone, no physical document.",
        },
        {
          problemStrong: "Hospital insolvency.",
          problemRest:
            " Facilities accumulate unpaid receivables with no recourse, making investment impossible.",
          solutionStrong: "Same-day guaranteed payment.",
          solutionRest:
            " Once the act is validated, the provider automatically receives their share — zero receivables, zero bad debt.",
        },
        {
          problemStrong: "Fragmented data.",
          problemRest:
            " Cash transactions, no patient identity, no digital register — the health market is invisible.",
          solutionStrong: "IDNS + Confidential Ledger.",
          solutionRest:
            " Every patient has a unique identifier. Every act is ICD-10 coded and immutably recorded on Azure.",
        },
        {
          problemStrong: "Financial opacity.",
          problemRest:
            " The health market is untraceable, unauditable, and therefore uninvestable for DFIs and impact investors.",
          solutionStrong: "Real-time auditable ledger.",
          solutionRest:
            " Every transaction is accessible to investors, auditors, and regulators on Azure Confidential Ledger.",
        },
        {
          problemStrong: "Tax evasion.",
          problemRest:
            " Cash payments generate no tax revenue for the DGI, despite billions of CDF in annual flows.",
          solutionStrong: "Automatic taxation.",
          solutionRest:
            " Every e-voucher generates an automatic DGI contribution — no extra agent, no possible evasion.",
        },
        {
          problemStrong: "Diverted subsidies.",
          problemRest:
            " Public and international aid arrives without traceability and is systematically diverted before reaching beneficiaries.",
          solutionStrong: "Dedicated e-vouchers (Sponsor).",
          solutionRest:
            " Public or private sponsors issue e-vouchers used only for verified ICD-10 care — zero diversion.",
        },
        {
          problemStrong: "Rural medical desert.",
          problemRest:
            " Rural areas are financially and logistically inaccessible for emergency care and evacuations.",
          solutionStrong: "USSD + AHT medical evacuation.",
          solutionRest:
            " E-vouchers cover proximity care AND coded medical evacuations — accessible via *707# even in isolated areas.",
        },
        {
          problemStrong: "Diaspora without a health channel.",
          problemRest:
            " Congolese abroad have no reliable mechanism to fund care for relatives in the DRC.",
          solutionStrong: "Diaspora health transfer (DSP).",
          solutionRest:
            " DSPs send AHT e-vouchers from abroad, directly to the beneficiary's IDNS wallet in the DRC — 2.5% fee.",
        },
      ],
    },
    sec2: {
      label: "02 — Why this is remarkable",
      title: "A system that creates",
      titleEm: "value for everyone",
      sub: "MeducAHT is the only system where every stakeholder wins at once — not a transfer of wealth from one actor to another, but net value creation for the entire ecosystem.",
      cards: [
        {
          icon: "👤",
          cat: "Inclusive access",
          title: "Healthcare for every Congolese, without exception",
          body: "In rural and urban areas alike, any Congolese with a SIM accesses ICD-10 care via USSD *707# — no smartphone, no bank account, no paperwork. The IDNS created in seconds is both a digital health identity and an e-voucher wallet. The official DRC tariff translated into ICD-10 codes guarantees the same price for the same act across all 26 provinces. Inclusive by design. Equitable by architecture. Accessible even where no bank has ever opened a branch.",
          tags: ["*707# USSD", "ICD-10", "26 Provinces", "Zero discrimination"],
          variant: "access",
        },
        {
          icon: "🏥",
          cat: "Hospitals & clinics",
          title:
            "Guaranteed payment. Structural solvency. Investment capacity.",
          body: "Once the act is validated, the facility is paid automatically, the same day, directly to its account. Zero receivables. Zero bad debt. Zero delay. A facility with guaranteed, predictable cash flow becomes bankable: it can borrow to modernize equipment, recruit qualified staff, and expand services. Solvency builds credibility — and credibility attracts private investment. MeducAHT turns a struggling clinic into a financially viable institution.",
          tags: ["J+0 payment", "Solvency", "Bankability", "Investment"],
          variant: "hp",
        },
        {
          icon: "🏛️",
          cat: "Congolese State",
          title: "Automatic health taxation & real-time national data",
          body: "Every AHT transaction automatically generates a tax contribution to the DGI — immutably recorded on Azure Confidential Ledger, without any extra tax agent. For the first time, the Ministry of Health has a national ICD-10 dataset auditable in real time — essential to plan UHC, allocate health budgets, and present impact evidence to international donors. MeducAHT is the execution infrastructure UHC policy was waiting for.",
          tags: ["Auto DGI", "UHC dataset", "Planning", "Impact proof"],
          variant: "state",
        },
        {
          icon: "🌐",
          cat: "Population — Extended services",
          title: "Far more than care: a health services ecosystem",
          body: "IDNS is the gateway to a full ecosystem. Health microfinance: e-voucher credits repayable in installments (health BNPL). Medical evacuation: AHT e-vouchers cover transport and coded emergency care. Diaspora (DSP): send e-vouchers from abroad directly to a relative's IDNS wallet in the DRC (2.5% fee). Health insurance: insurers issue pre-funded e-vouchers for their members. One IDNS identifier, access to the entire ecosystem.",
          tags: [
            "Microfinance",
            "Health BNPL",
            "Evacuation",
            "Diaspora",
            "Insurance",
          ],
          variant: "pop",
        },
        {
          icon: "🌟",
          cat: "Sponsors & Donors",
          title: "Every centime traceable to the care delivered",
          body: "Sponsors — companies, foundations, NGOs, governments, individuals — issue AHT e-vouchers dedicated to targeted beneficiaries. These e-vouchers can only be used for verified ICD-10 care — zero diversion possible. The sponsor receives a real-time impact report: which care, for whom, in which province, on which date. An international foundation can finally prove to its donors that every dollar reached a medical act. Philanthropy becomes auditable.",
          tags: [
            "Zero diversion",
            "Impact report",
            "Auditable",
            "Targeted beneficiaries",
          ],
          variant: "sponsor",
        },
        {
          icon: "🔒",
          cat: "Traceability & Trust",
          title: "Transparency, credibility, and institutional trust",
          body: "Every AHT transaction is recorded on Microsoft Azure Confidential Ledger — tamper-proof, auditable in real time, accessible to regulators, auditors, and institutional partners with appropriate access rights. No actor, including Meduc GM, can alter a record. This structural transparency creates institutional trust that no commercial promise can build — it is guaranteed by the architecture. WHO, USAID, DFI donors, ministries: each sees what they need to see, nothing more.",
          tags: [
            "Immutable",
            "Azure Ledger",
            "Real-time audit",
            "WHO/DFI trust",
          ],
          variant: "trust",
        },
        {
          icon: "📈",
          cat: "Investors",
          title: "Hospital solvency as a return engine",
          body: "MeducAHT creates an investment domino effect. Solvent hospitals are bankable hospitals — they can receive loans, health bonds, and infrastructure financing. A once-opaque health market becomes a traceable investable asset: auditable data, predictable revenues, known risk profile. DFIs, impact investors, and health funds finally have a structured entry channel into the Congolese health market. Real-time due diligence on Azure Confidential Ledger.",
          tags: [
            "Bankable hospitals",
            "Live due diligence",
            "DFI ready",
            "Measurable return",
          ],
          variant: "inv",
        },
        {
          icon: "🏦",
          cat: "Banks & Operators",
          title: "38 million clients. Billions in traceable flows.",
          body: "For MeducAHT partner banks, the stakes are historic. By becoming the settlement bank for partner hospitals (HP Main Hub), they access predictable, traceable health financial flows — the kind of data that enables credit, health product structuring, and institutional client loyalty. Telecom operators (Airtel, Orange) gain additional Mobile Money health transaction volume — a high-value, low-attrition segment. MeducAHT is their best channel for acquiring impact-driven clients.",
          tags: [
            "Predictable flows",
            "HP Main Hub",
            "Health credit",
            "Mobile Money",
            "38M clients",
          ],
          variant: "bank",
        },
      ],
    },
    sec3: {
      label: "03 — Outcome",
      title: "Strengthening the health system",
      titleEm: "in numbers",
      sub: "What MeducAHT produces at 38 million users by 2030 — not theoretical projections, but the mechanical consequences of the system.",
      stats: [
        { n: "38M", l: "Congolese with\nfinanced access to care" },
        { n: "26", l: "DRC provinces\ncovered by *707#" },
        { n: "100M", l: "Phase 2\nPan-African 2035" },
        { n: "ICD-10", l: "First national auditable\nhealth dataset in DRC" },
        { n: "0", l: "Extra tax agents\nto collect for DGI" },
        { n: "J+0", l: "Guaranteed payment\nfor every hospital" },
      ],
      closingTitle: "Meduc GM does not fill a gap —",
      closingTitleEm: "it builds a market.",
      closingBody:
        "When financial infrastructure is missing, the system collapses. When it is built, everyone wins: patients access care, hospitals recover solvency, the State collects revenue, investors find a traceable asset, banks open new markets, sponsors see proven impact. ",
      closingStrong:
        "That is what MeducAHT does — powered by Microsoft Azure, driven by Meduc GM, for 38 million Congolese.",
    },
    powered: "Powered by Microsoft Azure — South Africa North",
  },
};
