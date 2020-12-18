import React, { Component } from 'react';

export class Sweet extends Component {
    render() {
      
    let Data = this.props.Data;
    return (
      <section  >
        <div className="sweet">
          <div className="title">Menu Sucré</div>
          <div className="subTitle">Crème glacé</div>
          <div>
            {Data.icecream &&
              Data.icecream.map((item, index ) => {
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
          <div className="subTitle">Sorbet</div>
          <div>
            {Data.sorbet &&
              Data.sorbet.map((item, index) => {
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
          <div className="subTitle">Spécialité</div>
          <div>
            {Data.speciality &&
              Data.speciality.map((item, index ) => {
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
          <div className="subTitle">Évènement</div>
          <div>
            {Data.event &&
              Data.event.map((item,index) => {
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
        </div>
      </section>
    );
  }
}            


export default Sweet;
