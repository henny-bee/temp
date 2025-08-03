"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, Settings, LinkIcon, Palette } from "lucide-react"
import ProfileEditor from "@/components/profile-editor"
import LinkManager from "@/components/link-manager"
import ThemeCustomizer from "@/components/theme-customizer"
import ProfilePreview from "@/components/profile-preview"
import Link from "next/link"

export default function Dashboard() {
  const [profile, setProfile] = useState({
    name: "Your Name",
    username: "yourusername",
    bio: "Add your bio here",
    avatar: "",
    links: [],
    theme: {
      background: "gradient-purple",
      buttonStyle: "rounded",
      fontFamily: "inter",
      buttonColor: "purple",
    },
  })

  // Load profile from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("linkhub-profile")
    if (saved) {
      setProfile(JSON.parse(saved))
    }
  }, [])

  // Save profile to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("linkhub-profile", JSON.stringify(profile))
  }, [profile])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-2xl font-bold text-purple-600">
                LinkHub
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">Dashboard</span>
            </div>
            <div className="flex items-center gap-2">
              <Link href={`/@${profile.username}`}>
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </Button>
              </Link>
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                Share Profile
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Editor Panel */}
          <div>
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="profile" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Profile
                </TabsTrigger>
                <TabsTrigger value="links" className="flex items-center gap-2">
                  <LinkIcon className="h-4 w-4" />
                  Links
                </TabsTrigger>
                <TabsTrigger value="theme" className="flex items-center gap-2">
                  <Palette className="h-4 w-4" />
                  Theme
                </TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Settings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ProfileEditor profile={profile} setProfile={setProfile} />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="links" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Manage Links</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <LinkManager profile={profile} setProfile={setProfile} />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="theme" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Customize Theme</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ThemeCustomizer profile={profile} setProfile={setProfile} />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Preview Panel */}
          <div className="lg:sticky lg:top-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  Live Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="max-w-sm mx-auto">
                  <ProfilePreview profile={profile} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
