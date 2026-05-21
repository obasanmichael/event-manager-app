import { ReactNode } from "react";
import { Logo } from "@/app/components/brand/Logo";
import { Card, CardContent } from "@/app/components/ui/Card";

type AuthCardProps = {
  title: string;
  description: string;
  children: ReactNode;
  footer?: ReactNode;
};

export function AuthCard({ title, description, children, footer }: AuthCardProps) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-16">
      <div className="mb-8">
        <Logo href="/" />
      </div>
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground">{title}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        </div>
        <Card className="shadow-brand">
          <CardContent className="p-6 sm:p-8">{children}</CardContent>
        </Card>
        {footer && <div className="text-center text-sm">{footer}</div>}
      </div>
    </div>
  );
}
