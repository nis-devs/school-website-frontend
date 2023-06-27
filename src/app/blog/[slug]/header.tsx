"use client";
import { motion } from "framer-motion";

import { useFormattedDate } from "@/hooks";

type HeaderProps = {
  date: string;
  title: string;
};

const animation = {
  hide: {
    x: -30,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};

const Header = (props: HeaderProps) => {
  const { date, title } = props;
  const formattedDate = useFormattedDate(date);

  return (
    <motion.div initial={animation.hide} animate={animation.show}>
      <div>{formattedDate}</div>
      <h1 className="mb-4 text-3xl font-bold">{title}</h1>
      <div className="flex items-center gap-2">
        1280 views
        <div>/</div>4 comments
      </div>
    </motion.div>
  );
};

export default Header;
