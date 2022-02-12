import React from 'react';
import Header from '../Header';
import Hero from '../Hero';
import Image from '../images/img-1.jpg';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../Animations';

export const Home = () => {
  return (
    <motion.div
      initial='out'
      animate='in'
      exit='out'
      variants={animationOne}
      transition={transition}
    >
      <Header />
      <Hero image={Image} title='Experience Nature' desc='Once in a lifetime' />
    </motion.div>
  );
};
