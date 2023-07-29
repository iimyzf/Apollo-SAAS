import { ReactNode } from "react";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full bg-[#010101] overflow-auto">
            <div className="mx-auto max-w-screen-xl h-full w-full">
                {children}
            </div>
        </div>
    );
};

export default LandingLayout;
