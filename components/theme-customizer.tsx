"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent } from "@/components/ui/card"

interface ThemeCustomizerProps {
  profile: any
  setProfile: (profile: any) => void
}

const backgrounds = [
  { id: "gradient-purple", name: "Purple Gradient", class: "bg-gradient-to-br from-purple-400 to-pink-400" },
  { id: "gradient-blue", name: "Blue Gradient", class: "bg-gradient-to-br from-blue-400 to-cyan-400" },
  { id: "gradient-sunset", name: "Sunset", class: "bg-gradient-to-br from-orange-400 to-red-400" },
  { id: "gradient-forest", name: "Forest", class: "bg-gradient-to-br from-green-400 to-teal-400" },
  { id: "solid-dark", name: "Dark", class: "bg-gray-900" },
  { id: "solid-light", name: "Light", class: "bg-gray-100" },
]

const buttonStyles = [
  { id: "rounded", name: "Rounded", class: "rounded-lg" },
  { id: "pill", name: "Pill", class: "rounded-full" },
  { id: "square", name: "Square", class: "rounded-none" },
]

const buttonColors = [
  { id: "purple", name: "Purple", class: "bg-purple-600 hover:bg-purple-700" },
  { id: "blue", name: "Blue", class: "bg-blue-600 hover:bg-blue-700" },
  { id: "green", name: "Green", class: "bg-green-600 hover:bg-green-700" },
  { id: "orange", name: "Orange", class: "bg-orange-600 hover:bg-orange-700" },
  { id: "red", name: "Red", class: "bg-red-600 hover:bg-red-700" },
  { id: "gray", name: "Gray", class: "bg-gray-600 hover:bg-gray-700" },
]

const fonts = [
  { id: "inter", name: "Inter", class: "font-sans" },
  { id: "serif", name: "Serif", class: "font-serif" },
  { id: "mono", name: "Mono", class: "font-mono" },
]

export default function ThemeCustomizer({ profile, setProfile }: ThemeCustomizerProps) {
  const updateTheme = (key: string, value: string) => {
    setProfile({
      ...profile,
      theme: { ...profile.theme, [key]: value },
    })
  }

  return (
    <div className="space-y-8">
      {/* Background */}
      <div>
        <Label className="text-base font-semibold">Background</Label>
        <div className="grid grid-cols-2 gap-3 mt-3">
          {backgrounds.map((bg) => (
            <Card
              key={bg.id}
              className={`cursor-pointer border-2 transition-colors ${
                profile.theme.background === bg.id ? "border-purple-500" : "border-gray-200"
              }`}
              onClick={() => updateTheme("background", bg.id)}
            >
              <CardContent className="p-3">
                <div className={`h-12 w-full rounded ${bg.class} mb-2`}></div>
                <p className="text-sm font-medium text-center">{bg.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Button Style */}
      <div>
        <Label className="text-base font-semibold">Button Style</Label>
        <RadioGroup
          value={profile.theme.buttonStyle}
          onValueChange={(value) => updateTheme("buttonStyle", value)}
          className="grid grid-cols-3 gap-3 mt-3"
        >
          {buttonStyles.map((style) => (
            <div key={style.id}>
              <RadioGroupItem value={style.id} id={style.id} className="sr-only" />
              <Label
                htmlFor={style.id}
                className={`flex flex-col items-center gap-2 p-3 border-2 rounded cursor-pointer transition-colors ${
                  profile.theme.buttonStyle === style.id ? "border-purple-500 bg-purple-50" : "border-gray-200"
                }`}
              >
                <div className={`w-16 h-8 bg-gray-300 ${style.class}`}></div>
                <span className="text-sm">{style.name}</span>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Button Color */}
      <div>
        <Label className="text-base font-semibold">Button Color</Label>
        <div className="grid grid-cols-3 gap-3 mt-3">
          {buttonColors.map((color) => (
            <Button
              key={color.id}
              variant={profile.theme.buttonColor === color.id ? "default" : "outline"}
              size="sm"
              onClick={() => updateTheme("buttonColor", color.id)}
              className={profile.theme.buttonColor === color.id ? color.class : ""}
            >
              {color.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Font Family */}
      <div>
        <Label className="text-base font-semibold">Font Family</Label>
        <RadioGroup
          value={profile.theme.fontFamily}
          onValueChange={(value) => updateTheme("fontFamily", value)}
          className="grid grid-cols-3 gap-3 mt-3"
        >
          {fonts.map((font) => (
            <div key={font.id}>
              <RadioGroupItem value={font.id} id={font.id} className="sr-only" />
              <Label
                htmlFor={font.id}
                className={`flex items-center justify-center p-3 border-2 rounded cursor-pointer transition-colors ${font.class} ${
                  profile.theme.fontFamily === font.id ? "border-purple-500 bg-purple-50" : "border-gray-200"
                }`}
              >
                <span className="text-sm">{font.name}</span>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  )
}
