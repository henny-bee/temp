"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, User } from "lucide-react"

interface ProfilePreviewProps {
  profile: any
  isPublic?: boolean
}

const getBackgroundClass = (background: string) => {
  const backgrounds: { [key: string]: string } = {
    "gradient-purple": "bg-gradient-to-br from-purple-400 to-pink-400",
    "gradient-blue": "bg-gradient-to-br from-blue-400 to-cyan-400",
    "gradient-sunset": "bg-gradient-to-br from-orange-400 to-red-400",
    "gradient-forest": "bg-gradient-to-br from-green-400 to-teal-400",
    "solid-dark": "bg-gray-900",
    "solid-light": "bg-gray-100",
  }
  return backgrounds[background] || backgrounds["gradient-purple"]
}

const getButtonClass = (buttonStyle: string, buttonColor: string) => {
  const styles: { [key: string]: string } = {
    rounded: "rounded-lg",
    pill: "rounded-full",
    square: "rounded-none",
  }

  const colors: { [key: string]: string } = {
    purple: "bg-purple-600 hover:bg-purple-700",
    blue: "bg-blue-600 hover:bg-blue-700",
    green: "bg-green-600 hover:bg-green-700",
    orange: "bg-orange-600 hover:bg-orange-700",
    red: "bg-red-600 hover:bg-red-700",
    gray: "bg-gray-600 hover:bg-gray-700",
  }

  return `${styles[buttonStyle] || styles.rounded} ${colors[buttonColor] || colors.purple}`
}

const getFontClass = (fontFamily: string) => {
  const fonts: { [key: string]: string } = {
    inter: "font-sans",
    serif: "font-serif",
    mono: "font-mono",
  }
  return fonts[fontFamily] || fonts.inter
}

export default function ProfilePreview({ profile, isPublic = false }: ProfilePreviewProps) {
  const backgroundClass = getBackgroundClass(profile.theme.background)
  const buttonClass = getButtonClass(profile.theme.buttonStyle, profile.theme.buttonColor)
  const fontClass = getFontClass(profile.theme.fontFamily)
  const isDark = profile.theme.background === "solid-dark"

  return (
    <div className={`min-h-screen ${isPublic ? "" : "max-h-[600px] overflow-auto"} ${backgroundClass}`}>
      <div className="p-6">
        <Card
          className={`max-w-sm mx-auto overflow-hidden border-0 shadow-2xl ${fontClass} ${isDark ? "bg-gray-800 text-white" : "bg-white"}`}
        >
          <CardContent className="p-8 text-center">
            {/* Avatar */}
            <Avatar className="h-24 w-24 mx-auto mb-6 ring-4 ring-white shadow-lg">
              <AvatarImage src={profile.avatar || "/placeholder.svg"} />
              <AvatarFallback className="text-2xl">
                <User className="h-12 w-12" />
              </AvatarFallback>
            </Avatar>

            {/* Name and Username */}
            <h1 className="text-2xl font-bold mb-2">{profile.name}</h1>
            <p className={`text-sm mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>@{profile.username}</p>

            {/* Bio */}
            {profile.bio && (
              <p className={`text-sm mb-8 leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                {profile.bio}
              </p>
            )}

            {/* Links */}
            <div className="space-y-4">
              {profile.links.map((link: any) => (
                <Button
                  key={link.id}
                  asChild
                  className={`w-full h-12 text-white font-medium transition-all duration-200 hover:scale-105 ${buttonClass}`}
                  onClick={() => isPublic && window.open(link.url, "_blank")}
                >
                  <div className="flex items-center justify-center gap-3 cursor-pointer">
                    {link.icon && <span className="text-lg">{link.icon}</span>}
                    <span>{link.title}</span>
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </Button>
              ))}
            </div>

            {profile.links.length === 0 && (
              <div className={`text-center py-8 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                <p className="text-sm">No links added yet</p>
              </div>
            )}

            {/* Footer */}
            {isPublic && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>Made with LinkHub</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
