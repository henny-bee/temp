"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import ProfilePreview from "@/components/profile-preview"
import { Card, CardContent } from "@/components/ui/card"
import { User } from "lucide-react"

export default function PublicProfile() {
  const params = useParams()
  const username = params.username as string
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would fetch from an API
    // For demo, we'll use localStorage
    const saved = localStorage.getItem("linkhub-profile")
    if (saved) {
      const profileData = JSON.parse(saved)
      if (profileData.username === username.replace("@", "")) {
        setProfile(profileData)
      }
    }
    setLoading(false)
  }, [username])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
      </div>
    )
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <User className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">Profile Not Found</h1>
            <p className="text-gray-600">
              The profile @{username.replace("@", "")} doesn't exist or hasn't been created yet.
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-md mx-auto">
        <ProfilePreview profile={profile} isPublic={true} />
      </div>
    </div>
  )
}
