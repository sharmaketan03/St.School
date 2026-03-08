import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Heart, Users, Sparkles, BookOpen, Music, Trophy, Palette, Globe } from "lucide-react";
const aspects = [
    { icon: BookOpen, title: "Academic Excellence", desc: "Rigorous academics with personalized attention to help every student reach their potential." },
    { icon: Users, title: "House System", desc: "Students are divided into houses that foster camaraderie, healthy competition, and leadership." },
    { icon: Music, title: "Cultural Programs", desc: "Regular cultural events, festivals, and celebrations that embrace diversity." },
    { icon: Trophy, title: "Competitions", desc: "Inter-house and inter-school competitions in academics, sports, and creative arts." },
    { icon: Heart, title: "Community Service", desc: "Students participate in social outreach programs and community development activities." },
    { icon: Palette, title: "Creative Expression", desc: "Art exhibitions, craft workshops, and creative writing opportunities throughout the year." },
    { icon: Globe, title: "Global Exposure", desc: "Awareness programs, model UN, and exchanges that develop a global perspective." },
    { icon: Sparkles, title: "Student Council", desc: "Democratically elected student leaders who organize events and represent peer interests." },
];
const StudentLife = () => (_jsxs(Layout, { children: [_jsx(PageHero, { title: "Student Life", subtitle: "A vibrant community of learners and leaders", breadcrumb: "Student Life" }), _jsx("section", { className: "section-padding", children: _jsxs("div", { className: "container mx-auto", children: [_jsx(AnimatedSection, { children: _jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "section-title", children: "Life at St. Joseph's" }), _jsx("div", { className: "gold-underline" }), _jsx("p", { className: "section-subtitle", children: "Every day brings new opportunities for growth, discovery, and joy at our vibrant school community." })] }) }), _jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: aspects.map((a, i) => (_jsx(AnimatedSection, { delay: i * 0.06, children: _jsxs("div", { className: "bg-card rounded-xl border border-border p-6 card-hover h-full text-center", children: [_jsx("div", { className: "w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4", children: _jsx(a.icon, { className: "w-7 h-7 text-primary" }) }), _jsx("h3", { className: "font-heading font-semibold mb-2", children: a.title }), _jsx("p", { className: "text-sm text-muted-foreground", children: a.desc })] }) }, a.title))) })] }) })] }));
export default StudentLife;
