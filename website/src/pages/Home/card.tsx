import React, { FC } from "react";
import { Link } from "react-router-dom"

// TODO Implement link external or page.

interface cardProps {
    title: string;
    subText: string;
    linkText: string;
    link:String
}

const Card:FC<cardProps> = ({title,subText, linkText,link}) => {
    return ( 
        <div className="bg-gray-400 rounded-md px-6 py-4 w-full md:w-2/3">
            <h2 className="font-semibold text-2xl">{title}</h2>
            <p className="text-lg pb-3">{subText}</p>
            <button className="bg-gray-500 rounded-xl p-2 font-semibold text-lg">{linkText}</button>
        </div>
     );
}

export default Card;