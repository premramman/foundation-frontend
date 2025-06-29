import { Product } from "@/types/product";
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { BsCartPlus } from "react-icons/bs";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo: FC<ProductInfoProps> = ({ product }) => (
  <div className="p-2">
    <div className="font-semibold text-sm truncate">{product.name}</div>
    <div className="text-xs text-gray-500">{product.brand}</div>

    <div className="flex items-center justify-between mt-1">
      <div className="flex items-center gap-2">
        <span className="font-bold text-base">₹{product.price}</span>
        {product.discount > 0 && (
          <>
            <span className="line-through text-xs text-gray-400">
              ₹{product.originalPrice}
            </span>
            <span className="text-green-600 text-xs font-semibold">
              {product.discount}% OFF
            </span>
          </>
        )}
      </div>
      <Button size="icon" variant="outline" aria-label="Add to cart">
        <BsCartPlus className="w-5 h-5" />
      </Button>
    </div>
  </div>
);

export default ProductInfo;
