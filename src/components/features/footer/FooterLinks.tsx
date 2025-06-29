import Link from "next/link";

const links = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

export function FooterLinks() {
  return (
    <nav aria-label="Footer navigation">
      <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="transition-colors hover:text-primary focus-visible:underline outline-none"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
