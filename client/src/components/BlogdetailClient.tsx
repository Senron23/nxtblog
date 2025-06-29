"use client";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface PageParams {
  id: string;
}

interface BlogData {
  _id: string;
  title: string;
  description: string;
  image: string;
  author: string;
  author_image?: string;
  category: string;
  date: string;
  content?: string;
}

export default function BlogDetailClient({ id }: { id: string }) {
  const [data, setData] = useState<BlogData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/v1/blog/${id}`);
      const blogData = response.data.data || response.data;
      setData(blogData);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center min-h-screen">Error loading blog: {error.message}</div>;
  }

  if (!data) {
    return <div className="flex justify-center items-center min-h-screen">Blog not found</div>;
  }

  return(
    <>
      <div className="text-center mb-45 my-24">
        <div className="w-full mb-5">
        <Button className="rounded-4xl">{data.category}</Button>

        </div>
        <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto pointer-events-none">
          {data.title}
        </h1>
        <Image
          src={data.author_image}
          alt={data.author}
          width={50}
          height={50}
          className="mx-auto mt-9 border rounded-full"
        />
        <p className="text-lg text-foreground mt-4 cursor-pointer ">
          {data.author}
        </p>
      </div>
      <div className="bg-primary-foreground rounded-lg py-5 px-5 md:px-12 lg:px-28">
        <div className=" mx-7 max-w-[800px]  md:mx-auto mt-[-150px] mb-10">
          <Image
            src={data.image}
            alt=""
            width={1280}
            height={720}
            className="rounded-lg border-4 border-background"
          />
          <h1 className="my-8 text-[26px] font-semibold">Introduction</h1>
          <p className="text-[14px] md:[18px] ">{data.description}</p>

          {data.content?(
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
          ):(
            <>
            <h3 className="my-5 text-[18px] font-semibold">
              Step 1: dadahdiabdabdabdiabdibad
            </h3>
            <p className="my-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.
            </p>
            <h3 className="my-5 text-[18px] font-semibold">
              Step 1: dadahdiabdabdabdiabdibad
            </h3>
            <p className="my-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.
            </p>
            <h3 className="my-5 text-[18px] font-semibold">
              Step 1: dadahdiabdabdabdiabdibad
            </h3>
            <p className="my-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.
            </p>
            <h3 className="my-5 text-[18px] font-semibold">
              Step 1: dadahdiabdabdabdiabdibad
            </h3>
            <p className="my-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.
            </p>
                </>
              )}
            <div className="my-24">
              <p className="font-semibold">Share</p>
              <div className="flex gap-2 my-2">
                <Image
                  src="/insta.svg"
                  alt=""
                  width={30}
                  height={30}
                  className="bg-foreground cursor-pointer rounded-2xl shadow-[-2px_2px_2px_#FFD54F] p-1"
                  />
                <Image
                  src="/facebook.svg"
                  alt=""
                  width={30}
                  height={30}
                  className="bg-foreground cursor-pointer shadow-[-2px_2px_2px_#FFD54F] rounded-2xl p-1"
                  />
                <Image
                  src="/x.svg"
                  alt=""
                  width={30}
                  height={30}
                  className="bg-foreground cursor-pointer shadow-[-2px_2px_2px_#FFD54F] rounded-2xl p-1"
                  />
              </div>
            </div>
            {/* Comments Section */}
            <div className="my-24">
              <h3 className="text-2xl font-semibold mb-6">Comments</h3>
              
              {/* Comment Form */}
              <div className="bg-background rounded-lg p-6 mb-8 border">
                <h4 className="text-lg font-medium mb-4">Leave a Comment</h4>
                <div className="space-y-4">
                  <textarea 
                    placeholder="Write your comment here..." 
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  ></textarea>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Post Comment
                  </Button>
                </div>
              </div>

              {/* Existing Comments */}
              <div className="space-y-6">
                {/* Comment 1 */}
                <div className="bg-background rounded-lg p-6 border">
                  <div className="flex items-start space-x-4">
                    <Image
                      src="/u1f.png"
                      alt="Sarah Johnson"
                      width={50}
                      height={50}
                      className="rounded-full border-2 border-primary/20"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h5 className="font-semibold text-foreground">Sarah Johnson</h5>
                        <span className="text-sm text-muted-foreground">2 hours ago</span>
                      </div>
                      <p className="text-foreground leading-relaxed">
                        This is such an insightful article! I&apos;ve been struggling with this topic for weeks and your explanation really cleared things up for me. Thank you for sharing your expertise!
                      </p>
                      <div className="flex items-center space-x-4 mt-3">
                        <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                          👍 12 Likes
                        </button>
                        <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comment 2 */}
                <div className="bg-background rounded-lg p-6 border">
                  <div className="flex items-start space-x-4">
                    <Image
                      src="/u2m.png"
                      alt="Michael Chen"
                      width={50}
                      height={50}
                      className="rounded-full border-2 border-primary/20"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h5 className="font-semibold text-foreground">Michael Chen</h5>
                        <span className="text-sm text-muted-foreground">5 hours ago</span>
                      </div>
                      <p className="text-foreground leading-relaxed">
                        Great post! I&apos;d love to see a follow-up article diving deeper into the advanced techniques you mentioned. Keep up the excellent work! 🚀
                      </p>
                      <div className="flex items-center space-x-4 mt-3">
                        <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                          👍 8 Likes
                        </button>
                        <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comment 3 with Reply */}
                <div className="bg-background rounded-lg p-6 border">
                  <div className="flex items-start space-x-4">
                    <Image
                      src="/u7f.jpg"
                      alt="Emma Rodriguez"
                      width={50}
                      height={50}
                      className="rounded-full border-2 border-primary/20"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h5 className="font-semibold text-foreground">Emma Rodriguez</h5>
                        <span className="text-sm text-muted-foreground">1 day ago</span>
                      </div>
                      <p className="text-foreground leading-relaxed">
                        I implemented this approach in my recent project and it worked perfectly! One question though - how would you handle edge cases when dealing with larger datasets?
                      </p>
                      <div className="flex items-center space-x-4 mt-3">
                        <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                          👍 15 Likes
                        </button>
                        <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                          Reply
                        </button>
                      </div>
                      
                      {/* Reply */}
                      <div className="mt-4 ml-8 bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                        <div className="flex items-start space-x-3">
                          <Image
                            src="/u3m.jpg"
                            alt="Author"
                            width={40}
                            height={40}
                            className="rounded-full border-2 border-primary/20"
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h6 className="font-medium text-foreground pointer-events-none">Author</h6>
                              <span className="text-xs bg-primary text-primary-foreground px-2 pointer-events-none py-1 rounded-full">Author</span>
                              <span className="text-sm text-muted-foreground">18 hours ago</span>
                            </div>
                            <p className="text-sm text-foreground leading-relaxed">
                              Great question, Emma! For larger datasets, I&apos;d recommend implementing pagination and lazy loading. I'll cover this in detail in my next article. Thanks for the feedback!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comment 4 */}
                <div className="bg-background rounded-lg p-6 border">
                  <div className="flex items-start space-x-4">
                    <Image
                      src="/u5m.jpg"
                      alt="David Kim"
                      width={50}
                      height={50}
                      className="rounded-full border-2 border-primary/20"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h5 className="font-semibold text-foreground">David Kim</h5>
                        <span className="text-sm text-muted-foreground">2 days ago</span>
                      </div>
                      <p className="text-foreground leading-relaxed">
                        Bookmarked for future reference! This is exactly what I needed for my current project. Your writing style makes complex topics so easy to understand. 📚
                      </p>
                      <div className="flex items-center space-x-4 mt-3">
                        <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                          👍 6 Likes
                        </button>
                        <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Load More Comments Button */}
              <div className="text-center mt-8">
                <Button variant="outline" className="px-8">
                  Load More Comments
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </>
  )
};


