"use client";

import { CalendarIcon, MapPinIcon, Sparkles } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useProfileStore from "@/app/stores/profile/store";
import { Button } from "@/app/components/ui/Button";

const Hero = () => {
  const router = useRouter();
  const { profile } = useProfileStore();

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-brand">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-28 text-center md:px-6">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm">
          <Sparkles className="h-4 w-4" />
          Premium event management platform
        </div>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
          Create unforgettable experiences with effortless event management
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
          Plan, promote, and sell tickets — all in one place. Built for
          organizers who care about every detail.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            onClick={() => router.push(profile ? "/app" : "/login")}
            className="bg-white text-primary shadow-xl hover:bg-white/95"
          >
            <CalendarIcon className="h-5 w-5" />
            Host an event
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => router.push("/events")}
            className="border-white/40 bg-transparent text-white hover:bg-white/10"
          >
            <MapPinIcon className="h-5 w-5" />
            Explore events
          </Button>
        </div>

        <div className="mt-14 flex flex-col items-center gap-6 sm:flex-row sm:gap-10">
          <div className="flex items-center">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-9 w-9 overflow-hidden rounded-full border-2 border-white/30"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80"
                    alt=""
                    width={36}
                    height={36}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
            <span className="ml-3 text-sm text-white/80">
              10,000+ organizers worldwide
            </span>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <div className="flex text-amber-300">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <span className="text-sm text-white/80">
              Trusted by event professionals
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
