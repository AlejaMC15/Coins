import React from "react";

const Table = (coin, search) => {
  console.log(coin.coin.coin.data);

  const filters = coin.coin.coin.data.filter((item) =>
    item?.name.tolowercase().includes(search.tolowercase())
  );

  return (
    <div>
      <div className="container">
        <div className="mt-5 d-flex justify-content-center align-items-center">
          <div className="col">
            <table className="table">
              <thead className="table-dark">
                <tr>
                  <th>Logo</th>
                  <th>Name</th>
                  <th>Symbol</th>
                  <th>Price</th>
                  <th>Price Change</th>
                </tr>
              </thead>
              <tbody>
                {filters.map((item, index) => (
                  <tr key={index.id}>
                    <td>
                      <img
                        src={item?.image}
                        alt="img"
                        className="img-fluid"
                        style={{ width: "35px", height: "35px" }}
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.symbol}</td>
                    <td>{item.current_price}</td>
                    <td
                      className={
                        item.price_change_percentage_24h < 0
                          ? "text-danger"
                          : "text-primary"
                      }
                    >
                      {item.price_change_percentage_24h}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
