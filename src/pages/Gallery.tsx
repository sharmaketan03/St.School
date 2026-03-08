import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import schoolBuilding from "@/assets/school-building.png";
import { useState } from "react";

const categories = ["All", "Campus", "Events", "Sports", "Classroom"];

const galleryItems = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  category: categories[1 + (i % 4)],
  title: `Gallery Image ${i + 1}`,
}));

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? galleryItems : galleryItems.filter((g) => g.category === activeFilter);

  return (
    <Layout>
      <PageHero title="Photo Gallery" subtitle="Glimpses of life at St. Joseph's" breadcrumb="Gallery" />
      <section className="section-padding">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveFilter(c)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeFilter === c ? "bg-primary text-primary-foreground shadow-lg" : "bg-muted text-muted-foreground hover:bg-primary/10"}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <AnimatedSection key={item.id} delay={i * 0.05}>
                <div className="rounded-xl overflow-hidden card-hover border border-border group">
                  <div className="relative aspect-video overflow-hidden">
                    <img src={schoolBuilding} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-300 flex items-center justify-center">
                      <span className="text-primary-foreground font-heading font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.category}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;