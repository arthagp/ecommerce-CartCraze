import { create } from "zustand";
import { Product } from "./types/Product";

interface StoreState {
  products: Product[];
  jewelery: Product[];
  mensClothing: Product[];
  womensClothing: Product[];
  electronics: Product[];
  setProducts: (products: Product[]) => void;
  setWomensClothing: (womensClothing: Product[]) => void;
  setMensClothing: (mensClothing: Product[]) => void;
  setElectronics: (electronics: Product[]) => void;
  setJewelery: (jewelery: Product[]) => void;
}

export const useStore = create<StoreState>((set) => ({
  products: [],
  setProducts: (products: Product[]) => set({ products }),
  jewelery: [],
  setJewelery: (jewelery: Product[]) => set({ jewelery }),
  womensClothing: [],
  setWomensClothing: (womensClothing: Product[]) => set({ womensClothing }),
  mensClothing: [],
  setMensClothing: (mensClothing: Product[]) => set({ mensClothing }),
  electronics: [],
  setElectronics: (electronics: Product[]) => set({ electronics }),
}));
