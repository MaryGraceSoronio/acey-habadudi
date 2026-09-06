export default function SectionDivider() {
  return (
    <div className="section-divider" aria-hidden="true">
      <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
        <circle cx="20" cy="20" r="3" fill="var(--yellow-primary)" opacity="0.5" />
        <circle cx="40" cy="20" r="2" fill="var(--purple-accent)" opacity="0.4" />
        <circle cx="60" cy="20" r="4" fill="var(--yellow-primary)" opacity="0.3" />
        <circle cx="80" cy="20" r="2" fill="var(--purple-accent)" opacity="0.4" />
        <circle cx="100" cy="20" r="3" fill="var(--yellow-primary)" opacity="0.5" />
        <line x1="28" y1="20" x2="35" y2="20" stroke="var(--yellow-primary)" strokeWidth="1" opacity="0.3" />
        <line x1="45" y1="20" x2="55" y2="20" stroke="var(--purple-accent)" strokeWidth="1" opacity="0.3" />
        <line x1="65" y1="20" x2="75" y2="20" stroke="var(--yellow-primary)" strokeWidth="1" opacity="0.3" />
        <line x1="85" y1="20" x2="95" y2="20" stroke="var(--purple-accent)" strokeWidth="1" opacity="0.3" />
      </svg>
    </div>
  );
}
