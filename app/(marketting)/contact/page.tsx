import { Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/app/components/ui/Button";
import { Input } from "@/app/components/ui/Input";
import { Label } from "@/app/components/ui/Label";
import { Card, CardContent } from "@/app/components/ui/Card";

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <div className="relative flex h-64 w-full items-center justify-center bg-gradient-brand md:h-80">
        <div className="relative z-10 px-4 text-center text-white">
          <h1 className="text-3xl font-bold md:text-4xl">Contact us</h1>
          <p className="mx-auto mt-2 max-w-xl text-white/80">
            Questions about features, pricing, or partnerships? We&apos;re here
            to help.
          </p>
        </div>
      </div>

      <section className="py-16 md:py-20">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 px-4 md:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Get in touch
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our team typically responds within one business day. Reach out for
              demos, support, or enterprise inquiries.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </span>
                <span className="font-medium text-foreground">
                  0800 555 44 33
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="font-medium text-foreground">
                  support@meevent.com
                </span>
              </div>
            </div>
          </div>

          <Card className="shadow-brand">
            <CardContent className="space-y-5 p-8">
              <div className="mb-2 flex items-center gap-2 text-primary">
                <MessageSquare className="h-5 w-5" />
                <span className="font-medium">Send a message</span>
              </div>
              <form className="space-y-5">
                <div>
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="+1 234 567 8900" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us more..."
                    className="w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
