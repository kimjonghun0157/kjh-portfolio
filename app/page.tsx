import Header from "@/components/Header";
import Profile from "@/components/Profile";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[860px] px-6 pb-24 pt-8 md:px-8">
        {/* 이력서 섹션 */}
        <section id="resume" className="mb-20">
          <h2 className="mb-12 text-sm font-medium uppercase tracking-[0.2em] text-ink-muted">
            이력서
          </h2>
          <Profile />
          <Experience />
          <Education />
          <Skills />
        </section>

        {/* 포트폴리오 섹션 */}
        <section id="portfolio" className="page-break">
          <h2 className="mb-12 text-sm font-medium uppercase tracking-[0.2em] text-ink-muted">
            포트폴리오
          </h2>
          <Projects />
        </section>
      </main>
      <Footer />
    </>
  );
}
