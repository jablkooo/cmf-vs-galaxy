// Data: CMF Buds Pro 2, Samsung Galaxy Buds Live & Logitech G Pro X Wireless
// Sources: Official specs, manufacturer pages, trusted reviews.

export interface ProductSpec {
  label: string;
  cmf: string;
  samsung: string;
  logitech: string;
  cmfBetter?: boolean;     // true = CMF má výhodu, false = Samsung/Logitech, undefined = stejné
  samsungBetter?: boolean;
  logitechBetter?: boolean;
  note?: string;
}

export const SPECS: ProductSpec[] = [
  { label: "Typ konstrukce",   cmf: "In-ear, uzavřená",        samsung: "Semi-in-ear (open)",     logitech: "Over-ear, uzavřená (gaming headset)", note: "Zásadní rozdíl: CMF a Logitech těsní/ucloučí ucho, Galaxy Buds Live ne." },
  { label: "Měniče",          cmf: "11 mm + 6 mm (dual driver)", samsung: "12 mm (single driver)", logitech: "PRO-G 50 mm (hybrid mesh)", cmfBetter: true, note: "CMF má dva měniče na sluchátko. Logitech má velké 50mm drivery pro gaming/film." },
  { label: "ANC",             cmf: "Hybrid, až 50 dB (výrobce)", samsung: "Open-type ANC (UL: nízké pásmo)", logitech: "Ne (pouze pasivní izolace)", cmfBetter: true, note: "Logitech nemá ANC – využívá pasivní izolaci velkých sluchátek." },
  { label: "Průhledný režim", cmf: "Ano",                       samsung: "Ano",                      logitech: "Ne" },
  { label: "Kodeky",          cmf: "SBC, AAC, LDAC",           samsung: "SBC, AAC, Samsung Scalable", logitech: "N/A (LIGHTSPEED 2,4 GHz dongle)", note: "Logitech nepoužívá Bluetooth ani standardní kodeky – proprietární 2,4 GHz připojení." },
  { label: "Bezdrátová technologie", cmf: "Bluetooth 5.3",     samsung: "Bluetooth 5.0",            logitech: "LIGHTSPEED 2,4 GHz (USB dongle)", logitechBetter: true, note: "LIGHTSPEED = nižší latence než Bluetooth, ale vyžaduje USB dongle." },
  { label: "Multipoint",      cmf: "Ano (Dual Connection)",     samsung: "Ano",                      logitech: "Ne" },
  { label: "Mikrofony",       cmf: "6 mikrofonů (ANC + hovory)", samsung: "3 mikrofony + VPU",      logitech: "Odkládací boom mikrofon + Blue VO!CE", logitechBetter: true, note: "Logitech má nejlepší kvalitu hovorů díky boom mic a Blue VO!CE softwaru." },
  { label: "Výdrž sluchátka", cmf: "11 h AAC ANC off / 6,5 h ANC on", samsung: "8 h ANC off / 6 h ANC on", logitech: "20+ hodin (testováno ~21,5 h)", logitechBetter: true, note: "Logitech výrazně nejdelší výdrž, ale je to over-ear headset, ne TWS." },
  { label: "Výdrž s pouzdrem", cmf: "43 h AAC ANC off / 26 h ANC on", samsung: "29 h ANC off / 21 h ANC on", logitech: "N/A (bez pouzdra na dobíjení)", note: "Logitech se nabíjí kabelem, žádné pouzdro pro dodatečné nabíjení." },
  { label: "Nabíjení",        cmf: "USB-C (pouzdro)",           samsung: "USB-C + Qi (pouzdro)",     logitech: "USB-C (přímo na sluchátku)", note: "Logitech nabíjíte přímo na headsetu, ne na pouzdře." },
  { label: "Smart Dial / Ovladač na pouzdře", cmf: "Ano – otočný ovladač na víku pouzdra", samsung: "Ne", logitech: "Ne (ovládání na sluchátku)", cmfBetter: true },
  { label: "Ovládání",        cmf: "Dotykové + přizpůsobitelné", samsung: "Dotykové + přizpůsobitelné", logitech: "Tlačítka na sluchátku (hlasitost, mikrofon, G-shift)", note: "Logitech má fyzická tlačítka, ne dotykové panely." },
  { label: "IP odolnost",     cmf: "IP55 (sluchátka)",          samsung: "IPX2 (sluchátka)",       logitech: "Neuvedeno (není pro sport)", cmfBetter: true },
  { label: "Aplikace",        cmf: "Nothing X (Android + iOS)", samsung: "Galaxy Wearable / Galaxy Buds", logitech: "G HUB (Windows/macOS)", note: "Logitech G HUB jen na PC/Mac – žádná mobilní aplikace." },
  { label: "Ear Tip Fit Test", cmf: "Ano",                      samsung: "Ne (open design)",         logitech: "Ne (over-ear, vyměnitelné náušnice)" },
  { label: "Low latency / Gaming", cmf: "Low Lag Mode",         samsung: "Gaming Mode",              logitech: "LIGHTSPEED (pod 20 ms) + DTS Headphone:X 2.0", logitechBetter: true, note: "Logitech je navržen pro gaming – nejnižší latence a virtuální surround." },
  { label: "Find My / Sledování", cmf: "Ano",                   samsung: "Ano (Galaxy Find)",        logitech: "Ne" },
  { label: "Spatial Audio",   cmf: "Ano",                       samsung: "Ne",                       logitech: "DTS Headphone:X 2.0 (virtuální 7.1 surround)", logitechBetter: true, note: "Logitech nabízí gaming-orientovaný surround, ne filmový Spatial Audio." },
  { label: "Dirac Opteo / EQ", cmf: "Dirac Opteo + EQ",         samsung: "Vlastní EQ",               logitech: "Blue VO!CE (mikrofon) + EQ v G HUB", note: "Logitech Blue VO!CE je pro mikrofon, ne pro výstupní zvuk." },
  { label: "Hmotnost",        cmf: "4,9 g (sluchátko)",         samsung: "5,6 g (sluchátko)",        logitech: "~340 g (celé headset)", note: "Logitech je over-ear – váží 60–70× víc než TWS sluchátko." },
  { label: "Cena (orientační)", cmf: "cca 1 400–1 700 Kč",     samsung: "cca 1 500–2 500 Kč (starší model)", logitech: "cca 3 500–5 000 Kč", note: "Logitech je v jiné cenové kategorii (gaming headset)." },
  { label: "Primární účel",   cmf: "Hudba, ANC, denní nošení",  samsung: "Hudba, otevřený design, pohodlí", logitech: "Gaming, hlasová komunikace, dlouhé sezení", logitechBetter: true, note: "Každý produkt pro jiný primární use-case." },
];

export interface SoundDimension {
  label: string;
  cmfScore: number;    // 1-10
  samsungScore: number;
  logitechScore: number;
  desc: string;
  cmfNote: string;
  samsungNote: string;
  logitechNote: string;
}

export const SOUND_DIMENSIONS: SoundDimension[] = [
  {
    label: "Hloubka basů",
    cmfScore: 9, samsungScore: 6, logitechScore: 7,
    desc: "Jak hluboko a silně sluchátko dokáže reprodukovat nízké frekvence.",
    cmfNote: "Ultra Bass 2.0 + uzavřená konstrukce = výrazný, kontrolovaný bas.",
    samsungNote: "Open design omezuje basové frekvence – méně fyzické síly.",
    logitechNote: "50mm drivery dávají dobrou basovou odpověď, ale bez Ultra Bass boosti – přirozenější pro gaming/filmy.",
  },
  {
    label: "Čistota vokálů",
    cmfScore: 7, samsungScore: 8, logitechScore: 8,
    desc: "Přirozenost a srozumitelnost lidského hlasu.",
    cmfNote: "6mm výškový měnič pomáhá, ale silný bas může překrývat středy.",
    samsungNote: "Otevřenější zvuk přirozeněji zdůrazňuje středy a vokály.",
    logitechNote: "Pro gaming/comms optimalizováno – hlasy jasné, ale pro hudbu může chybět detaily.",
  },
  {
    label: "Detaily výšek",
    cmfScore: 8, samsungScore: 7, logitechScore: 6,
    desc: "Čistota cymbálů, sykavek a jemných zvukových detailů.",
    cmfNote: "Dedikovaný výškový měnič přináší čitelnější detaily.",
    samsungNote: "Jemnější, přirozenější výšky bez výrazného důrazu.",
    logitechNote: "Výšky záměrně ztlumené pro snížení únavy při dlouhém gaming – ne pro kritické poslechu.",
  },
  {
    label: "Oddělení nástrojů",
    cmfScore: 7, samsungScore: 7, logitechScore: 6,
    desc: "Jak dobře sluchátko dokáže odlišit různé nástroje v mixu.",
    cmfNote: "Dual driver pomáhá, ovšem u výrazného EQ basů může trpět.",
    samsungNote: "Otevřenější podání vytváří přirozené oddělení, ale méně hloubky.",
    logitechNote: "Gaming headset – separation není priorita. Zvuková scéna širší díky DTS:X, ale oddělení menší.",
  },
  {
    label: "Prostorovost",
    cmfScore: 8, samsungScore: 7, logitechScore: 8,
    desc: "Pocit šířky a prostoru – jak velký je zvukový obraz.",
    cmfNote: "Spatial Audio přidává virtuální prostorový efekt.",
    samsungNote: "Open design přirozeně rozšiřuje zvukový obraz.",
    logitechNote: "DTS Headphone:X 2.0 vytváří virtuální 7.1 surround – skvělý pro gaming, méně pro hudbu.",
  },
  {
    label: "Frekvenční rovnováha",
    cmfScore: 6, samsungScore: 8, logitechScore: 5,
    desc: "Jak vyváženě jsou zastoupeny všechny frekvenční složky.",
    cmfNote: "V-shape křivka s důrazem na basy a výšky – hudební, nikoliv neutrální.",
    samsungNote: "Přirozenější, flatter frekvenční průběh. Blíže neutrálnímu podání.",
    logitechNote: "V-shape pro gaming (bas pro exploze, výšky pro kroky). Není pro audiophile poslech.",
  },
];

export interface Genre {
  id: string;
  name: string;
  cmfRating: "great" | "good" | "ok";
  samsungRating: "great" | "good" | "ok";
  logitechRating: "great" | "good" | "ok";
  cmfNote: string;
  samsungNote: string;
  logitechNote: string;
  tip: string;
}

export const GENRES: Genre[] = [
  {
    id: "edm", name: "EDM",
    cmfRating: "great", samsungRating: "ok", logitechRating: "good",
    cmfNote: "Ultra Bass 2.0 a uzavřená konstrukce → kick a sub-bas mají sílu a fyzický dopad.",
    samsungNote: "Open design omezuje dopad nízkých frekvencí. EDM zní jemněji.",
    logitechNote: "Dobré basy pro gaming/filmy, ale chybí Ultra Bass boost. Pro party lepší CMF.",
    tip: "Posloucháš syntetické basy a masivní dropy? CMF je jasná volba. Logitech pro gamingové scény.",
  },
  {
    id: "dnb", name: "Drum & Bass",
    cmfRating: "great", samsungRating: "good", logitechRating: "good",
    cmfNote: "Rychlé bubny a hluboké basy → CMF drží dynamiku i rytmus.",
    samsungNote: "Čitelnější perkuse, ale méně basové síly.",
    logitechNote: "Rychlost a ударnost v pořádku, ale chybí ten sub-bas tlak.",
    tip: "V DnB je důležité odlišit kick od basové linky. CMF to zvládá nejlépe.",
  },
  {
    id: "house", name: "House",
    cmfRating: "great", samsungRating: "good", logitechRating: "ok",
    cmfNote: "Four-to-the-floor groove a hluboké sub-basy sedí CMF perfektně.",
    samsungNote: "Prirozanejsi zvuk housu, ale bez vyraznejsiho nizeho razeneho efektu.",
    logitechNote: "Groove slyšíš, ale chybí fyzikální dopad sub-basu.",
    tip: "Záleží, zda preferuješ basový groove (CMF) nebo přirozenost (Samsung). Logitech ne.",
  },
  {
    id: "techno", name: "Techno",
    cmfRating: "great", samsungRating: "good", logitechRating: "ok",
    cmfNote: "Industrální textura a silné basy → CMF zdůrazňuje chladnou atmosféru.",
    samsungNote: "Otevřenější zvuk snižuje hypnotický efekt repetitivních basů.",
    logitechNote: "Atmosféra ztrácí na tloušťce basů. Pro techno spíš CMF nebo Samsung.",
    tip: "Pro noční poslech techna v metru jsou CMF + ANC ideální kombinace.",
  },
  {
    id: "rap", name: "Rap / Hip-Hop",
    cmfRating: "great", samsungRating: "good", logitechRating: "good",
    cmfNote: "Bass-heavy instrumentály a čitelné vokály – CMF to dobře kombinuje.",
    samsungNote: "Čitelnější vokály, ale méně basového lesku pod rapem.",
    logitechNote: "Vokály jasné (pro comms), basy přítomné ale bez 'punchu'.",
    tip: "Pokud ti záleží na srozumitelnosti rýmů, Samsung vás překvapí. Logitech pro gaming rap.",
  },
  {
    id: "pop", name: "Pop",
    cmfRating: "good", samsungRating: "great", logitechRating: "ok",
    cmfNote: "Energický zvuk, ale V-shape křivka může přehánět basy u popu.",
    samsungNote: "Přirozenější vokály a vyváženost – pop zní přesně tak, jak má.",
    logitechNote: "Ne pro pop – záměrně ztlumené výšky a gaming EQ nevyhovují.",
    tip: "Pop je žánr, kde záleží na vokálech. Samsung boduje. Logitech ne.",
  },
  {
    id: "rock", name: "Rock",
    cmfRating: "good", samsungRating: "good", logitechRating: "good",
    cmfNote: "Dynamické rify a kytary, basy přidávají punch. Funguje dobře.",
    samsungNote: "Přirozené podání nástrojů, rock se přenáší věrohodněji.",
    logitechNote: "Kytary a bubny zní dostatečně, ale chybí detaily v výškách.",
    tip: "Oba modely rock zvládnou. Logitech taky – pro gaming rock/hardrock OK.",
  },
  {
    id: "ambient", name: "Ambient",
    cmfRating: "ok", samsungRating: "great", logitechRating: "ok",
    cmfNote: "ANC pomáhá k ponoření, ale výrazné basy mohou narušit jemné textury.",
    samsungNote: "Vzdušný, otevřený zvuk skvěle ladí s ambientem a prostorovostí.",
    logitechNote: "Prostorovost DTS:X zajímavá, ale chybí subtilita a rovnováha.",
    tip: "Ambient je žánr prostoru a subtilnosti. Zde Samsung překvapí.",
  },
  {
    id: "gaming", name: "Gaming (FPS/RPG)",
    cmfRating: "ok", samsungRating: "ok", logitechRating: "great",
    cmfNote: "ANC fajn, ale Bluetooth latence a chybí surround.",
    samsungNote: "Gaming Mode pomáhá, ale Bluetooth latence a open design nevhodné.",
    logitechNote: "LIGHTSPEED <20ms + DTS Headphone:X 2.0 + Blue VO!CE = gaming reference.",
    tip: "Pro gaming je Logitech v jiné lize. CMF/Samsung jen pro mobilní/casual hry.",
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
  logitechComparison: string;
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
    logitechComparison: "Logitech má ovládání na sluchátku (tlačítka + G-shift), ale nic na pouzdře – Logitech ani pouzdro na dobíjení nemá.",
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
    logitechComparison: "Logitech má jeden velký 50mm PRO-G driver na sluchátko s hybrid mesh konstrukcí. Pro gaming/film dostačuje, pro hudbu menší oddělení.",
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
    logitechComparison: "Logitech nemá specifický bass boost. 50mm drivery dávají přirozené basy, gaming EQ v G HUB umožňuje nastavení, ale není to 'Ultra Bass' styl.",
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
    logitechComparison: "Logitech má EQ v G HUB a DTS Headphone:X pro surround, ale žádnou Dirac technologii. Blue VO!CE je jen pro mikrofon.",
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
    logitechComparison: "Logitech nepoužívá Bluetooth – má LIGHTSPEED 2,4 GHz proprietární připojení. Žádné kodeky, přímý digitální přenos.",
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
    logitechComparison: "Logitech nemá ANC – jen pasivní izolaci velkých náušnic. Pro gaming v tichém pokoji stačí, v metru ne.",
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
    logitechComparison: "Logitech má DTS Headphone:X 2.0 – virtuální 7.1 surround pro gaming. Funguje jen na PC přes G HUB, ne pro hudbu/filmy na mobilu.",
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
    logitechComparison: "Logitech LIGHTSPEED má latenci pod 20 ms – výrazně nižší než Bluetooth Low Lag/Gaming Mode. Pro gaming v jiné lize.",
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
    logitechComparison: "Logitech má vyměnitelné náušnice (kožené/velurové), ale žádný fit test v aplikaci. Usazení se řeší fyzicky.",
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
    logitechComparison: "Logitech nepodporuje multipoint – LIGHTSPEED dongle je párován s jedním PC. Pro přepnutí musíte dongle fyzicky přesunout.",
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
    logitechComparison: "Logitech má boom mikrofon blízko úst – vítr není problém. Blue VO!CE dodatečně čistí signál. Nejlepší řešení ze tří.",
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
    logitechComparison: "Logitech nemá žádnou funkci hledání. Headset je velký, ztrácí se méně, ale aplikace to neřeší.",
    isUnique: false,
    uniqueNote: "Pípnutí v aplikaci je u TWS standard. Galaxy Find může být v Samsung telefonu silnější než CMF ekvivalent.",
  },
];

export interface LogitechFeature {
  id: string;
  title: string;
  subtitle: string;
  what: string;
  how: string;
  practical: string;
  cmfComparison: string;
  samsungComparison: string;
  isUnique: boolean;
  uniqueNote: string;
}

export const LOGITECH_FEATURES: LogitechFeature[] = [
  {
    id: "lightspeed",
    title: "LIGHTSPEED Wireless",
    subtitle: "Proprietární 2,4 GHz bezdrátová technologie",
    what: "Logitech vyvinul vlastní bezdrátový protokol LIGHTSPEED, který pracuje na 2,4 GHz pásmu přes USB dongle. Není to Bluetooth.",
    how: "Dongle zajišťuje 1:1 spojení s PC/Mac. Latence pod 20 ms, dosah do 15 m. Žádné párování, žádné přerušování – plug & play.",
    practical: "Nejlepší bezdrátové gamingové spojení na trhu. Latence srovnatelná s kabelem, bez kabelů.",
    cmfComparison: "CMF používá Bluetooth 5.3 – vyšší latence, multipoint, ale univerzálnější (telefon, tablet, PC).",
    samsungComparison: "Samsung Bluetooth 5.0 + Gaming Mode – stále Bluetooth latence, open design nevhodný pro gaming.",
    isUnique: true,
    uniqueNote: "LIGHTSPEED je zlatý standard pro gaming headsety. Konkurence (Razer HyperSpeed, SteelSeries Quantum) se snaží napodobit, Logitech to má nejlíp.",
  },
  {
    id: "blue-voice",
    title: "Blue VO!CE",
    subtitle: "Profesionální zpracování mikrofonu v reálném čase",
    what: "Software suite v G HUB, který aplikuje na signál z boom mikrofony: EQ, kompresor, limiter, de-esser, noise reduction, gate.",
    how: "Nastavíš v G HUB, profil se uloží do headsetu. Funguje i bez spuštěného softwaru (on-board paměť). Profesionální broadcast kvalita.",
    practical: "Tým slyší čistý hlas bez klávesnice, dýchání, pokození. Pro streamery, kompetitivní gaming, home office.",
    cmfComparison: "CMF má 6 mikrofónů + Wind Noise Reduction pro hovory venku. Blue VO!CE je v jiné lize – broadcast vs. consumer.",
    samsungComparison: "Samsung 3 mikrofony + VPU pro hovory. Dobré pro telefonáty, ne pro streaming/nahrávání.",
    isUnique: true,
    uniqueNote: "Blue VO!CE technologie pochází od Blue Microphones (vlastní Logitech). Je to ta samá techologie co v Blue Yeti mikrofonech – v headsetu.",
  },
  {
    id: "dts-x",
    title: "DTS Headphone:X 2.0",
    subtitle: "Virtuální 7.1 surround sound",
    what: "Objektový prostorový zvuk, který mapuje zvukové zdroje do virtuálního 7.1 kanálového prostoru.",
    how: "Hra/film pošle multikanálový zvuk (5.1/7.1/Atmos), DTS:X ho přepočítá pro stereonáušnice pomocí HRTF. Funguje jen na PC přes G HUB.",
    practical: "Ve FPS slyšíš kroky za sebou, výšku výstřelu, vzdálenost vozidel. V RPG/filmech kinožitější zážitek.",
    cmfComparison: "CMF má Spatial Audio (HRTF pro stereo), ale jen na mobilu v Nothing X. DTS:X je gaming-specifický a přesnější pro pozici.",
    samsungComparison: "Samsung nemá žádný surround. Open design dává přirozenou prostorovost, ale ne virtuální 7.1.",
    isUnique: false,
    uniqueNote: "DTS Headphone:X je licencovaná technologie. Logitech ji má exkluzivně v G HUB pro své headsety. Funguje jen na PC.",
  },
  {
    id: "swappable-pads",
    title: "Vyměnitelné náušnice",
    subtitle: "Kožené + velurové v balení",
    what: "V balení jsou dvě sady náušnic: leatherette (izolace, basy) a velour (pohodlí, dechování, pro brýle).",
    how: "Naušnice se stahují/mechanicky zámkově. Výměna trvá sekundy. Velour = menší uteplování, lepší pro dlouhé sezení a nosiče brýlí.",
    practical: "Přizpůsobíš si headset dle situace: leatherette pro gaming v noční tichosti, velour pro 8h sessiony a brýle.",
    cmfComparison: "CMF má v balení 3 velikosti silikonových špuntů. Podobná myšlenka (přizpůsobení usazení), ale jiný form factor.",
    samsungComparison: "Samsung má pevný bean tvar – žádná výměna. Sedí nebo nesedí.",
    isUnique: false,
    uniqueNote: "Většina gaming headsetů dává jen jednu sadu. Logitech dává obě – to je v cenové kategorii ~4000 Kč nadstandard.",
  },
  {
    id: "g-shift",
    title: "G-Shift / Makra",
    subtitle: "Druhá vrstva funkcí na tlačítkách",
    what: "Jedno tlačítko na sluchátku (G) funguje jako modifier – držíš ho a ostatní tlačítka dělají něco jiného (makra, hlasitost, mikrofon, DTS zap/vyp).",
    how: "Nastavíš v G HUB. Můžeš namapovat cokoliv: push-to-talk, přepínání EQ profilů, zapínání DTS:X, media controls.",
    practical: "Vše pod palcem bez minimalizace hry. Pro power usery a streamery neocenitelné.",
    cmfComparison: "CMF má přizpůsobitelné dotykové ovládání + Smart Dial. Logitech má fyzická tlačítka + G-Shift vrstvu.",
    samsungComparison: "Samsung má dotykové panely s přizpůsobením. Žádná G-Shift ekvivalent.",
    isUnique: false,
    uniqueNote: "G-Shift je Logitech specifický (i u myší/klávesnic). V headsetu méně známá, ale silná funkce.",
  },
  {
    id: "onboard-memory",
    title: "On-Board Memory",
    subtitle: "Profily uložené v headsetu",
    what: "EQ, Blue VO!CE, DTS:X, G-Shift nastavení se uloží přímo do headsetu. Fungují na jakémkoli PC bez instalace G HUB.",
    how: "Nastavíš v G HUB → 'Save to Device'. Headset si pamatuje až několik profilů. Přepínáš tlačítkem na sluchátku.",
    practical: "LAN party, turnaje, hra na cizím PC – tvoje nastavení microfonu a zvuku jde s tebou.",
    cmfComparison: "CMF nastavení v Nothing X cloud – závisí na telefonu/aplikaci. Logitech je nezávislý na softwaru po nastavení.",
    samsungComparison: "Samsung Galaxy Wearable – nastavení v telefonu/aplikaci. Bez telefonu se nedá měnit.",
    isUnique: false,
    uniqueNote: "On-board memory u headsetů není standard. Logitech to má díky gaming zaměření (turnaje, LAN).",
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
  {
    number: "<20 ms",
    title: "LIGHTSPEED latence pod 20 ms",
    desc: "Logitech LIGHTSPEED 2,4 GHz má latenci srovnatelnou s kabelem. Bluetooth (i Low Lag) dosahuje 30–100+ ms. Pro kompetitivní gaming je to zásadní.",
  },
  {
    number: "Blue",
    title: "Blue VO!CE = Blue Yeti v headsetu",
    desc: "Logitech koupil Blue Microphones. Blue VO!CE v G Pro X Wireless používá stejnou DSP technologii co profesionální Blue Yeti mikrofony.",
  },
  {
    number: "2 sady",
    title: "Dvě sady náušnic v balení",
    desc: "Leatherette pro izolaci a basy, velour pro pohodlí a brýle. Většina headsetů dává jen jednu sadu – Logitech dává výběr hned z krabice.",
  },
  {
    number: "21 h",
    title: "Reálná výdrž přes 21 hodin",
    desc: "SoundGuys testovali 21h 33min při 75 dB. Logitech deklaruje '20+ hodin' – reálné číslo je ještě lepší. Žádné pouzdro na dobíjení potřeba.",
  },
];

export interface RecommendationOption {
  id: string;
  label: string;
  cmfPoints: number;
  samsungPoints: number;
  logitechPoints: number;
  note: string;
}

export const REC_OPTIONS: RecommendationOption[] = [
  {
    id: "flstudio",
    label: "Tvořím hudbu ve FL Studiu",
    cmfPoints: 2, samsungPoints: 1, logitechPoints: 0,
    note: "CMF lépe poslouží jako kontrola hotového mixu na 'běžných' sluchátkách díky výraznějšímu charakteru zvuku. Logitech gaming EQ nepro hudbu.",
  },
  {
    id: "bass",
    label: "Miluju výrazné basy",
    cmfPoints: 3, samsungPoints: 0, logitechPoints: 1,
    note: "CMF je v tomto jasná volba – uzavřená konstrukce + Ultra Bass 2.0 + 11mm měnič. Logitech má dobré basy ale bez 'punchu'.",
  },
  {
    id: "anc",
    label: "Chci co nejlepší ANC",
    cmfPoints: 3, samsungPoints: 0, logitechPoints: 0,
    note: "Open design Samsungu výrazně omezuje efektivitu ANC. CMF má těsnící špunty + adaptivní ANC. Logitech nemá ANC.",
  },
  {
    id: "commute",
    label: "Poslouchám hudbu hlavně cestou",
    cmfPoints: 2, samsungPoints: 1, logitechPoints: 0,
    note: "Na cestách oceníš lepší ANC a výdrž CMF. Samsung nabídne více pohodlí. Logitech over-ear nepraktický do kapsy.",
  },
  {
    id: "comfort",
    label: "Chci pohodlná sluchátka na celý den",
    cmfPoints: 1, samsungPoints: 2, logitechPoints: 2,
    note: "Open design Samsungu pohodlný. Logitech velour pads + přepínání = také celodenní pohodlí (ale over-ear).",
  },
  {
    id: "calls",
    label: "Chci kvalitní mikrofony na hovory",
    cmfPoints: 2, samsungPoints: 1, logitechPoints: 3,
    note: "Logitech Blue VO!CE + boom mic = broadcast kvalita. CMF 6 mikrofony pro consumer hovory. Samsung pro telefonáty.",
  },
  {
    id: "detail",
    label: "Záleží mi na detailech a čistotě zvuku",
    cmfPoints: 1, samsungPoints: 2, logitechPoints: 0,
    note: "Samsung nabídne vyváženější, přirozenější zvukový obraz. CMF má V-shape. Logitech gaming V-shape nepro hudbu.",
  },
  {
    id: "tech",
    label: "Chci zajímavé technologie",
    cmfPoints: 3, samsungPoints: 0, logitechPoints: 3,
    note: "CMF: Smart Dial, Dirac, LDAC, Dual Driver. Logitech: LIGHTSPEED, Blue VO!CE, DTS:X, G-Shift, On-board memory. Různé kategorie.",
  },
  {
    id: "value",
    label: "Chci co nejlepší poměr ceny a výkonu",
    cmfPoints: 3, samsungPoints: 1, logitechPoints: 1,
    note: "CMF Buds Pro 2 – nejlepší value v TWS kategorii. Logitech – value v gaming headset kategorii (~4000 Kč).",
  },
  {
    id: "gaming",
    label: "Chci headset primárně pro gaming",
    cmfPoints: 0, samsungPoints: 0, logitechPoints: 3,
    note: "LIGHTSPEED <20ms + DTS:X 2.0 + Blue VO!CE = gaming reference. CMF/Samsung jen pro mobilní/casual hry.",
  },
];
