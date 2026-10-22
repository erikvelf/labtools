import type { Localized } from '../i18n';

export interface Tool {
  id: string;
  name: Localized;
  subtitle: Localized;
  description: Localized;
  /** Where the web app is hosted (Cloudflare Workers, account subdomain erikv-tools). */
  url: string;
  /** Repository with the tool's source code. */
  repo: string;
  /** Image shown in the hover tooltip, relative to /public. */
  preview: string;
  /** Key of an icon in src/components/ToolIcon.astro. */
  icon: 'signal' | 'pen' | 'image';
}

export const tools: Tool[] = [
  {
    id: 'quantify',
    name: { it: 'Quantificatore', en: 'Quantify' },
    subtitle: { it: 'Segnali da oscilloscopio', en: 'Oscilloscope signals' },
    description: {
      it: "Carica un video al rallentatore dell'oscilloscopio e ottieni la traccia intera, stabile, in un'unica immagine.",
      en: 'Load a slow-motion video of an oscilloscope and get the whole trace, steady, in a single image.',
    },
    url: 'https://quantify.erikv-tools.workers.dev',
    repo: 'https://github.com/erikvelf/quantify',
    preview: '/previews/quantify.svg',
    icon: 'signal',
  },
  {
    id: 'canvas',
    name: { it: 'Canvas', en: 'Canvas' },
    subtitle: { it: 'Disegno libero', en: 'Free drawing' },
    description: {
      it: 'Disegna schemi di massima su una tela infinita: ogni elemento resta modificabile. Salva ed esporta in PNG o SVG.',
      en: 'Sketch rough diagrams on an infinite canvas where everything stays editable. Save and export to PNG or SVG.',
    },
    url: 'https://infinidraw.erikv-tools.workers.dev',
    repo: 'https://github.com/erikvelf/infinidraw',
    preview: '/previews/canvas.svg',
    icon: 'pen',
  },
  {
    id: 'image-editor',
    name: { it: 'Image editor', en: 'Image editor' },
    subtitle: { it: 'Ritocco foto', en: 'Photo touch-up' },
    description: {
      it: 'Raddrizza e ritaglia le foto, ridimensiona, aggiungi testo, frecce ed evidenziazioni, rimuovi i metadati (GPS incluso).',
      en: 'Straighten and crop photos, resize, add text, arrows and highlights, strip metadata (GPS included).',
    },
    url: 'https://lastedit.erikv-tools.workers.dev',
    repo: 'https://github.com/erikvelf/lastedit',
    preview: '/previews/image-editor.svg',
    icon: 'image',
  },
];
