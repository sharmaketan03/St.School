import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Newspaper } from "lucide-react";
const newsItems = [
    { title: "Students Excel in CBSE Board Exams", date: "June 2025", desc: "Our students achieved outstanding results in the CBSE Board examinations with several students scoring above 95%." },
    { title: "New Computer Lab Inaugurated", date: "August 2025", desc: "A state-of-the-art computer laboratory with 40 latest workstations was inaugurated by the school management." },
    { title: "School Wins District Quiz Championship", date: "September 2025", desc: "Our quiz team emerged victorious at the district-level inter-school quiz competition." },
    { title: "Green Campus Initiative Launched", date: "October 2025", desc: "The school launched a comprehensive green campus initiative including solar panels, rainwater harvesting, and tree plantation." },
    { title: "Yoga Day Celebrations", date: "June 2025", desc: "Students and staff participated in International Yoga Day celebrations with various asanas and meditation sessions." },
    { title: "Alumni Meet 2025", date: "November 2025", desc: "Former students gathered for the annual alumni meet, sharing memories and inspiring current students." },
];
const News = () => (_jsxs(Layout, { children: [_jsx(PageHero, { title: "News", subtitle: "Latest updates from St. Joseph's", breadcrumb: "News" }), _jsx("section", { className: "section-padding", children: _jsx("div", { className: "container mx-auto", children: _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: newsItems.map((n, i) => (_jsx(AnimatedSection, { delay: i * 0.08, children: _jsxs("div", { className: "bg-card rounded-xl border border-border p-6 card-hover h-full flex flex-col", children: [_jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground mb-3", children: [_jsx(Newspaper, { className: "w-4 h-4 text-secondary" }), n.date] }), _jsx("h3", { className: "font-heading font-semibold text-lg text-foreground mb-2", children: n.title }), _jsx("p", { className: "text-sm text-muted-foreground flex-1", children: n.desc })] }) }, n.title))) }) }) })] }));
export default News;
