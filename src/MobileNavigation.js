import NavLinks from "./NavLinks";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";

const MobileNav = () => {

  const [open, setOpen] = useState(false);
  const barIcon = (
    <GiHamburgerMenu className="menu-open" onClick={() => setOpen(!open)} />
  );
  const closeIcon = (
    <AiOutlineCloseCircle
      className="menu-close"
      onClick={() => setOpen(!open)}
    />
  );

  const closeMobile = () => setOpen(false);
  const animateFrom = {opactity: 0, x: -50}
  const animateTo = {opactity: 1, x: 0}
  return (
    <nav className="mobile-nav">
      {open ? closeIcon : barIcon}
      {open && <NavLinks isMobile={true} closeMobile={closeMobile} />}
      {open && <motion.div initial={animateFrom} 
          animate={animateTo} 
          transition={{delay: 0.5}}
           className="mobile-nav-bg"> </motion.div>}
    </nav>
  );
};
export default MobileNav;
