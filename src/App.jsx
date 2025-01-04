import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza
        name="Pepperoni"
        description="A classic pizza with pepperoni slices."
        image={"public/pizzas/pepperoni.webp"}
      />
      <Pizza
        name="Hawaiian"
        description="A controversial pizza with ham and pineapple."
        image={"public/pizzas/hawaiian.webp"}
      />
      <Pizza
        name="Americano"
        description="french fries, hamburger, and cheese"
        image={"public/pizzas/big_meat.webp"}
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
