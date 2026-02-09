import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
        <div className="space-y-2">
          <div className="font-semibold">ShopX</div>
          <p className="text-muted-foreground">Modern ecommerce built with Next.js and shadcn.</p>
        </div>
        <div>
          <div className="font-medium mb-2">Company</div>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link href="/about" className="hover:text-foreground">About</Link></li>
            <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
            <li><Link href="/careers" className="hover:text-foreground">Careers</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-2">Help</div>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link href="/support" className="hover:text-foreground">Support</Link></li>
            <li><Link href="/shipping" className="hover:text-foreground">Shipping</Link></li>
            <li><Link href="/returns" className="hover:text-foreground">Returns</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} ShopX. All rights reserved.</div>
    </footer>
  );
}


