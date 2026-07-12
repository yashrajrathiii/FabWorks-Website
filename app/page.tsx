import { HeroParallax } from "@/components/ui/hero-parallax";
import { SiteHeader } from "@/components/site-header";
import { Marquee } from "@/components/sections/marquee";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";
import { WorkGallery } from "@/components/sections/work-gallery";
import { AboutContact } from "@/components/sections/about-contact";
import { SiteFooter } from "@/components/site-footer";
import { heroProducts } from "@/lib/site";

export default function Home() {
  return (
    <div id="top">
      <SiteHeader />
      <main>
        <HeroParallax products={heroProducts} />
        <Marquee />
        <Services />
        <WhyUs />
        <WorkGallery />
        <AboutContact />
      </main>
      <SiteFooter />
    </div>
  );
}
