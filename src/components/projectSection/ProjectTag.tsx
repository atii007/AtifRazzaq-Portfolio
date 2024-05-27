import React from "react";

type Props = {
  name: string;
  onClick: (value: string) => void;
  isSelected: boolean;
};

const ProjectTag = ({ name, onClick, isSelected }: Props) => {
  const buttonStyles = isSelected ? "button button_active" : "button";
  return (
    <button className={`${buttonStyles} button`} onClick={() => onClick(name)}>
      {name}
    </button>
  );
};

export default ProjectTag;
