export const HEADING_LABELS = [
  'WHO I AM',
  'WHAT I CARE ABOUT',
  'WHAT I BELIEVE IN',
  'WHAT I CAN COOK',
  "WHAT I'M UPTO",
] as const;

// Placeholder body copy — same across some sections for now per the design notes;
// update per-section as content is written.
const SHARED_DESC = 'Designer who help foodies spend less time on screen and more on dining.';

export const DESCRIPTIONS: string[] = [
  SHARED_DESC,
  SHARED_DESC,
  "Good solutions don't ask for attention. They just work—quietly and effectively.",
  SHARED_DESC,
  'Taking deep breath, learning Ai and hunting for my next moonshot of a team',
];

export interface ProjectMeta {
  label: string;
  value: string;
  /** Optional leading bold fragment, e.g. the "4.6X" in the outcome. */
  bold?: string;
}

export interface Project {
  category: string;
  title: string;
  description: string;
  metaLeft: ProjectMeta;
  metaRight?: ProjectMeta;
  href: string;
  cover: string;
  coverAlt: string;
}

export const PROJECTS: Project[] = [
  {
    category: 'EAZYDINER GROWTH',
    title: 'Referral & Reactivation Growth System',
    description: 'Product Design, Strategy, User Journey Mapping & Fraud Prevention.',
    metaLeft: { label: 'SCOPE', value: 'End-to-end referral & reactivation flows' },
    metaRight: { label: 'OUTCOME', bold: '4.6X', value: ' improvement in referral-to-customer conversion' },
    href: 'https://www.figma.com/proto/gLcA9RlxGcRA2tHiu22rOv/Project?node-id=108-413&viewport=-86%2C290%2C0.29&t=c1Gpuc4yn5vEdH5S-1&scaling=contain&content-scaling=fixed&starting-point-node-id=108%3A413&page-id=50%3A329',
    cover: 'assets/project-1-cover.png',
    coverAlt: 'Referral & Reactivation Growth System app screen',
  },
  {
    category: 'EAZYDINER LOYALTY',
    title: 'Reimaged EazyPoints Redemption Voucher',
    description: 'Product Design, User Experience & Discoverability',
    metaLeft: { label: 'SCOPE', value: 'Making vouchers discoverability easy' },
    metaRight: { label: 'ROLE', value: 'Design Lead' },
    href: 'https://www.figma.com/proto/gLcA9RlxGcRA2tHiu22rOv/Project?node-id=71-2&viewport=-86%2C290%2C0.29&t=c1Gpuc4yn5vEdH5S-1&scaling=contain&content-scaling=fixed&starting-point-node-id=71%3A2&page-id=50%3A329&show-proto-sidebar=1',
    cover: 'assets/project-2-cover.png',
    coverAlt: 'Reimaged EazyPoints Redemption Voucher app screen',
  },
];

export const SNIPPET_COUNT = 15;

export const SNIPPETS: string[] = Array.from(
  { length: SNIPPET_COUNT },
  (_, i) => `assets/snippet-${i + 1}.png`,
);

export const LINKS = {
  linkedin: 'https://www.linkedin.com/in/amulya-agarwal/',
  behance: 'https://www.behance.net/agarwalamu642b',
  gmailCompose: 'https://mail.google.com/mail/u/1/#inbox?compose=new',
  email: 'agarwal.amulya@gmail.com',
  phoneDisplay: '+91-9592228874',
  phoneHref: 'tel:+919592228874',
  resume: 'resume.pdf',
} as const;
