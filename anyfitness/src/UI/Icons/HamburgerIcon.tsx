type Props = {
  onClick(): void;
};

export default function HamburgerIcon({ onClick }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      onClick={onClick}
    >
      <path
        d="M2 6H22"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M2 12H22"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M2 18H22"
        stroke="#333333"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
