import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const TestimonialsHome = () => {
    return ( <section className="py-32 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100"></div>
        <div className="absolute top-0 left-0 w-1/3 h-full bg-[#256670]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-[#D9A566]/10 rounded-full blur-3xl"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23256670' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}></div>
        
        {/* Modern geometric accents */}
        <div className="absolute top-20 left-20 w-32 h-32 border-t-4 border-l-4 border-[#D9A566]/30 rounded-tl-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border-b-4 border-r-4 border-[#256670]/30 rounded-br-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto animate-[fadeIn_1s_ease-out]">
            <span className="text-[#256670] font-medium px-6 py-2 bg-[#256670]/5 rounded-full mb-5 inline-block border border-[#256670]/20 shadow-sm">Testimonials</span>
            <h2 className="text-5xl font-bold mb-8 text-gray-800 leading-tight tracking-tight">
              What People <span className="text-[#256670] relative inline-block">
                Say About Us
                <span className="absolute bottom-1 left-0 w-full h-2 bg-[#D9A566]/40 -z-10 rounded-full"></span>
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover how Dhanvantari Vatika has helped people learn about Ayurveda and incorporate traditional healing practices into their modern lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {/* Testimonial 1 */}
            <div className="group animate-[fadeInUp_0.8s_ease-out]">
              <Card className="border-none rounded-3xl overflow-hidden h-full transition-all duration-500 hover:translate-y-[-10px] hover:shadow-[0_30px_60px_rgba(37,102,112,0.15)] bg-white backdrop-blur-lg">
                <CardContent className="p-10 relative">
                  <div className="absolute top-6 right-6 text-7xl text-[#D9A566]/10 font-serif group-hover:text-[#D9A566]/20 transition-all duration-500">"</div>
                  
                  <div className="mb-8 relative">
                    <div className="relative inline-block">
                      <div className="absolute -inset-1 bg-gradient-to-br from-[#256670]/80 to-[#D9A566]/80 rounded-full blur-sm opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <Image
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974"
                        alt="Priya Sharma"
                        width={90}
                        height={90}
                        className="rounded-full object-cover border-4 border-white shadow-xl relative z-10"
                      />
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="text-2xl font-bold text-[#256670] group-hover:text-[#256670] transition-colors duration-300">Priya Sharma</h4>
                      <p className="text-[#D9A566] font-medium">Ayurveda Enthusiast</p>
                      
                      <div className="flex items-center justify-center mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-5 h-5 text-[#D9A566]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed relative">
                    <span className="relative">
                      "The virtual garden is incredibly detailed and immersive. I've learned so much about medicinal plants that I now grow in my own garden for daily wellness rituals. The 3D models are remarkably accurate!"
                      <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#D9A566]/30 rounded-full"></span>
                    </span>
                  </p>
                  
                  <div className="mt-8 flex justify-end opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-16 h-8 bg-gradient-to-r from-[#256670]/20 to-[#D9A566]/20 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-[#256670]/20 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-[#D9A566]/30"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Testimonial 2 */}
            <div className="group animate-[fadeInUp_1.1s_ease-out] mt-10 md:mt-0">
              <Card className="border-none rounded-3xl overflow-hidden h-full transition-all duration-500 hover:translate-y-[-10px] hover:shadow-[0_30px_60px_rgba(37,102,112,0.15)] bg-white backdrop-blur-lg border-t border-l border-white/50">
                <CardContent className="p-10 relative">
                  <div className="absolute top-6 right-6 text-7xl text-[#D9A566]/10 font-serif group-hover:text-[#D9A566]/20 transition-all duration-500">"</div>
                  
                  <div className="mb-8 relative">
                    <div className="relative inline-block">
                      <div className="absolute -inset-1 bg-gradient-to-br from-[#256670]/80 to-[#D9A566]/80 rounded-full blur-sm opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <Image
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974"
                        alt="Rahul Patel"
                        width={90}
                        height={90}
                        className="rounded-full object-cover border-4 border-white shadow-xl relative z-10"
                      />
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="text-2xl font-bold text-[#256670] group-hover:text-[#256670] transition-colors duration-300">Rahul Patel</h4>
                      <p className="text-[#D9A566] font-medium">Wellness Coach</p>
                      
                      <div className="flex items-center justify-center mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-5 h-5 text-[#D9A566]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed relative">
                    <span className="relative">
                      "As a wellness coach, I recommend Dhanvantari Vatika to all my clients. The learning resources are comprehensive and have transformed my approach to holistic health and Ayurvedic practices."
                      <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#D9A566]/30 rounded-full"></span>
                    </span>
                  </p>
                  
                  <div className="mt-8 flex justify-end opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-16 h-8 bg-gradient-to-r from-[#256670]/20 to-[#D9A566]/20 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-[#256670]/20 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-[#D9A566]/30"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Testimonial 3 */}
            <div className="group animate-[fadeInUp_1.4s_ease-out] mt-10 md:mt-0">
              <Card className="border-none rounded-3xl overflow-hidden h-full transition-all duration-500 hover:translate-y-[-10px] hover:shadow-[0_30px_60px_rgba(37,102,112,0.15)] bg-white backdrop-blur-lg border-t border-l border-white/50">
                <CardContent className="p-10 relative">
                  <div className="absolute top-6 right-6 text-7xl text-[#D9A566]/10 font-serif group-hover:text-[#D9A566]/20 transition-all duration-500">"</div>
                  
                  <div className="mb-8 relative">
                    <div className="relative inline-block">
                      <div className="absolute -inset-1 bg-gradient-to-br from-[#256670]/80 to-[#D9A566]/80 rounded-full blur-sm opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <Image
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976"
                        alt="Anita Desai"
                        width={90}
                        height={90}
                        className="rounded-full object-cover border-4 border-white shadow-xl relative z-10"
                      />
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="text-2xl font-bold text-[#256670] group-hover:text-[#256670] transition-colors duration-300">Anita Desai</h4>
                      <p className="text-[#D9A566] font-medium">Herbal Practitioner</p>
                      
                      <div className="flex items-center justify-center mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-5 h-5 text-[#D9A566]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed relative">
                    <span className="relative">
                      "The Ayush Vriksha Kit has transformed my practice. My patients love growing their own medicinal plants and the detailed guides make it easy to understand their incredible healing benefits."
                      <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#D9A566]/30 rounded-full"></span>
                    </span>
                  </p>
                  
                  <div className="mt-8 flex justify-end opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-16 h-8 bg-gradient-to-r from-[#256670]/20 to-[#D9A566]/20 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-[#256670]/20 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-[#D9A566]/30"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* View more testimonials button */}
          <div className="flex justify-center mt-16">
            <Button asChild size="lg" className="rounded-full bg-[#256670] hover:bg-[#D9A566] text-white hover:text-[#256670] shadow-lg shadow-[#256670]/20 hover:shadow-[#D9A566]/30 transition-all duration-300">
              <Link href="/testimonials" className="flex items-center py-6 px-10">
                View More Success Stories <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section> );
}
 
export default TestimonialsHome;