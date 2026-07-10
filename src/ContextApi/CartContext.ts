import type { CartItem } from "../interfaces/CartItem";
import type { Product } from "../interfaces/Product";

// Example state in your CartProvider
const [cart, setCart] = useState<CartItem[]>([]);

// Example addToCart function signature
const addToCart = (product: Product) => {
    // ... logic to check if item exists and increment quantity ...
}

function useState<T>(arg0: never[]): [any, any] {
  throw new Error("Function not implemented.");
}
