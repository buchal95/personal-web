import { Service, Testimonial, Package, FAQ } from '../types';

export const SERVICES: Service[] = [
  {
    title: 'Strategická konzultace',
    description: 'Jednorázové setkání pro nastavení cílených kampaní.',
    benefit: 'Okamžitá doporučení k dalším krokům'
  },
  {
    title: 'Audit reklamních kampaní',
    description: 'Hloubková analýza výkonu a optimalizační návrhy.',
    benefit: 'Snížení nákladů, vyšší ROI'
  },
  {
    title: 'Workshop / Přednáška',
    description: 'Interaktivní školení pro týmy či veřejné akce.',
    benefit: 'Zvýšení znalostí a motivace týmu'
  },
  {
    title: 'Měsíční report & plán',
    description: 'Dashboard + report + akční plán na další měsíc.',
    benefit: 'Průběžné zlepšování výkonu'
  },
  {
    title: 'Mentoring 1:1',
    description: 'Individuální konzultace a rozvoj dovedností.',
    benefit: 'Rychlejší profesní růst'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Dominik Lupták, Chief Marketing Officer v Protein & Co',
    quote: 'Honza je typ člověka, kterému chcete otevřít vrátka do fungování vašeho týmu a businessu. Overall – pokud chcete někomu svěřit svůj performance marketing, ozvěte se mu. Dostanete skvělou službu s nadstavbou. 11/10',
    result: 'Dlouhodobá spolupráce s prokazatelnými výsledky',
    image: '/dominik-luptak.jpeg'
  },
  {
    name: 'Vasja Rozman, Chief Digital Officer v Marieli.cz',
    quote: 'S Honzou jsme spolupracovali na reklamních kampaních na platformě Meta. Během naší spolupráce se nám podařilo dosáhnout skvělých výsledků – například jsme snížili PNO na polovinu, a to při zachování stejného meziročního rozpočtu.',
    result: 'PNO sníženo o 50% při stejném rozpočtu',
    image: '/vasja-rozmanov.jpeg'
  },
  {
    name: 'Matvei Podgornov, Paid Media Lead v Trezor.io',
    quote: 'We worked with Jan on our Meta Ads account. He\'s super detail-oriented, really knows the platform inside out, and always took the time to understand what we needed as a client.',
    result: 'Successful Meta Ads optimization for Trezor',
    image: '/matvei-podgornov.jpeg'
  },
  {
    name: 'Jiří Schaffer, PPC specialista a majitel jirischaffer.cz',
    quote: 'Honza ví velmi dobře, co dělá. Již první měsíc po začátku spolupráce dokázal výrazně zlepšit výsledky. Musím ocenit jeho neuvěřitelnou expertízu v rámci Facebook reklamy.',
    result: 'Zlepšení výsledků již v prvním měsíci',
    image: '/jiri-schaffer.jpeg'
  }
];

export const PACKAGES: Package[] = [
  {
    name: 'Základní audit',
    price: '990 Kč',
    description: '1 hodina + zpráva',
    features: [
      'Analýza současného stavu',
      'Identifikace hlavních problémů',
      'Základní doporučení',
      'Follow-up e-mail s akcemi'
    ]
  },
  {
    name: 'Kompletní audit + doporučení',
    price: '2 990 Kč',
    description: '2 hodiny + prezentace',
    features: [
      'Detailní analýza kampaní',
      'Komplexní doporučení',
      'Návrh strategie',
      'Akční plán na 30 dní',
      'Follow-up konzultace'
    ]
  },
  {
    name: 'Workshop pro tým',
    price: 'od 5 990 Kč',
    description: '3 hodiny interaktivní školení',
    features: [
      'Customizovaný program',
      'Interaktivní cvičení',
      'Případové studie',
      'Materiály pro účastníky',
      'Follow-up konzultace'
    ]
  }
];

export const FAQS: FAQ[] = [
  {
    question: 'Pro koho je konzultace vhodná?',
    answer: 'Konzultace je vhodná pro firmy a jednotlivce, kteří již investují do reklamy na sociálních sítích a chtějí zlepšit její výkonnost, nebo pro ty, kteří chtějí s reklamou začít efektivně.'
  },
  {
    question: 'Jak probíhá workshop?',
    answer: 'Workshop může probíhat online (přes Zoom/Teams) nebo osobně ve vašich prostorách. Online verze obsahuje interaktivní prvky a breakout rooms, osobní verze zahrnuje praktická cvičení a skupinovou práci.'
  },
  {
    question: 'Potřebuji předem nastavení účtů?',
    answer: 'Pro základní konzultaci není nutné mít předem nastavené reklamní účty. Pro audit je potřeba mít přístup k existujícím účtům nebo alespoň k datům z nich.'
  },
  {
    question: 'Pracuji i s malými podnikateli?',
    answer: 'Ano, pracuji s klienty všech velikostí. Pro malé podnikatele mám speciální základní balíček, který je cenově dostupnější a zaměřený na rychlé výsledky.'
  },
  {
    question: 'Jak rychle uvidím první výsledky?',
    answer: 'První výsledky se obvykle dostavují v řádu týdnů po implementaci doporučení. U komplexnějších projektů může trvat 2-3 měsíce, než se projeví plný efekt změn.'
  }
];