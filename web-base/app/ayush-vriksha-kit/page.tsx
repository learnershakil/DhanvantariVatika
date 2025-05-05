import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"
import Sitare from "@/public/sitare.jpg"
import Kit1 from "@/public/kit1.jpg"
import Kit2 from "@/public/kit2.jpg"
import Kit3 from "@/public/kit3.jpg"
import Kit4 from "@/public/kit4.jpg"

export default function AyushVrikshaKitPage() {
  const kits = [
    {
      id: 1,
      name: "Beginner's Herbal Garden Kit",
      price: "₹1,499",
      description:
        "Perfect for beginners, this kit includes 5 essential Ayurvedic plants, organic soil, biodegradable pots, and a detailed care guide.",
      image: Kit1,
      features: [
        "5 medicinal plant seedlings/seeds",
        "Biodegradable growing pots",
        "Organic soil mix with natural fertilizers",
        "Illustrated plant care guide",
        "Access to online gardening tutorials",
      ],
    },
    {
      id: 2,
      name: "Ayurvedic Kitchen Garden Kit",
      price: "₹1,999",
      description:
        "Grow your own culinary and medicinal herbs right in your kitchen with this compact kit designed for indoor spaces.",
      image: Kit2,
      features: [
        "8 culinary-medicinal plant varieties",
        "Self-watering container system",
        "Nutrient-rich soil mix",
        "Plant markers and identification cards",
        "Recipe book with Ayurvedic preparations",
      ],
    },
    {
      id: 3,
      name: "Dosha-Balancing Collection",
      price: "₹2,499",
      description:
        "A specialized kit with plants selected to balance specific doshas (Vata, Pitta, or Kapha) based on Ayurvedic principles.",
      image: Kit3,
      features: [
        "7 dosha-specific medicinal plants",
        "Ceramic planters with drainage",
        "Premium soil mix with ayurvedic minerals",
        "Dosha identification guide",
        "Personalized plant care calendar",
      ],
    },
    {
      id: 4,
      name: "Professional Ayurvedic Garden Kit",
      price: "₹3,999",
      description:
        "A comprehensive kit for practitioners and serious enthusiasts, featuring rare and powerful medicinal plants.",
      image: Kit4,
      features: [
        "12 rare medicinal plant varieties",
        "Terracotta planters with traditional designs",
        "Specialized soil mixes for each plant type",
        "Detailed medicinal properties handbook",
        "Harvesting and preparation tools",
      ],
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#256670]/90 to-[#256670]/70 py-20 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6 tracking-tight">Ayush Vriksha Kit</h1>
        <p className="text-white/90 max-w-3xl mx-auto text-lg">
        Bring the healing power of Ayurvedic plants into your home with our specially curated gardening kits. Each
        kit contains everything you need to grow and use medicinal plants.
        </p>
        <Button className="mt-8 bg-[#D9A566] hover:bg-[#D9A566]/90 text-white border-none text-lg px-8 py-6">
        Explore Kits
        </Button>
      </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-[#256670]">Grow Your Own Ayurvedic Garden</h2>
          <p className="text-gray-700 mb-4 text-lg">
          The Ayush Vriksha Kit is designed to help you create your own medicinal plant garden at home, connecting
          you with the ancient tradition of growing and using healing plants.
          </p>
          <p className="text-gray-700 mb-4">
          Each kit contains carefully selected plant varieties based on traditional Ayurvedic texts, along with
          everything you need to grow them successfully - even if you're a beginner with no gardening experience.
          </p>
          <p className="text-gray-700 mb-8">
          By growing these plants yourself, you'll develop a deeper connection with nature's healing power and
          have fresh, organic medicinal plants available whenever you need them.
          </p>
          <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-[#D9A566] mr-3" />
            <span className="text-gray-800 font-medium">Organic & Sustainable</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-[#D9A566] mr-3" />
            <span className="text-gray-800 font-medium">Beginner-Friendly</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-[#D9A566] mr-3" />
            <span className="text-gray-800 font-medium">Detailed Instructions</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-[#D9A566] mr-3" />
            <span className="text-gray-800 font-medium">Online Support</span>
          </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#D9A566]/20 rounded-full z-0"></div>
          <Image
          src="https://images.unsplash.com/photo-1616078206521-5d7e6dc51545?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Ayush Vriksha Kit"
          width={600}
          height={600}
          className="rounded-lg shadow-xl relative z-10 border-4 border-[#256670]/10"
          />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#256670]/20 rounded-full z-0"></div>
        </div>
        </div>
      </div>
      </section>

      {/* Kit Showcase */}
      <section className="py-20 bg-gradient-to-b from-[#256670]/5 to-[#256670]/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 text-[#256670]">Our Kits</h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg">
          Choose the perfect kit based on your space, experience level, and wellness goals.
        </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {kits.map((kit) => (
          <Card key={kit.id} className="border-none shadow-lg overflow-hidden hover:shadow-xl transition-all">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="aspect-square relative">
            <div className="absolute inset-0 bg-[#256670]/10 z-10"></div>
            <Image src={kit.image || "/placeholder.svg"} alt={kit.name} fill className="object-cover" />
            <div className="absolute top-4 left-4 bg-[#D9A566] text-white px-3 py-1 rounded-full z-20 text-sm font-medium">
              {kit.price}
            </div>
            </div>
            <CardContent className="p-8 bg-white">
            <h3 className="text-xl font-bold mb-3 text-[#256670]">{kit.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{kit.description}</p>
            <div className="space-y-3 mb-6">
              {kit.features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-4 w-4 text-[#D9A566] mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{feature}</span>
              </div>
              ))}
            </div>
            <Button className="w-full bg-[#256670] hover:bg-[#256670]/90 text-white">View Details</Button>
            </CardContent>
          </div>
          </Card>
        ))}
        </div>
      </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 text-[#256670]">Benefits of Growing Your Own Medicinal Plants</h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg">
          Discover why cultivating your own Ayurvedic garden is beneficial for your health, environment, and
          connection to traditional healing practices.
        </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <Card className="border-none shadow-md hover:shadow-xl transition-all">
          <CardContent className="p-8">
          <div className="rounded-full bg-[#256670]/10 p-4 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-[#D9A566]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3 text-[#256670] text-center">Fresh & Potent</h3>
          <p className="text-gray-700 text-center">
            Freshly harvested herbs and plants contain higher levels of active compounds, making them more potent
            and effective for medicinal use than dried or processed alternatives.
          </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md hover:shadow-xl transition-all">
          <CardContent className="p-8">
          <div className="rounded-full bg-[#256670]/10 p-4 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-[#D9A566]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
            />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3 text-[#256670] text-center">Deeper Connection</h3>
          <p className="text-gray-700 text-center">
            Growing medicinal plants creates a meaningful connection with nature and traditional healing
            practices, enhancing the holistic benefits of Ayurvedic remedies.
          </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md hover:shadow-xl transition-all">
          <CardContent className="p-8">
          <div className="rounded-full bg-[#256670]/10 p-4 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-[#D9A566]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
            />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3 text-[#256670] text-center">Sustainable Practice</h3>
          <p className="text-gray-700 text-center">
            Home cultivation reduces the environmental impact of harvesting wild medicinal plants and helps
            preserve biodiversity and traditional plant knowledge.
          </p>
          </CardContent>
        </Card>
        </div>
      </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#256670]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 text-white">What Our Customers Say</h2>
        <p className="text-white/80 max-w-3xl mx-auto text-lg">
          Hear from people who have transformed their homes and health with our Ayush Vriksha Kits.
        </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="border-none shadow-lg bg-white/95 backdrop-blur-sm">
          <CardContent className="p-8">
          <div className="flex items-center mb-6">
            <div className="mr-4 border-2 border-[#D9A566] rounded-full p-1">
            <Image
              src={Sitare}
              alt="User Avatar"
              width={60}
              height={60}
              className="rounded-full"
            />
            </div>
            <div>
            <h4 className="font-semibold text-[#256670]">Meera Patel</h4>
            <p className="text-sm text-gray-500">Mumbai, India</p>
            </div>
          </div>
          <p className="text-gray-700 italic relative">
            <span className="text-[#D9A566] text-4xl absolute -top-4 -left-2">"</span>
            I've always wanted to grow medicinal plants but didn't know where to start. The Beginner's Kit made
            it so easy! The plants are thriving and I've already used them for simple remedies.
            <span className="text-[#D9A566] text-4xl absolute -bottom-8 -right-2">"</span>
          </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-lg bg-white/95 backdrop-blur-sm">
          <CardContent className="p-8">
          <div className="flex items-center mb-6">
            <div className="mr-4 border-2 border-[#D9A566] rounded-full p-1">
            <Image
              src={Sitare}
              alt="User Avatar"
              width={60}
              height={60}
              className="rounded-full"
            />
            </div>
            <div>
            <h4 className="font-semibold text-[#256670]">Rajiv Sharma</h4>
            <p className="text-sm text-gray-500">Bengaluru, India</p>
            </div>
          </div>
          <p className="text-gray-700 italic relative">
            <span className="text-[#D9A566] text-4xl absolute -top-4 -left-2">"</span>
            The Dosha-Balancing Collection has transformed my daily routine. Growing these plants has become a
            meditative practice, and using them has helped balance my Pitta dosha significantly.
            <span className="text-[#D9A566] text-4xl absolute -bottom-8 -right-2">"</span>
          </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-lg bg-white/95 backdrop-blur-sm">
          <CardContent className="p-8">
          <div className="flex items-center mb-6">
            <div className="mr-4 border-2 border-[#D9A566] rounded-full p-1">
            <Image
              src={Sitare}
              alt="User Avatar"
              width={60}
              height={60}
              className="rounded-full"
            />
            </div>
            <div>
            <h4 className="font-semibold text-[#256670]">Ananya Gupta</h4>
            <p className="text-sm text-gray-500">Delhi, India</p>
            </div>
          </div>
          <p className="text-gray-700 italic relative">
            <span className="text-[#D9A566] text-4xl absolute -top-4 -left-2">"</span>
            As an Ayurvedic practitioner, the Professional Kit has been invaluable. The rare plants are thriving,
            and my patients love that I use fresh, home-grown ingredients in my preparations.
            <span className="text-[#D9A566] text-4xl absolute -bottom-8 -right-2">"</span>
          </p>
          </CardContent>
        </Card>
        </div>
      </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 text-[#256670]">Frequently Asked Questions</h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg">
          Find answers to common questions about our Ayush Vriksha Kits.
        </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="border-l-4 border-l-[#D9A566] shadow-md hover:shadow-xl transition-all">
          <CardContent className="p-8">
          <h3 className="text-lg font-bold mb-3 text-[#256670]">Do I need gardening experience?</h3>
          <p className="text-gray-700">
            No, our kits are designed for all experience levels. The Beginner's Kit is especially suitable for
            those new to gardening, with detailed instructions and easy-to-grow plants.
          </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-[#D9A566] shadow-md hover:shadow-xl transition-all">
          <CardContent className="p-8">
          <h3 className="text-lg font-bold mb-3 text-[#256670]">How much space do I need?</h3>
          <p className="text-gray-700">
            Our Kitchen Garden Kit is designed for small spaces and can thrive on a windowsill. Other kits may
            require more space, but all plants can be grown in containers if you don't have a garden.
          </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-[#D9A566] shadow-md hover:shadow-xl transition-all">
          <CardContent className="p-8">
          <h3 className="text-lg font-bold mb-3 text-[#256670]">Are the plants safe to use medicinally?</h3>
          <p className="text-gray-700">
            Yes, all plants are safe when used as directed. Each kit includes detailed information on harvesting,
            preparation, and usage. However, always consult with a healthcare provider before using any plant
            medicinally.
          </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-[#D9A566] shadow-md hover:shadow-xl transition-all">
          <CardContent className="p-8">
          <h3 className="text-lg font-bold mb-3 text-[#256670]">Do you ship internationally?</h3>
          <p className="text-gray-700">
            Yes, we ship to most countries. However, please note that some countries have restrictions on
            importing live plants. Check our shipping page for details specific to your location.
          </p>
          </CardContent>
        </Card>
        </div>
      </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#256670] to-[#256670]/90 text-white">
      <div className="container mx-auto px-4 text-center relative">
        <div className="absolute top-0 left-0 w-40 h-40 bg-[#D9A566]/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#D9A566]/10 rounded-full translate-x-1/4 translate-y-1/4"></div>
        <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-6">Start Your Ayurvedic Garden Today</h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
          Connect with the ancient tradition of growing medicinal plants and experience the benefits of fresh,
          home-grown Ayurvedic remedies.
        </p>
        <Button asChild size="lg" className="bg-[#D9A566] hover:bg-[#D9A566]/90 text-white border-none px-10 py-7 text-lg">
          <Link href="#" className="inline-flex items-center">
          Browse All Kits <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        </div>
      </div>
      </section>
    </div>
  )
}

