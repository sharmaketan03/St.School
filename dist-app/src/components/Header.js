import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
const navItems = [
    { label: "Home", path: "/" },
    {
        label: "About",
        children: [
            { label: "About Us", path: "/about" },
            { label: "Principal's Message", path: "/principal-message" },
            { label: "Vision & Mission", path: "/vision-mission" },
            { label: "Faculty", path: "/faculty" },
        ],
    },
    {
        label: "Academics",
        children: [
            { label: "Academics", path: "/academics" },
            { label: "Curriculum", path: "/curriculum" },
            { label: "Achievements", path: "/achievements" },
        ],
    },
    {
        label: "Campus Life",
        children: [
            { label: "Student Life", path: "/student-life" },
            { label: "Sports", path: "/sports" },
            { label: "Co-Curricular", path: "/co-curricular" },
            { label: "Infrastructure", path: "/infrastructure" },
        ],
    },
    { label: "Admissions", path: "/admissions" },
    { label: "Gallery", path: "/gallery" },
    {
        label: "More",
        children: [
            { label: "Events", path: "/events" },
            { label: "News", path: "/news" },
            { label: "Calendar", path: "/calendar" },
            { label: "Transportation", path: "/transportation" },
            { label: "Fee Structure", path: "/fee-structure" },
        ],
    },
    { label: "Contact", path: "/contact" },
];
const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const location = useLocation();
    return (_jsxs("header", { className: "sticky top-0 bg-white", style: { zIndex: 9999, backgroundColor: "#fff" }, children: [_jsx("div", { className: "bg-primary text-primary-foreground text-xs py-2 px-4 hidden md:block", children: _jsxs("div", { className: "container mx-auto flex justify-between items-center", children: [_jsxs("div", { className: "flex items-center gap-6", children: [_jsxs("span", { className: "flex items-center gap-1", children: [_jsx(Phone, { className: "w-3 h-3" }), " +91-80581 00465"] }), _jsxs("span", { className: "flex items-center gap-1", children: [_jsx(Mail, { className: "w-3 h-3" }), " info@stjosephdholpur.com"] })] }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(MapPin, { className: "w-3 h-3" }), " Dholpur, Rajasthan, India"] })] }) }), _jsxs("nav", { className: "bg-card shadow-md", children: [_jsxs("div", { className: "container mx-auto flex items-center justify-between px-4 py-3", children: [_jsxs(Link, { to: "/", className: "flex items-center gap-3", children: [_jsx("img", { src: logo, alt: "St. Joseph's International School Logo", className: "h-14 w-14 object-contain" }), _jsxs("div", { children: [_jsx("h1", { className: "text-lg font-heading font-bold text-primary leading-tight", children: "St. Joseph's" }), _jsx("p", { className: "text-xs text-muted-foreground leading-tight", children: "International School, Dholpur" })] })] }), _jsx("div", { className: "hidden lg:flex items-center gap-1", children: navItems.map((item) => item.children ? (_jsxs("div", { className: "relative group", onMouseEnter: () => setOpenDropdown(item.label), onMouseLeave: () => setOpenDropdown(null), children: [_jsxs("button", { className: "nav-link flex items-center gap-1 px-3 py-2", children: [item.label, " ", _jsx(ChevronDown, { className: "w-3 h-3" })] }), _jsx("div", { className: `absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-[200px] z-50 transition-all duration-200 ${openDropdown === item.label
                                                ? "opacity-100 visible translate-y-0"
                                                : "opacity-0 invisible -translate-y-2"}`, children: item.children.map((child) => (_jsx(Link, { to: child.path, className: `block px-4 py-2 text-sm hover:bg-primary/10 transition-colors ${location.pathname === child.path
                                                    ? "text-primary font-semibold bg-primary/10"
                                                    : "text-foreground"}`, children: child.label }, child.path))) })] }, item.label)) : (_jsx(Link, { to: item.path, className: `nav-link px-3 py-2 ${location.pathname === item.path ? "text-primary font-semibold" : ""}`, children: item.label }, item.path))) }), _jsx("button", { className: "lg:hidden p-2", onClick: () => setMobileOpen(!mobileOpen), children: mobileOpen ? _jsx(X, { className: "w-6 h-6" }) : _jsx(Menu, { className: "w-6 h-6" }) })] }), mobileOpen && (_jsx("div", { className: "lg:hidden bg-card border-t animate-fade-in", children: _jsx("div", { className: "container mx-auto px-4 py-4 space-y-1", children: navItems.map((item) => item.children ? (_jsxs("div", { children: [_jsxs("button", { onClick: () => setOpenDropdown(openDropdown === item.label ? null : item.label), className: "w-full text-left py-2 px-3 nav-link flex items-center justify-between", children: [item.label, " ", _jsx(ChevronDown, { className: `w-4 h-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}` })] }), openDropdown === item.label && (_jsx("div", { className: "pl-4 space-y-1 bg-white rounded-md", children: item.children.map((child) => (_jsx(Link, { to: child.path, onClick: () => setMobileOpen(false), className: "block py-1.5 px-3 text-sm text-foreground hover:text-primary hover:bg-primary/10 rounded", children: child.label }, child.path))) }))] }, item.label)) : (_jsx(Link, { to: item.path, onClick: () => setMobileOpen(false), className: "block py-2 px-3 nav-link", children: item.label }, item.path))) }) }))] })] }));
};
export default Header;
