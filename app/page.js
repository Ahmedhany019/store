
import Collection from "@/components/home/Collection";
import Hero from "@/components/home/Hero";
import NewArrivals from "@/components/home/NewArrivals";
import Testimonials from "@/components/home/Testimonials";
import TopSelling from "@/components/home/TopSelling";

export default function Home() {
  return (
    <main>
      <Hero />
      <NewArrivals />
      <TopSelling />
      <Collection />
      <Testimonials />
    </main>
  );
}
