import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Trophy, Target, Users, Timer } from "lucide-react";
const sports = [
    { name: "Cricket", desc: "Professionally maintained cricket ground with coaching for all age groups." },
    { name: "Football", desc: "Full-size football field for training and inter-school competitions." },
    { name: "Basketball", desc: "Standard basketball courts for regular practice and tournaments." },
    { name: "Athletics", desc: "400m track for sprints, relay races, and long-distance running." },
    { name: "Badminton", desc: "Indoor badminton courts for year-round training." },
    { name: "Table Tennis", desc: "Multiple tables available for students of all classes." },
    { name: "Yoga", desc: "Regular yoga sessions for mental and physical wellness." },
    { name: "Kabaddi", desc: "Traditional Indian sport promoted for fitness and teamwork." },
];
const Sports = () => (_jsxs(Layout, { children: [_jsx(PageHero, { title: "Sports", subtitle: "Building champions on and off the field", breadcrumb: "Sports" }), _jsx("section", { className: "section-padding", children: _jsxs("div", { className: "container mx-auto", children: [_jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16", children: [
                            { icon: Trophy, label: "20+ Trophies", sub: "Won last year" },
                            { icon: Target, label: "8 Sports", sub: "Offered" },
                            { icon: Users, label: "5 Coaches", sub: "Professional" },
                            { icon: Timer, label: "Daily", sub: "Training sessions" },
                        ].map((s, i) => (_jsx(AnimatedSection, { delay: i * 0.1, children: _jsxs("div", { className: "bg-primary rounded-xl p-6 text-center text-primary-foreground", children: [_jsx(s.icon, { className: "w-8 h-8 mx-auto mb-2 text-secondary" }), _jsx("p", { className: "font-heading font-bold text-lg", children: s.label }), _jsx("p", { className: "text-xs text-primary-foreground/70", children: s.sub })] }) }, s.label))) }), _jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: sports.map((s, i) => (_jsx(AnimatedSection, { delay: i * 0.06, children: _jsxs("div", { className: "bg-card rounded-xl border border-border p-5 card-hover", children: [_jsx("h3", { className: "font-heading font-semibold text-foreground mb-2", children: s.name }), _jsx("p", { className: "text-sm text-muted-foreground", children: s.desc })] }) }, s.name))) })] }) })] }));
export default Sports;
