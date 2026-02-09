import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Discover products you’ll love
          </h1>
          <p className="text-muted-foreground max-w-prose">
            A modern ecommerce experience built with Next.js 15, React 19 and shadcn. Fast, accessible, and beautiful.
          </p>
          <div className="flex gap-3">
            <Button asChild>
              <Link href="/shop">Shop now</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="#featured">View featured</Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full rounded-xl border bg-muted">
          <Image src="/apple.jpg" alt="Hero" fill className="object-contain p-10 dark:invert" />
        </div>
      </div>
    </section>
  );
}


