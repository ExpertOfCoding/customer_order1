import { BrowserRouter as Router, Link} from "react-router-dom";
const OnePage = ({focused:focused}) => {
    const button_list=["sinif","ogretmenler_odasi","idari","kantin"]
    const write_list = {
        "sinif": {
            "Affedersiniz, içeri girebilir miyim lütfen?": "Entschuldigen Sie, kann ich reinkommen?",
            "Soru sorabilir miyim?": "Kann ich eine Frage stellen?",
            "Tuvalete Gidebilir Miyim?": "Kann ich auf die Toilette gehen?",
            "Günaydın": "Guten Morgen",
            "Hoşçakalın": "Auf Wiedersehen",
            "İyi Tatiller": "Schöne Ferien",
            "İyi Dersler": "Gute Unterricht",
            "Teşekkür Ederim": "Danke"
            
        },
        "kantin": {
            "Günaydın Emin Abi": "Guten Morgen Emin Bruder",
            "... alabilir miyim": "Kann ich ... bekommen?",
            "Nasılsın": "Wie geht es dir?",
            "... Ne kadar": "Wie viel kostet ...?",
            "Kredi kartı ile ödeyeceğim": "Ich werde mit Kreditkarte bezahlen",
            "Nakit ile ödeyeceğim": "Ich werde bar bezahlen"
        },
        "ogretmenler_odasi": {
            "Merhabalar öğretmenim": "Hallo Lehrer",
            "... öğretmen ile görüşebilir miyim?": "Kann ich mit ... Lehrer sprechen?",
            "Sınav kağıdına bakabilir miyim?": "Kann ich die Prüfungsunterlagen sehen?",
            "İyi tatiller öğretmenim": "Schöne Ferien Lehrer",
            "Görüşürüz öğretmenim": "Auf Wiedersehen Lehrer",
            "Öğretmenim hakan öğretmen beni boks torbası olarak kullanıcakmış onun için geldim.": "Mein Lehrer Hakan möchte mich als Boxsack verwenden, deshalb bin ich gekommen."
        },
        "idari": {
            "Günaydınlar Metin Bey!": "Guten Morgen Herr Metin!",
            "Öğretmenim hastayım": "Mein Lehrer ist krank",
            "Yurda geçebilir miyim": "Kann ich ins Internat gehen?",
            "Hemşire hanım ile görüşebilir miyim": "Kann ich mit der Krankenschwester sprechen?",
            "Sevk raporu alabilir miyim": "Kann ich eine Überweisung bekommen?",
            "Geç Kağıdı alabilir miyim?": "Kann ich eine spätere Abgabefrist bekommen?",
            "Buyurun öğretmenim beni çağırmışsınız": "Sie haben mich gerufen, Herr Lehrer",
            "Rehber öğretmen ile görüşebilir miyim": "Kann ich mit dem Beratungslehrer sprechen?"
        }
    };
    
    
    return (
        <>
            <div className="container">
            {(focused!=="")&&<Link to={`/*`}><button className="back_button">Back To Menu</button></Link>}            
            <nav> 
            {button_list.map(kid=>{
                if(kid!==focused){
                    return(
                        <Link to={`/${kid}`}><button className={kid}>{kid}</button></Link> 
                    )
                }else{
                    return(<button className={`${kid} not_able`}>{kid}</button>)
                }
               })}
            </nav>  
            {(focused!=="")&&<div className="paragraph_container">
            
               <ul>
        {Object.keys(write_list[focused]).map((kid, index) => (
            <li key={index}>
                <p className="heades">{kid}</p>
                <p className="smaller">{write_list[focused][kid]}</p>
            </li>
        ))}
    </ul>
                
            </div>
            }

            </div>
        </>
    );
}
 
export default OnePage;