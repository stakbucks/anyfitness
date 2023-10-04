import { useState } from 'react';

export default function useHovered() {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  return { isHovered, handleMouseEnter, handleMouseLeave };
}
