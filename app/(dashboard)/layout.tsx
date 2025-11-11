"use client";

import { ReactNode, useEffect } from "react";
import { useSession } from "@/lib/auth-client";
import { usePathname, useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { data: session, isLoading } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isLoading && !session) {
      // Save intended path and redirect to signin
      const next = pathname ? `?next=${encodeURIComponent(pathname)}` : "";
      router.replace(`/signin${next}`);
    }
  }, [session, isLoading, router, pathname]);

  if (isLoading) {
    return null;
  }

  if (!session) {
    return null;
  }

  return <>{children}</>;
}


