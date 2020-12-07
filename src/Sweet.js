import React, { Component } from 'react';

export class Sweet extends Component {
    render() {
      
    let Data = this.props.Data;
    return (
      <section  >
        <div className="sweet">
          <div className="title">Menu Sucre</div>
          <div className="subTitle">Creme glace</div>
          <div>
            {Data.icecream &&
              Data.icecream.map((item) => {
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
          <div className="subTitle">Sorbet</div>
          <div>
            {Data.sorbet &&
              Data.sorbet.map((item) => {
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
          <div className="subTitle">Specialite</div>
          <div>
            {Data.speciality &&
              Data.speciality.map((item) => {
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
          <div className="subTitle">Evenement</div>
          <div>
            {Data.event &&
              Data.event.map((item) => {
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
      </section>
    );
  }
}            


export default Sweet;
