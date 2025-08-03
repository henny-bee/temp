"use client"

import ProfilePreview from "@/components/profile-preview"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const demoProfile = {
  name: "Alex Johnson",
  username: "alexjohnson",
  bio: "Digital creator, photographer, and coffee enthusiast ☕ Sharing my journey through pixels and code.",
  avatar: "/placeholder.svg?height=120&width=120",
  links: [
    {
      id: "1",
      title: "Portfolio Website",
      url: "https://alexjohnson.dev",
      icon: "🌐",
    },
    {
      id: "2",
      title: "Photography Instagram",
      url: "https://instagram.com/alexshots",
      icon: "📸",
    },
    {
      id: "3",
      title: "YouTube Channel",
      url: "https://youtube.com/alexcreates",
      icon: "🎥",
    },
    {
      id: "4",
      title: "Buy Me a Coffee",
      url: "https://buymeacoffee.com/alex",
      icon: "☕",
    },
    {
      id: "5",
      title: "Newsletter",
      url: "https://newsletter.alexjohnson.dev",
      icon: "📧",
    },
  ],
  theme: {
    background: "gradient-sunset",
    buttonStyle: "rounded",
    fontFamily: "inter",
    buttonColor: "orange",
  },
}

export default function DemoPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-md mx-auto">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <ProfilePreview profile={demoProfile} isPublic={true} />

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">This is a demo profile. Create your own to get started!</p>
          <Link href="/dashboard">
            <Button className="bg-purple-600 hover:bg-purple-700">Create Your Profile</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
