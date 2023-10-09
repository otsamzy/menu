import React from "react";

const Menu = ({ menu }) => {
  return (
    <>
      <section className="menu_list_con">
        {menu.map((items) => {
          const { title, price, img, desc } = items;
          return (
            <div key={items.id} className="single_item">
              <div className="img_con">
                <img src={img} alt={title} />
              </div>
              <div className="item_details_con">
                <div className="details_price_name">
                  <h3 className="item_name">{title} </h3>
                  <p className="item_price">{price}</p>
                </div>
                <div className="item_desc">
                  <p className="desc">{desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Menu;
