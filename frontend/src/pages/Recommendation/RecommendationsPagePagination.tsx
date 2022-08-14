import { useState } from "react";

export const currentPageData = (data: [], itemsPerPage: number, page: number)=>{
  const begin = (page - 1) * itemsPerPage;
  const end = begin + itemsPerPage;
  return data ? data.slice(begin, end) : [] ;
}

export const maxPages = (data: any, itemsPerPage: number) => {
    const maxPage = data ? Math.ceil(data.length / itemsPerPage) : 0;
    return maxPage;
}