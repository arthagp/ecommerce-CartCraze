import Footer from "@/components/common/Footer";
import PreviewProdCategories from "@/components/sections/CategoriesProduct/PreviewProdCategories";
import ReferencesFashionModels from "@/components/sections/FashionModels/ReferencesFashionModels";
import Hero from "@/components/sections/HeroSection/Hero";
import PreviewSale from "@/components/sections/PreviewSale/PreviewSale";
import ProductsPreviewCarousel from "@/components/sections/ProductsCarousel/ProductsPreviewCarousel";

export default function Home() {
  //TODO: di dalam Home/dashboard ada herosection(carousel autoplay), preview categories, BestSellerProduct, Product list dengan slide/pagination(di kategorikan bg nya sesuai color kategori masing2)
  return (
    <>
      <Hero />
      <PreviewProdCategories />
      <ReferencesFashionModels />
      <ProductsPreviewCarousel />
      <PreviewSale />
    </>
  );
}
