


function App() {
  return (
    <div className="App clear">
      <div style={{display: 'none'}} className="overlay">
      <div className="drawer">
        <h2 className="sh d-flex justify-between mb-20">Корзина<img className="cu-p" width={40} height={40} src="/img/Krestik.svg" alt="Krestik" /></h2>
         
        <div className="cartItem d-flex align-center mb-20">
        <img className="mr-5" width={200} height={200} src="/img/svet/palisandr.jpg" alt="Svet" />
        <div className="mr-15"> 
          <p>ПОДВЕСНОЙ ДЕРЕВЯННЫЙ СВЕТИЛЬНИК ПАЛИСАНДР</p>
          <b>7 899 руб.</b>
        </div>
        <img className="krestbtn" width={35} height={35} src="/img/Krestik.svg" alt="Krestik" />
        </div>
        <div className="cartItem d-flex align-center mb-20">
        <img className="mr-5" width={200} height={200} src="/img/svet/parametrik.jpg" alt="Svet" />
        <div className="mr-15"> 
          <p>ПОДВЕСНОЙ ДЕРЕВЯННЫЙ СВЕТИЛЬНИК ПАРАМЕТРИК</p>
          <b>8 599 руб.</b>
        </div>
        <img className="krestbtn" width={35} height={35} src="/img/Krestik.svg" alt="Krestik" />
        </div>
        <div className="cartItem d-flex align-center mb-10">
        <img className="mr-5" width={200} height={200} src="/img/svet/sanlait.jpg" alt="Svet" />
        <div className="mr-15"> 
          <p>ПОДВЕСНОЙ ДЕРЕВЯННЫЙ СВЕТИЛЬНИК САНЛАЙТ</p>
          <b>9 099 руб.</b>
        </div>
        <img className="krestbtn" width={35} height={35} src="/img/Krestik.svg" alt="Krestik" />
        </div>

           <div className="Items">
          <ul className="ul">
            <li className="li">
              <span>Итого:</span>
              <div className="linia"></div>
              <b>16 498 руб.</b>
            </li>
          </ul>
          <button className="but">Оформить заказ</button>
         </div>  
      </div>
      </div>
     <header> 
      <div className="headerleft">
      <img width={90} height={60} src="/img/logo2.jpg" />
      <div className="headerinfo">
        <h2 className="h2">WOODSHIRE</h2>
        <p className="p">Люстры из дерева в стиле лофт</p>
      </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30">
        <img width={20} height={20} src="/img/korz.png" />
        <span>  1205 руб.</span> </li>
        <li>
        <img width={23} height={23} src="/img/1.png" /> 
        </li>
      </ul>
     </header>
     <div className="content">
       <div><h1 >Все люстры</h1></div>
       <div className="search-block">
       <img width={20} height={20} src="/img/poisk.png" alt="Poisk" />
       <input className="input" placeholder="Поиск... " />
       </div>
       <div className="d-flex">
       <div className="card">
        <div className="favorite"><img width={40} height={40} src="/img/heart1.svg" alt="Unliked" /></div>
           <img width={300} height={300} src="/img/svet/bereza.jpg" alt="Svet" />
           <h4>ПОДВЕСНОЙ ДЕРЕВЯННЫЙ СВЕТИЛЬНИК ПИКЕА</h4>
           <div>
            <div>
              <span>Цена: </span>
              <b>8 999руб.</b>
            </div>
            <button className="button">
              <img width={12} height={12} src="/img/plus.png" alt="Plus" />
            </button>
           </div>
       </div>

       <div className="card">
           <img width={300} height={300} src="/img/svet/kristall.jpg" alt="Svet" />
           <h4>ПОДВЕСНОЙ ДЕРЕВЯННЫЙ СВЕТИЛЬНИК КРИСТАЛЛ</h4>
           <div>
            <div>
              <span>Цена: </span>
              <b>9 699руб.</b>
            </div>
            <button className="button">
              <img width={12} height={12} src="/img/plus.png" alt="Plus" />
            </button>
           </div>
       </div>

       <div className="card">
           <img width={300} height={300} src="/img/svet/lotos.jpg" alt="Svet" />
           <h4>ПОДВЕСНОЙ ДЕРЕВЯННЫЙ СВЕТИЛЬНИК ЛОТОС</h4>
           <div>
            <div>
              <span>Цена: </span>
              <b>7 599руб.</b>
            </div>
            <button className="button">
              <img width={12} height={12} src="/img/plus.png" alt="Plus" />
            </button>
           </div>
       </div>
       
       </div>

     </div>
    </div>
  );
}

export default App;
