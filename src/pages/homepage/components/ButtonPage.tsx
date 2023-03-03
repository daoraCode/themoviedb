import React from "react";
import { PageType } from "../../../domain/page/PageModel";
import "./ButtonPage.css";

type ButtonProps = {
  page: PageType;
  handlePageClick: (page_id: string) => void;
};

export const ButtonPage = ({ page, handlePageClick }: ButtonProps) => {
  return (
    <button
      className="page-btn"
      onClick={() => handlePageClick(String(page.id))}
    >
      {page.name}
    </button>
  );
};
