import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle } from "lucide-react";
const curriculumData = [
    {
        level: "Pre-Primary",
        classes: "Nursery, LKG, UKG",
        subjects: ["English", "Hindi", "Mathematics", "EVS", "Art & Craft", "Music & Dance", "Physical Education"],
        approach: "Activity-based learning with play-way methodology focusing on foundational skills.",
    },
    {
        level: "Primary",
        classes: "Classes I – V",
        subjects: ["English", "Hindi", "Mathematics", "EVS / Science", "Social Studies", "Computer", "Art", "Music", "Physical Education"],
        approach: "Experiential learning with emphasis on reading, writing, and analytical skills.",
    },
    {
        level: "Middle School",
        classes: "Classes VI – VIII",
        subjects: ["English", "Hindi", "Sanskrit", "Mathematics", "Science", "Social Science", "Computer Science", "Art", "Physical Education"],
        approach: "Inquiry-based learning with project work and practical assessments.",
    },
    {
        level: "Secondary",
        classes: "Classes IX – X",
        subjects: ["English", "Hindi", "Mathematics", "Science", "Social Science", "IT / Computer"],
        approach: "Board exam preparation with conceptual understanding and application-based learning.",
    },
];
const Curriculum = () => (_jsxs(Layout, { children: [_jsx(PageHero, { title: "Curriculum", subtitle: "CBSE-aligned comprehensive curriculum", breadcrumb: "Curriculum" }), _jsx("section", { className: "section-padding", children: _jsx("div", { className: "container mx-auto max-w-5xl", children: _jsx("div", { className: "space-y-8", children: curriculumData.map((c, i) => (_jsx(AnimatedSection, { delay: i * 0.1, children: _jsxs("div", { className: "bg-card rounded-2xl border border-border overflow-hidden card-hover", children: [_jsxs("div", { className: "bg-primary p-4 px-6", children: [_jsx("h3", { className: "font-heading font-bold text-xl text-primary-foreground", children: c.level }), _jsx("p", { className: "text-primary-foreground/70 text-sm", children: c.classes })] }), _jsxs("div", { className: "p-6", children: [_jsx("p", { className: "text-muted-foreground mb-4 italic", children: c.approach }), _jsx("div", { className: "grid sm:grid-cols-2 gap-2", children: c.subjects.map((s) => (_jsxs("div", { className: "flex items-center gap-2 text-sm text-foreground", children: [_jsx(CheckCircle, { className: "w-4 h-4 text-secondary shrink-0" }), " ", s] }, s))) })] })] }) }, c.level))) }) }) })] }));
export default Curriculum;
