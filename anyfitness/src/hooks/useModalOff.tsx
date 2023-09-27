import { Dispatch, MutableRefObject, SetStateAction, useEffect } from 'react';

export default function useModalOff<T extends HTMLElement>(
  ref: MutableRefObject<T | null>,
  modalOpen: boolean,
  setModalOpen: Dispatch<SetStateAction<boolean>>
) {
  // 모달 끄는 영역 클릭시 (x버튼, 모달 배경 등등)
  const clickModalOffArea = (event: any) => {
    if (modalOpen && !ref.current?.contains(event.target)) {
      setModalOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', clickModalOffArea);
    return () => {
      document.removeEventListener('mousedown', clickModalOffArea);
    };
  });
}
