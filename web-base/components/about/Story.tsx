import Image from "next/image";
import Shakil from "@/public/shakil.jpg"

const StoryAbout = () => {
    return ( 
        <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#256670] relative">
                Our Story
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-[#D9A566]"></span>
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Dhanvantari Vatika was founded in 2020 with a vision to make Ayurvedic knowledge accessible to everyone
                through technology. Named after Lord Dhanvantari, the Hindu god of medicine and an avatar of Lord
                Vishnu, our platform honors the ancient tradition while embracing modern innovation.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                What began as a small digital catalog of medicinal plants has grown into a comprehensive virtual herbal
                garden and learning platform, serving students, practitioners, and enthusiasts worldwide.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our team of Ayurvedic doctors, botanists, educators, and technologists work together to create an
                authentic, scientifically accurate, and engaging learning experience that bridges traditional wisdom
                with contemporary wellness needs.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-2/3 h-2/3 bg-[#D9A566]/20 rounded-lg -z-10"></div>
              <Image
                src={Shakil}
                alt="Dhanvantari Vatika Story"
                width={600}
                height={600}
                className="rounded-lg shadow-xl border-2 border-[#256670]/10"
              />
            </div>
          </div>
        </div>
      </section>
     );
}
 
export default StoryAbout;