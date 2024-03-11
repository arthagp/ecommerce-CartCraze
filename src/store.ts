import { create } from "zustand";
import { Product } from "./types/Product";

interface StoreState {
    products: Product[];
    setProducts: (products: Product[]) => void;
}

export const useStore = create<StoreState>((set) => ({
    products: [],
    setProducts: (products: Product[]) => set({ products }),
}));
