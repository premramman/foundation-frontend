import * as React from "react";
import Image from "next/image";
import appConfig from "@/app.config";

type BrandLogoProps = {
  size?: number;
  showAppName?: boolean;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ size = 28, showAppName = false }) => {
  return (
    <div className="flex items-center gap-2" aria-label={appConfig?.appName}>
      <span className="sr-only">Brand Logo</span>

      <Image src={appConfig?.brandLogoUrl} alt="Brand Logo" width={size} height={size} priority />

      {showAppName &&
        <span className="text-lg font-semibold tracking-tight text-foreground">{appConfig?.appName}</span>
      }
    </div>
  )
}

export default BrandLogo;