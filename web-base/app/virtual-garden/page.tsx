import { Button } from "@/components/ui/button"
import { Leaf, Info, Maximize2, ZoomIn, ZoomOut, Compass, RotateCcw } from "lucide-react"

export default function VirtualGardenPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Virtual Garden Controls */}
      <div className="bg-white shadow-md py-3 px-4 border-b">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="rounded-full">
              <Leaf className="h-4 w-4 mr-2" /> Plant Directory
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              <Info className="h-4 w-4 mr-2" /> Garden Guide
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
              <Compass className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
              <RotateCcw className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
              <Maximize2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Virtual Garden iframe */}
      <div className="w-full h-[80vh] relative bg-gray-100">
        
        <iframe 
          src="" 
          className="w-full h-full border-0" 
          title="Dhanvantari Vatika Virtual Garden"
          allow="camera; microphone; fullscreen; display-capture; autoplay" 
          referrerPolicy="no-referrer"
        />

        {/* Plant Information Overlay (Example) */}
        <div className="absolute bottom-6 left-6 bg-white/95 p-4 rounded-lg shadow-lg max-w-sm border border-primary/20">
          <div className="flex items-start">
            <div className="bg-primary/10 rounded-full p-2 mr-3">
              <Leaf className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Tulsi (Holy Basil)</h3>
              <p className="text-gray-500 text-sm italic mb-2">Ocimum sanctum</p>
              <p className="text-sm text-gray-600 mb-3">
                A sacred plant in Ayurveda known for its adaptogenic properties and respiratory benefits.
              </p>
              <Button size="sm" className="w-full">
                View Plant Details
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Instructions below iframe */}
      <div className="bg-primary/5 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Virtual Garden Navigation</h2>
              <p className="text-gray-600 max-w-2xl">
                Use your mouse to navigate through the garden. Click on plants to learn more about their properties and
                uses in Ayurvedic medicine.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="bg-secondary hover:bg-secondary/90">Take Guided Tour</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

