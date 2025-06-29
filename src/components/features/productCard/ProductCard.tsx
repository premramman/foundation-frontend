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
  viewMode?: "vertical" | "horizontal";
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
        : "flex flex-row w-full max-w-2xl h-auto min-h-[240px]",
      "m-0 overflow-hidden",
      className
    )}
    style={style}
    tabIndex={0}
    aria-label={`${item.brand} ${item.name}`}
    role="group"
  >
    {/* Product Image */}
    <div
      className={clsx(
        "relative flex-1", // <-- flex-1 to take available space
        viewMode === "horizontal"
          ? "w-1/3 min-w-[120px] max-w-[220px]"
          : "w-full h-[unset]"
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
          ? "flex flex-col justify-between p-4 w-2/3"
          : "w-full"
      )}
    >
      <ProductInfo product={item} />
    </div>
    {/* Responsive adjustments */}
    <style jsx>{`
      @media (max-width: 768px) {
        div[role="group"] {
          flex-direction: column !important;
          max-width: 100% !important;
        }
        .min-w-[120px] {
          min-width: 90px !important;
        }
        .max-w-[220px] {
          max-width: 160px !important;
        }
      }
    `}</style>
  </div>
);

export default ProductCard;