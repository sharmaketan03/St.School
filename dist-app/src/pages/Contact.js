import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
    const handleSubmit = (e) => {
        e.preventDefault();
        const phoneNumber = "8058100465"; // apna WhatsApp number
        const message = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}
Message: ${formData.message}
`;
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    };
    return (_jsxs(Layout, { children: [_jsx(PageHero, { title: "Contact Us", subtitle: "We'd love to hear from you", breadcrumb: "Contact" }), _jsx("section", { className: "section-padding", children: _jsx("div", { className: "container mx-auto", children: _jsxs("div", { className: "grid lg:grid-cols-3 gap-10", children: [_jsx("div", { className: "space-y-6", children: [
                                    { icon: MapPin, title: "Address", info: "St. Joseph's International School, Dholpur, Rajasthan, India" },
                                    { icon: Phone, title: "Phone", info: "+91-XXXXXXXXXX" },
                                    { icon: Mail, title: "Email", info: "info@stjosephdholpur.edu.in" },
                                    { icon: Clock, title: "Office Hours", info: "Mon–Sat: 8:00 AM – 3:00 PM" },
                                ].map((c, i) => (_jsx(AnimatedSection, { delay: i * 0.1, children: _jsxs("div", { className: "flex items-start gap-4 bg-card rounded-xl p-5 border border-border card-hover", children: [_jsx("div", { className: "w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0", children: _jsx(c.icon, { className: "w-6 h-6 text-primary" }) }), _jsxs("div", { children: [_jsx("h3", { className: "font-heading font-semibold text-foreground", children: c.title }), _jsx("p", { className: "text-sm text-muted-foreground", children: c.info })] })] }) }, c.title))) }), _jsx("div", { className: "lg:col-span-2", children: _jsx(AnimatedSection, { delay: 0.2, children: _jsxs("div", { className: "bg-card rounded-2xl border border-border p-8", children: [_jsx("h2", { className: "font-heading font-bold text-2xl text-primary mb-6", children: "Send Us a Message" }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [_jsx("input", { type: "text", placeholder: "Your Name", required: true, value: formData.name, onChange: (e) => setFormData({ ...formData, name: e.target.value }), className: "w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" }), _jsx("input", { type: "email", placeholder: "Your Email", required: true, value: formData.email, onChange: (e) => setFormData({ ...formData, email: e.target.value }), className: "w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" })] }), _jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [_jsx("input", { type: "tel", placeholder: "Phone Number", value: formData.phone, onChange: (e) => setFormData({ ...formData, phone: e.target.value }), className: "w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" }), _jsx("input", { type: "text", placeholder: "Subject", value: formData.subject, onChange: (e) => setFormData({ ...formData, subject: e.target.value }), className: "w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" })] }), _jsx("textarea", { placeholder: "Your Message", rows: 5, required: true, value: formData.message, onChange: (e) => setFormData({ ...formData, message: e.target.value }), className: "w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none" }), _jsxs("button", { type: "submit", className: "btn-primary inline-flex items-center gap-2", children: [_jsx(Send, { className: "w-4 h-4" }), " Send Message"] })] })] }) }) })] }) }) })] }));
};
export default Contact;
