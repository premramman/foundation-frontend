import { SocialLinks } from "./SocialLinks";
import { FooterLinks } from "./FooterLinks";
import BrandLogo from "../../atoms/BrandLogo";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <footer
      className="w-full border-t bg-background px-4 py-4 md:py-6"
      role="contentinfo"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
        <div className="mb-2 md:mb-0 md:flex-1 text-lg font-semibold tracking-tight">
          <BrandLogo size={24} showAppName={true} />
        </div>

        <div className="md:flex md:flex-1 md:items-center md:justify-center">
          <FooterLinks />
        </div>

        <div className="md:flex md:flex-1 md:items-center md:justify-end">
          <SocialLinks />
        </div>
      </div>

      <div className="mt-4 w-full text-center">
        <Copyright />
      </div>
    </footer>

  );
}