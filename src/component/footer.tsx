const Footer = () => 
{
    return (
        <div className="footer flex flex-col justify-center h-[150px] bg-PointSGreen p-5 text-white italic">
            <p className="pb-3 font-light">Laskuri perustuu Euroopan parlamentin ja neuvoston asetukseen 2020/740 renkaiden merkitsemisestä polttoainetaloudellisuuden osalta,
                Liite no 1, polttoainetaloudellisuuden luokka suhteessa vierintävastuskertoimeen RRC (N/kN), (A RRC ≤6,5, E ≥10,6).
                Laskuri on vain suuntaa antava, eikä tämä sovellus vastaa tietojen oikeellisuudesta.</p>
            <p className="font-semibold">© 2023 Electir Car Range Calculator by Riku Kaartoaho</p>
        </div>
    );
}

export default Footer;