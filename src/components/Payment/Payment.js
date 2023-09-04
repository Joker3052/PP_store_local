import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';

function Payment() {
  const { cart } = useCart();

  const generateMessage = (cart) => {
    let message = "Order Summary:\n";
    cart.forEach((item) => {
      message += `${item.image_name} - Quantity: ${item.quantity} - Price: $${item.price_value * item.quantity}\n`;
    });
    message += `\nTotal Quantity: ${cart.reduce((total, item) => total + item.quantity, 0)}\n`;
    message += `Total Price: $${cart.reduce((total, item) => total + item.price_value * item.quantity, 0).toFixed(2)}`;
    return message;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Lấy dữ liệu từ các trường nhập trong form trực tiếp
    const email = e.target.email.value;
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;

    // Tạo message
    const message = generateMessage(cart);

    // Gửi dữ liệu đơn hàng (email, name, phone, address, message) đến server hoặc xử lý dữ liệu theo ý của bạn
    console.log('Email:', email);
    console.log('Name:', name);
    console.log('Phone:', phone);
    console.log('Address:', address);
    console.log('Order Summary:', message);
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-semibold mb-5">Payment</h1>
      <form onSubmit={handleSubmit}>
        {/* Các trường nhập dữ liệu */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <textarea
            className="form-control"
            id="address"
            name="address"
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Order Summary</label>
          <textarea
            className="form-control"
            rows="5"
            readOnly
            value={generateMessage(cart)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Place Order</button>
      </form>
    </div>
  );
}

export default Payment;
