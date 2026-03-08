import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const overlayStyles = {
    navy: "bg-primary/80",
    dark: "bg-black/60",
    gold: "bg-secondary/70",
};
const ParallaxSection = ({ imageUrl, children, overlay = "navy", className = "", minHeight = "min-h-[400px]", }) => (_jsxs("section", { className: `parallax-section relative ${minHeight} flex items-center ${className}`, style: { backgroundImage: `url(${imageUrl})` }, children: [_jsx("div", { className: `absolute inset-0 ${overlayStyles[overlay]}` }), _jsx("div", { className: "relative z-10 w-full", children: children })] }));
export default ParallaxSection;
