import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductOverlay from "./ProductOverlay";
import { FaFire } from "react-icons/fa";
import { Product } from "@/types/product";
import { AiFillStar } from "react-icons/ai";
import { Badge } from "@/components/ui/badge";
import { FaImages } from "react-icons/fa6";
import clsx from "clsx";

export interface ProductCardProps {
  item: Product;
  viewMode?: "vertical" | "horizontal"; // Add viewMode property
  className?: string;
  style?: React.CSSProperties;
}

const ProductCard: React.FC<ProductCardProps> = ({
  item,
  viewMode = "vertical",
  className,
  style,
}) => (
  <div
    className={clsx(
      "relative bg-white hover:shadow-lg transition border-none hover:border hover:border-gray-100 outline-none",
      viewMode === "vertical"
        ? "flex flex-col w-full max-w-xs h-full"
        : "flex flex-row w-full max-w-2xl h-auto",
      "m-0 overflow-hidden",
      className
    )}
    style={{
      ...style,
      ...(viewMode === "horizontal" && { height: "90%" }), // Decrease height by 10% in horizontal mode
    }}
    tabIndex={0}
    aria-label={`${item.brand} ${item.name}`}
    role="group"
  >
    {/* Product Image */}
    <div
      className={clsx(
        "relative", // Base styles
        viewMode === "horizontal"
          ? "w-[40%] h-auto" // 40% width for horizontal mode
          : "w-full h-[unset]" // Full width for vertical mode
      )}
      style={{ display: "flex" }}
    >
      <ProductImage product={item} carouselOnHover={true} />
      <ProductOverlay position="top-left" direction="horizontal">
        {item.isNew && (
          <Badge variant="secondary" aria-label="New Arrival" className="text-green-600">
            New
          </Badge>
        )}
        {item.isBestSeller && (
          <Badge variant="secondary" aria-label="Best Seller">
            <span className="flex items-center gap-1 text-red-600">
              <FaFire /> Best Seller
            </span>
          </Badge>
        )}
      </ProductOverlay>
      <ProductOverlay position="bottom-right" direction="horizontal" align="right">
        <Badge variant="secondary" aria-label="Image count">
          <FaImages className="text-blue-500" />
          <span className="text-gray-700">{item.imageCount}</span>
        </Badge>
        <Badge variant="secondary" aria-label="Rating">
          <AiFillStar className="text-green-500" />
          <span className="text-gray-700">{item.rating}</span>
        </Badge>
      </ProductOverlay>
    </div>
    {/* Product Info */}
    <div
      className={clsx(
        viewMode === "horizontal"
          ? "flex flex-col justify-between p-4 w-[60%]" // 60% width for horizontal mode
          : "w-full"
      )}
    >
      <ProductInfo product={item} />
    </div>
  </div>
);

export default ProductCard;