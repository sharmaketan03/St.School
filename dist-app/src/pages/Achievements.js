import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Trophy, Medal, Star, Award } from "lucide-react";
const achievements = [
    { icon: Trophy, title: "District Science Olympiad Winners", year: "2025", desc: "First place in the district-level Science Olympiad for three consecutive years." },
    { icon: Medal, title: "State Level Cricket Champions", year: "2025", desc: "School cricket team won the state-level inter-school cricket tournament." },
    { icon: Star, title: "100% Board Exam Pass Rate", year: "2024-25", desc: "All students of Class X and XII passed the CBSE Board Examinations." },
    { icon: Award, title: "Best School Award", year: "2024", desc: "Recognized as the Best School in Dholpur district for overall excellence." },
    { icon: Trophy, title: "National Debate Competition", year: "2024", desc: "Students represented at the national level debate competition and secured top positions." },
    { icon: Medal, title: "Inter-School Art Competition", year: "2025", desc: "Multiple awards in the regional inter-school art and painting competition." },
];
const Achievements = () => (_jsxs(Layout, { children: [_jsx(PageHero, { title: "Achievements", subtitle: "Celebrating excellence across all domains", breadcrumb: "Achievements" }), _jsx("section", { className: "section-padding", children: _jsx("div", { className: "container mx-auto", children: _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: achievements.map((a, i) => (_jsx(AnimatedSection, { delay: i * 0.08, children: _jsxs("div", { className: "bg-card rounded-xl border border-border p-6 card-hover h-full", children: [_jsxs("div", { className: "flex items-center gap-3 mb-4", children: [_jsx("div", { className: "w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center", children: _jsx(a.icon, { className: "w-6 h-6 text-secondary" }) }), _jsx("span", { className: "text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full", children: a.year })] }), _jsx("h3", { className: "font-heading font-semibold text-foreground mb-2", children: a.title }), _jsx("p", { className: "text-sm text-muted-foreground", children: a.desc })] }) }, a.title))) }) }) })] }));
export default Achievements;
