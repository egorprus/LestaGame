import React, { ChangeEventHandler } from "react";

interface Prop {
	value: string
  handleChange: ChangeEventHandler<HTMLInputElement>,
	placeholder: string,
}

export const MenuInput = ({value, handleChange, placeholder}: Prop) => {
  return (
    <label htmlFor="itemPerPage" className="form__field">
			<input className="form__input" value={value} onChange={handleChange} type="text" placeholder={placeholder} />
		</label>
  );
};
