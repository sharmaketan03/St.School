import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { GraduationCap } from "lucide-react";
const facultyData = [
    { name: "Dr. Rajesh Kumar", subject: "Mathematics", exp: "20+ years" },
    { name: "Mrs. Sunita Sharma", subject: "English Literature", exp: "15+ years" },
    { name: "Mr. Anil Verma", subject: "Physics", exp: "18+ years" },
    { name: "Mrs. Priya Singh", subject: "Chemistry", exp: "12+ years" },
    { name: "Mr. Deepak Gupta", subject: "Computer Science", exp: "10+ years" },
    { name: "Mrs. Kavita Jain", subject: "Biology", exp: "14+ years" },
    { name: "Mr. Ramesh Yadav", subject: "Hindi", exp: "16+ years" },
    { name: "Mrs. Anjali Tiwari", subject: "Social Studies", exp: "11+ years" },
];
const Faculty = () => (_jsxs(Layout, { children: [_jsx(PageHero, { title: "Our Faculty", subtitle: "Meet our dedicated team of educators", breadcrumb: "Faculty" }), _jsx("section", { className: "section-padding", children: _jsxs("div", { className: "container mx-auto", children: [_jsx(AnimatedSection, { children: _jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "section-title", children: "Experienced & Passionate Educators" }), _jsx("div", { className: "gold-underline" }), _jsx("p", { className: "section-subtitle", children: "Our faculty members are highly qualified professionals dedicated to nurturing every student's potential." })] }) }), _jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: facultyData.map((f, i) => (_jsx(AnimatedSection, { delay: i * 0.08, children: _jsxs("div", { className: "bg-card rounded-xl border border-border p-6 text-center card-hover", children: [_jsx("div", { className: "w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(GraduationCap, { className: "w-10 h-10 text-primary" }) }), _jsx("h3", { className: "font-heading font-semibold text-foreground", children: f.name }), _jsx("p", { className: "text-secondary text-sm font-semibold mt-1", children: f.subject }), _jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [f.exp, " experience"] })] }) }, f.name))) })] }) })] }));
export default Faculty;
