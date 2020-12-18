import React, { Component } from "react";

export class Salt extends Component {
  render() {
    let Data = this.props.Data;
    return (
     
        <div className="salt" >
          <div className="title">Menu Salé</div>
          <div className="subTitle">Plateaux</div>
          <div>
            {Data.tray &&
              Data.tray.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="product">
                      {item.product} &bull; {item.quantity}
                    </div>
                    {item.price}
                  </div>
                );
              })}
          </div>
          <div className="subTitle">Pâtes</div>
          <div>
            {Data.pasta &&
              Data.pasta.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="product" >
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
              Data.pizza.map((item, index) => {
                return (
                  <div key={index}>
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
