import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Bus, Shield, MapPin, Clock } from "lucide-react";
const routes = [
    { area: "Dholpur City", stops: "Main Market, Railway Station, Bus Stand", time: "7:00 AM" },
    { area: "Bari", stops: "Bari Town, Highway Junction", time: "6:45 AM" },
    { area: "Rajakhera", stops: "Rajakhera Main Road, Crossing", time: "6:30 AM" },
    { area: "Sarmathura", stops: "Sarmathura Center, NH-44", time: "6:40 AM" },
    { area: "Saipau", stops: "Saipau Main Road", time: "6:50 AM" },
];
const Transportation = () => (_jsxs(Layout, { children: [_jsx(PageHero, { title: "Transportation", subtitle: "Safe and reliable transport for every student", breadcrumb: "Transportation" }), _jsx("section", { className: "section-padding", children: _jsxs("div", { className: "container mx-auto", children: [_jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16", children: [
                            { icon: Bus, title: "15+ Buses", desc: "Modern fleet" },
                            { icon: Shield, title: "GPS Tracked", desc: "Real-time monitoring" },
                            { icon: MapPin, title: "20+ Routes", desc: "Wide coverage" },
                            { icon: Clock, title: "On Time", desc: "Punctual service" },
                        ].map((f, i) => (_jsx(AnimatedSection, { delay: i * 0.1, children: _jsxs("div", { className: "bg-primary rounded-xl p-6 text-center text-primary-foreground card-hover", children: [_jsx(f.icon, { className: "w-8 h-8 mx-auto mb-2 text-secondary" }), _jsx("h3", { className: "font-heading font-bold", children: f.title }), _jsx("p", { className: "text-xs text-primary-foreground/70", children: f.desc })] }) }, f.title))) }), _jsxs(AnimatedSection, { children: [_jsx("h2", { className: "section-title text-center", children: "Route Details" }), _jsx("div", { className: "gold-underline" })] }), _jsx(AnimatedSection, { delay: 0.2, children: _jsx("div", { className: "bg-card rounded-2xl border border-border overflow-hidden mt-8", children: _jsxs("table", { className: "w-full", children: [_jsx("thead", { children: _jsxs("tr", { className: "bg-primary text-primary-foreground", children: [_jsx("th", { className: "text-left p-4 font-heading", children: "Area" }), _jsx("th", { className: "text-left p-4 font-heading hidden sm:table-cell", children: "Major Stops" }), _jsx("th", { className: "text-left p-4 font-heading", children: "Pickup Time" })] }) }), _jsx("tbody", { children: routes.map((r, i) => (_jsxs("tr", { className: `border-t border-border ${i % 2 === 0 ? "bg-card" : "bg-muted/30"}`, children: [_jsx("td", { className: "p-4 font-semibold text-foreground", children: r.area }), _jsx("td", { className: "p-4 text-sm text-muted-foreground hidden sm:table-cell", children: r.stops }), _jsx("td", { className: "p-4 text-sm text-secondary font-semibold", children: r.time })] }, r.area))) })] }) }) })] }) })] }));
export default Transportation;
