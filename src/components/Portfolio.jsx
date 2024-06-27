import React from "react";
import mongodb from "../../public/mongodb.jpg";

export default function Portfolio() {

    const cardItems = [
        {
            id:1,
            logo:mongodb,
            name:"MongoDb"
        },
        {
            id:2,
            logo:mongodb,
            name:"MongoDb"
        },
        {
            id:3,
            logo:mongodb,
            name:"MongoDb"
        },
        {
            id:4,
            logo:mongodb,
            name:"MongoDb"
        },
        {
            id:2,
            logo:mongodb,
            name:"MongoDb"
        },
    ];

    return (
        <div className="max-w-screen-3xl container mx-auto px-4 md:px-20 mt-10">
            <div>
                <h1 className="text-3xl font-bold mb-5"> Portfolio </h1>
                <span className="underline font-semibold"> Feature Project </span>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
                    {
                        cardItems.map(({id,logo,name}) => (
                            <div id={id} className="md:w-[260px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"> <img src={logo} className="w-[120px] h-[120px] p-1 rounded-full border-[2px]" alt="MongoDB" />
                                <div>
                                    <div className="px-2 font-bold text-xl mb-2"> {name} </div>
                                    <p className="px-2 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                </div>
                                <div className="px-3 py-5 space-x-3 justify-around">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">Video</button>
                                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-3 py-2 rounded">Source Code</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}