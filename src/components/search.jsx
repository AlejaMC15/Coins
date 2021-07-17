import React, { useState } from "react";
import Table from "./table";

const Search = (coin) => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <div className="container">
        <h1 className="text-center fw-bold mt-5">Search</h1>
        <div className="mt-5 d-flex justify-content-center align-items-center">
          <div className="col">
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Search"
                  className="form-control"
                  autoFocus
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </form>
          </div>
        </div>
        <Table coin={coin} search={search} />
      </div>
    </div>
  );
};

export default Search;
