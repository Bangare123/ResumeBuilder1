import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import template1Img from "../pages/templates/Template1.png";
import template2Img from "../pages/templates/Template2.png";
import template3Img from "../pages/templates/Template3.png";

import "../resources/templates.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const templates = [
    {
      title: "Simple Resume",
      image: template1Img,
    },
    
    {
      title: "Highlighted Sections Resume",
      image: template2Img,
    },
    {
      title: "Semi-Highlighted Sections Resume",
      image: template3Img,
    },
  ];
  return (
    <DefaultLayout>
      <div className="row home">
        {templates.map((template, index) => {
          return (
            <div className="col-md-4">
              <div className="template">
                <img
                  src={template.image}
                  height="400"
                  alt="resumeTemplate"
                  style={{ width: "100%" }}
                />
                <div className="text">
                  <p>{template.title}</p>
                  <button onClick={() => navigate(`/templates/${index + 1}`)}>
                    TRY
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </DefaultLayout>
  );
}

export default Home;