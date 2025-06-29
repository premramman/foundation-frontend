import Image from "next/image";

type ErrorImageProps = {
  className?: string;
};

export function ErrorImage({ className }: ErrorImageProps) {
  return (
    <div className={className}>
      <Image
        src="/images/404-illustration.png"
        alt="Page not found illustration"
        width={400}
        height={300}
        className="mx-auto w-full max-w-xs md:max-w-md"
        priority
      />
    </div>
  );
}
