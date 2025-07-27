import { useEffect, useState } from "react";
import { PluginContainer } from "vite";

function StockPrice ({ticker = ""}) {

    const[price,setPrice]=useState(null)
    const[loading,setLoading]=useState(true)
    const[error,setError]=useState(null)

    useEffect(()=>{
        const fetchStockPrice = async()=>{
            try {
                setLoading(true);
                const apiKey = "";
                const response = await fetch(
                    `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${apiKey}`
                );
                if(!response.ok)
                    throw new Error(`HTTP error! status: ${response.status}`);
                const data = await response.json();
                if(data["Global Quote"] && data["Global Quote"]["05.price"]){
                    setPrice(parseFloat(data["Global Quote"]["05.price"]).toFixed(2));
                    setError(null);
                } else {
                    setError("Could not retrieve price for this ticker.");
                    setPrice(null);
                }
            } catch (e) {
                setError(`Error fetching data: ${e.message}`);
                setPrice(null);
            } finally{
                setLoading(false);
            }
        };
        fetchStockPrice();
    },[ticker])
    return (
        <div className="bg-gradient-to-br from-white via-gray-50 to-gray-200">
            <h3>{!ticker ? "Add Ticker" : ticker}</h3>
            {loading && (
                <div className="flex items-center gap-2">
                    <span className="inline-block size-4 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></span>
                    <p className="text-blue-500 font-medium">Loading price...</p>
                </div>
            )}
            {error && <p className="text-red-500 font-semibold">{error}</p>}

            {!loading && !error && price !==null && <p className="text-3xl font-extrabold text-green-600 mt-2">{price}</p>}
            {!loading && !error && price ===null && <p className=" text-green-600 ">No Data Available</p>}
        </div>
    );
}

export default StockPrice;