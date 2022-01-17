import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import recepies from "../recepies";
import Image from "../components/Image";
import SingleRecepieInfo from "../components/SingleRecepieInfo";
import Ingredients from "../components/Ingredients";
import Steps from "../components/Steps";
import Spacer from "../components/Spacer";

import "../style/global.scss";
import "../style/recepie/recepie-page.scss";
import "../style/recepie/recepie-img.scss";

const SingleRecepie = () => {
  const { id } = useParams();
  const [singleRecepie, setRecepie] = useState({});
  const [foundRecepie, setFoundRecepie] = useState(false);

  useEffect(() => {
    recepies.map((recepie) => {
      if (recepie.id == id) {
        setRecepie(recepie);
        setFoundRecepie(true);
      }
    });
  }, [id]);

  if (!foundRecepie) return <h2>No recepie found</h2>;

  return (
    <main>
      <section className="section">
        <div className="page-header">
          <div className="page-title">
            <h2>Recepie</h2>
            <div className="underline"></div>
          </div>
          <Link to={`/`} className="link-btn">
            Back Home
          </Link>
        </div>

        <div className="recepie">
          <div className="recepie-header">
            <div className="header-container">
              <Image img={singleRecepie.img} />
              <div className="recepie-info">
                <SingleRecepieInfo recepie={singleRecepie} />
              </div>
            </div>
          </div>
          <div className="instructions">
            <Ingredients recepie={singleRecepie} />
            <Steps recepie={singleRecepie} />
          </div>
        </div>
      </section>
      <Spacer />
    </main>
  );
};

export default SingleRecepie;
