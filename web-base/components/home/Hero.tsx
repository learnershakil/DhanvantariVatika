import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HomeHero = () => {
    return ( 
        <section className="relative h-[95vh] overflow-hidden">
        {/* Background layers with parallax effect */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1720397744986-3aaee36464dd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Ayurvedic herbs and plants"
            fill
            className="object-cover scale-110 transform transition-transform duration-[30s] ease-in-out animate-subtle-zoom"
            priority
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#256670]/95 via-[#256670]/85 to-[#256670]/75 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(217,165,102,0.15),transparent_60%)]"></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#D9A566]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#D9A566]/15 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-[fadeIn_1.5s_ease-out]">
            <span className="inline-block py-2 px-6 rounded-full bg-[#256670]/20 backdrop-blur-md text-white font-medium border border-[#D9A566]/30 shadow-lg mb-2 transform animate-[fadeInUp_1s_ease-out]">
              Virtual Ayurvedic Garden
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white">
              Discover the <span className="text-[#D9A566] relative">
                Healing Power
                <span className="absolute bottom-1 left-0 w-full h-2 bg-[#D9A566]/40 -z-10 rounded-full transform animate-pulse"></span>
              </span> of <span className="bg-gradient-to-r from-[#D9A566] to-white bg-clip-text text-transparent">Ayurvedic Plants</span>
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed text-white/90">
              Dhanvantari Vatika is your immersive virtual herbal garden connecting ancient wisdom with cutting-edge technology for an unparalleled learning experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12 pt-4">
              <Button asChild size="lg" className="bg-[#D9A566] text-[#256670] hover:bg-[#D9A566]/90 text-lg font-medium py-6 px-10 rounded-full shadow-[0_10px_25px_-5px_rgba(217,165,102,0.3)] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_20px_35px_-10px_rgba(217,165,102,0.4)]">
                <Link href="/explore" className="flex items-center">
                  Explore Plants <ArrowRight className="ml-2 w-5 h-5 animate-[bounceRight_2s_infinite]" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-[#D9A566] text-white hover:bg-[#D9A566]/10 text-lg py-6 px-10 rounded-full shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105">
                <Link href="/virtual-garden" className="flex items-center">Visit Virtual Garden <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </div>
            
            {/* Scroll indicator */}
            <div className="absolute bottom-16 left-0 right-0 mx-auto w-fit animate-bounce hidden md:block">
              <div className="w-8 h-12 rounded-full border-2 border-[#D9A566]/80 flex items-center justify-center">
                <div className="w-1.5 h-3 bg-[#D9A566] rounded-full animate-[scrollIndicate_1.5s_infinite]"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom fade effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
        
        {/* Modern geometric accents */}
        <div className="absolute bottom-[20%] left-[5%] w-20 h-20 border-l-4 border-t-4 border-[#D9A566]/40 rounded-tl-lg"></div>
        <div className="absolute top-[20%] right-[5%] w-20 h-20 border-r-4 border-b-4 border-[#D9A566]/40 rounded-br-lg"></div>
      </section>
     );
}
 
export default HomeHero;