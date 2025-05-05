import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Filter,
  Camera,
  Leaf,
  BookOpen,
  Pill,
  Clock,
  Users,
  Star,
  ChevronRight,
  Play,
  FileText,
  Tag,
  Sparkles,
  BookMarked,
} from "lucide-react"

export default function ExplorePage() {
  const plants = [
    {
      id: 1,
      name: "Tulsi (Holy Basil)",
      scientificName: "Ocimum sanctum",
      description: "A sacred plant in Ayurveda known for its adaptogenic properties and respiratory benefits.",
      image: "https://source.unsplash.com/featured/?tulsi,basil",
      category: "Herbs",
      dosha: "Kapha, Vata",
      rating: 4.9,
      reviews: 128,
    },
    {
      id: 2,
      name: "Ashwagandha",
      scientificName: "Withania somnifera",
      description: "A powerful adaptogen that helps the body manage stress and supports the immune system.",
      image: "https://source.unsplash.com/featured/?ashwagandha",
      category: "Roots",
      dosha: "Vata, Kapha",
      rating: 4.8,
      reviews: 96,
    },
    {
      id: 3,
      name: "Brahmi",
      scientificName: "Bacopa monnieri",
      description: "Known for enhancing memory and cognitive function, this herb supports mental clarity and focus.",
      image: "https://source.unsplash.com/featured/?brahmi",
      category: "Herbs",
      dosha: "Pitta, Vata, Kapha",
      rating: 4.7,
      reviews: 85,
    },
    {
      id: 4,
      name: "Amla (Indian Gooseberry)",
      scientificName: "Phyllanthus emblica",
      description: "One of the richest natural sources of Vitamin C, supporting immunity and digestion.",
      image: "https://source.unsplash.com/featured/?amla,gooseberry",
      category: "Fruits",
      dosha: "Pitta, Vata, Kapha",
      rating: 4.9,
      reviews: 112,
    },
    {
      id: 5,
      name: "Neem",
      scientificName: "Azadirachta indica",
      description: "Known for its powerful antimicrobial and blood-purifying properties.",
      image: "https://source.unsplash.com/featured/?neem",
      category: "Trees",
      dosha: "Pitta, Kapha",
      rating: 4.6,
      reviews: 78,
    },
    {
      id: 6,
      name: "Shatavari",
      scientificName: "Asparagus racemosus",
      description: "A rejuvenating herb particularly beneficial for women's health and hormonal balance.",
      image: "https://source.unsplash.com/featured/?shatavari",
      category: "Roots",
      dosha: "Pitta, Vata",
      rating: 4.8,
      reviews: 92,
    },
    {
      id: 7,
      name: "Guduchi",
      scientificName: "Tinospora cordifolia",
      description: "A powerful immunomodulator that enhances the body's resistance to infections.",
      image: "https://source.unsplash.com/featured/?guduchi",
      category: "Vines",
      dosha: "Pitta, Vata, Kapha",
      rating: 4.7,
      reviews: 64,
    },
    {
      id: 8,
      name: "Triphala",
      scientificName: "Combination of three fruits",
      description: "A balanced formula of three fruits that supports digestion and gentle detoxification.",
      image: "https://source.unsplash.com/featured/?triphala",
      category: "Formulations",
      dosha: "Pitta, Vata, Kapha",
      rating: 4.9,
      reviews: 145,
    },
  ]

  const categories = [
    { name: "Herbs", icon: <Leaf className="h-5 w-5" />, count: 45 },
    {
      name: "Roots",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      count: 28,
    },
    {
      name: "Fruits",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      count: 15,
    },
    {
      name: "Trees",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
      count: 20,
    },
    {
      name: "Vines",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      count: 12,
    },
    { name: "Formulations", icon: <Pill className="h-5 w-5" />, count: 18 },
  ]

  // Learning content (moved from learning page)
  const courses = [
    {
      id: 1,
      title: "Introduction to Ayurvedic Principles",
      description:
        "Learn the fundamental concepts of Ayurveda, including doshas, elements, and basic principles of diagnosis and treatment.",
      image: "/placeholder.svg?height=300&width=500",
      level: "Beginner",
      duration: "4 weeks",
      students: 1245,
      rating: 4.8,
      lessons: 12,
      instructor: "Dr. Anjali Desai",
    },
    {
      id: 2,
      title: "Medicinal Plants Identification",
      description:
        "Develop skills to identify common Ayurvedic plants, their characteristics, and medicinal properties.",
      image: "/placeholder.svg?height=300&width=500",
      level: "Intermediate",
      duration: "6 weeks",
      students: 876,
      rating: 4.7,
      lessons: 18,
      instructor: "Vikram Mehta",
    },
    {
      id: 3,
      title: "Ayurvedic Formulations & Preparations",
      description:
        "Learn how to prepare traditional Ayurvedic remedies, including decoctions, powders, oils, and more.",
      image: "/placeholder.svg?height=300&width=500",
      level: "Advanced",
      duration: "8 weeks",
      students: 632,
      rating: 4.9,
      lessons: 24,
      instructor: "Dr. Ravi Kumar",
    },
  ]

  const videos = [
    {
      id: 1,
      title: "Growing Tulsi at Home",
      duration: "15:24",
      thumbnail: "/placeholder.svg?height=200&width=350",
      views: "12K",
      date: "May 15, 2023",
    },
    {
      id: 2,
      title: "Ayurvedic Morning Routine",
      duration: "22:10",
      thumbnail: "/placeholder.svg?height=200&width=350",
      views: "8.5K",
      date: "June 22, 2023",
    },
    {
      id: 3,
      title: "Making Triphala Churna",
      duration: "18:45",
      thumbnail: "/placeholder.svg?height=200&width=350",
      views: "6.2K",
      date: "July 8, 2023",
    },
    {
      id: 4,
      title: "Understanding Your Dosha",
      duration: "27:32",
      thumbnail: "/placeholder.svg?height=200&width=350",
      views: "15.3K",
      date: "May 30, 2023",
    },
  ]

  const articles = [
    {
      id: 1,
      title: "The Science Behind Ashwagandha's Stress-Reducing Effects",
      excerpt: "Recent research validates traditional knowledge about this powerful adaptogen's mechanisms of action.",
      image: "/placeholder.svg?height=150&width=250",
      readTime: "8 min read",
      date: "May 15, 2023",
      author: "Dr. Priya Sharma",
      category: "Research",
    },
    {
      id: 2,
      title: "Seasonal Herbs: Aligning with Nature's Rhythms",
      excerpt: "How to adjust your herbal regimen according to seasonal changes for optimal health.",
      image: "/placeholder.svg?height=150&width=250",
      readTime: "6 min read",
      date: "June 22, 2023",
      author: "Arjun Patel",
      category: "Seasonal Wellness",
    },
    {
      id: 3,
      title: "Ayurvedic Approaches to Digestive Health",
      excerpt: "Traditional methods for maintaining agni (digestive fire) and preventing common digestive issues.",
      image: "/placeholder.svg?height=150&width=250",
      readTime: "10 min read",
      date: "July 8, 2023",
      author: "Dr. Anjali Desai",
      category: "Health & Wellness",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#256670] py-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-8 left-1/4 w-64 h-64 rounded-full bg-[#D9A566] blur-3xl"></div>
          <div className="absolute bottom-12 right-1/4 w-80 h-80 rounded-full bg-[#D9A566] blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 text-left">
              <div className="inline-block mb-3 px-4 py-1.5 bg-[#D9A566]/20 text-[#D9A566] font-medium rounded-full text-sm">
                Discover Ayurvedic Wisdom
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Explore the World of <span className="text-[#D9A566]">Ayurvedic</span> Plants
              </h1>
              <p className="text-white/80 text-lg mb-8 max-w-xl">
                Connect with centuries of traditional knowledge through our curated collection of medicinal plants, expert courses, and authentic remedies.
              </p>
              
              <div className="relative max-w-lg">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-[#256670]/60" />
                </div>
                <Input
                  placeholder="Search plants, courses, or remedies..."
                  className="pl-12 pr-32 py-6 text-[#256670] bg-white border-0 shadow-xl rounded-full focus:ring-[#D9A566] focus:ring-2 focus:border-transparent"
                />
                <div className="absolute inset-y-0 right-2 flex items-center">
                  <Button size="sm" className="bg-[#D9A566] hover:bg-[#D9A566]/90 text-white rounded-full px-6 font-medium">
                    Search
                  </Button>
                </div>
              </div>
              
              <div className="mt-6 flex items-center gap-4 text-sm text-white/70">
                <span className="flex items-center">
                  <Leaf className="h-4 w-4 mr-1 text-[#D9A566]" /> 120+ Plants
                </span>
                <span className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1 text-[#D9A566]" /> 45+ Courses
                </span>
                <span className="flex items-center">
                  <Pill className="h-4 w-4 mr-1 text-[#D9A566]" /> 80+ Remedies
                </span>
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-[#D9A566] rounded-full opacity-20 blur-md"></div>
                <div className="absolute inset-0 border-2 border-dashed border-[#D9A566]/50 rounded-full flex items-center justify-center">
                  <div className="absolute inset-6 rounded-full overflow-hidden">
                    <Image 
                      src="https://images.unsplash.com/photo-1521146250551-a5578dcc2e64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="Ayurvedic Plants Collection"
                      fill
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-[#D9A566] text-white p-4 rounded-full shadow-lg">
                  <Sparkles className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="plants" className="w-full">
        <div className="flex justify-center mb-10">
          <TabsList className="bg-[#256670]/10 p-1.5 rounded-full shadow-md border border-[#256670]/10">
            <TabsTrigger
          value="plants"
          className="rounded-full data-[state=active]:bg-[#256670] data-[state=active]:text-white px-6 py-2.5 transition-all font-medium"
            >
          <Leaf className="h-4 w-4 mr-2" /> Plants
            </TabsTrigger>
            <TabsTrigger
          value="learning"
          className="rounded-full data-[state=active]:bg-[#256670] data-[state=active]:text-white px-6 py-2.5 transition-all font-medium"
            >
          <BookOpen className="h-4 w-4 mr-2" /> Learning
            </TabsTrigger>
            <TabsTrigger
          value="3d-models"
          className="rounded-full data-[state=active]:bg-[#256670] data-[state=active]:text-white px-6 py-2.5 transition-all font-medium"
            >
          <Sparkles className="h-4 w-4 mr-2" /> 3D Models
            </TabsTrigger>
            <TabsTrigger
          value="remedies"
          className="rounded-full data-[state=active]:bg-[#256670] data-[state=active]:text-white px-6 py-2.5 transition-all font-medium"
            >
          <Pill className="h-4 w-4 mr-2" /> Remedies
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Plants Tab Content */}
        <TabsContent value="plants" className="m-0">
          {/* Filter Bar */}
          <div className="bg-white shadow-lg rounded-xl p-4 mb-10 flex flex-col md:flex-row gap-4 items-center justify-between border border-[#256670]/10">
            <div className="flex items-center gap-2">
          <Button variant="outline" className="flex items-center gap-2 border-[#256670]/30 hover:bg-[#256670]/5 hover:border-[#256670]/50 text-[#256670]">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" className="flex items-center gap-2 border-[#256670]/30 hover:bg-[#256670]/5 hover:border-[#256670]/50 text-[#256670]">
            <Camera className="h-4 w-4" />
            Image Search
          </Button>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>120 plants available</span>
          <span className="mx-2 text-[#D9A566]">•</span>
          <span>
                    Sort by: <span className="font-medium text-gray-900">Popularity</span>
                  </span>
                </div>
              </div>

              {/* Categories */}
              <div className="mb-12">
                <h2 className="text-xl font-semibold mb-6">Browse by Category</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                  {categories.map((category, index) => (
                    <Card
                      key={index}
                      className="border-none shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px] cursor-pointer group"
                    >
                      <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                        <div className="bg-primary/10 rounded-full p-4 mb-4 group-hover:bg-primary/20 transition-colors">
                          <div className="text-primary">{category.icon}</div>
                        </div>
                        <h3 className="font-medium mb-1">{category.name}</h3>
                        <p className="text-sm text-gray-500">{category.count} plants</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Plants Grid */}
              <div className="mb-12">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Medicinal Plants</h2>
                  <Button variant="ghost" className="text-primary">
                    View All <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {plants.map((plant) => (
                    <Card
                      key={plant.id}
                      className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px] group"
                    >
                      <div className="aspect-square relative overflow-hidden">
                        <Image
                          src={plant.image || "/placeholder.svg"}
                          alt={plant.name}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute top-3 right-3 bg-white/90 text-primary text-xs font-medium px-2 py-1 rounded-full">
                          {plant.category}
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                          <p className="text-white text-sm">{plant.description}</p>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold">{plant.name}</h3>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-1" />
                            <span className="text-sm font-medium">{plant.rating}</span>
                          </div>
                        </div>
                        <p className="text-gray-500 text-sm italic mb-3">{plant.scientificName}</p>
                        <div className="flex justify-between items-center">
                          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">
                            Dosha: {plant.dosha}
                          </Badge>
                          <span className="text-xs text-gray-500">{plant.reviews} reviews</span>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button className="w-full">View Details</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Button size="lg" className="px-8">
                    Load More Plants
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Learning Tab Content */}
            <TabsContent value="learning" className="m-0">
              {/* Featured Courses */}
              <section className="mb-16">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold">Featured Courses</h2>
                  <Button variant="ghost" className="text-primary">
                    View All Courses <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {courses.map((course) => (
                    <Card
                      key={course.id}
                      className="border-none shadow-md overflow-hidden hover:shadow-lg transition-all hover:translate-y-[-5px] group"
                    >
                      <div className="relative aspect-video">
                        <Image
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <Badge className="bg-white/90 text-primary hover:bg-white border-0">{course.level}</Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center">
                            <BookMarked className="h-4 w-4 text-primary mr-2" />
                            <span className="text-sm text-gray-500">{course.lessons} lessons</span>
                          </div>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-1" />
                            <span className="text-sm font-medium">{course.rating}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            <span>{course.students.toLocaleString()} students</span>
                          </div>
                        </div>
                        <div className="flex items-center mb-4 pb-4 border-b">
                          <div className="w-8 h-8 rounded-full bg-gray-200 mr-2 overflow-hidden">
                            <Image
                              src="/placeholder.svg?height=32&width=32"
                              alt={course.instructor}
                              width={32}
                              height={32}
                            />
                          </div>
                          <span className="text-sm font-medium">{course.instructor}</span>
                        </div>
                        <Button className="w-full">Enroll Now</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Video Tutorials */}
              <section className="mb-16">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold">Video Tutorials</h2>
                  <Button variant="ghost" className="text-primary">
                    View All Videos <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {videos.map((video) => (
                    <Card
                      key={video.id}
                      className="border-none shadow-md overflow-hidden hover:shadow-lg transition-all hover:translate-y-[-5px] group"
                    >
                      <div className="relative aspect-video group cursor-pointer">
                        <Image
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="rounded-full bg-white/90 p-3">
                            <Play className="h-6 w-6 text-primary" fill="currentColor" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-2 line-clamp-2">{video.title}</h3>
                        <div className="flex justify-between items-center text-xs text-gray-500">
                          <span>{video.views} views</span>
                          <span>{video.date}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Articles */}
              <section className="mb-16">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold">Latest Articles</h2>
                  <Button variant="ghost" className="text-primary">
                    View All Articles <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {articles.map((article) => (
                    <Card
                      key={article.id}
                      className="border-none shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px]"
                    >
                      <CardContent className="p-6">
                        <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-0">
                          {article.category}
                        </Badge>
                        <div className="flex gap-6 mb-4">
                          <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                            <Image
                              src={article.image || "/placeholder.svg"}
                              alt={article.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2 line-clamp-2">{article.title}</h3>
                            <div className="flex items-center text-xs text-gray-500 mb-1">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>{article.readTime}</span>
                              <span className="mx-2">•</span>
                              <span>{article.date}</span>
                            </div>
                            <div className="flex items-center text-xs text-gray-500">
                              <div className="w-4 h-4 rounded-full bg-gray-200 mr-1 overflow-hidden">
                                <Image
                                  src="/placeholder.svg?height=16&width=16"
                                  alt={article.author}
                                  width={16}
                                  height={16}
                                />
                              </div>
                              <span>{article.author}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                        <Button variant="outline" className="w-full">
                          Read Article
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Learning Paths */}
              <section className="mb-16">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold">Learning Paths</h2>
                  <Button variant="ghost" className="text-primary">
                    View All Paths <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card className="border-none shadow-md overflow-hidden hover:shadow-lg transition-all hover:translate-y-[-5px]">
                    <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-center text-white">
                      <BookOpen className="h-12 w-12 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold">Beginner Path</h3>
                      <p className="text-white/80 mt-2">Start your Ayurvedic journey with foundational knowledge</p>
                    </div>
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          Introduction to Ayurvedic principles
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          Basic medicinal plants identification
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          Simple home remedies
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          Daily Ayurvedic practices
                        </li>
                      </ul>
                      <Button className="w-full mt-6">Start Learning</Button>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-md overflow-hidden hover:shadow-lg transition-all hover:translate-y-[-5px]">
                    <div className="bg-gradient-to-r from-secondary to-secondary/80 p-6 text-center text-white">
                      <BookOpen className="h-12 w-12 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold">Intermediate Path</h3>
                      <p className="text-white/80 mt-2">Expand your knowledge with deeper concepts</p>
                    </div>
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-secondary mr-2">•</span>
                          Advanced dosha theory and balance
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary mr-2">•</span>
                          Herbal formulations and preparations
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary mr-2">•</span>
                          Seasonal regimens (Ritucharya)
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary mr-2">•</span>
                          Ayurvedic nutrition principles
                        </li>
                      </ul>
                      <Button className="w-full mt-6 bg-secondary hover:bg-secondary/90">Start Learning</Button>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-md overflow-hidden hover:shadow-lg transition-all hover:translate-y-[-5px]">
                    <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 text-center text-white">
                      <BookOpen className="h-12 w-12 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold">Advanced Path</h3>
                      <p className="text-white/80 mt-2">Master specialized Ayurvedic knowledge</p>
                    </div>
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-gray-800 mr-2">•</span>
                          Classical text interpretations
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-800 mr-2">•</span>
                          Complex herbal formulations
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-800 mr-2">•</span>
                          Specialized therapeutic approaches
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-800 mr-2">•</span>
                          Research methodologies in Ayurveda
                        </li>
                      </ul>
                      <Button className="w-full mt-6 bg-gray-800 hover:bg-gray-700">Start Learning</Button>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Learning Community */}
              <section className="bg-</Card>primary/5 rounded-2xl p-8 mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-6">Join Our Learning Community</h2>
                    <p className="text-gray-600 mb-4">
                      Connect with fellow Ayurveda enthusiasts, practitioners, and experts in our vibrant learning
                      community. Share knowledge, ask questions, and deepen your understanding through collaborative
                      learning.
                    </p>
                    <p className="text-gray-600 mb-6">
                      Our community features regular live sessions with Ayurvedic doctors, botanists, and traditional
                      practitioners who share their expertise and answer your questions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="lg">Join Community</Button>
                      <Button variant="outline" size="lg">
                        Upcoming Live Sessions
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Image
                      src="/placeholder.svg?height=500&width=600"
                      alt="Learning Community"
                      width={600}
                      height={500}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </section>
            </TabsContent>

            {/* 3D Models Tab Content */}
            <TabsContent value="3d-models" className="m-0">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Interactive 3D Plant Models</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Explore detailed 3D models of medicinal plants to better understand their structure, identifying
                  features, and medicinal parts.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <Card className="border-none shadow-md overflow-hidden hover:shadow-lg transition-all hover:translate-y-[-5px] group">
                  <div className="aspect-video bg-gray-100 flex items-center justify-center relative group-hover:bg-gray-200 transition-colors">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Sparkles className="h-12 w-12 text-gray-300" />
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <Badge className="bg-primary text-white">New</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Tulsi (Holy Basil)</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Explore the 3D structure of this sacred plant, including its leaves, flowers, and stems.
                    </p>
                    <div className="flex justify-between items-center mb-4">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        High Detail
                      </Badge>
                      <span className="text-xs text-gray-500">5.2K views</span>
                    </div>
                    <Button className="w-full">View 3D Model</Button>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md overflow-hidden hover:shadow-lg transition-all hover:translate-y-[-5px] group">
                  <div className="aspect-video bg-gray-100 flex items-center justify-center relative group-hover:bg-gray-200 transition-colors">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Sparkles className="h-12 w-12 text-gray-300" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Ashwagandha</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Examine the root structure and plant morphology of this powerful adaptogenic herb.
                    </p>
                    <div className="flex justify-between items-center mb-4">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        Interactive
                      </Badge>
                      <span className="text-xs text-gray-500">3.8K views</span>
                    </div>
                    <Button className="w-full">View 3D Model</Button>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md overflow-hidden hover:shadow-lg transition-all hover:translate-y-[-5px] group">
                  <div className="aspect-video bg-gray-100 flex items-center justify-center relative group-hover:bg-gray-200 transition-colors">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Sparkles className="h-12 w-12 text-gray-300" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Neem</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Study the distinctive leaves and bark of this versatile medicinal tree.
                    </p>
                    <div className="flex justify-between items-center mb-4">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        Animated
                      </Badge>
                      <span className="text-xs text-gray-500">4.5K views</span>
                    </div>
                    <Button className="w-full">View 3D Model</Button>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Button size="lg" variant="outline" className="px-8">
                  View All 3D Models
                </Button>
              </div>
            </TabsContent>

            {/* Remedies Tab Content */}
            <TabsContent value="remedies" className="m-0">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Traditional Ayurvedic Remedies</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Discover time-tested remedies using medicinal plants for common health concerns.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <Card className="border-none shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px]">
                  <CardContent className="pt-6">
                    <div className="rounded-full bg-secondary/10 p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-secondary"
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
                    <h3 className="text-xl font-semibold mb-3">Respiratory Support</h3>
                    <p className="text-gray-600 mb-4">
                      Traditional remedies for coughs, colds, and respiratory health using Tulsi, Ginger, and other
                      herbs.
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge className="bg-secondary/10 text-secondary border-0">
                        <Tag className="h-3 w-3 mr-1" /> 12 plants
                      </Badge>
                      <Button variant="link" className="text-secondary p-0">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px]">
                  <CardContent className="pt-6">
                    <div className="rounded-full bg-secondary/10 p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-secondary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Digestive Health</h3>
                    <p className="text-gray-600 mb-4">
                      Remedies for improving digestion, reducing bloating, and supporting gut health with Triphala and
                      other formulations.
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge className="bg-secondary/10 text-secondary border-0">
                        <Tag className="h-3 w-3 mr-1" /> 15 plants
                      </Badge>
                      <Button variant="link" className="text-secondary p-0">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px]">
                  <CardContent className="pt-6">
                    <div className="rounded-full bg-secondary/10 p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-secondary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Stress & Sleep</h3>
                    <p className="text-gray-600 mb-4">
                      Natural approaches to managing stress and improving sleep quality using Ashwagandha, Brahmi, and
                      other adaptogenic herbs.
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge className="bg-secondary/10 text-secondary border-0">
                        <Tag className="h-3 w-3 mr-1" /> 10 plants
                      </Badge>
                      <Button variant="link" className="text-secondary p-0">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px]">
                  <CardContent className="pt-6">
                    <div className="rounded-full bg-secondary/10 p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-secondary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Skin Health</h3>
                    <p className="text-gray-600 mb-4">
                      Traditional preparations for skin conditions, rejuvenation, and natural beauty using Neem, Aloe
                      Vera, and other botanicals.
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge className="bg-secondary/10 text-secondary border-0">
                        <Tag className="h-3 w-3 mr-1" /> 14 plants
                      </Badge>
                      <Button variant="link" className="text-secondary p-0">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px]">
                  <CardContent className="pt-6">
                    <div className="rounded-full bg-secondary/10 p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-secondary"
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
                    <h3 className="text-xl font-semibold mb-3">Immunity Support</h3>
                    <p className="text-gray-600 mb-4">
                      Strengthen your body's natural defenses with traditional formulations using Guduchi, Amla, and
                      other immune-supporting plants.
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge className="bg-secondary/10 text-secondary border-0">
                        <Tag className="h-3 w-3 mr-1" /> 9 plants
                      </Badge>
                      <Button variant="link" className="text-secondary p-0">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px]">
                  <CardContent className="pt-6">
                    <div className="rounded-full bg-secondary/10 p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-secondary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Women's Health</h3>
                    <p className="text-gray-600 mb-4">
                      Traditional approaches to women's wellness using Shatavari, Kumari, and other herbs that support
                      hormonal balance.
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge className="bg-secondary/10 text-secondary border-0">
                        <Tag className="h-3 w-3 mr-1" /> 11 plants
                      </Badge>
                      <Button variant="link" className="text-secondary p-0">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Featured Remedy */}
              <div className="bg-gradient-to-r from-secondary/20 to-primary/20 rounded-2xl p-8 mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <Badge className="mb-4 bg-white/80 text-secondary">Featured Remedy</Badge>
                    <h2 className="text-3xl font-bold mb-4">Tulsi & Ginger Immune Booster</h2>
                    <p className="text-gray-700 mb-6">
                      This traditional remedy combines the powerful properties of Tulsi (Holy Basil) and Ginger to
                      strengthen immunity and support respiratory health. Perfect for seasonal transitions and daily
                      wellness.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <div className="bg-white/80 rounded-full p-1 mr-3 mt-0.5">
                          <Leaf className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Ingredients</h4>
                          <p className="text-sm text-gray-600">Fresh Tulsi leaves, Ginger root, Honey, Black pepper</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-white/80 rounded-full p-1 mr-3 mt-0.5">
                          <Clock className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Preparation Time</h4>
                          <p className="text-sm text-gray-600">10 minutes</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-white/80 rounded-full p-1 mr-3 mt-0.5">
                          <FileText className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Traditional Use</h4>
                          <p className="text-sm text-gray-600">
                            Daily immune support, Cold & flu prevention, Respiratory health
                          </p>
                        </div>
                      </div>
                    </div>
                    <Button size="lg">View Full Recipe</Button>
                  </div>
                  <div>
                    <Image
                      src="/placeholder.svg?height=400&width=500"
                      alt="Tulsi & Ginger Immune Booster"
                      width={500}
                      height={400}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button size="lg" className="px-8">
                  Browse All Remedies
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background with the specified colors */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#256670] to-[#256670]/90"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#D9A566]/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#D9A566]/20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full border border-[#D9A566]/30"></div>
        <div className="absolute top-1/4 right-1/3 w-16 h-16 rounded-full border-2 border-[#D9A566]/20"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-4 px-4 py-1.5 bg-[#D9A566]/20 text-[#D9A566] font-medium rounded-full text-sm">
            Take Your Knowledge Further
          </div>
          
          <h2 className="text-4xl font-bold mb-6 text-white">Deepen Your <span className="text-[#D9A566]">Ayurvedic</span> Knowledge</h2>
          
          <p className="text-white/90 max-w-2xl mx-auto mb-10 text-lg">
            Ready to learn more about medicinal plants and their applications in Ayurveda? Explore our comprehensive
            learning resources or visit our virtual garden.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button asChild size="lg" className="bg-[#D9A566] hover:bg-[#D9A566]/90 text-white border-none shadow-lg shadow-[#D9A566]/20 px-8 py-6">
              <Link href="/dashboard" className="flex items-center">
                <BookOpen className="mr-2 h-5 w-5" /> Go to Dashboard
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" 
              className="border-2 border-[#D9A566] text-[#D9A566] hover:bg-[#D9A566]/10 px-8 py-6">
              <Link href="/virtual-garden" className="flex items-center">
                <Leaf className="mr-2 h-5 w-5" /> Visit Virtual Garden
              </Link>
            </Button>
          </div>
          
          <div className="mt-10 flex items-center justify-center gap-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-[#256670] bg-[#D9A566]/80"></div>
              ))}
            </div>
            <span className="text-[#D9A566]">Join 5000+ plant enthusiasts</span>
          </div>
        </div>
      </section>
    </div>
  )
}

