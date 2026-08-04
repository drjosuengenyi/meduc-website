export type Dictionary = {
  nav: {
    home: string;
    about: string;
    team: string;
    policy: string;
    partners: string;
    evoucher: string;
    impact: string;
    contact: string;
    presentation: string;
    mainAria: string;
    mobileAria: string;
    openMenu: string;
    closeMenu: string;
    menu: string;
  };
  footer: {
    tagline: string;
    navAria: string;
    rights: string;
    techNote: string;
    leadership: string;
    founderName: string;
    founderRole: string;
    founderEmail: string;
  };
  about: {
    h1: string;
    identityEyebrow: string;
    identityTitle: string;
    identityBody: string;
    productEyebrow: string;
    productTitle: string;
    productBody: string;
    cardAlt: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
    heroAlt: string;
  };
  contact: {
    h1: string;
    lead: string;
    coords: string;
    email: string;
    officeSa: string;
    phone: string;
    hours: string;
    hoursValue: string;
    name: string;
    subject: string;
    subjectPartnership: string;
    subjectEvoucher: string;
    subjectProgram: string;
    subjectOther: string;
    message: string;
    submit: string;
  };
  policy: {
    h1: string;
    lead: string;
    items: {
      title: string;
      subtitle: string;
      body: string;
      titleClass: string;
    }[];
    reportTitle: string;
    reportBody: string;
  };
  team: {
    eyebrow: string;
    title: string;
    subtitle: string;
    aria: string;
    members: Record<
      string,
      { role: string; bio: string; imageAlt: string }
    >;
  };
  partners: {
    eyebrow: string;
    title: string;
    subtitle: string;
    listAria: string;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
    items: Record<string, { description: string; logoAlt: string }>;
  };
  presentation: {
    evoucherEyebrow: string;
    evoucherTitle: string;
    evoucherLead: string;
    evoucherPoints: string[];
    evoucherCta: string;
    evoucherAlt: string;
    quote: string;
    quoteBy: string;
    partnersEyebrow: string;
    partnersTitle: string;
    partnersLead: string;
    partnersCta: string;
    ctaTitle: string;
    ctaLead: string;
    ctaButton: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
    imageAlt: string;
    stats: { value: string; label: string }[];
  };
  trust: {
    eyebrow: string;
    title: string;
    lead: string;
    pillars: { title: string; desc: string }[];
  };
  audience: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { title: string; desc: string }[];
  };
  impact: {
    eyebrow: string;
    title: string;
    description: string;
    currentLabel: string;
    targetLabel: string;
    horizon: string;
  };
  evoucherPage: {
    h1: string;
    lead: string;
    howTitle: string;
    facilitiesTitle: string;
    facilitiesLead: string;
    networkCta: string;
    demoCta: string;
    heroAlt: string;
  };
  evoucherParcours: {
    eyebrow: string;
    title: string;
    titleEm: string;
    lead: string;
    ussdLabel: string;
    steps: {
      tag: string;
      title: string;
      titleEm: string;
      body: string;
      features: { strong: string; rest: string }[];
    }[];
    schemaEyebrow: string;
    schemaTitle: string;
    schemaTitleEm: string;
    schemaSub: string;
    powered: string;
  };
};

const fr: Dictionary = {
  nav: {
    home: "Accueil",
    about: "À propos",
    team: "Équipe",
    policy: "Notre politique",
    partners: "Partenaires",
    evoucher: "e-Voucher",
    impact: "Impact",
    contact: "Contact",
    presentation: "Présentation",
    mainAria: "Navigation principale",
    mobileAria: "Navigation mobile",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    menu: "Menu",
  },
  footer: {
    tagline:
      "Accès équitable aux soins et à l'éducation sanitaire pour les communautés d'Afrique.",
    navAria: "Liens de pied de page",
    rights: "MEDUC GM. Tous droits réservés.",
    techNote: "Export statique · Azure Static Web Apps",
    leadership: "Direction",
    founderName: "Dr. Ngenyibungi",
    founderRole: "COO & Founder",
    founderEmail: "drjosue@meduc.tech",
  },
  about: {
    h1: "À propos de nous",
    identityEyebrow: "INSTITUTIONNEL",
    identityTitle: "Identité institutionnelle",
    identityBody:
      "Meduc GM est une société HealthTech et FinTech double-incorporée, opérant en République Démocratique du Congo et en Afrique du Sud. Enregistrée en RDC sous le numéro RCCM CD/KNG/RCCM/25-B-01820, et en Afrique du Sud sous le numéro PTY (LTD) 2025/780904/07, avec le numéro D-U-N-S international 366868380, Meduc GM bénéficie d'une structure juridique solide et vérifiable sur deux juridictions africaines. Cette double incorporation reflète une ambition clairement pan-africaine, ancrée dans les réalités du terrain congolais.",
    productEyebrow: "PRODUIT",
    productTitle: "Mission et produit",
    productBody:
      "Meduc GM développe et opère MeducAHT — l'Africa Health e-Voucher — le premier système de financement de soins de santé à réserve intégrale conçu pour les 115 millions de citoyens congolais, dont 50 millions sont non-bancarisés et structurellement exclus des soins. Propulsé par Microsoft Azure, MeducAHT permet l'accès aux soins ICD-10 via USSD *707# sans smartphone ni compte bancaire, avec une distribution automatique et immuable des flux financiers entre prestataires, État et plateforme.",
    cardAlt:
      "Carte MEDUC GM et smartphone — identité institutionnelle HealthTech FinTech",
    ctaTitle: "Découvrir l'équipe",
    ctaSubtitle: "Leadership et opérations au service de la mission.",
    ctaButton: "Voir l'équipe",
    heroAlt: "Communauté réunie autour d'un centre de santé de proximité",
  },
  contact: {
    h1: "Contact",
    lead: "Une question sur nos programmes, un projet de partenariat ou une demande d'information sur l'e-voucher : écrivez-nous.",
    coords: "Coordonnées",
    email: "Courriel",
    officeSa: "Bureau SA",
    phone: "Téléphone",
    hours: "Horaires",
    hoursValue: "Du lundi au vendredi, 9h–17h (heure locale).",
    name: "Nom complet",
    subject: "Objet",
    subjectPartnership: "Partenariat",
    subjectEvoucher: "e-Voucher",
    subjectProgram: "Programme / mission",
    subjectOther: "Autre",
    message: "Message",
    submit: "Envoyer le message",
  },
  policy: {
    h1: "Notre politique",
    lead: "Les règles qui encadrent notre action quotidienne et protègent les personnes que nous servons.",
    items: [
      {
        title: "Gouvernance responsable",
        subtitle: "Transparence et traçabilité au cœur de notre modèle",
        body: "Meduc GM est gouverné selon des principes de transparence totale et de responsabilité institutionnelle. Chaque décision financière irréversible est soumise au droit de véto irrévocable du Directeur Général & Fondateur. Sur la plateforme MeducAHT, chaque transaction est enregistrée de manière immuable sur le Microsoft Azure Confidential Ledger — accessible en temps réel aux autorités de régulation, aux auditeurs et aux partenaires institutionnels. Aucun acteur, y compris Meduc GM, ne peut modifier ou effacer un enregistrement. La traçabilité n'est pas une option — elle est garantie par l'architecture même du système.",
        titleClass: "text-navy",
      },
      {
        title: "Protection des données",
        subtitle: "Conformité HIPAA & Contrat de confiance Microsoft Azure",
        body: "La protection des données de santé est une priorité absolue. MeducAHT est conçu en conformité avec la loi congolaise sur le numérique, le protocole HIPAA et les standards internationaux RGPD. L'infrastructure repose entièrement sur Microsoft Azure. Le Contrat de Confiance Microsoft encadre juridiquement le traitement des données, complété par Azure Key Vault HSM (clés non-exportables), Private Endpoints (zéro exposition Internet) et Microsoft Defender for Cloud. La sécurité des données n'est pas une promesse — c'est une architecture.",
        titleClass: "text-gold-deep",
      },
      {
        title: "Équité d'accès",
        subtitle:
          "Des soins accessibles à tous, sur base du barème officiel ICD-10",
        body: "MeducAHT intègre les barèmes de prix fixés par l'autorité de régulation des prix de santé en RDC, traduits en actes médicaux codés ICD-10. Chaque e-voucher AHT donne accès à des soins tarifés de manière uniforme et transparente — qu'il soit utilisé à Kinshasa ou dans une zone rurale du Nord-Kivu. Aucune discrimination tarifaire. Aucune négociation informelle. Le même acte médical, le même prix, pour chaque Congolais — partout sur les 26 provinces. L'équité d'accès cesse d'être une aspiration : elle devient une garantie encodée dans la plateforme.",
        titleClass: "text-navy-muted",
      },
      {
        title: "Intégrité des partenariats",
        subtitle:
          "Une plateforme de confiance, pas un substitut aux acteurs de santé",
        body: "Meduc GM ne se substitue à aucun acteur du secteur de la santé. MeducAHT est une plateforme de soutien et d'amplification : elle renforce l'efficacité des hôpitaux, des prestataires, des opérateurs et des institutions publiques qui agissent déjà sur le terrain. Fondée sur la technologie éprouvée de Microsoft Azure — partenaire de confiance reconnu mondialement — notre plateforme rend l'action du pouvoir public et de ses partenaires plus efficace, plus traçable et à impact directement ressenti par la population. Nous construisons avec les acteurs existants, pas à leur place.",
        titleClass: "text-gold",
      },
    ],
    reportTitle: "Signalement & questions",
    reportBody:
      "Pour toute question relative à nos politiques ou pour signaler une préoccupation éthique, contactez-nous via la page dédiée. Chaque message est traité avec confidentialité.",
  },
  team: {
    eyebrow: "LEADERSHIP",
    title: "Notre équipe",
    subtitle:
      "Des dirigeants engagés pour élargir l'accès aux soins et à l'éducation sanitaire.",
    aria: "Membres de l'équipe",
    members: {
      "founder-01": {
        role: "COO & Founder",
        bio: "Fondateur et Chief Operating Officer de Meduc GM. Il conçoit et pilote MeducAHT — l'infrastructure financière de santé qui relie patients, établissements et État via USSD *707#, pour un accès équitable aux soins ICD-10 en RDC.",
        imageAlt:
          "Portrait de Dr. Ngenyibungi, COO and Founder de MEDUC GM",
      },
      "commercial-01": {
        role: "Directeur commercial",
        bio: "Directeur commercial de Meduc GM. Il développe les partenariats commerciaux, le réseau d'établissements et la croissance de MeducAHT auprès des acteurs de santé, des opérateurs et des institutions en RDC.",
        imageAlt:
          "Portrait de Jeremie Tuambilangane, Directeur commercial de MEDUC GM",
      },
      "dg-01": {
        role: "DG MEDUC RDC",
        bio: "Directrice générale de Meduc RDC. Elle pilote les opérations nationales, la coordination avec les autorités sanitaires et le déploiement de MeducAHT sur le territoire congolais.",
        imageAlt: "Portrait de Aminata Mushiya, DG MEDUC RDC",
      },
      "cfo-01": {
        role: "CFO MEDUC GM, DRC",
        bio: "Chief Financial Officer de Meduc GM en RDC. Il supervise la gouvernance financière, la trésorerie et la conformité des flux MeducAHT au service de la solvabilité hospitalière et de la transparence institutionnelle.",
        imageAlt: "Portrait de Etienne Mbula, CFO MEDUC GM DRC",
      },
      "part-03": {
        role: "Directrice des partenariats",
        bio: "Elle construit et anime le réseau d'institutions, d'ONG et d'acteurs privés qui soutiennent la mission de MEDUC GM sur le continent.",
        imageAlt:
          "Portrait de Fatou Diallo, Directrice des partenariats de MEDUC GM",
      },
      "tech-04": {
        role: "Directeur technique",
        bio: "Ingénieur systèmes responsable de l'architecture numérique légère qui sous-tend les parcours e-voucher et l'accès USSD.",
        imageAlt: "Portrait de Kwame Mensah, Directeur technique de MEDUC GM",
      },
    },
  },
  partners: {
    eyebrow: "RÉSEAU",
    title: "Nos partenaires",
    subtitle:
      "Un réseau d'institutions et d'organisations engagées pour un accès équitable aux soins.",
    listAria: "Liste des partenaires",
    ctaTitle: "Devenir partenaire",
    ctaBody:
      "Vous représentez une institution, une ONG ou un établissement de santé ? Écrivons ensemble la suite.",
    ctaButton: "Proposer un partenariat",
    items: {
      "p-oms": {
        description:
          "Réseau continental de promotion de la couverture sanitaire universelle.",
        logoAlt: "Logo Alliance Santé Afrique",
      },
      "p-min": {
        description:
          "Autorités nationales avec lesquelles MEDUC GM déploie des programmes d'accès aux soins.",
        logoAlt: "Logo Ministères de la Santé partenaires",
      },
      "p-ong": {
        description:
          "Collectif d'organisations non gouvernementales actives en santé communautaire.",
        logoAlt: "Logo Réseau ONG Santé",
      },
      "p-edu": {
        description:
          "Partenaire académique pour la formation des agents de santé et l'éducation sanitaire.",
        logoAlt: "Logo Institut de formation sanitaire",
      },
      "p-tech": {
        description:
          "Partenaire technologique pour l'accès numérique aux services de santé.",
        logoAlt: "Logo Connect Santé",
      },
      "p-comm": {
        description:
          "Fondations locales engagées dans le financement communautaire de la santé.",
        logoAlt: "Logo Fondations communautaires",
      },
    },
  },
  presentation: {
    evoucherEyebrow: "Notre dispositif phare",
    evoucherTitle: "e-Voucher : le soin à portée de main",
    evoucherLead:
      "Un outil numérique léger qui relie bénéficiaires et établissements partenaires, sans complexité inutile.",
    evoucherPoints: [
      "Bons numériques remis aux ménages éligibles",
      "Orientation claire vers les établissements du réseau",
      "Validation simple et prise en charge sur place",
    ],
    evoucherCta: "Comprendre le parcours",
    evoucherAlt:
      "Agent de santé remettant un e-voucher à un patient dans un centre de soins",
    quote:
      "« Chaque famille mérite un chemin clair vers les soins essentiels. C'est la promesse que nous tenons, communauté après communauté. »",
    quoteBy: "L'équipe MEDUC GM",
    partnersEyebrow: "Écosystème",
    partnersTitle: "Ils avancent avec nous",
    partnersLead:
      "Institutions, ONG et acteurs de terrain engagés pour un accès équitable aux soins.",
    partnersCta: "Tous les partenaires",
    ctaTitle: "Parlons de votre contexte",
    ctaLead:
      "Autorité sanitaire, établissement ou organisation partenaire : échangeons sur vos priorités dans les soins.",
    ctaButton: "Nous contacter",
  },
  hero: {
    eyebrow: "Santé · Éducation · Impact",
    title: "Accès Inclusif aux Soins de Santé.",
    subtitle:
      "De la Crise sanitaire à l'opportunité d'Investissement et emplois des jeunes. La RDC se reconstruit, l'Afrique innove.",
    primary: "Découvrir e-Voucher",
    secondary: "Notre mission",
    imageAlt:
      "Professionnels de santé accompagnant une communauté dans un centre de soins",
    stats: [
      { value: "38M", label: "personnes déjà touchées" },
      { value: "112M", label: "ambition d'ici 2030" },
      { value: "26", label: "réseaux partenaires actifs" },
    ],
  },
  trust: {
    eyebrow: "Nos fondations",
    title: "Ce qui guide notre action",
    lead: "Trois piliers pour bâtir la confiance auprès des communautés et des partenaires.",
    pillars: [
      {
        title: "Accès aux soins",
        desc: "Des parcours simplifiés pour rapprocher les services essentiels des populations.",
      },
      {
        title: "Éducation sanitaire",
        desc: "Des messages clairs et locaux pour renforcer la prévention et l'autonomie des familles.",
      },
      {
        title: "Partenariats durables",
        desc: "Une collaboration étroite avec les autorités, les établissements et les acteurs de terrain.",
      },
    ],
  },
  audience: {
    eyebrow: "Publics servis",
    title: "Pour qui nous agissons",
    lead: "MEDUC GM sert plusieurs publics autour d'un même objectif : des soins accessibles et dignes.",
    items: [
      {
        title: "Ménages & patients",
        desc: "Des familles qui ont besoin d'un accès simple et fiable aux soins essentiels.",
      },
      {
        title: "Établissements de santé",
        desc: "Des structures partenaires qui accueillent les bénéficiaires orientés par nos programmes.",
      },
      {
        title: "Autorités & partenaires",
        desc: "Institutions et organisations qui co-construisent des parcours de santé inclusifs.",
      },
      {
        title: "Agents communautaires",
        desc: "Les relais de proximité qui accompagnent l'information et l'orientation sur le terrain.",
      },
    ],
  },
  impact: {
    eyebrow: "Trajectoire 2030",
    title: "Notre ambition d'impact",
    description:
      "Notre trajectoire d'impact : élargir l'accès aux soins et à l'éducation sanitaire d'ici 2030.",
    currentLabel: "Personnes déjà touchées",
    targetLabel: "Ambition d'ici 2030",
    horizon: "d'ici 2030",
  },
  evoucherPage: {
    h1: "e-Voucher : un accès simplifié aux soins",
    lead: "Un dispositif numérique léger qui relie bénéficiaires et établissements partenaires, sans complexité inutile.",
    howTitle: "Comment fonctionne le parcours",
    facilitiesTitle: "Pour les établissements",
    facilitiesLead:
      "Rejoindre le réseau e-voucher, c'est accueillir des bénéficiaires orientés, disposer d'un flux de validation simple et renforcer la continuité des soins de proximité.",
    networkCta: "Voir le réseau",
    demoCta: "Demander une démo",
    heroAlt:
      "Agent de santé remettant un e-voucher à un patient dans un centre de soins",
  },
  evoucherParcours: {
    eyebrow: "Meduc GM — MeducAHT — Guide utilisateur",
    title: "Comment fonctionne",
    titleEm: "l'e-Voucher AHT ?",
    lead: "En 4 étapes simples, tout Congolais avec une carte SIM accède aux soins de santé ICD-10 — sans banque, sans smartphone, sans intermédiaire.",
    ussdLabel: "Composer sur n'importe quel téléphone",
    steps: [
      {
        tag: "Étape 1 — Identité",
        title: "Créez votre",
        titleEm: "Identifiant National de Santé",
        body: "L'IDNS (Identifiant National de Santé) est votre numéro unique sur la plateforme MeducAHT. En composant *707#, vous créez en quelques secondes un identifiant personnel qui joue un double rôle : celui d'une identité de santé numérique et celui d'un wallet de e-vouchers. Une seule création, une seule fois, valable dans les 26 provinces de la RDC.",
        features: [
          {
            strong: "Sans document physique requis",
            rest: " — la vérification se fait via votre numéro de téléphone SIM",
          },
          {
            strong: "Numéro unique et irrévocable",
            rest: " — 12 caractères alphanumériques, format sécurisé",
          },
          {
            strong: "Double fonction",
            rest: " — ID de santé + wallet e-voucher dans un seul identifiant",
          },
          {
            strong: "Valable dans tous les points de soins",
            rest: " partenaires MeducAHT en RDC",
          },
        ],
      },
      {
        tag: "Étape 2 — Achat",
        title: "Achetez votre",
        titleEm: "e-Voucher AHT",
        body: "Une fois votre IDNS créé, vous rechargez votre wallet en achetant des e-vouchers AHT via trois modes de paiement : en espèces auprès d'un agent Vendeur Direct terrain, par virement bancaire, ou via Mobile Money (Airtel Money, Orange Money, Vodacom M-Pesa). Le montant est crédité instantanément en e-vouchers AHT dans votre wallet IDNS, ancré au taux officiel de la Banque Centrale du Congo.",
        features: [
          {
            strong: "Cash",
            rest: " — via un agent Vendeur Direct MeducAHT sur le terrain",
          },
          {
            strong: "Banque",
            rest: " — virement vers le compte Meduc GM, crédit IDNS instantané",
          },
          {
            strong: "Via *707# USSD",
            rest: " — sur tout téléphone, même sans Internet",
          },
          {
            strong: "Via l'application mobile",
            rest: " — iOS et Android",
          },
          {
            strong: "Mobile Money accepté",
            rest: " — Airtel Money, Orange Money, Vodacom M-Pesa",
          },
          {
            strong: "Créditage instantané",
            rest: " — e-vouchers disponibles immédiatement dans le wallet",
          },
        ],
      },
      {
        tag: "Étape 3 — Soins",
        title: "Accédez aux soins",
        titleEm: "de façon équitable",
        body: "Au point de soins partenaire MeducAHT, vous présentez votre IDNS. Le prestataire identifie l'acte médical par son code ICD-10 et son prix fixé selon le barème officiel. Vous confirmez le paiement par OTP SMS. Le même acte, le même prix, pour chaque Congolais — à Kinshasa comme en zone rurale. Zéro négociation. Zéro discrimination tarifaire.",
        features: [
          {
            strong: "Barème officiel RDC",
            rest: " — prix fixés par l'autorité de régulation, traduits en ICD-10",
          },
          {
            strong: "Équité tarifaire totale",
            rest: " — même code ICD-10, même prix partout en RDC",
          },
          {
            strong: "Validation OTP SMS",
            rest: " — sécurité du paiement en temps réel",
          },
          {
            strong: "Accessibles en milieu rural",
            rest: " — via USSD *707# sans Internet",
          },
        ],
      },
      {
        tag: "Étape 4 — Distribution",
        title: "Distribution automatique",
        titleEm: "immuable & instantanée",
        body: "Dès que le soin est validé au niveau du point de soins, la plateforme MeducAHT déclenche automatiquement une distribution en trois flux simultanés, enregistrée de manière immuable sur le Microsoft Azure Confidential Ledger. La taxe de l'État est collectée automatiquement auprès de la DGI, la structure de santé est approvisionnée le jour même, et Meduc GM reçoit sa part pour la pérennité de la plateforme.",
        features: [
          {
            strong: "Prestataire de soins",
            rest: " — paiement garanti le jour même, directement sur son compte",
          },
          {
            strong: "DGI — contribution fiscale",
            rest: " — automatique, sans agent supplémentaire",
          },
          {
            strong: "Meduc GM",
            rest: " — frais de plateforme pour la durabilité du service",
          },
          {
            strong: "Azure Confidential Ledger",
            rest: " — enregistrement immuable, auditable en temps réel",
          },
        ],
      },
    ],
    schemaEyebrow: "Schéma global du circuit AHT",
    schemaTitle: "Le circuit complet",
    schemaTitleEm: "de l'e-Voucher AHT",
    schemaSub:
      "De la création de l'IDNS au paiement du prestataire — un système fermé, traçable et immuable",
    powered: "Propulsé par Microsoft Azure — South Africa North",
  },
};

const en: Dictionary = {
  nav: {
    home: "Home",
    about: "About",
    team: "Team",
    policy: "Our policy",
    partners: "Partners",
    evoucher: "e-Voucher",
    impact: "Impact",
    contact: "Contact",
    presentation: "Presentation",
    mainAria: "Main navigation",
    mobileAria: "Mobile navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menu: "Menu",
  },
  footer: {
    tagline:
      "Equitable access to care and health education for communities across Africa.",
    navAria: "Footer links",
    rights: "MEDUC GM. All rights reserved.",
    techNote: "Static export · Azure Static Web Apps",
    leadership: "Leadership",
    founderName: "Dr. Ngenyibungi",
    founderRole: "COO & Founder",
    founderEmail: "drjosue@meduc.tech",
  },
  about: {
    h1: "About us",
    identityEyebrow: "INSTITUTIONAL",
    identityTitle: "Institutional identity",
    identityBody:
      "Meduc GM is a dual-incorporated HealthTech and FinTech company operating in the Democratic Republic of the Congo and South Africa. Registered in the DRC under RCCM CD/KNG/RCCM/25-B-01820, and in South Africa under PTY (LTD) 2025/780904/07, with international D-U-N-S number 366868380, Meduc GM benefits from a solid, verifiable legal structure across two African jurisdictions. This dual incorporation reflects a clearly pan-African ambition, rooted in Congolese realities on the ground.",
    productEyebrow: "PRODUCT",
    productTitle: "Mission and product",
    productBody:
      "Meduc GM develops and operates MeducAHT — the Africa Health e-Voucher — the first full-reserve healthcare financing system designed for 115 million Congolese citizens, including 50 million who are unbanked and structurally excluded from care. Powered by Microsoft Azure, MeducAHT enables access to ICD-10 care via USSD *707# without a smartphone or bank account, with automatic and immutable distribution of financial flows among providers, the State, and the platform.",
    cardAlt:
      "MEDUC GM card and smartphone — HealthTech FinTech institutional identity",
    ctaTitle: "Meet the team",
    ctaSubtitle: "Leadership and operations serving the mission.",
    ctaButton: "View the team",
    heroAlt: "Community gathered around a local health centre",
  },
  contact: {
    h1: "Contact",
    lead: "A question about our programmes, a partnership project, or information on the e-voucher: write to us.",
    coords: "Details",
    email: "Email",
    officeSa: "SA Office",
    phone: "Phone",
    hours: "Hours",
    hoursValue: "Monday to Friday, 9am–5pm (local time).",
    name: "Full name",
    subject: "Subject",
    subjectPartnership: "Partnership",
    subjectEvoucher: "e-Voucher",
    subjectProgram: "Programme / mission",
    subjectOther: "Other",
    message: "Message",
    submit: "Send message",
  },
  policy: {
    h1: "Our policy",
    lead: "The rules that frame our daily action and protect the people we serve.",
    items: [
      {
        title: "Responsible governance",
        subtitle: "Transparency and traceability at the heart of our model",
        body: "Meduc GM is governed by principles of full transparency and institutional accountability. Every irreversible financial decision is subject to the irrevocable veto of the Director General & Founder. On the MeducAHT platform, every transaction is immutably recorded on Microsoft Azure Confidential Ledger — accessible in real time to regulators, auditors and institutional partners. No actor, including Meduc GM, can alter or erase a record. Traceability is not optional — it is guaranteed by the system's architecture.",
        titleClass: "text-navy",
      },
      {
        title: "Data protection",
        subtitle: "HIPAA compliance & Microsoft Azure Trust Contract",
        body: "Protecting health data is an absolute priority. MeducAHT is designed in line with Congolese digital law, the HIPAA protocol and international GDPR standards. The infrastructure runs entirely on Microsoft Azure. The Microsoft Trust Contract legally frames data processing, complemented by Azure Key Vault HSM (non-exportable keys), Private Endpoints (zero Internet exposure) and Microsoft Defender for Cloud. Data security is not a promise — it is an architecture.",
        titleClass: "text-gold-deep",
      },
      {
        title: "Equity of access",
        subtitle: "Care accessible to all, based on the official ICD-10 tariff",
        body: "MeducAHT integrates price schedules set by the DRC health price regulator, translated into ICD-10 coded medical acts. Every AHT e-voucher unlocks care priced uniformly and transparently — whether used in Kinshasa or a rural area. No tariff discrimination. No informal negotiation. The same medical act, the same price, for every Congolese citizen — across all 26 provinces. Equity of access ceases to be an aspiration: it becomes a guarantee encoded in the platform.",
        titleClass: "text-navy-muted",
      },
      {
        title: "Partnership integrity",
        subtitle: "A trust platform, not a substitute for health actors",
        body: "Meduc GM does not replace any actor in the health sector. MeducAHT is a support and amplification platform: it strengthens the effectiveness of hospitals, providers, operators and public institutions already acting on the ground. Built on proven Microsoft Azure technology — a globally trusted partner — our platform makes public action and that of its partners more effective, more traceable and with impact felt directly by the population. We build with existing actors, not in their place.",
        titleClass: "text-gold",
      },
    ],
    reportTitle: "Reporting & questions",
    reportBody:
      "For any question about our policies or to raise an ethical concern, contact us via the dedicated page. Every message is handled confidentially.",
  },
  team: {
    eyebrow: "LEADERSHIP",
    title: "Our team",
    subtitle:
      "Leaders committed to expanding access to care and health education.",
    aria: "Team members",
    members: {
      "founder-01": {
        role: "COO & Founder",
        bio: "Founder and Chief Operating Officer of Meduc GM. He designs and steers MeducAHT — the health financing infrastructure that connects patients, facilities and the State via USSD *707#, for equitable ICD-10 care access in the DRC.",
        imageAlt: "Portrait of Dr. Ngenyibungi, COO and Founder of MEDUC GM",
      },
      "commercial-01": {
        role: "Commercial Director",
        bio: "Commercial Director of Meduc GM. He develops commercial partnerships, the provider network and MeducAHT growth with health actors, operators and institutions in the DRC.",
        imageAlt:
          "Portrait of Jeremie Tuambilangane, Commercial Director of MEDUC GM",
      },
      "dg-01": {
        role: "DG MEDUC RDC",
        bio: "Managing Director of Meduc RDC. She leads national operations, coordination with health authorities and MeducAHT deployment across the Congolese territory.",
        imageAlt: "Portrait of Aminata Mushiya, DG MEDUC RDC",
      },
      "cfo-01": {
        role: "CFO MEDUC GM, DRC",
        bio: "Chief Financial Officer of Meduc GM in the DRC. He oversees financial governance, treasury and compliance of MeducAHT flows in support of hospital solvency and institutional transparency.",
        imageAlt: "Portrait of Etienne Mbula, CFO MEDUC GM DRC",
      },
      "part-03": {
        role: "Director of Partnerships",
        bio: "She builds and animates the network of institutions, NGOs and private actors supporting MEDUC GM's mission across the continent.",
        imageAlt: "Portrait of Fatou Diallo, Director of Partnerships at MEDUC GM",
      },
      "tech-04": {
        role: "Chief Technology Officer",
        bio: "Systems engineer responsible for the lightweight digital architecture behind e-voucher journeys and USSD access.",
        imageAlt: "Portrait of Kwame Mensah, CTO of MEDUC GM",
      },
    },
  },
  partners: {
    eyebrow: "NETWORK",
    title: "Our partners",
    subtitle:
      "A network of institutions and organisations committed to equitable access to care.",
    listAria: "Partner list",
    ctaTitle: "Become a partner",
    ctaBody:
      "Do you represent an institution, NGO or health facility? Let's write the next chapter together.",
    ctaButton: "Propose a partnership",
    items: {
      "p-oms": {
        description:
          "Continental network promoting universal health coverage.",
        logoAlt: "Alliance Santé Afrique logo",
      },
      "p-min": {
        description:
          "National authorities with which MEDUC GM deploys access-to-care programmes.",
        logoAlt: "Partner Ministries of Health logo",
      },
      "p-ong": {
        description:
          "Collective of non-governmental organisations active in community health.",
        logoAlt: "Health NGO Network logo",
      },
      "p-edu": {
        description:
          "Academic partner for training health workers and health education.",
        logoAlt: "Health Training Institute logo",
      },
      "p-tech": {
        description:
          "Technology partner for digital access to health services.",
        logoAlt: "Connect Santé logo",
      },
      "p-comm": {
        description:
          "Local foundations engaged in community health financing.",
        logoAlt: "Community Foundations logo",
      },
    },
  },
  presentation: {
    evoucherEyebrow: "Our flagship device",
    evoucherTitle: "e-Voucher: care within reach",
    evoucherLead:
      "A lightweight digital tool that connects beneficiaries and partner facilities, without unnecessary complexity.",
    evoucherPoints: [
      "Digital vouchers issued to eligible households",
      "Clear referral to network facilities",
      "Simple validation and on-site care",
    ],
    evoucherCta: "Understand the journey",
    evoucherAlt:
      "Health worker handing an e-voucher to a patient in a care centre",
    quote:
      "« Every family deserves a clear path to essential care. Capable, the promise we keep, community after community. »",
    quoteBy: "The MEDUC GM team",
    partnersEyebrow: "Ecosystem",
    partnersTitle: "They move forward with us",
    partnersLead:
      "Institutions, NGOs and field actors committed to equitable access to care.",
    partnersCta: "All partners",
    ctaTitle: "Let's talk about your context",
    ctaLead:
      "Health authority, facility or partner organisation: let's discuss your care priorities.",
    ctaButton: "Contact us",
  },
  hero: {
    eyebrow: "Health · Education · Impact",
    title: "Inclusive Access to Healthcare.",
    subtitle:
      "From the health crisis to an opportunity for investment and youth employment. The DRC rebuilds, Africa innovates.",
    primary: "Discover e-Voucher",
    secondary: "Our mission",
    imageAlt:
      "Healthcare professionals supporting a community in a care centre",
    stats: [
      { value: "38M", label: "people already reached" },
      { value: "112M", label: "ambition by 2030" },
      { value: "26", label: "active partner networks" },
    ],
  },
  trust: {
    eyebrow: "Our foundations",
    title: "What guides our action",
    lead: "Three pillars to build trust with communities and partners.",
    pillars: [
      {
        title: "Access to care",
        desc: "Simplified pathways to bring essential services closer to populations.",
      },
      {
        title: "Health education",
        desc: "Clear, local messages to strengthen prevention and family autonomy.",
      },
      {
        title: "Durable partnerships",
        desc: "Close collaboration with authorities, facilities and field actors.",
      },
    ],
  },
  audience: {
    eyebrow: "Audiences served",
    title: "Who we serve",
    lead: "MEDUC GM serves several audiences around one goal: accessible, dignified care.",
    items: [
      {
        title: "Households & patients",
        desc: "Families who need simple, reliable access to essential care.",
      },
      {
        title: "Health facilities",
        desc: "Partner structures that welcome beneficiaries referred by our programmes.",
      },
      {
        title: "Authorities & partners",
        desc: "Institutions and organisations co-building inclusive health pathways.",
      },
      {
        title: "Community agents",
        desc: "Local relays who support information and referral on the ground.",
      },
    ],
  },
  impact: {
    eyebrow: "2030 trajectory",
    title: "Our impact ambition",
    description:
      "Our impact trajectory: expand access to care and health education by 2030.",
    currentLabel: "People already reached",
    targetLabel: "Ambition by 2030",
    horizon: "by 2030",
  },
  evoucherPage: {
    h1: "e-Voucher: simplified access to care",
    lead: "A lightweight digital device that connects beneficiaries and partner facilities, without unnecessary complexity.",
    howTitle: "How the journey works",
    facilitiesTitle: "For facilities",
    facilitiesLead:
      "Joining the e-voucher network means welcoming referred beneficiaries, using a simple validation flow, and strengthening continuity of local care.",
    networkCta: "View the network",
    demoCta: "Request a demo",
    heroAlt:
      "Health worker handing an e-voucher to a patient in a care centre",
  },
  evoucherParcours: {
    eyebrow: "Meduc GM — MeducAHT — User guide",
    title: "How does",
    titleEm: "the AHT e-Voucher work?",
    lead: "In 4 simple steps, any Congolese with a SIM card accesses ICD-10 healthcare — no bank, no smartphone, no intermediary.",
    ussdLabel: "Dial on any phone",
    steps: [
      {
        tag: "Step 1 — Identity",
        title: "Create your",
        titleEm: "National Health Identifier",
        body: "The IDNS (National Health Identifier) is your unique number on the MeducAHT platform. By dialing *707#, you create in seconds a personal identifier that plays a dual role: a digital health identity and an e-voucher wallet. Created once, valid across all 26 provinces of the DRC.",
        features: [
          {
            strong: "No physical document required",
            rest: " — verification uses your SIM phone number",
          },
          {
            strong: "Unique and irrevocable number",
            rest: " — 12 alphanumeric characters, secured format",
          },
          {
            strong: "Dual function",
            rest: " — health ID + e-voucher wallet in one identifier",
          },
          {
            strong: "Valid at all care points",
            rest: " partnered with MeducAHT in the DRC",
          },
        ],
      },
      {
        tag: "Step 2 — Purchase",
        title: "Buy your",
        titleEm: "AHT e-Voucher",
        body: "Once your IDNS is created, you top up your wallet by buying AHT e-vouchers via three payment modes: cash with a field Direct Seller agent, bank transfer, or Mobile Money (Airtel Money, Orange Money, Vodacom M-Pesa). The amount is credited instantly as AHT e-vouchers in your IDNS wallet, anchored to the official Central Bank of Congo rate.",
        features: [
          {
            strong: "Cash",
            rest: " — via a MeducAHT Direct Seller agent in the field",
          },
          {
            strong: "Bank",
            rest: " — transfer to the Meduc GM account, instant IDNS credit",
          },
          {
            strong: "Via *707# USSD",
            rest: " — on any phone, even without Internet",
          },
          {
            strong: "Via the mobile app",
            rest: " — iOS and Android",
          },
          {
            strong: "Mobile Money accepted",
            rest: " — Airtel Money, Orange Money, Vodacom M-Pesa",
          },
          {
            strong: "Instant credit",
            rest: " — e-vouchers available immediately in the wallet",
          },
        ],
      },
      {
        tag: "Step 3 — Care",
        title: "Access care",
        titleEm: "equitably",
        body: "At a MeducAHT partner care point, you present your IDNS. The provider identifies the medical act by its ICD-10 code and price set under the official tariff. You confirm payment by OTP SMS. The same act, the same price, for every Congolese citizen — in Kinshasa or rural areas. Zero negotiation. Zero tariff discrimination.",
        features: [
          {
            strong: "Official DRC tariff",
            rest: " — prices set by the regulator, mapped to ICD-10",
          },
          {
            strong: "Full tariff equity",
            rest: " — same ICD-10 code, same price across the DRC",
          },
          {
            strong: "OTP SMS validation",
            rest: " — real-time payment security",
          },
          {
            strong: "Accessible in rural areas",
            rest: " — via USSD *707# without Internet",
          },
        ],
      },
      {
        tag: "Step 4 — Distribution",
        title: "Automatic distribution",
        titleEm: "immutable & instant",
        body: "As soon as care is validated at the care point, MeducAHT automatically triggers a three-flow simultaneous distribution, immutably recorded on Microsoft Azure Confidential Ledger. The State tax is collected automatically for the DGI, the health facility receives its guaranteed share the same day, and Meduc GM receives its share for platform sustainability.",
        features: [
          {
            strong: "Care provider",
            rest: " — same-day guaranteed payment, directly to their account",
          },
          {
            strong: "DGI — fiscal contribution",
            rest: " — automatic, no extra agent required",
          },
          {
            strong: "Meduc GM",
            rest: " — platform fees for service sustainability",
          },
          {
            strong: "Azure Confidential Ledger",
            rest: " — immutable record, real-time auditable",
          },
        ],
      },
    ],
    schemaEyebrow: "Global AHT circuit diagram",
    schemaTitle: "The complete circuit",
    schemaTitleEm: "of the AHT e-Voucher",
    schemaSub:
      "From IDNS creation to provider payment — a closed, traceable, immutable system",
    powered: "Powered by Microsoft Azure — South Africa North",
  },
};

export const dictionaries = { fr, en } as const;
