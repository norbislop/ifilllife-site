export interface Service {
  title: string;
  description: string;
  linkLabel: string;
  // A real local page (starting with /) or an https:// URL.
  href: string;
}

// No service offering has been confirmed. An empty array hides this section.
// Add only real services and working destination links. See docs/CUSTOMIZE.md.
export const services: Service[] = [];
