import { create } from "zustand";

interface useProModuleStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useProModule = create<useProModuleStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));
