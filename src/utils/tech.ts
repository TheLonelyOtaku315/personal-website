// Matching between skill names (About section) and project technologies.
// Names that mean the same thing share a group, e.g. "HTML" and "HTML5".
const SAME_TECH: string[][] = [
  ['html5', 'html'],
  ['css3', 'css'],
];

function canonical(name: string): string {
  const key = name.trim().toLowerCase();
  const group = SAME_TECH.find((g) => g.includes(key));
  return group ? group[0] : key;
}

export function sameTech(a: string, b: string): boolean {
  return canonical(a) === canonical(b);
}

export function usesTech(
  project: { technologies?: string[] },
  tech: string,
): boolean {
  return (project.technologies || []).some((t) => sameTech(t, tech));
}
