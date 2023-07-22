import Image from "next/image";

const Loader = () => {
    return (
        <div className="h-full flex flex-col gap-y-4 items-center justify-center">
            <div className="w-10 h-10 relative animate-spin">
                <Image fill src="/imyzf.jpg" alt="loader" />
            </div>
            <p className="text-sm text-muted-foreground">
                Apollo is on a mission, please stand by...
            </p>
        </div>
    );
};

export default Loader;
