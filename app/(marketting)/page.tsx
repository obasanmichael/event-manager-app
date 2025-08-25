import { FeaturedEvents } from "../components/landingpage/FeaturedEvents";
import { Hero } from "../components/landingpage/Hero";
import { SearchBar } from "../components/landingpage/SearchBar";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SearchBar />
      <FeaturedEvents />
    </main>
  );
}
