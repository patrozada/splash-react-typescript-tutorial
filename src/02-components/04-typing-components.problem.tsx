import React from "react";
type ButtonProps = {
  className: string;
}
export const Button = (props: ButtonProps) => {
  return <button className={props.className}></button>;
};

const Parent = () => {
  return (
    <>
      <Button className="do__not--crash"></Button>

      <Button className="my-class"></Button>
    </>
  );
};
