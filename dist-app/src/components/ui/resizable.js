import { jsx as _jsx } from "react/jsx-runtime";
import { GripVertical } from "lucide-react";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import { cn } from "@/lib/utils";
const ResizablePanelGroup = ({ className, ...props }) => (_jsx(PanelGroup, { className: cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className), ...props }));
const ResizablePanel = Panel;
const ResizableHandle = ({ withHandle, className, ...props }) => (_jsx(PanelResizeHandle, { className: cn("relative flex w-px items-center justify-center bg-border", className), ...props, children: withHandle && (_jsx("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border", children: _jsx(GripVertical, { className: "h-2.5 w-2.5" }) })) }));
export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
