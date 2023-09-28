import { motion } from 'framer-motion';

type Props = {
  onClick(): void;
  dropdownOpen: boolean;
};

export default function ArrowUpIcon({ onClick, dropdownOpen }: Props) {
  const variants = {
    open: { rotate: 180, scale: 1 },
    closed: { rotate: 0, scale: 1 },
  };
  return (
    <motion.svg
      variants={variants}
      animate={dropdownOpen ? 'open' : 'closed'}
      transition={{
        type: 'linear',
        duration: 0.1,
      }}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M14.3335 10.3335L8.8049 4.8049C8.54455 4.54455 8.12244 4.54455 7.86209 4.8049L2.3335 10.3335"
        stroke="#979797"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}
