import React, { useState } from "react";

const Accordion = () => {
    const [isOpen, setIsOpen] = useState(0); 

    const handleToggle = (index) => {
        setIsOpen(isOpen === index ? null : index); 
    };

    const AccordionsList = [
        { title: 'First', para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, tempora?' },
        { title: 'Second', para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, tempora?' },
        { title: 'Third', para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, tempora?' },
        { title: 'Fourth', para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, tempora?' },
    ];

    return (
        <div className="h-screen p-4">
            <h1 className="text-center text-3xl pb-4">Accordion</h1>

            <div>
                {AccordionsList.map((e, index) => (
                    <div key={index} className="my-4 border border-blue-600 rounded overflow-hidden">
                        <h2
                            onClick={() => handleToggle(index)}
                            className="text-xl bg-blue-900 px-2 py-1 cursor-pointer text-white"
                        >
                            {e.title}
                        </h2>

                        <div
                            className={`transition-all duration-300 ease-in-out ${
                                isOpen === index ? "max-h-40 p-2" : "max-h-0 p-0"
                            }`}
                            style={{ overflow: "hidden" }}
                        >
                            <p>{e.para}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accordion;
