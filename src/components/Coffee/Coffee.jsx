import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Coffee.css';

export const Coffee = () => {
    const [price, setPrice] = useState(14);
    const [quantity, setQuantity] = useState(1);

    const addQuantity = () => {
        if (quantity < 10) {
            setQuantity(quantity + 1);
            setPrice(price + 14);
        } else {
            setQuantity(10);
        }
    };

    const removeQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            setPrice(price - 14);
        } else {
            setQuantity(0);
        }
    };

    const fadeInVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 1 }
        }
    };

    return (
        <>
            <motion.div
                className='container1'
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
            >
                <motion.div
                    className='container2'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInVariants}
                >
                    <motion.div
                        className='container_heading'
                        initial="hidden"
                        animate="visible"
                        variants={fadeInVariants}
                    >
                        <h2>Buy me a Coffee</h2>
                    </motion.div>

                    <motion.div
                        className='main_container_coffee'
                        initial="hidden"
                        animate="visible"
                        variants={fadeInVariants}
                    >
                        <motion.div
                            className='coffee_img'
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariants}
                        >
                            <img src="https://cdn-icons-png.flaticon.com/256/11471/11471245.png" alt="" />
                        </motion.div>

                        <motion.div
                            className="group flex h-11 flex-shrink-0 items-center justify-between overflow-hidden rounded-md border border-gray-300 md:h-12"
                            initial="hidden"
                            animate="visible"
                            variants={fadeInVariants}
                        >
                            <button onClick={removeQuantity} className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-s border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12">
                                -
                            </button>
                            <span className="duration-250 text-heading flex h-full w-12 flex-shrink-0 cursor-default items-center justify-center text-base font-semibold transition-colors ease-in-out md:w-20 xl:w-24">
                                {quantity}
                            </span>
                            <button onClick={addQuantity}
                                className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-e border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
                            >
                                +
                            </button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="coffee_price"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInVariants}
                    >
                        <h2>{price} ~rs</h2>
                        <button>
                            <img className='small_coffee_img' src="https://cdn-icons-png.flaticon.com/128/10017/10017650.png" alt="" />
                            Buy
                        </button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    );
};
