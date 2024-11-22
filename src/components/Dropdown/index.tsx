'use client'
import React, { useEffect, useRef, useState } from "react";

function useOutsideAlerter(
  ref: React.RefObject<HTMLElement>,
  setX: React.Dispatch<React.SetStateAction<boolean>>
): void {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setX(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setX]);
}

type DropdownProps = {
  button: JSX.Element;
  children: JSX.Element;
  classNames: string;
  animation?: string;
};

const Dropdown: React.FC<DropdownProps> = ({
  button,
  children,
  classNames,
  animation,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [openWrapper, setOpenWrapper] = useState(false);
  useOutsideAlerter(wrapperRef, setOpenWrapper);

  return (
    <div ref={wrapperRef} className="relative flex">
      <div className="flex" onMouseDown={() => setOpenWrapper(!openWrapper)}>
        {button}
      </div>
      <div
        className={`${classNames} absolute z-10 ${
          animation
            ? animation
            : "origin-top-right transition-all duration-300 ease-in-out"
        } ${openWrapper ? "scale-100" : "scale-0"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
