import React, { useState } from 'react';
import { Plus, Minus, ArrowRight, Coffee as CoffeeIcon, Gift } from 'lucide-react';
import { Pagination } from '../pagination/Pagination';

export const Coffee = () => {
    const [quantity, setQuantity] = useState(1);
    const [note, setNote] = useState('');
    const coffeePrice = 14;
    const totalAmount = quantity * coffeePrice;
    const [showModal, setShowModal] = useState(false);

    const addQuantity = () => {
        setQuantity(prev => Math.min(prev + 1, 10));
    };

    const removeQuantity = () => {
        setQuantity(prev => Math.max(prev - 1, 1));
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handlePayment = () => {
        const qrCodeAmount = totalAmount.toFixed(2);
        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(`upi://pay?pa=8668722207@axl&pn=Your%20Name&am=${qrCodeAmount}&tn=${encodeURIComponent(note)}`)}`;
        window.open(qrCodeUrl, '_blank');
    };

    return (
        <div className="min-h-screen bg-[#F4ECD8] flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl overflow-hidden border-4 border-[#9D6B4E]">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#7F4F24] to-[#936639] p-6 text-center">
                    <h2 className="text-3xl font-bold text-white flex items-center justify-center gap-3">
                        <CoffeeIcon className="w-8 h-8 text-[#F4ECD8]" />
                        Buy me a Coffee
                    </h2>
                </div>

                {/* Coffee Background and Content */}
                <div 
                    className="p-6 text-center relative"
                    style={{
                        backgroundImage: 'linear-gradient(to bottom, rgba(244, 236, 216, 0.1), rgba(244, 236, 216, 0.5))',
                        backgroundSize: '100% 100%'
                    }}
                >
                    {/* Coffee Bean Decorative Elements */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute top-4 left-4 w-6 h-6 bg-[#7F4F24] rounded-full transform rotate-45"></div>
                        <div className="absolute bottom-4 right-4 w-8 h-8 bg-[#9D6B4E] rounded-full transform -rotate-45"></div>
                    </div>

                    {/* Coffee Image */}
                    <div className="flex justify-center mb-6 relative z-10">
                        <img 
                            src="https://cdn-icons-png.flaticon.com/256/11471/11471245.png" 
                            alt="Coffee" 
                            className="w-40 h-40 object-contain hover:scale-110 transition-transform drop-shadow-lg"
                        />
                    </div>
                    
                    <p className="text-xl font-semibold text-[#7F4F24] mb-4 relative z-10">
                        Starting from ₹14/coffee
                    </p>

                    {/* Quantity Control */}
                    <div className="flex justify-center items-center space-x-4 mb-6 relative z-10">
                        <button 
                            onClick={removeQuantity}
                            className="bg-[#7F4F24] text-white p-2 rounded-full hover:bg-[#936639] transition-colors"
                        >
                            <Minus className="w-5 h-5" />
                        </button>
                        <span className="text-2xl font-bold text-[#9D6B4E]">{quantity}</span>
                        <button 
                            onClick={addQuantity}
                            className="bg-[#7F4F24] text-white p-2 rounded-full hover:bg-[#936639] transition-colors"
                        >
                            <Plus className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Note Input */}
                    <div className="mb-6 relative z-10">
                        <input
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            placeholder="Write a heartwarming note..."
                            className="w-full px-4 py-2 border-2 border-[#9D6B4E] rounded-lg focus:ring-2 focus:ring-[#7F4F24] outline-none transition-all"
                        />
                    </div>

                    {/* Total Amount and Buy Button */}
                    <div className="flex flex-col items-center space-y-4 relative z-10">
                        <div className="flex items-center space-x-2 text-xl font-semibold text-[#7F4F24]">
                            <img 
                                src="https://cdn-icons-png.flaticon.com/128/9784/9784453.png" 
                                alt="Total" 
                                className="w-6 h-6"
                            />
                            <span>₹{totalAmount}</span>
                        </div>

                        <button 
                            onClick={openModal}
                            className="flex items-center bg-[#936639] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#7F4F24] transition-all group"
                        >
                            Buy a Coffee for Shriyash
                            <Gift className="ml-2 w-5 h-5 group-hover:animate-bounce" />
                        </button>
                    </div>

                    {/* Modal */}
                    {showModal && (
                        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
                            <div className="bg-[#F4ECD8] rounded-3xl p-8 max-w-sm w-full shadow-2xl border-4 border-[#7F4F24]">
                                <button 
                                    onClick={closeModal} 
                                    className="float-right text-[#7F4F24] hover:text-black text-2xl"
                                >
                                    &times;
                                </button>
                                
                                <h2 className="text-2xl font-bold text-[#7F4F24] mb-6 flex items-center justify-center">
                                    Confirm Payment
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </h2>

                                <div className="space-y-4 text-left bg-white p-4 rounded-lg shadow-md">
                                    <p className="text-[#7F4F24]">
                                        <span className="font-semibold">Total Amount:</span> ₹{totalAmount}
                                    </p>
                                    <p className="text-[#7F4F24]">
                                        <span className="font-semibold">Quantity:</span> {quantity}
                                    </p>
                                    <p className="text-[#7F4F24]">
                                        <span className="font-semibold">Note:</span> {note || 'No note provided'}
                                    </p>
                                </div>

                                <button 
                                    onClick={handlePayment}
                                    className="w-full mt-6 bg-[#936639] text-white py-3 rounded-lg hover:bg-[#7F4F24] transition-colors"
                                >
                                    Proceed to Pay
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                <div className="bg-[#F4ECD8] p-4">
                    <Pagination result={"About"} next={"/"} prev={"/contact"} />
                </div>
            </div>
        </div>
    );
};

export default Coffee;