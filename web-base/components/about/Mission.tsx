import { Card, CardContent } from "@/components/ui/card";

const MissionAbout = () => {
    return ( 
        <section className="py-20 bg-gradient-to-br from-[#256670]/5 to-[#256670]/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-[#256670]">Our Mission & Vision</h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Guided by principles of authenticity, accessibility, and innovation, we're committed to preserving and
              sharing Ayurvedic wisdom.
            </p>
            <div className="w-24 h-1 bg-[#D9A566] mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Card className="border-none shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <div className="h-2 bg-[#256670]"></div>
              <CardContent className="pt-8 px-8 pb-8">
                <h3 className="text-2xl font-semibold mb-4 text-[#256670]">Our Mission</h3>
                <p className="text-gray-700 mb-6">
                  To preserve and promote the ancient wisdom of Ayurveda through interactive digital experiences, making
                  traditional plant knowledge accessible to a global audience.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#D9A566] mr-3 text-xl">•</span>
                    <span>Document and digitize information about medicinal plants and their Ayurvedic applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D9A566] mr-3 text-xl">•</span>
                    <span>Create engaging, scientifically accurate learning resources for all levels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D9A566] mr-3 text-xl">•</span>
                    <span>Support sustainable cultivation of medicinal plants through education and resources</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <div className="h-2 bg-[#D9A566]"></div>
              <CardContent className="pt-8 px-8 pb-8">
                <h3 className="text-2xl font-semibold mb-4 text-[#D9A566]">Our Vision</h3>
                <p className="text-gray-700 mb-6">
                  To become the world's leading digital platform for Ayurvedic plant knowledge, where ancient wisdom
                  meets modern technology to improve global wellness.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#256670] mr-3 text-xl">•</span>
                    <span>A world where Ayurvedic knowledge is preserved, respected, and integrated into daily wellness practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#256670] mr-3 text-xl">•</span>
                    <span>Communities empowered with the knowledge to grow and use medicinal plants</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#256670] mr-3 text-xl">•</span>
                    <span>Bridging traditional wisdom with scientific research for holistic health solutions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
     );
}
 
export default MissionAbout;