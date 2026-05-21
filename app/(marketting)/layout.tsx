import { MarketingShell } from "@/app/components/layouts/MarketingShell";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MarketingShell>{children}</MarketingShell>;
}
