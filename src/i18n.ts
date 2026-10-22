export type Lang = 'it' | 'en';

/** Text that exists in both languages. */
export type Localized = Record<Lang, string>;

export const t = (text: Localized, lang: Lang) => text[lang];

/** Interface strings. Content (tools, sites) lives in src/data/. */
export const ui = {
  it: {
    searchPlaceholder: 'Cerca strumenti e siti…',
    searchLabel: 'Cerca',
    themeToggle: 'Cambia tema',
    navTools: 'Strumenti',
    navSites: 'Siti',
    navAbout: 'Info',
    heroTitleA: 'Strumenti da',
    heroTitleAccent: 'laboratorio',
    heroTitleSep: ',',
    heroTitleB: 'nel browser.',
    heroLead:
      'Elabora video, immagini e disegni direttamente sul tuo computer. Nessun upload, nessun account.',
    badges: ['100% locale', 'Open source', 'Gratis'],
    toolsHeading: 'Strumenti',
    sitesHeading: 'Siti utili',
    source: 'src',
    sourceLabel: 'Codice sorgente',
    noResults: 'Nessun risultato per',
    preview: 'Anteprima',
    madeBy: 'Fatto da',
    published: 'Pubblicato il',
    noSignal: 'nessun segnale',
    comingSoon: 'in arrivo',
  },
  en: {
    searchPlaceholder: 'Search tools and sites…',
    searchLabel: 'Search',
    themeToggle: 'Toggle theme',
    navTools: 'Tools',
    navSites: 'Sites',
    navAbout: 'About',
    heroTitleA: 'Lab tools,',
    heroTitleAccent: 'right in',
    heroTitleSep: '',
    heroTitleB: 'your browser.',
    heroLead:
      'Process videos, images and drawings on your own computer. No uploads, no account.',
    badges: ['100% local', 'Open source', 'Free'],
    toolsHeading: 'Tools',
    sitesHeading: 'Useful sites',
    source: 'src',
    sourceLabel: 'Source code',
    noResults: 'No results for',
    preview: 'Preview',
    madeBy: 'Made by',
    published: 'Published on',
    noSignal: 'no signal',
    comingSoon: 'coming soon',
  },
} as const;
