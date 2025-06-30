import BlogDetailClient from "@/components/BlogdetailClient";


export default function Page( props : any) {
  return <BlogDetailClient id={props.params.id} />;
}