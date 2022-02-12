import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Data from "../DB/Data";
import {Link} from 'react-router-dom'
import './worldHeritageSite.css'
import { MdKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion";
import { siteAnimation } from "../Animations/Animations";

const WorldHeritageSite = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const oneSite = Data.find((item) => item.id === parseInt(id));

  return (
    <div className="site_container">
      <motion.div
        className="site"
        variants={siteAnimation}
        animate="show"
        exit="hide"
      >
        <div className="navigateBack" onClick={() => navigate(-1)}>
          <MdKeyboardBackspace />
        </div>
        <div className="imageAndText">
          <img src={`../images/products/${oneSite.image}`} alt="imagea" />
          <div className="siteText">
            <h3>{oneSite.site_name}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              delectus ea dolore suscipit. Facilis harum dolorem, pariatur ipsa
              in adipisci!
            </p>
            <Link to={`/site/data`} >
              Sites
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WorldHeritageSite;
