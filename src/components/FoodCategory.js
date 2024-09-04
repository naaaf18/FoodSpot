import ItemList from "./ItemList";

const FoodCategory = ({ data, showItems, setShowIndex }) => {
    const handleClick = () => {
        setShowIndex();
    };
    

    return (
        <div>
            {/* {header} */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-md p-4 ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <h3 className="font-bold text-lg ">
                        {data.title} ({data.itemCards.length})
                    </h3>
                    {showItems ? (
                        <div  className="text-xl">▼
                        </div>
                    ) : (
                        <div className="text-xl">▲</div>
                    )}
                </div>
                {showItems && <ItemList items={data.itemCards} />}
            </div>
            {/* accordian body */}
        </div>
    );
};

export default FoodCategory;
