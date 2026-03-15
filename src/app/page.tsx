// app/page.tsx
import Hero from "./hero";
import AboutEvent from "./about-event"; 
import Footer from "@/components/footer";

export default function Page() {
  return (
    <>
      <Hero />
      <AboutEvent />
    </>
  );
}