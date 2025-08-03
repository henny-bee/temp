"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Trash2, GripVertical, ExternalLink } from "lucide-react"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"

interface LinkManagerProps {
  profile: any
  setProfile: (profile: any) => void
}

export default function LinkManager({ profile, setProfile }: LinkManagerProps) {
  const [newLink, setNewLink] = useState({ title: "", url: "", icon: "" })

  const addLink = () => {
    if (newLink.title && newLink.url) {
      const link = {
        id: Date.now().toString(),
        ...newLink,
      }
      setProfile({
        ...profile,
        links: [...profile.links, link],
      })
      setNewLink({ title: "", url: "", icon: "" })
    }
  }

  const removeLink = (id: string) => {
    setProfile({
      ...profile,
      links: profile.links.filter((link: any) => link.id !== id),
    })
  }

  const handleDragEnd = (result: any) => {
    if (!result.destination) return

    const items = Array.from(profile.links)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    setProfile({ ...profile, links: items })
  }

  return (
    <div className="space-y-6">
      {/* Add New Link */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Add New Link</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="link-title">Title</Label>
            <Input
              id="link-title"
              value={newLink.title}
              onChange={(e) => setNewLink({ ...newLink, title: e.target.value })}
              placeholder="My Website"
            />
          </div>
          <div>
            <Label htmlFor="link-url">URL</Label>
            <Input
              id="link-url"
              value={newLink.url}
              onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
              placeholder="https://example.com"
            />
          </div>
          <div>
            <Label htmlFor="link-icon">Icon (emoji or text)</Label>
            <Input
              id="link-icon"
              value={newLink.icon}
              onChange={(e) => setNewLink({ ...newLink, icon: e.target.value })}
              placeholder="🌐"
              maxLength={2}
            />
          </div>
          <Button onClick={addLink} className="w-full">
            <Plus className="h-4 w-4 mr-2" />
            Add Link
          </Button>
        </CardContent>
      </Card>

      {/* Existing Links */}
      {profile.links.length > 0 && (
        <div>
          <h3 className="font-semibold mb-4">Your Links ({profile.links.length})</h3>
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="links">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-2">
                  {profile.links.map((link: any, index: number) => (
                    <Draggable key={link.id} draggableId={link.id} index={index}>
                      {(provided) => (
                        <Card
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className="border-l-4 border-l-purple-500"
                        >
                          <CardContent className="p-4">
                            <div className="flex items-center gap-3">
                              <div {...provided.dragHandleProps}>
                                <GripVertical className="h-4 w-4 text-gray-400" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  {link.icon && <span>{link.icon}</span>}
                                  <span className="font-medium">{link.title}</span>
                                </div>
                                <div className="flex items-center gap-1 text-sm text-gray-500">
                                  <ExternalLink className="h-3 w-3" />
                                  {link.url}
                                </div>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeLink(link.id)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      )}
    </div>
  )
}
