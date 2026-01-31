import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import ObjectivesGrid from '@/components/ObjectivesGrid';
import ActivitiesCarousel from '@/components/ActivitiesCarousel';
import Footer from '@/components/Footer';
import StickyCallBtn from '@/components/StickyCallBtn';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import { getAllEvents, getAllGalleries } from '@/lib/graphql';

export const revalidate = 60; // ISR

export default async function Home() {
  const events = await getAllEvents();
  const galleries = await getAllGalleries();

  return (
    <>
      <Header />
      <main>
        <HeroSlider />

        <AboutSection />

        <ObjectivesGrid />
        <ActivitiesCarousel events={events} />
        <GallerySection galleries={galleries} />
      </main>
      <Footer />
      <StickyCallBtn />
    </>
  );
}
