import Header from "@/components/Header";
import Profile from "@/components/Profile";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top,rgba(201,111,74,0.14),transparent_58%)]" />
      <div className="pointer-events-none absolute right-[-10rem] top-[26rem] -z-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(165,176,157,0.22),transparent_64%)] blur-2xl" />
      <Header />
      <main className="mx-auto max-w-[960px] px-6 pb-24 pt-10 md:px-8 md:pt-14">
        <section id="resume" className="mb-24">
          <div className="glass-panel print-shell print-resume-shell rounded-[2rem] px-6 py-8 md:px-9 md:py-10">
            <Profile />
            <Experience />
            <Education />
            <Skills />
          </div>
        </section>

        <section id="portfolio" className="page-break">
          <div className="soft-card print-shell print-project-shell rounded-[2rem] px-6 py-8 md:px-9 md:py-10">
            <Projects />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
