"use client";

import { useProModule } from "@/hooks/use-pro-module";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "./ui/dialog";
import { Badge } from "./ui/badge";
import {
    Check,
    CodeIcon,
    ImageIcon,
    MessageSquare,
    MusicIcon,
    VideoIcon,
    Zap,
} from "lucide-react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const tools = [
    {
        label: "Conversation",
        icon: MessageSquare,
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
    },
    {
        label: "Music Generation",
        icon: MusicIcon,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
    },
    {
        label: "Code Generation",
        icon: CodeIcon,
        color: "text-green-500",
        bgColor: "bg-green-500/10",
    },
];

const ProModal = () => {
    const proModal = useProModule();

    return (
        <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
                        <div className="flex items-center gap-x-2 font-bold py-1">
                            Upgrade to Apollo{" "}
                            <Badge
                                className="uppercase text-sm py-1"
                                variant="pro"
                            >
                                Pro
                            </Badge>
                        </div>
                    </DialogTitle>
                    <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
                        {tools.map((tool) => (
                            <Card
                                key={tool.label}
                                className="p-3 border-black/5 flex items-center justify-between"
                            >
                                <div className="flex items-center gap-x-4">
                                    <div
                                        className={cn(
                                            "p-2 w-fit rounded-md",
                                            tool.bgColor
                                        )}
                                    >
                                        <tool.icon
                                            className={cn(
                                                "w-6 h-6",
                                                tool.color
                                            )}
                                        />
                                    </div>
                                    <div className="font-semibold text-sm">
                                        {tool.label}
                                    </div>
                                </div>
                                <Check className="text-primary h-5 w-5" />
                            </Card>
                        ))}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button size="lg" variant="pro" className="w-full">
                        Upgrade <Zap className="w-4 h-4 ml-2 fill-white" />
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default ProModal;
