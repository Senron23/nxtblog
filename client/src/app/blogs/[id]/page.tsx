import BlogDetailClient from "@/components/BlogdetailClient";


export default function Page({ params }: { params: { id: string} }) {
  return <BlogDetailClient id={params.id} />;
}