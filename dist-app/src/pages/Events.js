import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Calendar, MapPin } from "lucide-react";
const events = [
    { title: "Annual Sports Day", date: "March 15, 2026", location: "School Grounds", desc: "A grand celebration of athletic talent and sportsmanship featuring track events, team sports, and prize distribution.", color: "bg-primary" },
    { title: "Science Exhibition", date: "April 5, 2026", location: "Science Labs", desc: "Students present innovative science projects and experiments showcasing their scientific inquiry skills.", color: "bg-secondary" },
    { title: "Annual Day Celebration", date: "December 20, 2025", location: "School Auditorium", desc: "A spectacular evening of cultural performances, awards, and celebrations of student achievements.", color: "bg-primary" },
    { title: "Republic Day Celebration", date: "January 26, 2026", location: "School Campus", desc: "Patriotic celebrations with flag hoisting, parade, cultural programs, and speeches.", color: "bg-secondary" },
    { title: "Inter-School Debate", date: "February 15, 2026", location: "Conference Hall", desc: "Students from across the region compete in intellectual discourse on current topics.", color: "bg-primary" },
    { title: "Art & Craft Fair", date: "May 10, 2026", location: "School Gallery", desc: "Exhibition of student artwork including paintings, sculptures, and craft projects.", color: "bg-secondary" },
];
const Events = () => (_jsxs(Layout, { children: [_jsx(PageHero, { title: "Events", subtitle: "Upcoming and recent school events", breadcrumb: "Events" }), _jsx("section", { className: "section-padding", children: _jsx("div", { className: "container mx-auto max-w-4xl", children: _jsx("div", { className: "space-y-6", children: events.map((e, i) => (_jsx(AnimatedSection, { delay: i * 0.1, children: _jsxs("div", { className: "bg-card rounded-xl border border-border overflow-hidden card-hover flex flex-col md:flex-row", children: [_jsxs("div", { className: `${e.color} p-6 md:w-48 flex flex-col items-center justify-center text-center shrink-0`, children: [_jsx(Calendar, { className: "w-6 h-6 text-primary-foreground mb-2" }), _jsx("p", { className: "text-primary-foreground font-heading font-bold text-sm", children: e.date })] }), _jsxs("div", { className: "p-6 flex-1", children: [_jsx("h3", { className: "font-heading font-bold text-lg text-foreground mb-2", children: e.title }), _jsxs("p", { className: "flex items-center gap-1 text-xs text-muted-foreground mb-2", children: [_jsx(MapPin, { className: "w-3 h-3" }), " ", e.location] }), _jsx("p", { className: "text-sm text-muted-foreground", children: e.desc })] })] }) }, e.title))) }) }) })] }));
export default Events;
