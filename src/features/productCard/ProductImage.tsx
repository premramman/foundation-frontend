import { Product } from "@/types/product";
import Image from "next/image";
import { FC, useState, useRef } from "react";

interface ProductImageProps {
  product: Product;
  alt?: string;
  carouselOnHover?: boolean;
}

const CAROUSEL_INTERVAL = 1200; // ms per image

const ProductImage: FC<ProductImageProps> = ({
  product,
  alt,
  carouselOnHover = false,
}) => {
  const images = product.images;
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startCarousel = () => {
    if (!carouselOnHover || images.length <= 1) return;
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, CAROUSEL_INTERVAL);
  };

  const stopCarousel = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setCurrent(0);
    }
  };

  return (
    <div
      className="relative w-full h-full flex items-center justify-center overflow-hidden"
      style={{ aspectRatio: "3/4" }}
      onMouseEnter={startCarousel}
      onMouseLeave={stopCarousel}
      aria-label={alt || product.name}
      tabIndex={-1}
    >
      <Image
        src={images[current]}
        alt={alt || product.name}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover w-full h-full"
        priority
      />
    </div>
  );
};

export default ProductImage;