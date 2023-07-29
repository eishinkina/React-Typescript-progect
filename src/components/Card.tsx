import React from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width: string;
  height: string;
  children: React.ReactNode;
  variant: keyof typeof CardVariant;
  onClick?: (num: number) => void;
}

const Card: React.FC<CardProps> = ({ width, height, children, variant, onClick }) => {
  const cardStyle = {
    width,
    height,
    border: variant === "outlined" ? "1px solid gray" : "none",
    background: variant === "primary" ? "lightGray" : "",
  };

  const handleClick = () => {
    if (onClick) {
      onClick(0); // Вместо `state` здесь передаем фиксированное значение `0`
    }
  };

  return (
    <div style={cardStyle} onClick={handleClick}>
      {children}
    </div>
  );
};

export default Card;
