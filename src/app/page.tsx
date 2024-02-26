import Header from "@/components/common/Header";
import PreviewProdCategories from "@/components/sections/CategoriesProduct/PreviewProdCategories";
import ReferencesFashionModels from "@/components/sections/FashionModels/ReferencesFashionModels";
import Hero from "@/components/sections/HeroSection/Hero";
import ProductsPreviewCarousel from "@/components/sections/ProductsCarousel/ProductsPreviewCarousel";

export default function Home() {
  //TODO: di dalam Home/dashboard ada herosection(carousel autoplay), preview categories, BestSellerProduct, Product list dengan slide/pagination(di kategorikan bg nya sesuai color kategori masing2)
  return (
    <>
      <Header />
      <Hero />
      <PreviewProdCategories />
      <ReferencesFashionModels />
      <ProductsPreviewCarousel />
    </>
  );
}
