
"use client";
import ProductList from "@/components/features/productList/ProductList";
import HomeLayout from "@/components/layouts/HomeLayout";

export default function HomePage() {
  return (
    <HomeLayout>
      <ProductList />
    </HomeLayout>
  );
}