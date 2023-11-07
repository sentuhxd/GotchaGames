import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_ORDER } from "../utils/mutations";
import { idbPromise } from "../utils/helpers";
import SuccessItem from "../components/SuccessItem";
import { useQuery } from "@apollo/client";
import { QUERY_USER_COINS } from "../utils/queries";
import { UPDATE_USER_COINS } from "../utils/mutations";

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);
  const [updateUser] = useMutation(UPDATE_USER_COINS);
  //sets up stateful variable to grab currentcart data
  const [currentCart, setCurrentCart] = useState([]);
  //gets users current coins
  const { data, loading } = useQuery(QUERY_USER_COINS);
  const currentCoins = data?.user.coins;

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise("cart", "get");
      //grabs cart data before it is erased
      setCurrentCart([...cart]);
      //coins in cart
      const coinsInCart = cart[0].purchaseQuantity;
      const coinsToAdd = currentCoins + coinsInCart;
      //updates user's coin attribute
      const updatedUser = await updateUser({
        variables: { coins: coinsToAdd },
      });

      console.log("updated user", updatedUser);

      const products = cart.map((item) => item._id);

      if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;

        productData.forEach((item) => {
          idbPromise("cart", "delete", item);
        });
      }
    }
    if (!loading) {
      saveOrder();
    }
  }, [addOrder, updateUser, loading]);

  return (
    <div style={{ height: "100vh" }}>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Success!</h1>
          {currentCart?.map((product) => (
            <SuccessItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.purchaseQuantity}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Success;
