import { create } from "zustand";
import { Product } from "./types/Product";
import { CartProduct } from "./types/CartProduct";

interface StoreState {
  products: Product[];
  jewelery: Product[];
  mensClothing: Product[];
  womensClothing: Product[];
  electronics: Product[];
  filteredProducts: Product[];
  carts: CartProduct;
  setProducts: (products: Product[]) => void;
  setWomensClothing: (womensClothing: Product[]) => void;
  setMensClothing: (mensClothing: Product[]) => void;
  setElectronics: (electronics: Product[]) => void;
  setJewelery: (jewelery: Product[]) => void;
  setFilteredProducts: (filteredProducts: Product[]) => void;
  setCarts: (carts: CartProduct) => void;
}

export const useStore = create<StoreState>((set) => ({
  // di dalam zustand tidak perlu kita mengcopy prevValue sebelumnya, karena ini sudah di handle oleh zustand
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
  filteredProducts: [],
  setFilteredProducts: (filteredProducts: Product[]) =>
    set({ filteredProducts }),
  carts: {
    id: 0,
    userId: 0,
    date: new Date(),
    products: [
      {
        productId: 0,
        quantity: 0,
      },
    ],
  },
  setCarts: (carts: CartProduct) => set({ carts }),
}));
