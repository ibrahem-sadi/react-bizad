import { useState } from "react";
import Card from "./Card";
import "./Main.css";
import Title from "./Title";
import FilterBar from "./FilterBar";

function Main() {
  const cards = [
    {
      id: 1,
      number: 100025,
      name: "Playground",
      description: "Playground for children",
      phone: "03-5550000",
      address: "tel-aviv",
      imageUrl:
        "https://cdn.pixabay.com/photo/2013/04/02/19/54/playground-99509_960_720.jpg",
        link:"https://he-il.facebook.com/playgroundhaifa/",
    },
    {
      id: 2,
      number: 100026,
      name: "Pet Store",
      description: "A great place to find a friend",
      phone: "04-4440000",
      address: "haifa",
      imageUrl:
        "https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_960_720.jpg",
        link:"https://www.petstore.co.il/",
    },
    {
      id: 3,
      number: 100027,
      name: "Sport Land",
      description: "Any sport aquipment",
      phone: "02-2220000",
      address: "jerusalem",
      imageUrl:
        "https://cdn.pixabay.com/photo/2014/11/07/00/00/volleyball-520093_960_720.jpg",
        link:"http://sara-wendt.net/performance/sport-land/",
    },
  ];

  const [origData, setOrigData] = useState(cards);
    const [adverts, setAdverts] = useState(cards);

    function searchAdverts(value) {
        let result = [...origData];
        if (value.length > 0) {
            result = origData.filter(advert =>
                advert.name.toLowerCase().includes(value.toLowerCase())
            )
        }

        setAdverts(result);
    }

  const [display, setDisplay] = useState ('grid');

  return (
    <>

      <Title mainTxt="BizAd">
          <p className="fs-5 text-white">
            <h2>Advertising your business</h2>
          </p>
            </Title>

    <div className="d-flex justify-content-between px-5 pt-2">
    <FilterBar setDisplay = {setDisplay} search={searchAdverts} />
        <div>
        <button onClick={(e) => setDisplay('list')} className="btn btn-primary m-1"><i className="bi-list-ul"></i></button>
        <button onClick={(e) => setDisplay('grid')} className="btn btn-primary m-1"><i className="bi-grid-3x3-gap-fill"></i></button>
        </div>
        </div>

    <div className={display}>
      {adverts.map((card) => (
        <Card key={card.id} data={card} />
      ))}
      </div>
    </>
  );
}

export default Main;
//Ibrahem-Sadi//