import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";
const socials = [
    { icon: Facebook, link: "https://www.facebook.com/share/1bTmUwL1Lx/" },
    { icon: Twitter, link: "https://twitter.com" },
    { icon: Instagram, link: "https://www.instagram.com/st.joseph.international_school?igsh=MXE5ajRkdWJsaWtlbQ==" },
    { icon: Youtube, link: "https://youtube.com" },
];
const Footer = () => {
    return (_jsxs("footer", { className: "bg-primary text-primary-foreground", children: [_jsx("div", { className: "container mx-auto px-4 py-16", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-3 mb-4", children: [_jsx("img", { src: logo, alt: "Logo", className: "h-12 w-12 object-contain rounded-full bg-primary-foreground/10 p-1" }), _jsx("h3", { className: "font-heading text-lg font-bold", children: "St. Joseph's International School" })] }), _jsx("p", { className: "text-sm text-primary-foreground/70 leading-relaxed", children: "Affiliated to CBSE, New Delhi. Nurturing young minds with excellence in education, character building, and holistic development since establishment." })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-heading font-semibold text-secondary mb-4", children: "Quick Links" }), _jsx("ul", { className: "space-y-2 text-sm", children: [
                                        { label: "About Us", path: "/about" },
                                        { label: "Admissions", path: "/admissions" },
                                        { label: "Academics", path: "/academics" },
                                        { label: "Gallery", path: "/gallery" },
                                        { label: "Contact Us", path: "/contact" },
                                        { label: "Fee Structure", path: "/fee-structure" },
                                    ].map((link) => (_jsx("li", { children: _jsx(Link, { to: link.path, className: "text-primary-foreground/70 hover:text-secondary transition-colors", children: link.label }) }, link.path))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-heading font-semibold text-secondary mb-4", children: "Explore" }), _jsx("ul", { className: "space-y-2 text-sm", children: [
                                        { label: "Student Life", path: "/student-life" },
                                        { label: "Sports", path: "/sports" },
                                        { label: "Events", path: "/events" },
                                        { label: "Infrastructure", path: "/infrastructure" },
                                        { label: "Transportation", path: "/transportation" },
                                        { label: "Calendar", path: "/calendar" },
                                    ].map((link) => (_jsx("li", { children: _jsx(Link, { to: link.path, className: "text-primary-foreground/70 hover:text-secondary transition-colors", children: link.label }) }, link.path))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-heading font-semibold text-secondary mb-4", children: "Contact Us" }), _jsxs("div", { className: "space-y-3 text-sm mb-4", children: [_jsxs("p", { className: "flex items-start gap-2 text-primary-foreground/70", children: [_jsx(MapPin, { className: "w-4 h-4 mt-0.5 shrink-0 text-secondary" }), "Ashiyana Colony, Jail Road, Near Railway Station, Dholpur, Rajasthan - 328001, India"] }), _jsxs("p", { className: "flex items-center gap-2 text-primary-foreground/70", children: [_jsx(Phone, { className: "w-4 h-4 shrink-0 text-secondary" }), " +91\u201180581-00465"] }), _jsxs("p", { className: "flex items-center gap-2 text-primary-foreground/70", children: [_jsx(Phone, { className: "w-4 h-4 shrink\u20110 text-secondary" }), " +91\u201194140\u201128066"] }), _jsxs("p", { className: "flex items-center gap-2 text-primary-foreground/70", children: [_jsx(Mail, { className: "w-4 h-4 shrink-0 text-secondary" }), " info@stjosephdholpur.com"] })] }), _jsx("div", { className: "overflow-hidden rounded-lg border border-primary-foreground/20", children: _jsx("iframe", { src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.7785342771713!2d77.90310307521611!3d26.687564576782172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973ffd493b346b5%3A0x12d5f0eb71aaaf6a!2sSt.%20Joseph's%20International%20School%20Dholpur!5e0!3m2!1sen!2sin!4v1772108706949!5m2!1sen!2sin", width: "100%", height: "250", style: { border: 0 }, allowFullScreen: true, loading: "lazy", referrerPolicy: "no-referrer-when-downgrade", title: "St. Joseph's International School Dholpur" }) }), _jsx("div", { className: "flex gap-3 mt-4", children: socials.map((item, i) => {
                                        const Icon = item.icon;
                                        return (_jsx("a", { href: item.link, target: "blank", className: "w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300", children: _jsx(Icon, { className: "w-4 h-4" }) }, i));
                                    }) })] })] }) }), _jsx("div", { className: "border-t border-primary-foreground/10 py-4", children: _jsxs("p", { className: "text-center text-xs text-primary-foreground/50", children: ["\u00A9 ", new Date().getFullYear(), " St. Joseph's International School, Dholpur. All rights reserved."] }) })] }));
};
export default Footer;
