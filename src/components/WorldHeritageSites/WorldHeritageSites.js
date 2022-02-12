import Data from "../DB/Data";
import "./worldHeritageSites.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  gridAnimation,
  cardAnimation,
  h3Animation,
} from "../Animations/Animations";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const WorldHeritageSites = () => {
  return (
    <div className="sitesContainer">
      <motion.h3 variants={h3Animation} animate="show" exit="hide">
        Choose site to know more
      </motion.h3>
      <motion.div
        className="sites"
        variants={gridAnimation}
        animate="show"
        exit="hide"
      >
        {Data.map((item) => {
          return (
            <Link to={`/site/${item.id}`} key={item.id}>
              <motion.div className="card" variants={cardAnimation}>
                <Card sx={{ maxWidth: 520 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="120"
                      image={`../images/products/${item.image}`}
                      alt={`${item.site_name}`}
                    />
                    <CardContent style={{padding: "5px"}}>
                      <Typography gutterBottom variant="h5" component="div">
                        {`${item.site_name}`}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {`${item.place}`}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </motion.div>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
};

export default WorldHeritageSites;
