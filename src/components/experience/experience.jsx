import React from "react";
import Css from "./experience.module.css";
import Experiencecard from "./component/experiencecard";
function experience() {
  return (
    <>
      <div className={Css["experience"]}>
        <div className={Css["experience-section"]}>
          <h1>My Experience</h1>
          <p>
            There are many variations of passages ofLorem Ipsum available, but
            the majority havesuffered alteration in some form, by injected
            humour,
          </p>
        </div>
        <div className={Css["card-section"]}>
          <Experiencecard
            date="June-2002-2020"
            name="UX/UI Designer"
            type="Figma"
            body="There are many variations of passages of Lorem Ipsumav ailable, but the majority have suffered 
alteration in some "
          />
          <Experiencecard
            date="June-2002-2020"
            name="Product Designer"
            type="Adobe Photoshop"
            body="There are many variations of passages of Lorem Ipsumav ailable, but the majority have suffered 
alteration in some "
          />
          <Experiencecard
            date="June-2002-2020"
            name="Graphic Designer"
            type="Adobe Photoshop"
            body="There are many variations of passages of Lorem Ipsumav ailable, but the majority have suffered 
alteration in some "
          />
        </div>
      </div>
    </>
  );
}

export default experience;
