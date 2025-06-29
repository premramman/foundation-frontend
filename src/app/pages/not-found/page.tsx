import { ErrorActions } from "@/app/pages/not-found/ErrorActions";
import { ErrorImage } from "@/app/pages/not-found/ErrorImage";
import { ErrorMessage } from "@/app/pages/not-found/ErrorMessage";

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