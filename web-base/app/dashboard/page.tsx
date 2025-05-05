import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Leaf,
  BookOpen,
  Users,
  TrendingUp,
  Calendar,
  Clock,
  Bell,
  Heart,
  CheckCircle2,
  BarChart3,
  Activity,
  BookMarked,
  Star,
} from "lucide-react"
import sitare from "@/public/sitare.jpg"

export default function DashboardPage() {
  // Mock data for dashboard
  const stats = [
    {
      title: "Plants Explored",
      value: "42",
      icon: <Leaf className="h-5 w-5" />,
      change: "+12% from last month",
      color: "bg-emerald-100 text-emerald-700",
    },
    {
      title: "Courses Enrolled",
      value: "3",
      icon: <BookOpen className="h-5 w-5" />,
      change: "+1 new course",
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Learning Hours",
      value: "28",
      icon: <Clock className="h-5 w-5" />,
      change: "+5 hrs this week",
      color: "bg-purple-100 text-purple-700",
    },
    {
      title: "Garden Visits",
      value: "15",
      icon: <Users className="h-5 w-5" />,
      change: "+3 new visits",
      color: "bg-amber-100 text-amber-700",
    },
  ]

  const learningProgress = [
    { course: "Introduction to Ayurvedic Principles", progress: 75, lastAccessed: "2 days ago" },
    { course: "Medicinal Plants Identification", progress: 45, lastAccessed: "Yesterday" },
    { course: "Ayurvedic Formulations", progress: 20, lastAccessed: "Just now" },
  ]

  const recentActivities = [
    {
      action: "Completed lesson",
      subject: "Tulsi Cultivation Techniques",
      time: "2 hours ago",
      icon: <CheckCircle2 className="h-4 w-4 text-green-500" />,
    },
    {
      action: "Added to favorites",
      subject: "Ashwagandha Plant Profile",
      time: "Yesterday",
      icon: <Heart className="h-4 w-4 text-rose-500" />,
    },
    {
      action: "Started course",
      subject: "Ayurvedic Formulations & Preparations",
      time: "3 days ago",
      icon: <BookMarked className="h-4 w-4 text-blue-500" />,
    },
    {
      action: "Visited virtual garden",
      subject: "Medicinal Herbs Section",
      time: "4 days ago",
      icon: <Leaf className="h-4 w-4 text-emerald-500" />,
    },
    {
      action: "Completed quiz",
      subject: "Dosha Identification",
      time: "1 week ago",
      icon: <CheckCircle2 className="h-4 w-4 text-green-500" />,
    },
  ]

  const upcomingEvents = [
    { title: "Live Webinar: Seasonal Herbs", date: "June 15, 2023", time: "3:00 PM IST" },
    { title: "Virtual Garden Tour", date: "June 18, 2023", time: "11:00 AM IST" },
    { title: "Q&A with Ayurvedic Expert", date: "June 22, 2023", time: "5:30 PM IST" },
  ]

  const recommendedPlants = [
    { name: "Brahmi", image: "/placeholder.svg?height=80&width=80", match: "98% match for your profile" },
    { name: "Shatavari", image: "/placeholder.svg?height=80&width=80", match: "95% match for your profile" },
    { name: "Guduchi", image: "/placeholder.svg?height=80&width=80", match: "92% match for your profile" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Dashboard</h1>
              <p className="mt-1 text-gray-600">Welcome back to your Ayurvedic learning journey</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <Button variant="outline" className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                <span className="hidden sm:inline">Notifications</span>
                <Badge className="ml-1 bg-primary">3</Badge>
              </Button>
              <Button className="flex items-center gap-2">
                <Leaf className="h-4 w-4" />
                <span className="hidden sm:inline">Visit Garden</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-full ${stat.color}`}>{stat.icon}</div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                </div>
                <div className="mt-4 text-xs text-gray-500">{stat.change}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Learning Progress */}
            <Card className="border-none shadow-md">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold">Learning Progress</CardTitle>
                  <Button variant="ghost" size="sm" className="text-primary">
                    View All Courses
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {learningProgress.map((course, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-medium text-sm">{course.course}</h4>
                        <span className="text-sm text-gray-500">{course.progress}%</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Progress value={course.progress} className="h-2 flex-grow" />
                        <span className="text-xs text-gray-500 whitespace-nowrap">{course.lastAccessed}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button className="w-full">Continue Learning</Button>
                </div>
              </CardContent>
            </Card>

            {/* Activity & Analytics */}
            <Tabs defaultValue="activity" className="w-full">
              <div className="flex justify-between items-center mb-4">
                <TabsList className="bg-gray-100">
                  <TabsTrigger value="activity" className="data-[state=active]:bg-white">
                    Recent Activity
                  </TabsTrigger>
                  <TabsTrigger value="analytics" className="data-[state=active]:bg-white">
                    Learning Analytics
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="activity" className="m-0">
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {recentActivities.map((activity, index) => (
                        <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
                          <div className="bg-gray-100 rounded-full p-2">{activity.icon}</div>
                          <div className="flex-grow">
                            <p className="font-medium">{activity.subject}</p>
                            <p className="text-sm text-gray-500">{activity.action}</p>
                          </div>
                          <div className="text-xs text-gray-500 whitespace-nowrap">{activity.time}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics" className="m-0">
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex justify-center items-center flex-col h-64">
                      <BarChart3 className="h-16 w-16 text-gray-300 mb-4" />
                      <p className="text-gray-500 text-center">
                        Your learning analytics will appear here as you progress through courses and activities.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Plant Collection Progress */}
            <Card className="border-none shadow-md overflow-hidden">
              <CardHeader className="pb-2 bg-gradient-to-r from-primary/20 to-secondary/20">
                <CardTitle className="text-xl font-bold">Plant Collection Progress</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Plants Identified</p>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold mr-2">42</span>
                      <span className="text-sm text-gray-500">/ 120</span>
                    </div>
                  </div>
                  <div className="w-24 h-24 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold">35%</span>
                    </div>
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#e6e6e6" strokeWidth="10" />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="10"
                        strokeDasharray="251.2"
                        strokeDashoffset="163.28"
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-500">Herbs</p>
                    <p className="font-bold">
                      18 <span className="text-xs text-gray-500">/ 45</span>
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-500">Roots</p>
                    <p className="font-bold">
                      9 <span className="text-xs text-gray-500">/ 25</span>
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-500">Fruits</p>
                    <p className="font-bold">
                      7 <span className="text-xs text-gray-500">/ 15</span>
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-500">Trees</p>
                    <p className="font-bold">
                      5 <span className="text-xs text-gray-500">/ 20</span>
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-500">Vines</p>
                    <p className="font-bold">
                      3 <span className="text-xs text-gray-500">/ 10</span>
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-500">Formulations</p>
                    <p className="font-bold">
                      0 <span className="text-xs text-gray-500">/ 5</span>
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <Button variant="outline" className="w-full">
                    Explore More Plants
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* User Profile Card */}
            <Card className="border-none shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-secondary h-24"></div>
              <CardContent className="p-6 pt-0 -mt-12">
                <div className="flex justify-center">
                  <div className="rounded-full border-4 border-white bg-white">
                    <Image
                      src={sitare}
                      alt="User Avatar"
                      width={80}
                      height={80}
                      className="rounded-3xl h-36 w-40"
                    />
                  </div>
                </div>
                <div className="text-center mt-2">
                  <h3 className="font-bold text-lg">Shakil Ahmad</h3>
                  <p className="text-gray-500 text-sm">Ayurveda Enthusiast</p>
                  <div className="flex justify-center gap-2 mt-3">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      Beginner Level
                    </Badge>
                    <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">
                      Vata Dosha
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-6 text-center">
                  <div>
                    <p className="font-bold">42</p>
                    <p className="text-xs text-gray-500">Plants</p>
                  </div>
                  <div>
                    <p className="font-bold">3</p>
                    <p className="text-xs text-gray-500">Courses</p>
                  </div>
                  <div>
                    <p className="font-bold">15</p>
                    <p className="text-xs text-gray-500">Badges</p>
                  </div>
                </div>
                <div className="mt-6">
                  <Button variant="outline" className="w-full">
                    Edit Profile
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="border-none shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-4">
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex gap-4 pb-4 border-b last:border-0 last:pb-0">
                      <div className="bg-primary/10 rounded-lg p-2 h-12 w-12 flex items-center justify-center flex-shrink-0">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{event.title}</p>
                        <p className="text-sm text-gray-500">
                          {event.date} • {event.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button variant="outline" className="w-full">
                    View All Events
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recommended for You */}
            <Card className="border-none shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold">Recommended for You</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-4">
                <div className="space-y-4">
                  {recommendedPlants.map((plant, index) => (
                    <div key={index} className="flex items-center gap-4 pb-4 border-b last:border-0 last:pb-0">
                      <Image
                        src={plant.image || "/placeholder.svg"}
                        alt={plant.name}
                        width={50}
                        height={50}
                        className="rounded-lg object-cover"
                      />
                      <div className="flex-grow">
                        <p className="font-medium">{plant.name}</p>
                        <div className="flex items-center">
                          <Star className="h-3 w-3 text-yellow-500 mr-1" />
                          <p className="text-xs text-gray-500">{plant.match}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-primary">
                        View
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button variant="outline" className="w-full">
                    View All Recommendations
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="border-none shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-4">
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="justify-start">
                    <Leaf className="mr-2 h-4 w-4" /> Plants
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <BookOpen className="mr-2 h-4 w-4" /> Courses
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Activity className="mr-2 h-4 w-4" /> Remedies
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Heart className="mr-2 h-4 w-4" /> Favorites
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Users className="mr-2 h-4 w-4" /> Community
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <TrendingUp className="mr-2 h-4 w-4" /> Progress
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

