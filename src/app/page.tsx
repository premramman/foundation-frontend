
"use client";
import ProductList from "@/features/productList/ProductList";
import HomeLayout from "@/components/templates/HomeLayout";

export default function HomePage() {
  return (
    <HomeLayout>
      <ProductList />
    </HomeLayout>
  );
}