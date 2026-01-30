import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import ObjectivesGrid from '@/components/ObjectivesGrid';
import ActivitiesCarousel from '@/components/ActivitiesCarousel';
import Footer from '@/components/Footer';
import StickyCallBtn from '@/components/StickyCallBtn';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />

        <AboutSection />

        <ObjectivesGrid />
        <ActivitiesCarousel />
        <GallerySection />
      </main>
      <Footer />
      <StickyCallBtn />
    </>
  );
}
