import { ErrorActions } from "@/components/organisms/error/ErrorActions";
import { ErrorImage } from "@/components/organisms/error/ErrorImage";
import { ErrorMessage } from "@/components/organisms/error/ErrorMessage";

export default function NotFoundPage() {
  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-white"
      role="main"
      aria-label="404 Page"
    >
      <ErrorImage className="mb-6" />
      <ErrorMessage />
      <ErrorActions />
    </main>
  );
}