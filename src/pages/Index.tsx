import { lazy, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import NowShowing from '@/components/NowShowing';
import Highlights from '@/components/Highlights';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

const ParticleScene = lazy(() => import('@/components/ParticleScene'));

export default function Index() {
  return (
    <div className="min-h-screen relative">
      <Suspense fallback={null}>
        <ParticleScene />
      </Suspense>
      <Navbar />
      <HeroSection />
      <NowShowing />
      <Highlights />
      <CTABanner />
      <Footer />
    </div>
  );
}
