"use client";

import { useEffect, useState } from "react";
import ProModal from "./pro-modal";

export const modalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return <ProModal />;
};

export default modalProvider;
