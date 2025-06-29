import BlogDetailClient from "@/components/BlogdetailClient";

interface PageParams {
  id: string;
}

export default function Page({ params }: { params: { id: string} }) {
  return <BlogDetailClient id={params.id} />;
}