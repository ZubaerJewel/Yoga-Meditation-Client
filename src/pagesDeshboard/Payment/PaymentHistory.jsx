import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
// import useTitle from "../../hooks/useTitle";

const PaymentHistory = () => {
  const { user } = useAuth();
 
  const [payments, setPayments] = useState([]);
   
  useEffect(() => {
    fetch(`https://yoga-meditation-server.vercel.app/payments?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setPayments(data));
  }, []);

  return (
    <div className="mt-10">
     
      <div className="">
        <table className="table">
          {/* head */}
          <thead className="fw-semibold text-dark">
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Class Name</th>
              <th>Transaction ID</th>
              <th>Price</th>
              <th>Date and Time Of Payment</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {payments?.map((item, i) => (
              <tr key={item._id}>
                <th>
                  <label>{i + 1}</label>
                </th>
                <td>{item.itemNames}</td>
                <td>{item.transactionId}</td>
                <td className="text-center">{item.price}</td>
                <td>${item.date}</td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;