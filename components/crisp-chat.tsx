"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("9b515f6a-3eed-465d-8f3a-a08e2ac3dbb2");
    }, []);

    return null;
};
