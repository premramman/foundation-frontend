"use client";

import { Button } from "@/components/atoms/Button";
import { useRouter } from "next/navigation";
import { IoMdArrowBack } from "react-icons/io";

type ErrorActionsProps = {
  homeLabel?: string;
  backLabel?: string;
};

export function ErrorActions({
  homeLabel = "Go to Home",
  backLabel = "Go Back",
}: ErrorActionsProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col md:flex-row gap-3 justify-center mt-6">
      <Button
        variant="outline"
        onClick={() => router.back()}
        className="w-full md:w-auto"
        aria-label={backLabel}
      >
        <IoMdArrowBack />
        {backLabel}
      </Button>
      <Button
        onClick={() => router.push("/")}
        className="w-full md:w-auto"
        aria-label={homeLabel}
      >
        {homeLabel}
      </Button>
    </div>
  );
}
