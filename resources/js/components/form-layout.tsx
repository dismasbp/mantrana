import { Separator } from "@/components/ui/separator";
import { type ReactNode } from "react";

interface TwoColumnLayoutProps {
    left: ReactNode;
    right: ReactNode;
}

export default function TwoColumnLayout({ left, right }: TwoColumnLayoutProps) {
    return (
        <div className="flex flex-col lg:flex-row lg:space-x-12">
            <div className="w-full lg:w-1/2">{left}</div>

            <Separator orientation="vertical" className="hidden lg:block" />
            <Separator className="my-6 lg:hidden" />

            <div className="flex-1">{right}</div>
        </div>
    );
}
