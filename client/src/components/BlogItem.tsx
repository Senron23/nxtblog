import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface BlogItemProps {
  title: string;
  description: string;
  category: string;
  author: string;
  image: string;
  id: string;
  date: string;
}

const BlogItem: React.FC<BlogItemProps> = ({
  title,
  description,
  category,
  author,
  image,
  id,
  date,
}) => {
  // Format the date
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Card className="overflow-hidden flex flex-col cursor-pointer h-full hover:translate-x-[5px_-5px] hover:shadow-[-5px_5px_0px_#FFD54F] transition-transform-shadow duration-250 ">
      <Link href={`/blogs/${id}`}>
        <div className="relative mx-4 h-48">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        <CardHeader>
          <div className="flex justify-between items-start mt-3">
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            <Button variant="outline" asChild >
              <Badge variant="outline" className="ml-2  ">
                {category}
              </Badge>
            </Button>
          </div>
          <CardDescription className="text-sm mt-2 text-muted-foreground">
            By {author} • {formattedDate}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-grow mt-2">
          <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
        </CardContent>
      </Link>
    </Card>
  );
};

export default BlogItem;