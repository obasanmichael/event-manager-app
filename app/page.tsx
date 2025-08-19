
import { FeaturedEvents } from "./components/FeaturedEvents";
import { Hero } from "./components/Hero";
import { SearchBar } from "./components/SearchBar";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SearchBar />
      <FeaturedEvents />
    </main>
  );
}
