import { FeaturedEvents } from "../components/marketing/FeaturedEvents";
import { Hero } from "../components/marketing/Hero";
import { SearchBar } from "../components/marketing/SearchBar";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SearchBar />
      <FeaturedEvents />
    </main>
  );
}
