// Data: CMF Buds Pro 2 & Samsung Galaxy Buds Live
// Sources: Official specs, manufacturer pages, trusted reviews.

export interface ProductSpec {
  label: string;
  cmf: string;
  samsung: string;
  cmfBetter?: boolean;   // true = CMF má výhodu, false = Samsung, undefined = stejné
  note?: string;
}

export const SPECS: ProductSpec[] = [
  { label: "Typ konstrukce",   cmf: "In-ear, uzavřená",        samsung: "Semi-in-ear (open)", note: "Zásadní rozdíl: CMF těsní ucho, Galaxy Buds Live ne." },
  { label: "Měniče",          cmf: "11 mm + 6 mm (dual driver)", samsung: "12 mm (single driver)", cmfBetter: true, note: "CMF má dva měniče na každé sluchátko." },
  { label: "ANC",             cmf: "Hybrid, až 50 dB (výrobce)", samsung: "Open-type ANC (UL: nízké pásmo)", cmfBetter: true, note: "Deklarace výrobců. Open Live pouští víc okolí fyzicky." },
  { label: "Průhledný režim", cmf: "Ano",                       samsung: "Ano" },
  { label: "Kodeky",          cmf: "SBC, AAC, LDAC",           samsung: "SBC, AAC, Samsung Scalable", cmfBetter: true, note: "LDAC až 990 kbps. Scalable plněji se Samsung telefonem." },
  { label: "Bluetooth",       cmf: "5.3",                       samsung: "5.0", cmfBetter: true, note: "Oficiální CMF support: 5.3." },
  { label: "Multipoint",      cmf: "Ano (Dual Connection)",     samsung: "Ano" },
  { label: "Mikrofony",       cmf: "6 mikrofonů",               samsung: "3 mikrofony", cmfBetter: true },
  { label: "Výdrž sluchátka", cmf: "11 h AAC ANC off / 6,5 h ANC on", samsung: "8 h ANC off / 6 h ANC on", cmfBetter: true, note: "CMF: interní test AAC 50 %. Live: oficiální Newsroom. LDAC u CMF zkracuje výdrž." },
  { label: "Výdrž s pouzdrem",cmf: "43 h AAC ANC off / 26 h ANC on", samsung: "29 h ANC off / 21 h ANC on", cmfBetter: true },
  { label: "Nabíjení pouzdra",cmf: "USB-C", samsung: "USB-C + Qi", note: "Qi u Live je oficiální. Bezdrátové nabíjení CMF v oficiálních tabulích běžně není — neověřeno." },
  { label: "Smart Dial",      cmf: "Ano – otočný ovladač na pouzdře", samsung: "Ne", cmfBetter: true },
  { label: "Ovládání sluchátka", cmf: "Dotykové + přizpůsobitelné", samsung: "Dotykové + přizpůsobitelné" },
  { label: "IP odolnost",     cmf: "IP55 (sluchátka)",          samsung: "IPX2 (sluchátka)", cmfBetter: true },
  { label: "Aplikace",        cmf: "Nothing X (Android + iOS)", samsung: "Galaxy Wearable / Galaxy Buds", note: "iOS: Galaxy Buds app. Některé funkce Live jsou silnější v Galaxy telefonu." },
  { label: "Ear Tip Fit Test",cmf: "Ano",                       samsung: "Ne (open design – nepotřebuje)", note: "Samsung má otevřenou konstrukci, test usazení nedává smysl." },
  { label: "Low latency",     cmf: "Low Lag Mode",              samsung: "Gaming Mode" },
  { label: "Find My Earbuds", cmf: "Ano",                       samsung: "Ano (přes Galaxy Find)"},
  { label: "Spatial Audio",   cmf: "Ano",                       samsung: "Ne" , cmfBetter: true },
  { label: "Dirac Opteo",     cmf: "Ano",                       samsung: "Ne", cmfBetter: true },
  { label: "Hmotnost sluchátka", cmf: "4,9 g (výrobce)",       samsung: "5,6 g (výrobce)" },
  { label: "Cena (orientační)", cmf: "cca 1 400–1 700 Kč",     samsung: "cca 1 500–2 500 Kč (starší model)" },
];

export interface SoundDimension {
  label: string;
  cmfScore: number;    // 1-10
  samsungScore: number;
  desc: string;
  cmfNote: string;
  samsungNote: string;
}

export const SOUND_DIMENSIONS: SoundDimension[] = [
  {
    label: "Hloubka basů",
    cmfScore: 9, samsungScore: 6,
    desc: "Jak hluboko a silně sluchátko dokáže reprodukovat nízké frekvence.",
    cmfNote: "Ultra Bass 2.0 + uzavřená konstrukce = výrazný, kontrolovaný bas.",
    samsungNote: "Open design omezuje basové frekvence – méně fyzické síly.",
  },
  {
    label: "Čistota vokálů",
    cmfScore: 7, samsungScore: 8,
    desc: "Přirozenost a srozumitelnost lidského hlasu.",
    cmfNote: "6mm výškový měnič pomáhá, ale silný bas může překrývat středy.",
    samsungNote: "Otevřenější zvuk přirozeněji zdůrazňuje středy a vokály.",
  },
  {
    label: "Detaily výšek",
    cmfScore: 8, samsungScore: 7,
    desc: "Čistota cymbálů, sykavek a jemných zvukových detailů.",
    cmfNote: "Dedikovaný výškový měnič přináší čitelnější detaily.",
    samsungNote: "Jemnější, přirozenější výšky bez výrazného důrazu.",
  },
  {
    label: "Oddělení nástrojů",
    cmfScore: 7, samsungScore: 7,
    desc: "Jak dobře sluchátko dokáže odlišit různé nástroje v mixu.",
    cmfNote: "Dual driver pomáhá, ovšem u výrazného EQ basů může trpět.",
    samsungNote: "Otevřenější podání vytváří přirozené oddělení, ale méně hloubky.",
  },
  {
    label: "Prostorovost",
    cmfScore: 8, samsungScore: 7,
    desc: "Pocit šířky a prostoru – jak velký je zvukový obraz.",
    cmfNote: "Spatial Audio přidává virtuální prostorový efekt.",
    samsungNote: "Open design přirozeně rozšiřuje zvukový obraz.",
  },
  {
    label: "Frekvenční rovnováha",
    cmfScore: 6, samsungScore: 8,
    desc: "Jak vyváženě jsou zastoupeny všechny frekvenční složky.",
    cmfNote: "V-shape křivka s důrazem na basy a výšky – hudební, nikoliv neutrální.",
    samsungNote: "Přirozenější, flatter frekvenční průběh. Blíže neutrálnímu podání.",
  },
];

export interface Genre {
  id: string;
  name: string;
  cmfRating: "great" | "good" | "ok";
  samsungRating: "great" | "good" | "ok";
  cmfNote: string;
  samsungNote: string;
  tip: string;
}

export const GENRES: Genre[] = [
  {
    id: "edm", name: "EDM",
    cmfRating: "great", samsungRating: "ok",
    cmfNote: "Ultra Bass 2.0 a uzavřená konstrukce → kick a sub-bas mají sílu a fyzický dopad.",
    samsungNote: "Open design omezuje dopad nízkých frekvencí. EDM zní jemněji.",
    tip: "Posloucháš syntetické basy a masivní dropy? CMF je jasná volba.",
  },
  {
    id: "dnb", name: "Drum & Bass",
    cmfRating: "great", samsungRating: "good",
    cmfNote: "Rychlé bubny a hluboké basy → CMF drží dynamiku i rytmus.",
    samsungNote: "Čitelnější perkuse, ale méně basové síly.",
    tip: "V DnB je důležité odlišit kick od basové linky. CMF to zvládá.",
  },
  {
    id: "house", name: "House",
    cmfRating: "great", samsungRating: "good",
    cmfNote: "Four-to-the-floor groove a hluboké sub-basy sedí CMF perfektně.",
    samsungNote: "Prirozanejsi zvuk housu, ale bez vyraznejsiho nizeho razeneho efektu.",
    tip: "Záleží, zda preferuješ basový groove nebo přirozenost podání.",
  },
  {
    id: "techno", name: "Techno",
    cmfRating: "great", samsungRating: "good",
    cmfNote: "Industrální textura a silné basy → CMF zdůrazňuje chladnou atmosféru.",
    samsungNote: "Otevřenější zvuk snižuje hypnotický efekt repetitivních basů.",
    tip: "Pro noční poslech techna v metru jsou CMF + ANC ideální kombinace.",
  },
  {
    id: "rap", name: "Rap / Hip-Hop",
    cmfRating: "great", samsungRating: "good",
    cmfNote: "Bass-heavy instrumentály a čitelné vokály – CMF to dobře kombinuje.",
    samsungNote: "Čitelnější vokály, ale méně basového lesku pod rapem.",
    tip: "Pokud ti záleží na srozumitelnosti rýmů, Samsung vás překvapí.",
  },
  {
    id: "pop", name: "Pop",
    cmfRating: "good", samsungRating: "great",
    cmfNote: "Energický zvuk, ale V-shape křivka může přehánět basy u popu.",
    samsungNote: "Přirozenější vokály a vyváženost – pop zní přesně tak, jak má.",
    tip: "Pop je žánr, kde záleží na vokálech. Samsung boduje.",
  },
  {
    id: "rock", name: "Rock",
    cmfRating: "good", samsungRating: "good",
    cmfNote: "Dynamické rify a kytary, basy přidávají punch. Funguje dobře.",
    samsungNote: "Přirozené podání nástrojů, rock se přenáší věrohodněji.",
    tip: "Oba modely rock zvládnou. Záleží na preferenci – punch vs. přirozenost.",
  },
  {
    id: "ambient", name: "Ambient",
    cmfRating: "ok", samsungRating: "great",
    cmfNote: "ANC pomáhá k ponoření, ale výrazné basy mohou narušit jemné textury.",
    samsungNote: "Vzdušný, otevřený zvuk skvěle ladí s ambientem a prostorovostí.",
    tip: "Ambient je žánr prostoru a subtilnosti. Zde Samsung překvapí.",
  },
];

export interface Feature {
  id: string;
  title: string;
  subtitle: string;
  what: string;
  how: string;
  practical: string;
  samsungComparison: string;
  isUnique: boolean;
  uniqueNote: string;
}

export const CMF_FEATURES: Feature[] = [
  {
    id: "smart-dial",
    title: "Smart Dial",
    subtitle: "Mechanický otočný ovladač",
    what: "Fyzický otočný volič přímo na víku nabíjecího pouzdra. Není to dotykový panel ani tlačítko – je to skutečný mechanický prvek s hmatatelnou zpětnou vazbou.",
    how: "Otáčením ovládáš hlasitost. Stisknutím aktivuješ přehrávání/pauzu nebo přecházíš na další skladbu. Chování lze přizpůsobit v aplikaci Nothing X.",
    practical: "Ovládání hlasitosti bez vytažení telefonu. Rychlé a spolehlivé – funguje i v rukavicích.",
    samsungComparison: "Galaxy Buds Live nemají žádný fyzický ovladač na pouzdře. Veškeré ovládání je přes dotykové panely na sluchátkách nebo telefon.",
    isUnique: true,
    uniqueNote: "Jedná se o skutečně výjimečný prvek. Fyzický ovladač na nabíjecím pouzdře sluchátek je velmi neobvyklý – CMF Buds Pro 2 jsou jedny z mála sluchátek, které to nabízejí.",
  },
  {
    id: "dual-driver",
    title: "Dual Driver System",
    subtitle: "11 mm + 6 mm měnič v každém sluchátku",
    what: "Každé sluchátko obsahuje dva zvukové měniče: 11mm měnič pro nízké frekvence (bas) a 6mm měnič pro vysoké frekvence (výšky).",
    how: "Analogie: je to jako mít woofer a tweeter v jednom malém sluchátku. Každý měnič je optimalizovaný pro svůj frekvenční rozsah. Výsledek = méně kompromisů v přenosu zvuku.",
    practical: "Lepší oddělení basů a výšek. Výšky nejsou nuceny vycházet ze stejné membrány jako hluboké basy.",
    samsungComparison: "Galaxy Buds Live mají jeden 12mm měnič na každém sluchátku. Jeden měnič pokrývá celý frekvenční rozsah.",
    isUnique: false,
    uniqueNote: "Dual driver systém je v segmentu CMF výjimečný, ale není neznámý. Používají ho i jiné prémiové modely (Sony, Sennheiser). U sluchátek v této cenové kategorii je to nicméně méně běžné.",
  },
  {
    id: "ultra-bass",
    title: "Ultra Bass 2.0",
    subtitle: "Zesílení basových frekvencí",
    what: "Softwarová technologie, která zesiluje a optimalizuje výstup nízkých frekvencí – primárně sub-bas a bas.",
    how: "Kombinuje hardwarový výkon 11mm měniče se softwarovou EQ optimalizací. Výsledkem je výraznější, fyzicky citelný bas – zejména ve frekvencích pod 100 Hz.",
    practical: "Při poslechu EDM, DnB nebo rapu přináší výraznější 'punch' a pocit hloubky. Dobré pro basové line a kick drumy.",
    samsungComparison: "Galaxy Buds Live nemají ekvivalentní technologii. Jejich open design navíc přirozeně oslabuje basové frekvence.",
    isUnique: false,
    uniqueNote: "Zesílení basů je běžná funkce u mnoha sluchátek – nazývají ji různě (Extra Bass, BassBoost apod.). Ultra Bass 2.0 je marketingový název CMF pro jejich implementaci.",
  },
  {
    id: "dirac",
    title: "Dirac Opteo",
    subtitle: "Digitální optimalizace zvuku",
    what: "Dirac Research je švédská zvuková technologická firma. Jejich Opteo je systém, který digitálně optimalizuje frekvenční odpověď sluchátek – kompenzuje fyzická omezení měničů.",
    how: "Analyzuje chování konkrétních měničů a aplikuje přesné korekce v reálném čase. Cílem je rovnoměrnější frekvenční průběh a čistší zvuk v celém spektru.",
    practical: "Výsledek slyšíš jako přirozenější, méně 'barvený' zvuk s lepšími detaily – bez nutnosti vlastní ekvalizace.",
    samsungComparison: "Galaxy Buds Live Dirac Opteo nemají. Samsung aplikuje vlastní softwrové zpracování zvuku bez partnerství s Diracem.",
    isUnique: true,
    uniqueNote: "Dirac je renomovaná firma používaná v hi-fi produktech i autech (BMW, Volvo). Nasazení jejich technologie v cenové kategorii CMF je neobvyklé a je to skutečná přidaná hodnota.",
  },
  {
    id: "ldac",
    title: "LDAC",
    subtitle: "High-resolution Bluetooth kodek",
    what: "LDAC je Bluetooth audio kodek vyvinutý Sony. Přenáší až 990 kbps – přibližně 3× více dat než SBC nebo AAC.",
    how: "Více dat = méně komprese = věrnější přenos zvuku z telefonu do sluchátek. Největší rozdíl uslyšíš při poslechu hi-res audiozáznamů (FLAC, 24-bit soubory).",
    practical: "Pokud posloucháš hudbu ze Spotify nebo Apple Music v nejvyšší kvalitě, LDAC ti dá potenciálně lepší zvuk – ale rozdíl závisí na kvalitě zdrojového záznamu.",
    samsungComparison: "Galaxy Buds Live LDAC nepodporují. Podporují SBC a AAC. Výrazná nevýhoda pro uživatele, kteří poslouchají hi-res streamy.",
    isUnique: false,
    uniqueNote: "LDAC je dnes běžnou funkcí u prémiových sluchátek (Sony, některé modely od Sonos). V kategorii CMF je to ale nadstandardní a Samsung ho bohužel vynechal.",
  },
  {
    id: "adaptive-anc",
    title: "Adaptive ANC",
    subtitle: "Přizpůsobivé potlačení hluku",
    what: "ANC (Active Noise Cancellation) používá mikrofony a elektroniku k vytváření zvuku opačné fáze, který neutralizuje okolní hluk. Adaptivní verze se průběžně přizpůsobuje prostředí.",
    how: "Mikrofony měří aktuální hluk v okolí. Systém pak v reálném čase upravuje intenzitu a typ potlačení – jinak v metru, jinak v tiché místnosti.",
    practical: "Lepší potlačení v různých situacích – nemusíš manuálně přepínat úrovně. Pomáhá šetřit baterii v klidnějším prostředí.",
    samsungComparison: "Galaxy Buds Live mají ANC, ale jejich open design výrazně omezuje účinnost. Nemohou těsnit ucho, takže hluk proniká fyzicky – elektronické rušení ho dokáže kompenzovat jen částečně.",
    isUnique: false,
    uniqueNote: "Adaptivní ANC je dnes funkce v mid-range segmentu relativně běžná. Implementace CMF je ale považována za solidní. Galaxy Buds Live mají strukturální nevýhodu kvůli open designu.",
  },
  {
    id: "spatial",
    title: "Spatial Audio",
    subtitle: "Virtuální prostorový zvuk",
    what: "Spatial Audio vytváří dojem trojrozměrného zvukového prostoru pomocí HRTF (Head-Related Transfer Function) nebo podobných algoritmů.",
    how: "Zpracovává stereo signál tak, aby zvuky působily jako přicházející z různých stran, vzdáleností a výšek – podobně jako v kině nebo při poslechu reproduktorů.",
    practical: "Příjemné při filmech, hrách a specifické hudbě. Při hudební produkci může ale zavést nepřesnosti – prostor je syntetický, ne věrný originálu.",
    samsungComparison: "Galaxy Buds Live Spatial Audio v této podobě nenabízejí.",
    isUnique: false,
    uniqueNote: "Spatial Audio dnes nabízejí i Apple AirPods, Sony, Bose. Není to unikátní technologie, ale přídavná hodnota.",
  },
  {
    id: "low-lag",
    title: "Low Lag Mode",
    subtitle: "Nízká latence pro gaming a video",
    what: "Speciální režim přenosu zvuku optimalizovaný pro minimální zpoždění (latenci) mezi zdrojem a sluchátky.",
    how: "Režim upřednostní rychlost přenosu před maximální kvalitou kodeku. Konkrétní milisekundy výrobce v běžném spec sheetu negarantuje jako laboratorní údaj.",
    practical: "Vidíš akci na obrazovce a slyšíš zvuk (téměř) synchronně. Pro každodenní poslechu hudby rozdíl nepocítíš.",
    samsungComparison: "Galaxy Buds Live mají Gaming Mode — také snižuje latenci pro hry. Název je jiný, záměr podobný.",
    isUnique: false,
    uniqueNote: "Low latency / gaming mode je u TWS běžný. Neověřovali jsme konkrétní ms u CMF v laboratoři — výrobce číslo v běžných spec sheetech neuvádí jako garantovaný údaj.",
  },
  {
    id: "ear-tip",
    title: "Ear Tip Fit Test",
    subtitle: "Kontrola usazení nástavců",
    what: "Aplikace přehraje testovací tón a mikrofony ověří, jestli silikonový nástavec těsní v uchu.",
    how: "Špatný seal = unikající basy a slabší ANC. Test ti řekne, že máš sáhnout po jiné velikosti nástavce.",
    practical: "První věc po unboxingu, pokud CMF zní „tence“ nebo ANC skoro nic nedělá.",
    samsungComparison: "Galaxy Buds Live nástavce v kanálu nepoužívají. Fit test v tomto smyslu nedává smysl — usazení je tvar beanu, ne špunt.",
    isUnique: false,
    uniqueNote: "Fit test je u in-ear s ANC běžný (Sony, Bose, Apple). Užitečný, ne vzácný.",
  },
  {
    id: "dual-connection",
    title: "Dual Connection",
    subtitle: "Dvě zařízení najednou",
    what: "Sluchátka drží spojení s telefonem i notebookem. Hovor nebo přehrávání se přepne podle zdroje.",
    how: "Bluetooth multipoint. Nejsou to dvě nezávislé relace ve špičkové kvalitě současně — jde o rychlé přepínání kontextu.",
    practical: "Beat ve FL Studiu na PC, zpráva na telefonu. Nemusíš párovat znovu.",
    samsungComparison: "Galaxy Buds Live multipoint v ekosystému Samsung také nabízejí. Není to výsada CMF.",
    isUnique: false,
    uniqueNote: "Multipoint je v roce 2024 u mid-range sluchátek obvyklý. Rozdíl je spíš v tom, jak spolehlivě přepíná.",
  },
  {
    id: "wind",
    title: "Wind Noise Reduction 2.0",
    subtitle: "Vítr při hovoru",
    what: "Algoritmus má omezit turbulentní šum na mikrofonech, když jdeš po ulici nebo mluvíš venku.",
    how: "Mikrofony rozlišují poryvy od řeči. Neodstraní vítr úplně — snižuje maskování hlasu.",
    practical: "Hovory venku. Na mix hudby to nemá vliv.",
    samsungComparison: "Galaxy Buds Live mají vlastní zpracování hovorů a méně mikrofonů. Samsung marketingově používá jiné názvy; srovnatelný „2.0“ režim u Live není.",
    isUnique: false,
    uniqueNote: "Potlačení větru je běžná hovorová funkce. Číslo 2.0 je verze CMF, ne důkaz převahy.",
  },
  {
    id: "find",
    title: "Find My Earbuds",
    subtitle: "Pípnutí při hledání",
    what: "Aplikace spustí zvuk ve sluchátku, které je pořád v dosahu Bluetooth.",
    how: "Nejde o GPS tracker. Mimo dosah nebo s vybitou baterií to nepomůže.",
    practical: "Sluchátko ve gauči. Pouzdro samotné takhle nenajdeš.",
    samsungComparison: "Samsung nabízí hledání přes Galaxy Find / SmartThings — u Live závisí na ekosystému telefonu.",
    isUnique: false,
    uniqueNote: "Pípnutí v aplikaci je u TWS standard. Galaxy Find může být v Samsung telefonu silnější než CMF ekvivalent.",
  },
];

export interface DidYouKnow {
  number: string;
  title: string;
  desc: string;
}

export const DID_YOU_KNOW: DidYouKnow[] = [
  {
    number: "10 000×",
    title: "Pouzdro prošlo testem odolnosti",
    desc: "CMF testovalo víko pouzdra na 10 000 otevření a zavření. Smart Dial byl testován zvlášť. Je navrženo na každodenní použití.",
  },
  {
    number: "6",
    title: "Šest mikrofonů v jednom páru",
    desc: "3 mikrofony na každém sluchátku zajišťují redukci okolního hluku (ANC), potlačení větru a čistý přenos hlasu při hovoru.",
  },
  {
    number: "2+1",
    title: "Dva měniče na každé sluchátko",
    desc: "11mm membrána pro bas, 6mm pro výšky – podobný princip jako ve studiových monitorech, ale v miniaturním provedení.",
  },
  {
    number: "43 h",
    title: "Výdrž celého systému",
    desc: "Sluchátka vydrží 11 hodin, pouzdro dobije dalších 32 hodin. Dohromady 43 hodin poslechu bez přístupu k zásuvce.",
  },
  {
    number: "−45 dB",
    title: "Deklarované potlačení hluku",
    desc: "Výrobce uvádí potlačení až −45 dB. Reálné hodnoty závisí na prostředí, usazení a frekvencích – nízké hluky jsou obecně obtížnější.",
  },
  {
    number: "990 kbps",
    title: "LDAC přenáší 3× více dat než AAC",
    desc: "Standard AAC přenáší přibližně 320 kbps. LDAC od Sony, který CMF podporuje, zvládne až 990 kbps – větší věrnost zvuku pro hi-res streamy.",
  },
  {
    number: "0°",
    title: "Galaxy Buds Live nesedí v uchu jako klasické špunty",
    desc: "Samsung zvolil bean design, který leží na vstupu ušního kanálu – netěsní. Výhodou je větší pohodlí pro mnoho uživatelů, nevýhodou méně ANC.",
  },
  {
    number: "ANC ≠ zázrak",
    title: "ANC eliminuje hluk pomocí fyziky",
    desc: "Mikrofony zachytí okolní zvuk, elektronika vytvoří zvuk přesně opačné fáze a součet = ticho. Nejlépe funguje na konstantní nízkofrekvencní hluky (motor, letadlo).",
  },
];

export interface RecommendationOption {
  id: string;
  label: string;
  cmfPoints: number;
  samsungPoints: number;
  note: string;
}

export const REC_OPTIONS: RecommendationOption[] = [
  {
    id: "flstudio",
    label: "Tvořím hudbu ve FL Studiu",
    cmfPoints: 2, samsungPoints: 1,
    note: "CMF lépe poslouží jako kontrola hotového mixu na 'běžných' sluchátkách díky výraznějšímu charakteru zvuku.",
  },
  {
    id: "bass",
    label: "Miluju výrazné basy",
    cmfPoints: 3, samsungPoints: 0,
    note: "CMF je v tomto jasná volba – uzavřená konstrukce + Ultra Bass 2.0 + 11mm měnič.",
  },
  {
    id: "anc",
    label: "Chci co nejlepší ANC",
    cmfPoints: 3, samsungPoints: 0,
    note: "Open design Samsungu výrazně omezuje efektivitu ANC. CMF má těsnící špunty + adaptivní ANC.",
  },
  {
    id: "commute",
    label: "Poslouchám hudbu hlavně cestou",
    cmfPoints: 2, samsungPoints: 1,
    note: "Na cestách oceníš lepší ANC a výdrž CMF. Samsung nabídne více pohodlí při delší jízdě.",
  },
  {
    id: "comfort",
    label: "Chci pohodlná sluchátka na celý den",
    cmfPoints: 1, samsungPoints: 2,
    note: "Open design Samsungu je pro mnoho uživatelů pohodlnější při dlouhém nošení – žádný uzavřený pocit.",
  },
  {
    id: "calls",
    label: "Chci kvalitní mikrofony na hovory",
    cmfPoints: 2, samsungPoints: 1,
    note: "6 mikrofonů v CMF vs. 3 v Samsungu. CMF má také Wind Noise Reduction 2.0.",
  },
  {
    id: "detail",
    label: "Záleží mi na detailech a čistotě zvuku",
    cmfPoints: 1, samsungPoints: 2,
    note: "Samsung nabídne vyváženější, přirozenější zvukový obraz. CMF má V-shape s důrazem na basy.",
  },
  {
    id: "tech",
    label: "Chci zajímavé technologie",
    cmfPoints: 3, samsungPoints: 0,
    note: "CMF nabídne Smart Dial, Dirac Opteo, LDAC, Dual Driver, Spatial Audio. Galaxy Buds Live jsou starší model.",
  },
  {
    id: "value",
    label: "Chci co nejlepší poměr ceny a výkonu",
    cmfPoints: 3, samsungPoints: 1,
    note: "CMF Buds Pro 2 jsou novější a za srovnatelnou cenu nabídnou výrazně více funkcí.",
  },
];
