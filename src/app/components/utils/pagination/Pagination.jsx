import { Button, Typography } from "@mui/material";
import React from "react";
import GlobalAppBtns from "../../layouts/btns/GlobalAppBtn";

export default function Pagination({ page, limit, setPage, countAllMovies }) {
  const handleClick = (action) => {
    if (action === "minus") setPage(page - 1);
    else if (action === "plus") setPage(page + 1);
    else if (action === "reset") setPage(1);
    else if (action === "lastPage") setPage(countAllMovies / limit);
  };
  // 6 * 5 = 30
const oo = (countAllMovies / limit)
console.log("oo :", oo);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "space-between",
          alignItems: "center",
          background: "",
          width: "520px",
        }}
      >
        <GlobalAppBtns />
        {page > 1 && (
          <>
            <Button
              onClick={() => {
                // setPage(0);
                handleClick("reset");
              }}
              variant='outlined'
              // className={page <= 0 ? "display-none" : null}
            >
              Première Page
            </Button>
            <Button
              // className={page <= 0 ? "display-none" : null}
              onClick={() => {
                handleClick("minus");
                // setPage(page - 1);
              }}
              variant='outlined'
            >
              Page précédente
            </Button>
          </>
        )}

        {/* A REVOIR L'AFFICHAGE DU NUMERO DE LA PAGE
      {page !== 1 && <p>page : {page}</p>}
      {page} */}

        {page < oo && (
          <div>
            <button
              // style={page >= 10 ? { visibility: "hidden" } : null}
              onClick={() => {
                handleClick("plus");
              }}
              variant='outlined'
            >
              Page suivante
            </button>
            <Button
              onClick={() => {
                // setPage(0);
                handleClick("lastPage");
              }}
              variant='outlined'
              // className={page <= 0 ? "display-none" : null}
            >
              Dernere Page
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
