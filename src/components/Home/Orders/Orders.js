import React from 'react';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const Orders = () => {
   const email = useAuth();
   const [orders, setOrders] = useState([]);

   useEffect(() => {
      fetch(`https://grim-witch-66597.herokuapp.com/orders/${email}`)
         .then(res => res.json())
         .then(data => setOrders(data));
   }, []);

   return (
      <div>
         <h2 className="tours p-3">- My Orders -</h2>
         {orders.map(order => (
            <div key={order._id}>
               <Card style={{ width: '25rem' }}>
                  <Card.Img
                     style={{ width: '100%', height: '250px' }}
                     variant="top"
                     src={order?.image}
                  />
                  <Card.Body>
                     <Card.Title className="tour-title p-2">
                        {order?.name}
                     </Card.Title>
                     <h5>{order?.price}</h5>

                     <h5 className="">
                        <span className="">{order?.comments}</span>
                     </h5>
                     <h5 className="">
                        <span className="">Date: {order?.date}</span>
                     </h5>
                     {/* <h5 className="text-info">
                        Price:{' '}
                        <span className="price text-danger">{price}</span>
                     </h5> */}
                  </Card.Body>
               </Card>
            </div>
         ))}
      </div>
   );
};

export default Orders;
