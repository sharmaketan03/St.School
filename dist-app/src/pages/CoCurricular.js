import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Music, Palette, Drama, Globe, BookOpen, Camera, Mic, PenTool } from "lucide-react";
const activities = [
    { icon: Music, title: "Music & Dance", desc: "Classical and contemporary music training along with various dance forms." },
    { icon: Palette, title: "Art & Painting", desc: "Developing creativity through drawing, painting, and visual arts." },
    { icon: Drama, title: "Drama & Theatre", desc: "Building confidence through stage performances and theatrical arts." },
    { icon: Globe, title: "Model United Nations", desc: "Developing leadership and diplomatic skills through MUN simulations." },
    { icon: BookOpen, title: "Literary Club", desc: "Creative writing, poetry, debates, and public speaking activities." },
    { icon: Camera, title: "Photography Club", desc: "Learning photography techniques and visual storytelling." },
    { icon: Mic, title: "Public Speaking", desc: "Elocution, extempore, and oratory skills development." },
    { icon: PenTool, title: "Robotics Club", desc: "Hands-on experience with robotics and coding projects." },
];
const CoCurricular = () => (_jsxs(Layout, { children: [_jsx(PageHero, { title: "Co-Curricular Activities", subtitle: "Beyond the classroom \u2013 nurturing diverse talents", breadcrumb: "Co-Curricular" }), _jsx("section", { className: "section-padding", children: _jsxs("div", { className: "container mx-auto", children: [_jsx(AnimatedSection, { children: _jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "section-title", children: "Explore Your Passion" }), _jsx("div", { className: "gold-underline" }), _jsx("p", { className: "section-subtitle", children: "We offer a wide range of co-curricular activities to help students discover and develop their unique talents." })] }) }), _jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: activities.map((a, i) => (_jsx(AnimatedSection, { delay: i * 0.06, children: _jsxs("div", { className: "bg-card rounded-xl border border-border p-6 text-center card-hover h-full", children: [_jsx("div", { className: "w-14 h-14 bg-secondary/15 rounded-2xl flex items-center justify-center mx-auto mb-4", children: _jsx(a.icon, { className: "w-7 h-7 text-secondary" }) }), _jsx("h3", { className: "font-heading font-semibold mb-2", children: a.title }), _jsx("p", { className: "text-sm text-muted-foreground", children: a.desc })] }) }, a.title))) })] }) })] }));
export default CoCurricular;
