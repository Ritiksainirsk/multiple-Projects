import React, { useState } from "react";
import "./style.css";

const AccordionItem = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };


//------------------------------------------------------------- 
//   document.addEventListener('mousedown', function(event) {
//     console.log('Mouse button pressed down');
//     setActiveIndex(null)
// });

// document.addEventListener('touchstart', function(event) {
//     console.log('Finger touched the screen');
// });
// ------------------------------------------------------------------

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div
            className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            {item.title}
          </div>
          {activeIndex === index && (
            <div className="accordion-content">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};



const Accordion = () => {

    const items = [
      { title: 'Accordion 1', content: 'Content for Accordion 1' },
      { title: 'Accordion 2', content: 'Content for Accordion 2' },
      { title: 'Accordion 3', content: 'Content for Accordion 3' },
    ];
    return (
    <div>
      <AccordionItem items={items} />
    </div>
  );
};



export default Accordion;


