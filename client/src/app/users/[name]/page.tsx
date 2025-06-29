import EditUser from "@/components/EditUser";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

import React from "react";

const SingleUserPage = async ({
  params,
}: {
  params: { name: string; email: string; author_image: string };
}) => {
  const { name } = await params;
  const { email } = await params;
  const { author_image } = await params;
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* container */}
      <div className="mt-10 flex flex-col xl:flex-row gap-8">
        {/* left */}
        <div className="w-full xl:w-1/3 space-y-6">
          <div className="bg-primary-foreground p-8 rounded-lg">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold">User information</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button>Edit User</Button>
                </SheetTrigger>
                <EditUser />
              </Sheet>
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground">
                  Profile Completion
                </p>
                <Progress className="" value={70} />
              </div>
              <div className="flex items-center gap-2">
                <span>Avatar:</span>
                <Image
                  src={author_image}
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <div className="flex items-center gap-2">
                <span>Username:</span>
                <span>{name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Email:</span>
                <span>{email}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Location:</span>
                <span>Earth</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUserPage;
