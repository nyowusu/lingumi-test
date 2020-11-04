import React from "react";

import "./styles.css";

interface IProps {
  text?: string;
}

export default function EmptyResults({ text }: IProps) {
  const emptyList = `Sorry! There are no tutorials that match your search. Please change the
  keywords and try again`;

  return (
    <div className="empty-container">
      <span className="empty">{text || emptyList}</span>
    </div>
  );
}
