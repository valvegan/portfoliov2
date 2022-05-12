import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

const NavLinks = (props) => {

  const animateFrom = {opactity: 0, x: -40}
  const animateTo = {opactity: 1, x: 0}
  return (
      <ul role="menubar" className="nav-list">
        <Link to={`/`}>
          <motion.li className={!props.isMobile && "list-item"}
          initial={animateFrom} 
          animate={animateTo} 
          transition={{delay: 0.05}}
          onClick={() => props.isMobile && props.closeMobile()}>
            Home
          </motion.li>
        </Link>
        <Link to={`/about`}>
          <motion.li className={!props.isMobile && "list-item"}
          initial={animateFrom} 
          animate={animateTo} 
          transition={{delay: 0.05}}
           onClick={() => props.isMobile && props.closeMobile()}>
            About
          </motion.li>
        </Link>
        <Link to={`/portfolio`}>
          <motion.li  className={!props.isMobile && "list-item"}
          initial={animateFrom} 
          animate={animateTo} 
          transition={{delay: 0.05}}
          onClick={() => props.isMobile && props.closeMobile()}>
            Portfolio
          </motion.li>
        </Link>
        <Link to={`/contact`}>
          <motion.li 
          className={!props.isMobile && "list-item"}
          initial={animateFrom} 
          animate={animateTo} 
          transition={{delay: 0.05}}
          onClick={() => props.isMobile && props.closeMobile()}>
            Contact
          </motion.li>
        </Link>

        <a href="./images/Document.rtf" download>
          <motion.li className={!props.isMobile && "list-item"}
           initial={animateFrom} 
          animate={animateTo} 
          transition={{delay: 0.05}}
          onClick={() => props.isMobile && props.closeMobile()}>
            CV
          </motion.li>
          </a>
      </ul>
  );
};

export default NavLinks;
