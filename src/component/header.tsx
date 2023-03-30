const Header = () => 
{
    return (
    <div className="flex flex-col w-full pb-3 items-center bg-PointSGreen rounded stroke-orange-950">
        <div className="header flex flex-col items-center">
          <h1 className="text-white font-bold pt-5 text-4xl">Sähköauton range-laskuri</h1>
          <h3 className="text-white pt-5 w-[550px]">Laskuri, joka laskee EU-rengasmerkinnän taloudellisuus-luokitusten eri tasojen vaikutusta täyssähköauton toimintasäteeseen.</h3>
        </div>
    </div> 
    )
}

export default Header;