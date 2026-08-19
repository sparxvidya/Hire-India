import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Toast from "../components/Toast.jsx";
import Hero from "../sections/Hero.jsx";
import JobsSection from "../sections/JobsSection.jsx";
import PortalsSection from "../sections/PortalsSection.jsx";
import AdvisorSection from "../sections/AdvisorSection.jsx";
import { CSS } from "../styles/theme.js";

export default function Home({
  settings, jobs, toast,
  search, setSearch, activeCategory, setActiveCategory,
  heroSearch, setHeroSearch, heroResult, heroLoading, onHeroSearch,
  aiMessages, aiQuery, setAiQuery, aiLoading, onChatSend, chatEndRef,
  portalTab, setPortalTab,
  refs, onNav, onAdmin,
}) {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", background: "#07090F", minHeight: "100vh", color: "#E8EAF0" }}>
      <style>{CSS}</style>
      <Toast message={toast} />

      <Navbar siteName={settings.siteName} onNav={onNav} onAdmin={onAdmin} onAskAI={() => onNav("advisor")} />

      <Hero
        tagline={settings.tagline}
        jobCount={jobs.length}
        heroSearch={heroSearch}
        setHeroSearch={setHeroSearch}
        heroResult={heroResult}
        heroLoading={heroLoading}
        onSearch={onHeroSearch}
        onNav={onNav}
        sectionRef={null}
      />

      <JobsSection
        jobs={jobs}
        search={search}
        setSearch={setSearch}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        sectionRef={refs.jobsRef}
      />

      <PortalsSection portalTab={portalTab} setPortalTab={setPortalTab} sectionRef={refs.portalsRef} />

      <AdvisorSection
        messages={aiMessages}
        query={aiQuery}
        setQuery={setAiQuery}
        loading={aiLoading}
        onSend={onChatSend}
        chatEndRef={chatEndRef}
        sectionRef={refs.advisorRef}
      />

      <Footer siteName={settings.siteName} tagline={settings.tagline} onJobsClick={() => onNav("jobs")} />
    </div>
  );
}
