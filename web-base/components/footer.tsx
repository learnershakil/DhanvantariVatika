import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#256670] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#D9A566]">Dhanvantari Vatika</h3>
            <p className="mb-4">Interactive Ayurvedic learning platform with virtual herbal garden.</p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook" className="bg-[#1e535a] p-2 rounded-full hover:bg-[#D9A566] transition-colors duration-300">
                <Facebook className="h-5 w-5 text-white" />
              </Link>
              <Link href="#" aria-label="Instagram" className="bg-[#1e535a] p-2 rounded-full hover:bg-[#D9A566] transition-colors duration-300">
                <Instagram className="h-5 w-5 text-white" />
              </Link>
              <Link href="#" aria-label="Twitter" className="bg-[#1e535a] p-2 rounded-full hover:bg-[#D9A566] transition-colors duration-300">
                <Twitter className="h-5 w-5 text-white" />
              </Link>
              <Link href="#" aria-label="YouTube" className="bg-[#1e535a] p-2 rounded-full hover:bg-[#D9A566] transition-colors duration-300">
                <Youtube className="h-5 w-5 text-white" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#D9A566]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#D9A566] transition-colors duration-200 flex items-center">
                  <span className="border-b border-transparent hover:border-[#D9A566]">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D9A566] transition-colors duration-200 flex items-center">
                  <span className="border-b border-transparent hover:border-[#D9A566]">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/explore" className="hover:text-[#D9A566] transition-colors duration-200 flex items-center">
                  <span className="border-b border-transparent hover:border-[#D9A566]">Explore Plants</span>
                </Link>
              </li>
              <li>
                <Link href="/learning" className="hover:text-[#D9A566] transition-colors duration-200 flex items-center">
                  <span className="border-b border-transparent hover:border-[#D9A566]">Learning Resources</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#D9A566]">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ayush-vriksha-kit" className="hover:text-[#D9A566] transition-colors duration-200 flex items-center">
                  <span className="border-b border-transparent hover:border-[#D9A566]">Ayush Vriksha Kit</span>
                </Link>
              </li>
              <li>
                <Link href="/virtual-garden" className="hover:text-[#D9A566] transition-colors duration-200 flex items-center">
                  <span className="border-b border-transparent hover:border-[#D9A566]">Virtual Garden</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#D9A566] transition-colors duration-200 flex items-center">
                  <span className="border-b border-transparent hover:border-[#D9A566]">Research Papers</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#D9A566] transition-colors duration-200 flex items-center">
                  <span className="border-b border-transparent hover:border-[#D9A566]">Ayurvedic Remedies</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#D9A566]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#D9A566] mt-0.5" />
                <span>Lovely Professional University, Punjab, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#D9A566]" />
                <span>+91 97093 58602</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#D9A566]" />
                <span>info@dhanvantarivatika.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#D9A566]/30 mt-8 pt-8 text-center">
          <p className="text-[#D9A566]">© {new Date().getFullYear()} Dhanvantari Vatika. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

