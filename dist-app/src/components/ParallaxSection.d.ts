import type { ReactNode } from "react";
interface ParallaxSectionProps {
    imageUrl: string;
    children: ReactNode;
    overlay?: "navy" | "dark" | "gold";
    className?: string;
    minHeight?: string;
}
declare const ParallaxSection: ({ imageUrl, children, overlay, className, minHeight, }: ParallaxSectionProps) => import("react/jsx-runtime").JSX.Element;
export default ParallaxSection;
//# sourceMappingURL=ParallaxSection.d.ts.map