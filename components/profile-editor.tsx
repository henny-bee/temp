"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Upload, User } from "lucide-react"

interface ProfileEditorProps {
  profile: any
  setProfile: (profile: any) => void
}

export default function ProfileEditor({ profile, setProfile }: ProfileEditorProps) {
  const [imageUrl, setImageUrl] = useState("")

  const handleImageUpload = () => {
    if (imageUrl) {
      setProfile({ ...profile, avatar: imageUrl })
      setImageUrl("")
    }
  }

  return (
    <div className="space-y-6">
      {/* Avatar Section */}
      <div className="flex items-center gap-4">
        <Avatar className="h-20 w-20">
          <AvatarImage src={profile.avatar || "/placeholder.svg"} />
          <AvatarFallback>
            <User className="h-8 w-8" />
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <Label htmlFor="avatar-url">Profile Picture URL</Label>
          <div className="flex gap-2 mt-1">
            <Input
              id="avatar-url"
              placeholder="https://example.com/image.jpg"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
            <Button onClick={handleImageUpload} size="sm">
              <Upload className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Name */}
      <div>
        <Label htmlFor="name">Display Name</Label>
        <Input
          id="name"
          value={profile.name}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          placeholder="Your display name"
        />
      </div>

      {/* Username */}
      <div>
        <Label htmlFor="username">Username</Label>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">@</span>
          <Input
            id="username"
            value={profile.username}
            onChange={(e) => setProfile({ ...profile, username: e.target.value.replace(/[^a-zA-Z0-9_]/g, "") })}
            placeholder="username"
            className="flex-1"
          />
        </div>
        <p className="text-xs text-gray-500 mt-1">Your profile will be available at /@{profile.username}</p>
      </div>

      {/* Bio */}
      <div>
        <Label htmlFor="bio">Bio</Label>
        <Textarea
          id="bio"
          value={profile.bio}
          onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
          placeholder="Tell people about yourself..."
          rows={3}
        />
        <p className="text-xs text-gray-500 mt-1">{profile.bio.length}/160 characters</p>
      </div>
    </div>
  )
}
