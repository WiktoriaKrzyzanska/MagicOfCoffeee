import React, { useState } from 'react';

function FAQ() {
    const [accordionOpens, setAccordionOpens] = useState([false, false, false, false, false]);

    const toggleAccordion = (index: number) => {
        const newAccordionOpens = [...accordionOpens];
        newAccordionOpens[index] = !newAccordionOpens[index];
        setAccordionOpens(newAccordionOpens);
    };

    return (
        <>
            <div className='mt-8 mb-8 ' >
                <h2 className="text-xl font-bold text-center mb-4">FAQ</h2>
                {accordionOpens.map((isOpen, index) => (
                    <div key={index} className='py-4 px-4 max-w-xl mx-auto bg-white shadow-md rounded-lg'>
                        <button
                            className="flex justify-between items-center w-full p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200 ease-in-out"
                            onClick={() => toggleAccordion(index)}
                        >
                            <span className="font-semibold text-gray-700">Donec ultricies ante non mollis sollicitudin. {index + 1}</span>
                            <span className="text-gray-500 text-lg">{isOpen ? '−' : '+'}</span>
                        </button>
                        <div className={`transition-all duration-500 ease-in-out ${
                            isOpen ? 'max-h-40 p-3' : 'max-h-0'
                        } overflow-hidden bg-gray-50 rounded-lg`}>
                            <p className='text-gray-600'>
                            Sed cursus turpis at velit porttitor imperdiet {index + 1}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
export default FAQ;
