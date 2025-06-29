'use client'
import CardList from "@/components/BlogList";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="">
      <div className="bg-primary-foreground min-h-[700px] p-4  rounded-lg md:col-span-2 lg:col-span-2">
        <CardList/>
      </div>
      <Footer/>
    </div>
  );
}
