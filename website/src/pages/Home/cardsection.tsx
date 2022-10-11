import Card from "./card";
import cardData from "./cardData";

function Cardsection() {
    return (  
        <div className="bg-slate-300 p-10 grid gap-10 md:gap-x-0 md:gap-y-10 grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-3 justify-items-center items-center">
            {cardData.map((item, index:number)=>{
                return <Card key={index+"card"} title={item.title} subText={item.subText} linkText={item.linkText} link={item.link}/>
            })}
        </div>
    );
}

export default Cardsection;