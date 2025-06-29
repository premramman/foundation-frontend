// components/footer/FooterSocial.tsx
import { FaFacebookF, FaInstagram, FaTwitter, FaRegQuestionCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: <FaFacebookF aria-hidden="true" />,
    color: "#1877F3"
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: <FaInstagram aria-hidden="true" />,
    color: "#E4405F"
  },
  {
    href: "https://twitter.com",
    label: "Twitter",
    icon: <FaTwitter aria-hidden="true" />,
    color: "#1DA1F2"
  },
  {
    href: "/help",
    label: "Help & Support",
    icon: <FaRegQuestionCircle aria-hidden="true" />,
    color: null
  },
];

export function SocialLinks() {
  return (
    <nav aria-label="Social media links" className="flex gap-4">
      {socialLinks.map((link) => (
        <Button
          asChild
          variant="ghost"
          size="icon"
          key={link.label}
          className={cn(
            link?.color ? `hover:text-[${link?.color}]` : "hover:text-primary",
            link?.color ? `text-[${link?.color}]` : "text-foreground"
          )}
          aria-label={link.label}
        >
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            {link.icon}
          </a>
        </Button>
      ))}
    </nav>
  );
}
