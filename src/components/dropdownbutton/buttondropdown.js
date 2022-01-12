import React from "react";
import Button from "./button";
import DropDownCard from "./dropdowncard";
const ButtonWithDropDownCmp = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Button onClick={() => setOpen((open) => !open)} />
      {open && <DropDownCard setOpen={setOpen} />}
    </div>
  );
};

export default ButtonWithDropDownCmp;
