import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import schoolBuilding from "@/assets/school-building.png";
import { Building2, FlaskConical, BookOpen, Monitor, Dumbbell, Music } from "lucide-react";
const facilities = [
    { icon: Building2, title: "Smart Classrooms", desc: "Air-conditioned classrooms equipped with interactive smart boards and multimedia projectors for engaging learning experiences." },
    { icon: FlaskConical, title: "Science Laboratories", desc: "Well-equipped Physics, Chemistry, and Biology labs for hands-on experimentation and practical learning." },
    { icon: Monitor, title: "Computer Lab", desc: "Modern computer lab with high-speed internet and latest hardware for digital literacy education." },
    { icon: BookOpen, title: "Library", desc: "Extensive library with thousands of books, journals, and digital resources for research and reading." },
    { icon: Dumbbell, title: "Sports Complex", desc: "Multi-sport complex with cricket ground, basketball court, football field, and indoor games facility." },
    { icon: Music, title: "Auditorium", desc: "State-of-the-art auditorium for cultural events, seminars, and large-scale school functions." },
];
const Infrastructure = () => (_jsxs(Layout, { children: [_jsx(PageHero, { title: "Infrastructure", subtitle: "World-class facilities for holistic learning", breadcrumb: "Infrastructure" }), _jsx("section", { className: "section-padding", children: _jsxs("div", { className: "container mx-auto", children: [_jsx(AnimatedSection, { children: _jsx("div", { className: "rounded-2xl overflow-hidden mb-16 shadow-xl", children: _jsx("img", { src: schoolBuilding, alt: "School Building", className: "w-full h-64 md:h-96 object-cover" }) }) }), _jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: facilities.map((f, i) => (_jsx(AnimatedSection, { delay: i * 0.08, children: _jsxs("div", { className: "bg-card rounded-xl border border-border p-6 card-hover h-full", children: [_jsx("div", { className: "w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4", children: _jsx(f.icon, { className: "w-6 h-6 text-primary" }) }), _jsx("h3", { className: "font-heading font-semibold text-lg mb-2", children: f.title }), _jsx("p", { className: "text-sm text-muted-foreground", children: f.desc })] }) }, f.title))) })] }) })] }));
export default Infrastructure;
