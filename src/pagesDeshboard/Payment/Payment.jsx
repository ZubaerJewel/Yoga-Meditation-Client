import { loadStripe } from "@stripe/stripe-js";
// import SectionHeader from "../../../components/SectionHeader";
import { Elements } from "@stripe/react-stripe-js";
// import useCart from "../../../hooks/useCart";
import { useLoaderData, useLocation } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe(import.meta.env.VITE_stripe_test_key)

const Payment = () => {

  const data = useLoaderData()
  console.log(data);

  return (
    <div className="">
      <h2 className="">Payment</h2>
      <Elements stripe={stripePromise}>
        {
          data.map(cart => (
            <CheckoutForm key={cart._id} cart={cart}></CheckoutForm>
          ))
        }
      </Elements>
    </div>
  );
};

export default Payment;