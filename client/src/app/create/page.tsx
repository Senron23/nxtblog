"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileImage, Save } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import axios from "axios";

import "quill/dist/quill.bubble.css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/app/context/AuthContext";

// Create a wrapper component for Quill that properly handles initialization
const QuillEditor = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  // ... existing code ...
  const editorRef = useRef<HTMLDivElement>(null);
  const quillInstanceRef = useRef<any>(null);
  const isInitializedRef = useRef(false);

  useEffect(() => {
    // Only initialize Quill once
    if (editorRef.current && !isInitializedRef.current) {
      isInitializedRef.current = true;

      // Import Quill dynamically to avoid SSR issues
      import("quill").then((QuillModule) => {
        const Quill = QuillModule.default;

        const quillOptions = {
          modules: {
            toolbar: {
              container: [
                ["bold", "italic", "underline", "strike"],
                ["blockquote", "code-block"],
                [{ header: 1 }, { header: 2 }],
                [{ list: "ordered" }, { list: "bullet" }],
                [{ color: [] }, { background: [] }],
                ["link", "image", "video"],
                ["clean"],
              ],
            },
          },
          placeholder:
            "Write your blog post content here..........................................................................................................................",
          theme: "bubble", //
        };

        // Create a new Quill instance
        const quill = new Quill(editorRef.current, quillOptions);
        quillInstanceRef.current = quill;

        // Set initial content if any
        if (value) {
          quill.root.innerHTML = value;
        }

        // Listen for content changes
        quill.on("text-change", function () {
          onChange(quill.root.innerHTML);
        });
      });
    }

    return () => {
      // Clean up function - no need to explicitly destroy Quill
    };
  }, []); // Empty dependency array ensures this only runs once

  // Update content when value prop changes
  useEffect(() => {
    if (
      quillInstanceRef.current &&
      value !== quillInstanceRef.current.root.innerHTML
    ) {
      quillInstanceRef.current.root.innerHTML = value;
    }
  }, [value]);

  return <div ref={editorRef} className="min-h-[400px] p-4"></div>;
};

// Use dynamic import for the QuillEditor component
import dynamic from "next/dynamic";
import ProtectedRoute from "@/components/ProtectedRoute";
import Image from "next/image";
const DynamicQuillEditor = dynamic(() => Promise.resolve(QuillEditor), {
  ssr: false,
  loading: () => (
    <p className="min-h-[400px] flex items-center justify-center border rounded-md p-4">
      Loading editor...
    </p>
  ),
});

const Page = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [featuredImage, setFeaturedImage] = useState<File | null>(null);
  const [featuredImageUrl, setFeaturedImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { user } = useAuth();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFeaturedImage(file);
      setFeaturedImageUrl(URL.createObjectURL(file));
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSave = async () => {
    if (!title || !description || !category || !featuredImageUrl || !value) {
      toast.error("Please fill all the required fields");
      return;
    }

    setIsLoading(true);
    try {
      // In a real app, you would upload the image to a storage service
      // and get back a URL. For this example, we'll use the local URL
      const blogData = {
        title,
        description,
        category,
        content: value,
        image: featuredImageUrl,
        author: user?.name || "Anonymous",
        author_image: "/onibus.jpg" // Use a default avatar
      };

      const response = await axios.post("/api/v1/blog", blogData);
      
      if (response.data.success) {
        toast.success("Blog post created successfully!");
        router.push("/");
      } else {
        toast.error("Failed to create blog post");
      }
    } catch (error) {
      console.error("Error creating blog post:", error);
      toast.error("An error occurred while creating the blog post");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="title" className="text-lg font-medium">
                  Post Title
                </Label>
                <Input
                  id="title"
                  className="text-xl font-bold mt-2"
                  placeholder="Enter your post title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="description" className="text-lg font-medium">
                  Description
                </Label>
                <Input
                  id="description"
                  className="mt-2"
                  placeholder="Enter a brief description of your post..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="flex justify-between md:grid-cols-2 gap-4">
                <div className="">
                  <Label htmlFor="category" className="text-lg font-medium">
                    Category
                  </Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger id="category" className="mt-2">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Technology">Technology</SelectItem>
                      <SelectItem value="Lifestyle">Lifestyle</SelectItem>
                      <SelectItem value="Travel">Travel</SelectItem>
                      <SelectItem value="Food">Food</SelectItem>
                      <SelectItem value="Health">Health</SelectItem>
                      <SelectItem value="Business">Business</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="">
                  <Label
                    htmlFor="featuredImage"
                    className="text-lg font-medium"
                  >
                    Featured Image
                  </Label>
                  <div className="mt-2 flex items-center gap-4">
                    <Button
                      variant="outline"
                      onClick={triggerFileInput}
                      className="flex items-center gap-2"
                    >
                      <FileImage className="h-4 w-4" />
                      {featuredImage ? "Change Image" : "Upload Image"}
                    </Button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      id="featuredImage"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                    {featuredImageUrl && (
                      <div className="relative h-16 w-16 rounded-md overflow-hidden">
                        <Image
                          src={featuredImageUrl}
                          alt="Featured"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mb-4">
          <Label className="text-lg font-medium">Content</Label>
        </div>

        <div className="bg-card rounded-md border">
          <DynamicQuillEditor value={value} onChange={setValue} />
        </div>

        <div className="mt-6 flex justify-end">
          <Button 
            onClick={handleSave} 
            className="flex items-center gap-2"
            disabled={isLoading}
          >
            <Save className="h-4 w-4" />
            {isLoading ? "Saving..." : "Save Post"}
          </Button>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Page;