export type CartProduct = {
    id: number;
    userId: number;
    date: Date;
    products: [{ productId: number; quantity: number }];
  };