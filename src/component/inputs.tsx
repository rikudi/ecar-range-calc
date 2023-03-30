import { useState, useEffect } from "react";

//assign types for props
type OnCalculateType = (capacity: number, consumption: number, elecricityPrice: number) => void;
type InputsProps = 
{
    onCalculate: OnCalculateType;
}

const Inputs: React.FC<InputsProps> = ({onCalculate}) =>
{
    const [capacityVal, setCapacityVal] = useState<number>(0);
    const [electricityPrice, setElectricityPrice] = useState<number>(0);
    const [consumptionValue, setConsumptionValue] = useState<number>(0);
    const [costValue, setCostValue] = useState<number>(0);

    //useEffect hook calls onCalculate when input state values change
    //also a check if the values are not undefined
    useEffect(() => {
        if(capacityVal && consumptionValue && electricityPrice) 
        {
            onCalculate(capacityVal, consumptionValue, electricityPrice);
        }
    }, [capacityVal, consumptionValue, onCalculate])
    
    return (
        <div className="grid grid-cols-2 gap-12 place-content-center h-48 m-5 p-5 bg-slate-200">
            <div className="flex items-center">
                <h1 className="px-5 w-[170px] font-semibold">Akun kapasiteetti kW/h</h1>
                <input 
                    type="text" 
                    className="w-40 bg-slate-300 h-10 border-2 border-gray-300 px-4" 
                    placeholder="Akun kapasiteetti"
                    value={capacityVal}
                    onChange={(e) => {
                        const value = parseFloat(e.target.value);
                        setCapacityVal(isNaN(value) ? 0 : value);
                      }}
                />
            </div>
            <div className="flex items-center">
                <h1 className="px-5 w-[170px] font-semibold">Sähkön hinta c/kWh</h1>
                <input 
                    type="text" 
                    className="w-40 bg-slate-300 h-10 border-2 border-gray-300 px-4" 
                    placeholder="Sähkön hinta"
                    value={electricityPrice ? electricityPrice : 15} //default value for electricity 15c/kWh in Finland
                    onChange={(e) => {
                        const value = parseFloat(e.target.value);
                        setElectricityPrice(isNaN(value) ? 0 : value);
                      }}
                />
            </div>
            <div className="flex items-center">
                <h1 className="px-5 w-[170px] font-semibold">Sähkön kulutus kWh/100km</h1>
                <input 
                    type="text" 
                    className="w-40 bg-slate-300 h-10 border-2 border-gray-300 px-4" 
                    placeholder="Sähkön kulutus"
                    value={consumptionValue}
                    onChange={(e) => {
                        const value = parseFloat(e.target.value);
                        setConsumptionValue(isNaN(value) ? 0 : value);
                      }}
                />
            </div>
            <div className="flex items-center">
                <h1 className="px-5 w-[170px] font-semibold">Euroa/100km</h1>
                <input 
                    type="text"
                    className="w-40 bg-amber-200 h-10 border-2 border-gray-300 px-4" 
                    placeholder="Euroa/100km" 
                    value={costValue ? costValue : electricityPrice * consumptionValue / 100 + "€"}
                    onChange={(e) => {
                        const value = parseFloat(e.target.value);
                        setCostValue(isNaN(value) ? 0 : value);
                      }}
                />
            </div>
        </div>
    )
}

export default Inputs;