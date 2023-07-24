"use client";

import { cn } from "@/lib/utils";
import {
    CodeIcon,
    ImageIcon,
    LayoutDashboard,
    MessageSquare,
    MusicIcon,
    SettingsIcon,
    VideoIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FreeCounter from "./free-counter";

const routes = [
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
        color: "text-sky-500",
    },
    {
        label: "Conversation",
        href: "/conversation",
        icon: MessageSquare,
        color: "text-violet-500",
    },
    {
        label: "Image Generation",
        href: "/image",
        icon: ImageIcon,
        color: "text-pink-500",
    },
    {
        label: "Video Generation",
        href: "/video",
        icon: VideoIcon,
        color: "text-orange-500",
    },
    {
        label: "Music Generation",
        href: "/music",
        icon: MusicIcon,
        color: "text-blue-500",
    },
    {
        label: "Code Generation",
        href: "/code",
        icon: CodeIcon,
        color: "text-green-500",
    },
    {
        label: "Settings",
        href: "/settings",
        icon: SettingsIcon,
    },
];

interface SidebarProps {
    apiLimitCount: number;
}

const Sidebar = ({ apiLimitCount = 0 }: SidebarProps) => {
    const pathname = usePathname();

    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link
                    href="/dashboard"
                    className="flex items-center pl-3 mb-14"
                >
                    <div className="relative w-8 h-8 mr-4">
                        <Image fill src="/imyzf.jpg" layout="fill" alt={""} />
                    </div>
                    <h1 className="font-bold text-2xl">Apollo</h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            href={route.href}
                            key={route.href}
                            className={cn(
                                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                                pathname === route.href
                                    ? "text-white bg-white/10"
                                    : "text-zinc-400"
                            )}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon
                                    className={cn("h-5 w-5 m-3", route.color)}
                                />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
			<FreeCounter apiLimitCount={apiLimitCount}/>
        </div>
    );
};

export default Sidebar;
