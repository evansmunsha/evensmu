import { validateRequest } from "@/auth";
import { Button } from "@/components/ui/button";
import { BadgeDollarSign } from 'lucide-react';
import Link from "next/link";

interface MenuBarProps {
  className?: string;
}

export default async function LeftMenuBar({ className }: MenuBarProps) {
  const { user } = await validateRequest();

  if (!user) return null;

  

  return (
    <div className={className}>
      <Button
        variant="secondary"
        className="flex items-center justify-start gap-3 bg-white"
        title="Affiliates"
        asChild
      >
        <Link className="px-0" href="https://olspsystem.com/join/358198" target="_blank" rel="noopener noreferrer">
            <BadgeDollarSign />
          <span className="hidden lg:inline">Affiliates</span>
        </Link>
      </Button>
    </div>
  );
}
