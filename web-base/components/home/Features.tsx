import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Leaf, FlaskRoundIcon as Flask } from "lucide-react";

const FeaturesHome = () => {
    return ( 
        <section className="py-32 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-br from-[#256670]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-[#D9A566]/10 to-transparent rounded-full blur-3xl"></div>
        
        {/* Elegant pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23256670' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
        }}></div>
        
        {/* Decorative lines */}
        <div className="absolute top-20 right-40 w-32 h-32 border-r-4 border-t-4 border-[#D9A566]/30 rounded-tr-3xl"></div>
        <div className="absolute bottom-20 left-40 w-32 h-32 border-l-4 border-b-4 border-[#256670]/30 rounded-bl-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-24 max-w-4xl mx-auto">
        <span className="text-[#256670] font-medium px-6 py-2 bg-[#256670]/5 rounded-full mb-5 inline-block animate-[fadeIn_1s_ease-out] border border-[#256670]/20 shadow-sm">Discover Our Platform</span>
        <h2 className="text-5xl font-bold mb-8 text-gray-800 leading-tight tracking-tight animate-[fadeIn_1.2s_ease-out]">
          Experience the <span className="text-[#256670] relative inline-block">
            Wisdom of Ayurveda
            <span className="absolute bottom-1 left-0 w-full h-2 bg-[#D9A566]/30 -z-10 rounded-full"></span>
          </span>
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed animate-[fadeIn_1.4s_ease-out]">
          Our immersive platform combines ancient knowledge with modern technology to create a 
          transformative learning experience for enthusiasts, practitioners, and curious minds alike.
        </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
        {/* Feature 1 */}
        <div className="group animate-[fadeInUp_1s_ease-out]">
          <Card className="border-none rounded-3xl overflow-hidden h-full transition-all duration-300 hover:translate-y-[-8px] hover:shadow-[0_30px_60px_rgba(37,102,112,0.15)] bg-white/80 backdrop-blur-sm">
            <div className="h-56 relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1542752942-76f45239da72?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Virtual Herbal Garden"
            fill
            className="object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#256670]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-4 right-4 bg-[#D9A566] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            FEATURED
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-white font-medium text-lg opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            Explore Our Virtual Garden
          </div>
            </div>
            <CardContent className="pt-8 pb-8 px-8">
          <div className="rounded-2xl bg-[#256670]/10 p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#D9A566]/20 transition-all duration-300 group-hover:scale-110">
            <Leaf className="h-8 w-8 text-[#256670] group-hover:text-[#D9A566] transition-colors duration-300 group-hover:animate-pulse" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-[#256670] transition-colors">Virtual Herbal Garden</h3>
          <p className="text-gray-600 mb-7 leading-relaxed">
            Immerse yourself in our interactive 3D garden showcasing rare medicinal plants with detailed information on their Ayurvedic properties and applications.
          </p>
          <Link href="/virtual-garden" className="text-[#256670] font-medium inline-flex items-center group/link relative pl-0 hover:pl-1 transition-all duration-300">
            <span>Explore Garden</span> 
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D9A566] transition-all duration-300 group-hover/link:w-full"></span>
          </Link>
            </CardContent>
          </Card>
        </div>

        {/* Feature 2 */}
        <div className="group animate-[fadeInUp_1.2s_ease-out]">
          <Card className="border-none rounded-3xl overflow-hidden h-full transition-all duration-300 hover:translate-y-[-8px] hover:shadow-[0_30px_60px_rgba(37,102,112,0.15)] bg-white/80 backdrop-blur-sm border-t border-l border-white/50">
            <div className="h-56 relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1523302270222-0f256786563c?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Learning Resources"
            fill
            className="object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#256670]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-4 right-4 bg-[#D9A566] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            PREMIUM
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-white font-medium text-lg opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            Curated Educational Content
          </div>
            </div>
            <CardContent className="pt-8 pb-8 px-8">
          <div className="rounded-2xl bg-[#256670]/10 p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#D9A566]/20 transition-all duration-300 group-hover:scale-110">
            <BookOpen className="h-8 w-8 text-[#256670] group-hover:text-[#D9A566] transition-colors duration-300 group-hover:animate-pulse" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-[#256670] transition-colors">Learning Resources</h3>
          <p className="text-gray-600 mb-7 leading-relaxed">
            Access exclusive courses, video tutorials, and expert-authored articles on Ayurvedic principles, diagnosis methods, and treatment protocols.
          </p>
          <Link href="/learning" className="text-[#256670] font-medium inline-flex items-center group/link relative pl-0 hover:pl-1 transition-all duration-300">
            <span>Start Learning</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D9A566] transition-all duration-300 group-hover/link:w-full"></span>
          </Link>
            </CardContent>
          </Card>
        </div>

        {/* Feature 3 */}
        <div className="group animate-[fadeInUp_1.4s_ease-out]">
          <Card className="border-none rounded-3xl overflow-hidden h-full transition-all duration-300 hover:translate-y-[-8px] hover:shadow-[0_30px_60px_rgba(37,102,112,0.15)] bg-white/80 backdrop-blur-sm border-t border-l border-white/50">
            <div className="h-56 relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1568274515506-f2db7b6b6878?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Ayush Vriksha Kit"
            fill
            className="object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#256670]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-4 right-4 bg-[#D9A566] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            NEW
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-white font-medium text-lg opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            Grow Your Own Healing Plants
          </div>
            </div>
            <CardContent className="pt-8 pb-8 px-8">
          <div className="rounded-2xl bg-[#256670]/10 p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-[#D9A566]/20 transition-all duration-300 group-hover:scale-110">
            <Flask className="h-8 w-8 text-[#256670] group-hover:text-[#D9A566] transition-colors duration-300 group-hover:animate-pulse" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-[#256670] transition-colors">Ayush Vriksha Kit</h3>
          <p className="text-gray-600 mb-7 leading-relaxed">
            Cultivate your personal Ayurvedic garden with our premium herb growing kits, complete with organic seeds, soil, and detailed cultivation guides.
          </p>
          <Link href="/ayush-vriksha-kit" className="text-[#256670] font-medium inline-flex items-center group/link relative pl-0 hover:pl-1 transition-all duration-300">
            <span>View Kits</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D9A566] transition-all duration-300 group-hover/link:w-full"></span>
          </Link>
            </CardContent>
          </Card>
        </div>
          </div>
        </div>
      </section>
     );
}
 
export default FeaturesHome;