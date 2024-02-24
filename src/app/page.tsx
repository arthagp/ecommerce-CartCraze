import Header from "@/components/common/Header";
import PreviewProdCategories from "@/components/sections/(CategoriesProduct)/PreviewProdCategories";
import Hero from "@/components/sections/(HeroSection)/Hero";

export default function Home() {
  //TODO: di dalam Home/dashboard ada herosection(carousel autoplay), preview categories, BestSellerProduct, Product list dengan slide/pagination(di kategorikan bg nya sesuai color kategori masing2)
  return (
    <>
      <Header />
      <Hero />
      <PreviewProdCategories />
    </>
  );
}
