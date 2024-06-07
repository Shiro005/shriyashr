import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Coffee.css';
import { ArrowRight } from 'lucide-react'
import { ArrowUpRight } from 'lucide-react'

export const Coffee = () => {
    const [quantity, setQuantity] = useState(1);
    const [note, setNote] = useState('');
    const coffeePrice = 14;
    const totalAmount = quantity * coffeePrice;
    const [showModal, setShowModal] = useState(false);

    const addQuantity = () => {
        if (quantity < 10) {
            setQuantity(quantity + 1);
        } else {
            setQuantity(10);
        }
    };

    const removeQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        } else {
            setQuantity(1);
        }
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    // const handlePayment = () => {
    //     const qrCodeAmount = totalAmount.toFixed(2);
    //     const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(`upi://pay?pa=yourupiid@provider&pn=Your%20Name&mc=${totalAmount}&tn=${encodeURIComponent(note)}`)}`;
    //     console.log('QR Code URL:', qrCodeUrl);
    //     window.open(qrCodeUrl, '_blank');
    // };
    const handlePayment = () => {
        const qrCodeAmount = totalAmount.toFixed(2);
        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(`upi://pay?pa=8668722207@axl&pn=Your%20Name&am=${qrCodeAmount}&tn=${encodeURIComponent(note)}`)}`;
        console.log('QR Code URL:', qrCodeUrl);
        window.open(qrCodeUrl, '_blank');
    };

    return (
        <>
            <div className='container1'>
                <div className='container2'>
                    <div className='container_heading'>
                        <h2>Buy me a Coffee</h2>
                    </div>

                    <div className='main_container_coffee'>
                        <div className='coffee_img'>
                            <img src="https://cdn-icons-png.flaticon.com/256/11471/11471245.png" alt="" />
                        </div>

                        <div className="quantity_container">
                            <button onClick={removeQuantity} className="quantity_button">-</button>
                            <span className="quantity">{quantity}</span>
                            <button onClick={addQuantity} className="quantity_button">+</button>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3">
                        <input
                            className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            placeholder='Write a note...'
                        ></input>
                    </div>


                    <div className="coffee_price">
                        <h2>{totalAmount} ~rs</h2>
                        <button
                            type="button"
                            onClick={openModal}
                            className="inline-flex items-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-black/80"
                        >
                            Buy a Coffee for Shriyash
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                    </div>


                    {showModal && (
                        <div className="w-[300px] rounded-md border my-4">
                            <span className="close" onClick={closeModal}>&times;</span>
                            <div className="p-4">
                                <h1 className="inline-flex items-center text-lg font-semibold">
                                    Confirm Payment<ArrowUpRight className="h-4 w-4" />
                                </h1>
                                <p className="mt-3 text-lg text-gray-900">
                                    Total Amount: {totalAmount} ~rs
                                </p>

                                <p className="mt-3 text-lg text-gray-800">
                                    Quantity: {quantity}
                                </p>

                                <p className="mt-3 text-lg text-gray-800">
                                    Note: {note || 'No note provided'}
                                </p>

                                <button
                                    type="button"
                                    onClick={handlePayment}
                                    className="inline-flex items-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-black/80 my-4"
                                >
                                    Proceed to Pay
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
