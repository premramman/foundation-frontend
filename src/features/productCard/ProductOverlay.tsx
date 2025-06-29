import { FC, ReactNode } from "react";

type CornerPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";
type StackDirection = "horizontal" | "vertical";
type AlignType = "left" | "center" | "right";

interface ProductOverlayProps {
  children: ReactNode;
  position?: CornerPosition;
  direction?: StackDirection;
  align?: AlignType; // New prop
}

const positionClasses: Record<CornerPosition, string> = {
  "top-left": "top-2 left-2",
  "top-right": "top-2 right-2",
  "bottom-left": "bottom-2 left-2",
  "bottom-right": "bottom-2 right-2",
};

const directionClasses: Record<StackDirection, string> = {
  horizontal: "flex-row space-x-2",
  vertical: "flex-col space-y-2",
};

// Alignment classes depend on direction
const alignClasses: Record<StackDirection, Record<AlignType, string>> = {
  horizontal: {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  },
  vertical: {
    left: "items-start",
    center: "items-center",
    right: "items-end",
  },
};

const ProductOverlay: FC<ProductOverlayProps> = ({
  children,
  position = "top-left",
  direction = "vertical",
  align = "left",
}) => (
  <div
    className={`absolute z-10 flex ${positionClasses[position]} ${directionClasses[direction]} ${alignClasses[direction][align]}`}
  >
    {children}
  </div>
);

export default ProductOverlay;
