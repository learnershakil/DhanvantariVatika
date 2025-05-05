import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users } from "lucide-react";
import Link from "next/link";

const AboutHome = () => {
    return (  <section className="py-32 relative overflow-hidden bg-gradient-to-br from-white to-gray-50">
        {/* Decorative background elements */}
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-[#256670]/5 blur-3xl -z-0 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-[#D9A566]/5 blur-3xl -z-0 animate-pulse opacity-70"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23256670' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 relative animate-[fadeIn_1s_ease-out]">
              <div className="absolute -left-8 -top-8 w-72 h-72 bg-[#256670]/10 rounded-full -z-10 animate-pulse opacity-70"></div>
              <div className="absolute -right-6 -bottom-10 w-52 h-52 bg-[#D9A566]/10 rounded-full -z-10 animate-pulse opacity-70"></div>
              
              {/* Image with overlays and effects */}
              <div className="relative group">
                <div className="absolute -inset-2.5 bg-gradient-to-r from-[#256670] to-[#D9A566] rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <Image
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070"
                  alt="About Dhanvantari Vatika"
                  width={600}
                  height={700}
                  className="rounded-3xl shadow-2xl object-cover h-[600px] w-full transition-all duration-700 ease-in-out group-hover:scale-[1.02] relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#256670]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl z-20"></div>
                
                {/* Floating accent card */}
                <div className="absolute -right-10 bottom-14 max-w-xs bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl transform transition-all duration-500 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 border-l-4 border-[#D9A566] z-30">
                  <h4 className="text-lg font-bold text-[#256670] mb-2">Rooted in Tradition</h4>
                  <p className="text-gray-700">Our garden connects ancient wisdom with modern technology to preserve Ayurvedic heritage</p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -left-10 -bottom-8 w-20 h-20 rounded-full border-8 border-white bg-[#D9A566]/30 z-20 shadow-lg"></div>
                <div className="absolute top-10 -right-6 w-16 h-16 rounded-full border-4 border-white bg-[#256670]/20 z-20 shadow-lg"></div>
              </div>
            </div>
            
            <div className="lg:col-span-6 lg:pl-10 animate-[fadeInRight_1.2s_ease-out]">
              <span className="text-[#256670] font-medium px-6 py-2 bg-[#256670]/5 rounded-full mb-5 inline-block border border-[#256670]/20 shadow-sm">Our Story & Mission</span>
              <h2 className="text-5xl font-bold mb-8 text-gray-800 leading-tight tracking-tight">
                About <span className="text-[#256670] relative inline-block">
                  Dhanvantari Vatika
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-[#D9A566]/40 -z-10 rounded-full"></span>
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Named after Dhanvantari, the Hindu god of medicine, our virtual herbal garden is dedicated to preserving
                and promoting the ancient wisdom of Ayurveda through modern technology.
              </p>
              
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Our mission is to make Ayurvedic knowledge accessible to everyone, helping people reconnect with
                nature's healing power and incorporate traditional remedies into their modern lifestyles.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                <div className="flex items-start group p-4 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-xl">
                  <div className="rounded-2xl bg-[#256670]/10 p-4 mr-5 group-hover:bg-[#D9A566]/20 transition-all duration-300 group-hover:scale-110">
                    <Users className="h-7 w-7 text-[#256670] group-hover:text-[#D9A566] transition-colors duration-300 group-hover:animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#256670] transition-colors">Expert Team</h4>
                    <p className="text-gray-600">Led by Ayurvedic doctors, botanists & herbal practitioners</p>
                  </div>
                </div>
                
                <div className="flex items-start group p-4 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-xl">
                  <div className="rounded-2xl bg-[#256670]/10 p-4 mr-5 group-hover:bg-[#D9A566]/20 transition-all duration-300 group-hover:scale-110">
                    <Heart className="h-7 w-7 text-[#256670] group-hover:text-[#D9A566] transition-colors duration-300 group-hover:animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#256670] transition-colors">Holistic Approach</h4>
                    <p className="text-gray-600">Integrating mind, body & spirit for complete wellness</p>
                  </div>
                </div>
              </div>
              
              <Button 
                asChild 
                size="lg" 
                className="rounded-full px-10 py-7 text-lg shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-[#256670] to-[#256670]/90 hover:from-[#256670]/90 hover:to-[#D9A566]"
              >
                <Link href="/about" className="inline-flex items-center">
                  Learn More About Us <ArrowRight className="ml-2 h-5 w-5 animate-[bounceRight_2s_infinite]" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section> );
}
 
export default AboutHome;