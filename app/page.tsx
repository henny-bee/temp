import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, LinkIcon, Palette, Share2, User } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            LinkHub
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Create your personalized link page in minutes. Share all your important links in one beautiful, customizable
            place.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button size="lg" variant="outline">
                View Demo
              </Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <User className="h-12 w-12 text-purple-600 mb-4" />
              <CardTitle>Personal Branding</CardTitle>
              <CardDescription>
                Customize your profile with photos, bio, and personal touches that reflect your unique style.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Palette className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle>Beautiful Themes</CardTitle>
              <CardDescription>
                Choose from stunning themes or create your own with custom colors, fonts, and backgrounds.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <Share2 className="h-12 w-12 text-indigo-600 mb-4" />
              <CardTitle>Easy Sharing</CardTitle>
              <CardDescription>
                Get a clean, memorable URL that you can share anywhere. Mobile-optimized and lightning fast.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Demo Preview */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">See it in action</h2>
          <div className="max-w-sm mx-auto">
            <Card className="overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-br from-pink-400 to-purple-600 h-32"></div>
              <CardContent className="p-6 -mt-16 relative">
                <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <User className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="font-bold text-xl mb-2">@yourusername</h3>
                <p className="text-gray-600 text-sm mb-6">Your bio goes here</p>
                <div className="space-y-3">
                  <div className="bg-gray-100 rounded-lg p-3 flex items-center gap-3">
                    <LinkIcon className="h-4 w-4" />
                    <span className="text-sm">Your Website</span>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 flex items-center gap-3">
                    <LinkIcon className="h-4 w-4" />
                    <span className="text-sm">Social Media</span>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 flex items-center gap-3">
                    <LinkIcon className="h-4 w-4" />
                    <span className="text-sm">Portfolio</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
