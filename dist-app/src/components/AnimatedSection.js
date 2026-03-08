import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
const AnimatedSection = ({ children, className = "", delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    return (_jsx(motion.div, { ref: ref, initial: { opacity: 0, y: 40 }, animate: isInView ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.6, delay, ease: "easeOut" }, className: className, children: children }));
};
export default AnimatedSection;
