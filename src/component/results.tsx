import Classes from '../imgs/classes.png'

interface ResultsProps {
  results: number[];
  rangePerEuro : number[];
}

const bgColors = ['bg-A', 'bg-B', 'bg-C', 'bg-D', 'bg-E'];
const placeholder = "0";

const Results: React.FC<ResultsProps> = ({ results, rangePerEuro }) => {
  return (
    <div className="flex flex-col justify-center bg-slate-200 p-4 mt-6 mb-24">
      <h1 className='flex self-center'>Keskimääräinen toimintasäde eri vierintävastus-luokilla</h1>
      <div className="grid grid-cols-2 mt-7">
        <div className="image pr-7">
          <img src={Classes} alt='Tyre Classes'></img>
        </div>
        <div className="grid">
          {bgColors.map((bgColor, index) => (
            <div key={index} className="row-wrap flex justify-between items-center py-2">
              <div className={`flex justify-center items-center w-[75px] h-[30px] ${bgColor} text-black font-semibold`}>
              {results.length ? results[index].toFixed(0) + "km" : placeholder} 
              </div>
              <div className={`flex justify-center items-center justify-self-end w-[50px] h-[20px] ${bgColor} text-black text-sm font-semibold`}>
                {rangePerEuro.length ? rangePerEuro[index].toFixed(1) + "km" : placeholder}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;

/*const Results: React.FC<ResultsProps> = ({ results }) => 
{
    return (
        <div className="flex flex-col justify-center bg-slate-200 p-4 mt-6 mb-24">
            <h1 className='flex self-center'>Keskimääräinen toimintasäde eri vierintävastus-luokilla</h1>
            <div className="grid grid-cols-2 mt-7">
                <div className="image pr-7">
                    <img src={Classes} alt='Tyre Classes'></img>
                </div>
                <div className="grid">
                    <div className="row-wrap flex justify-between items-center py-2">
                        <div className="flex justify-center items-center w-[75px] h-[30px] bg-A text-black font-semibold">
                            384km
                        </div>
                        <div className="flex justify-center items-center justify-self-end w-[50px] h-[20px] bg-A text-black font-semibold">
                            31
                        </div>
                    </div>
                    <div className="row-wrap flex justify-between items-center py-2">
                        <div className="flex justify-center items-center w-[75px] h-[30px] bg-B text-black font-semibold">
                            384km
                        </div>
                        <div className="flex justify-center items-center justify-self-end w-[50px] h-[20px] bg-B text-black font-semibold">
                            31
                        </div>
                    </div>
                    <div className="row-wrap flex justify-between items-center py-2">
                        <div className="flex justify-center items-center w-[75px] h-[30px] bg-C text-black font-semibold">
                            384km
                        </div>
                        <div className="flex justify-center items-center justify-self-end w-[50px] h-[20px] bg-C text-black font-semibold">
                            31
                        </div>
                    </div>
                    <div className="row-wrap flex justify-between items-center py-2">
                        <div className="flex justify-center items-center w-[75px] h-[30px] bg-D text-black font-semibold">
                            384km
                        </div>
                        <div className="flex justify-center items-center justify-self-end w-[50px] h-[20px] bg-D text-black font-semibold">
                            31
                        </div>
                    </div>
                    <div className="row-wrap flex justify-between items-center py-2">
                        <div className="flex justify-center items-center w-[75px] h-[30px] bg-E text-black font-semibold">
                            384km   
                        </div>
                        <div className="flex justify-center items-center justify-self-end w-[50px] h-[20px] bg-E text-black font-semibold">
                            31
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Results;*/