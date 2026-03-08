import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs(Layout, { children: [_jsx(PageHero, { title: "Photo Gallery", subtitle: "Glimpses of life at St. Joseph's", breadcrumb: "Gallery" }), _jsx("section", { className: "section-padding", children: _jsxs("div", { className: "container mx-auto", children: [_jsx(AnimatedSection, { children: _jsx("div", { className: "flex flex-wrap justify-center gap-3 mb-10", children: categories.map((c) => (_jsx("button", { onClick: () => setActiveFilter(c), className: `px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeFilter === c ? "bg-primary text-primary-foreground shadow-lg" : "bg-muted text-muted-foreground hover:bg-primary/10"}`, children: c }, c))) }) }), _jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: filtered.map((item, i) => (_jsx(AnimatedSection, { delay: i * 0.05, children: _jsx("div", { className: "rounded-xl overflow-hidden card-hover border border-border group", children: _jsxs("div", { className: "relative aspect-video overflow-hidden", children: [_jsx("img", { src: schoolBuilding, alt: item.title, className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" }), _jsx("div", { className: "absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-300 flex items-center justify-center", children: _jsx("span", { className: "text-primary-foreground font-heading font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: item.category }) })] }) }) }, item.id))) })] }) })] }));
};
export default Gallery;
