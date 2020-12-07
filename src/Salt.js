import React, { Component } from "react";

export class Salt extends Component {
  render() {
    let Data = this.props.Data;
    return (
     
        <div className="salt">
          <div className="title">Menu Sale</div>
          <div className="subTitle">Plateaux</div>
          <div>
            {Data.tray &&
              Data.tray.map((item) => {
                return (
                  <div>
                    <div className="product">
                      {item.product} &bull; {item.quantity}
                    </div>
                    {item.price}
                  </div>
                );
              })}
          </div>
          <div className="subTitle">Pates</div>
          <div>
            {Data.pasta &&
              Data.pasta.map((item) => {
                return (
                  <div>
                    <div className="product">
                      {item.product} &bull; {item.quantity}
                    </div>
                    {item.price}
                  </div>
                );
              })}
          </div>
          <div className="subTitle">Pizza</div>
          <div>
            {Data.pizza &&
              Data.pizza.map((item) => {
                return (
                  <div>
                    <div className="product">
                      {item.product} &bull; {item.quantity}
                    </div>
                    {item.price}
                  </div>
                );
              })}
          </div>
          
        </div>
      
    );
  }
}

export default Salt;
