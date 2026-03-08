import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Calendar } from "lucide-react";
const months = [
    {
        month: "April 2026",
        events: [
            { date: "1", event: "New Session Begins" },
            { date: "5", event: "Orientation for New Students" },
            { date: "14", event: "Baisakhi Celebration" },
        ],
    },
    {
        month: "May 2026",
        events: [
            { date: "1", event: "Labour Day (Holiday)" },
            { date: "10", event: "Summer Camp Begins" },
            { date: "20", event: "Summer Vacation Starts" },
        ],
    },
    {
        month: "July 2026",
        events: [
            { date: "1", event: "School Reopens" },
            { date: "15", event: "Inter-House Competition" },
        ],
    },
    {
        month: "August 2026",
        events: [
            { date: "15", event: "Independence Day" },
            { date: "20", event: "Raksha Bandhan (Holiday)" },
            { date: "25", event: "Science Exhibition" },
        ],
    },
    {
        month: "October 2026",
        events: [
            { date: "2", event: "Gandhi Jayanti" },
            { date: "15-25", event: "Dussehra / Autumn Break" },
        ],
    },
    {
        month: "December 2026",
        events: [
            { date: "15", event: "Annual Day Celebration" },
            { date: "25", event: "Christmas Celebration" },
            { date: "26-31", event: "Winter Vacation" },
        ],
    },
];
const SchoolCalendar = () => (_jsxs(Layout, { children: [_jsx(PageHero, { title: "School Calendar", subtitle: "Academic year 2026-27 schedule", breadcrumb: "Calendar" }), _jsx("section", { className: "section-padding", children: _jsx("div", { className: "container mx-auto max-w-4xl", children: _jsx("div", { className: "grid sm:grid-cols-2 gap-6", children: months.map((m, i) => (_jsx(AnimatedSection, { delay: i * 0.08, children: _jsxs("div", { className: "bg-card rounded-xl border border-border overflow-hidden card-hover h-full", children: [_jsxs("div", { className: "bg-primary p-4 flex items-center gap-2", children: [_jsx(Calendar, { className: "w-5 h-5 text-secondary" }), _jsx("h3", { className: "font-heading font-bold text-primary-foreground", children: m.month })] }), _jsx("div", { className: "p-4 space-y-3", children: m.events.map((e) => (_jsxs("div", { className: "flex items-start gap-3", children: [_jsx("span", { className: "text-xs font-bold text-secondary bg-secondary/10 px-2 py-1 rounded shrink-0 min-w-[40px] text-center", children: e.date }), _jsx("span", { className: "text-sm text-foreground", children: e.event })] }, e.event))) })] }) }, m.month))) }) }) })] }));
export default SchoolCalendar;
