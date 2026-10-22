import type { Localized } from '../i18n';

export interface SiteCategory {
  id: string;
  name: Localized;
  sites: Site[];
}

export interface Site {
  name: string;
  url: string;
  description: Localized;
}

/** External websites. Add the ones the professor mentions here. */
export const siteCategories: SiteCategory[] = [
  {
    id: 'diagrams',
    name: { it: 'Diagrammi', en: 'Diagrams' },
    sites: [
      {
        name: 'draw.io',
        url: 'https://app.diagrams.net',
        description: { it: 'Schemi a blocchi e diagrammi', en: 'Block and flow diagrams' },
      },
    ],
  },
  {
    id: 'programming',
    name: { it: 'Programmazione', en: 'Programming' },
    sites: [
      {
        name: 'Flowgorithm',
        url: 'https://www.flowgorithm.org/',
        description: {
          it: 'Diagrammi di flusso eseguibili (Windows)',
          en: 'Runnable flowcharts (Windows)',
        },
      },
    ],
  },
  {
    id: 'circuits',
    name: { it: 'Circuiti', en: 'Circuits' },
    sites: [
      {
        name: 'Logisim Evolution',
        url: 'https://github.com/logisim-evolution/logisim-evolution',
        description: { it: 'Circuiti logici digitali', en: 'Digital logic circuits' },
      },
      {
        name: 'Falstad',
        url: 'https://www.falstad.com/circuit/',
        description: { it: 'Simulatore di circuiti nel browser', en: 'In-browser circuit simulator' },
      },
    ],
  },
];
