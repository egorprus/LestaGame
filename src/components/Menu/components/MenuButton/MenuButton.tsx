import React from "react";

interface Prop {
  text: string,
	handleClick: () => void;
}
export const MenuButton = ({text, handleClick}: Prop) => {
  return (
    <button
      className="form__btn"
      type="button"
			onClick={handleClick}
    >
      {text}
    </button>
  );
};
