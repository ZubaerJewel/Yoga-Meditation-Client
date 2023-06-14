const stripePromise = loadStripe(import.meta.env.VITE_stripe_test_key);
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiouSeoure';


const Payment = () => {
    const {id} = useParams();
    const [axiosSecure] = useAxiosSecure();
    const [price, setPrice] = useState(null);
    const [lectureId, setLectureId] = useState(null);
    const [lectureId2, setLectureId2] = useState(null);
    axiosSecure(`https://yoga-meditation-server.vercel.app/selected/${id}`)
    .then(res => {
     console.log(res);
        setPrice(res.data?.price);
        setLectureId2(res.data?.name);
        setLectureId(res.data?._id);
    })

    return (
        <section className='mx-40 min-h-screen'>
            <Elements  stripe={stripePromise}>
                <CheckoutForm id={id} lecture={lectureId2} lectureId={lectureId} price={price} />
            </Elements>
        </section>
    );
};

export default Payment;