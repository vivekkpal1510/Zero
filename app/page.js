import Link from "next/link";
import {
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function Home() {
  return (
       <div className="min-h-screen">
        <section className="container mx-auto py-20 text-center">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <span className="flex items-center">
              <Image
                src={"/logo.png"}
                alt="Zero Logo"
                width={500}
                height={200}
                className="h-14 sm:h-24 w-auto object-contain"
              />
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold gradient-title pb-2">
              delays. Maximum results.
            </h1>
          </div>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Manage tasks, track progress, and deliver on time
        </p>
        <p className="text-xl mb-12 max-w-2xl mx-auto"></p>
        <Link href="/onboarding">
          <Button size="lg" className="mr-4">
            Get Started <ChevronRight size={18} className="ml-1" />
          </Button>
        </Link>
        {/* <Link href="#features">
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </Link> */}
      </section>
    </div>
  );
}
