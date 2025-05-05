import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTAHome = () => {
    return ( 
        <section className="py-24 relative overflow-hidden">
        {/* Background elements and gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#256670]/5 to-[#D9A566]/10"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#256670]/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#D9A566]/10 blur-3xl"></div>
        
        {/* Decorative patterns */}
        <div className="absolute top-10 left-10 w-40 h-40 border-l-4 border-t-4 border-[#D9A566]/30 rounded-tl-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 border-r-4 border-b-4 border-[#256670]/30 rounded-br-3xl"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23256670' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md p-12 rounded-3xl shadow-2xl border border-white/50 animate-[fadeIn_1s_ease-out]">
            <span className="text-[#256670] font-medium px-6 py-2 bg-[#256670]/5 rounded-full mb-5 inline-block border border-[#256670]/20 shadow-sm">Begin Your Wellness Journey</span>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 leading-tight tracking-tight">
              Ready to Explore the <span className="text-[#256670] relative inline-block">
                Healing Power
                <span className="absolute bottom-1 left-0 w-full h-2 bg-[#D9A566]/40 -z-10 rounded-full"></span>
              </span> of Ayurveda?
            </h2>
            
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              Join thousands of users discovering the ancient wisdom of Ayurvedic plants and traditional remedies for a balanced, healthier life in our modern world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
              <Button 
                asChild 
                size="lg" 
                className="bg-[#256670] hover:bg-[#256670]/90 text-white text-lg py-7 px-10 rounded-full shadow-[0_10px_25px_-5px_rgba(37,102,112,0.3)] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_20px_35px_-10px_rgba(37,102,112,0.4)] group"
              >
                <Link href="/explore" className="flex items-center">
                  Explore Plants 
                  <ArrowRight className="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-[#D9A566] text-[#256670] hover:bg-[#D9A566]/10 text-lg py-7 px-10 rounded-full shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 group"
              >
                <Link href="/contact" className="flex items-center">
                  Contact Us 
                  <ArrowRight className="ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            
            {/* Decorative elements */}
            <div className="mt-16 flex justify-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-[#D9A566]"></div>
              <div className="w-3 h-3 rounded-full bg-[#256670]/30"></div>
              <div className="w-3 h-3 rounded-full bg-[#D9A566]/30"></div>
            </div>
          </div>
        </div>
      </section>
     );
}
 
export default CTAHome;