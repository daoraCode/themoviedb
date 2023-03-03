import React from "react";
import { ButtonPage } from "./ButtonPage";
import { PageType } from "../../../domain/page/PageModel";
import "./ButtonPageList.css";

type ButtonPageListProps = {
  pages: PageType[];
  handlePageClick: (page_id: string) => void;
};

export const ButtonPageList = ({
  pages,
  handlePageClick,
}: ButtonPageListProps) => {
  return (
    <div className="page-btn-container">
      {pages.map((item) => (
        <div key={item.id}>
          <ButtonPage page={item} handlePageClick={handlePageClick} />
        </div>
      ))}
    </div>
  );
};
