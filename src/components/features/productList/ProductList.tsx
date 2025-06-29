'use client';

import { useState } from 'react';
import { VirtualizedList } from '../virtualizedList/VirtualizedList';
import { Product } from '@/types/product';
import ProductCard, { ProductCardProps } from '../productCard/ProductCard';

interface ProductListProps {
  pageSize?: number;
}

type ProductCardExtraProps = Omit<ProductCardProps, 'item'>;

const ProductList: React.FC<ProductListProps> = ({ pageSize = 100 }) => {
  const productItems: Product[] = [
    {
      id: 1,
      name: "Red Printed T-Shirt",
      brand: "Roadster",
      price: 799,
      originalPrice: 1299,
      discount: 38,
      images: ["/p5.jpg", "/p2.jpg", "/p3.jpg", "/p4.jpg", "/p1.jpg"],
      rating: 4.2,
      reviews: 120,
      isNew: false,
      isBestSeller: true,
      imageCount: 6
    },

    {
      id: 2,
      name: "Red Printed T-Shirt",
      brand: "Roadster",
      price: 799,
      originalPrice: 1299,
      discount: 38,
      images: ["/p5.jpg", "/p2.jpg", "/p3.jpg", "/p4.jpg", "/p1.jpg"],
      rating: 4.2,
      reviews: 120,
      isNew: false,
      isBestSeller: true,
      imageCount: 6
    },

    {
      id: 3,
      name: "Red Printed T-Shirt",
      brand: "Roadster",
      price: 799,
      originalPrice: 1299,
      discount: 38,
      images: ["/p5.jpg", "/p2.jpg", "/p3.jpg", "/p4.jpg", "/p1.jpg"],
      rating: 4.2,
      reviews: 120,
      isNew: false,
      isBestSeller: true,
      imageCount: 6
    },

    {
      id: 4,
      name: "Red Printed T-Shirt",
      brand: "Roadster",
      price: 799,
      originalPrice: 1299,
      discount: 38,
      images: ["/p5.jpg", "/p2.jpg", "/p3.jpg", "/p4.jpg", "/p1.jpg"],
      rating: 4.2,
      reviews: 120,
      isNew: false,
      isBestSeller: true,
      imageCount: 6
    },

    {
      id: 5,
      name: "Red Printed T-Shirt",
      brand: "Roadster",
      price: 799,
      originalPrice: 1299,
      discount: 38,
      images: ["/p5.jpg", "/p2.jpg", "/p3.jpg", "/p4.jpg", "/p1.jpg"],
      rating: 4.2,
      reviews: 120,
      isNew: false,
      isBestSeller: true,
      imageCount: 6
    },

    {
      id: 6,
      name: "Red Printed T-Shirt",
      brand: "Roadster",
      price: 799,
      originalPrice: 1299,
      discount: 38,
      images: ["/p5.jpg", "/p2.jpg", "/p3.jpg", "/p4.jpg", "/p1.jpg"],
      rating: 4.2,
      reviews: 120,
      isNew: false,
      isBestSeller: true,
      imageCount: 6
    },

    {
      id: 7,
      name: "Red Printed T-Shirt",
      brand: "Roadster",
      price: 799,
      originalPrice: 1299,
      discount: 38,
      images: ["/p5.jpg", "/p2.jpg", "/p3.jpg", "/p4.jpg", "/p1.jpg"],
      rating: 4.2,
      reviews: 120,
      isNew: false,
      isBestSeller: true,
      imageCount: 6
    },

    {
      id: 8,
      name: "Red Printed T-Shirt",
      brand: "Roadster",
      price: 799,
      originalPrice: 1299,
      discount: 38,
      images: ["/p5.jpg", "/p2.jpg", "/p3.jpg", "/p4.jpg", "/p1.jpg"],
      rating: 4.2,
      reviews: 120,
      isNew: false,
      isBestSeller: true,
      imageCount: 6
    },

    {
      id: 9,
      name: "Red Printed T-Shirt",
      brand: "Roadster",
      price: 799,
      originalPrice: 1299,
      discount: 38,
      images: ["/p5.jpg", "/p2.jpg", "/p3.jpg", "/p4.jpg", "/p1.jpg"],
      rating: 4.2,
      reviews: 120,
      isNew: false,
      isBestSeller: true,
      imageCount: 6
    },

    {
      id: 10,
      name: "Red Printed T-Shirt",
      brand: "Roadster",
      price: 799,
      originalPrice: 1299,
      discount: 38,
      images: ["/p5.jpg", "/p2.jpg", "/p3.jpg", "/p4.jpg", "/p1.jpg"],
      rating: 4.2,
      reviews: 120,
      isNew: false,
      isBestSeller: true,
      imageCount: 6
    }
  ];

  const [items, setItems] = useState<Product[]>(productItems);
  const [page, setPage] = useState(1);

  const handleLoadMore = () => {
    // const newItems = generateItems(page * 100 + 1, 100);
    // setItems(prev => [...prev, ...newItems]);
    setPage(prev => prev + 1);
  };

  return (
    <div className="p-4">
      <VirtualizedList<Product, ProductCardExtraProps>
        items={items}
        showLoadMore={items.length % 100 === 0}
        onLoadMore={handleLoadMore}
        useWindowScroll={true}
        CardComponent={ProductCard}
        cardProps={{ viewMode: 'horizontal' }}
        viewMode="grid"
        gridColumnCount={5}
      />
    </div>
  );
}

export default ProductList;
