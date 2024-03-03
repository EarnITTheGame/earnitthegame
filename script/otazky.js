const economyQuestions = [
    { question: "Čo je HDP?", answer: "Hrubý domáci produkt" },
    { question: "Čo je podnikanie?", answer: "Proces zakladania a riadenia podniku za účelom zisku" },
    { question: "Čo je inflácia?", answer: "Všeobecný nárast cien a pokles kupnej sily peňazí" },
    { question: "Čo je recesia?", answer: "Obdobie dočasného ekonomického poklesu, počas ktorého sa obchodná a priemyselná aktivita znižuje" },
    { question: "Čo je dopyt a ponuka?", answer: "Vzťah medzi množstvom tovaru, ktorý výrobcovia chcú predať za rôzne ceny, a množstvom, ktoré spotrebitelia chcú kúpiť" },
    { question: "Čo je fiškálna politika?", answer: "Spôsob, akým vláda upravuje svoje úrovne výdavkov a daňové sadzby na monitorovanie a ovplyvňovanie ekonomiky krajiny" },
    { question: "Čo je monopol?", answer: "Situácia, v ktorej jedna firma alebo skupina vlastní všetok alebo takmer celý trh pre daný typ produktu alebo služby" },
    { question: "Čo je burza?", answer: "Systém výmeny, kde sa obchodujú cenné papiere, ako sú akcie a dlhopisy" },
    { question: "Čo je Federálna rezerva?", answer: "Centrálny bankovný systém Spojených štátov" },
    { question: "Čo je deflácia?", answer: "Pokles úrovne cien tovarov a služieb v čase, čo vedie k zvyšovaniu kupnej sily peňazí" },
    { question: "Čo je ekonomický systém?", answer: "Súbor inštitúcií a mechanizmov, ktoré určujú, ako sú zdroje prerozdeľované a alokované v ekonomike" },
    { question: "Čo je alternatívna cena?", answer: "Strata potenciálneho zisku z iných alternatív, keď sa vyberie jedna alternatíva" },
    { question: "Čo je deficit rozpočtu?", answer: "Keď výdavky prevyšujú príjmy po určitý čas" },
    { question: "Čo je trh práce?", answer: "Miesto, kde sa stretávajú ponuka a dopyt po pracovnej sile" },
    { question: "Čo je daňový systém?", answer: "Súbor zákonov a pravidiel, ktoré určujú, ako sa zberajú a spravujú dane" },
    { question: "Čo je podiel hrubého zisku?", answer: "Pomer čistého zisku k tržbám" },
    { question: "Čo je bankovníctvo?", answer: "Odvetvie ekonomiky, ktoré sa zaoberá zberom, spracovaním a poskytovaním financií" },
    { question: "Čo je investícia?", answer: "Nákup aktív s cieľom získať príjem z budúcich výnosov" },
    { question: "Čo je akcia?", answer: "Podiel vlastníctva v spoločnosti, ktorý dáva vlastníkovi určité práva a nároky na časť ziskov spoločnosti" },
    { question: "Čo je dividend?", answer: "Podiel zisku spoločnosti, ktorý sa vypláca akcionárom v pomere k ich vlastníctvu akcií" },
    { question: "Čo je sociálny darwinizmus?", answer: "Teória, ktorá sa snaží aplikovať princípy prírodného výberu na ľudskú spoločnosť a ekonomiku" },
    { question: "Čo je dávka v nezamestnanosti?", answer: "Finančná pomoc poskytovaná nezamestnaným osobám vládou" },
    { question: "Čo je penzijný fond?", answer: "Investičný fond, ktorý zhromažďuje a spravuje peniaze pre budúce dôchodky" },
    { question: "Čo je environmentálna udržateľnosť?", answer: "Schopnosť ekonomiky udržať produkciu a spotrebu tovarov a služieb bez poškodenia životného prostredia" },
    { question: "Čo je komparatívna výhoda?", answer: "Schopnosť krajiny vyrábať určité tovary alebo služby efektívnejšie ako iné krajiny" },
    { question: "Čo je ekonomická nerovnosť?", answer: "Rozdiel v rozdelení bohatstva alebo príjmu medzi jednotlivcami alebo skupinami v ekonomike" },
    { question: "Čo je etika v ekonómii?", answer: "Štúdium morálnych princípov a hodnôt v súvislosti s ekonomickými rozhodnutiami a správaním" },
    { question: "Čo je HDP na obyvateľa?", answer: "Hrubý domáci produkt vydeliť počet obyvateľov krajiny, používa sa na meranie ekonomickej výkonnosti krajiny na jedného obyvateľa" },
    { question: "Čo je ekonomická recesia?", answer: "Obdobie hospodárskeho poklesu, keď HDP klesá počas niekoľkých po sebe idúcich štvrťrokov" },
    { question: "Čo je ekonomická expanzia?", answer: "Obdobie hospodárskeho rastu, keď HDP rastie počas niekoľkých po sebe idúcich štvrťrokov" },
    { question: "Čo je ekonomická depresia?", answer: "Veľmi vážna forma recesie, keď je pokles HDP výrazne dlhší a hlbší" },
    { question: "Čo je index spotrebiteľských cien (CPI)?", answer: "Miera, ktorá meria priemernej zmeny cien spotrebného koša tovarov a služieb spotrebitelia" },
    { question: "Čo je dopytová inflácia?", answer: "Typ inflácie spôsobený nárastom dopytu po tovaroch a službách bez súčasného nárastu ich ponuky" },
    { question: "Čo je účetníctvo?", answer: "Systém zaznamenávania a analyzovania finančných transakcií podniku" },
    { question: "Čo je outsourcing?", answer: "Proces získavania služieb od externých dodávateľov namiesto vytvárania a udržiavania vlastných zdrojov" },
    { question: "Čo je trhová ekonomika?", answer: "Systém, v ktorom rozhodnutia o alokácii zdrojov a distribúcii tovarov a služieb robia jednotlivci a firmy na základe trhových síl" },
    { question: "Čo je úroková miera?", answer: "Cena, ktorú pôžičkári platia za používanie peňazí, zvyčajne vyjadrená ako percento z pôžičky" },
    { question: "Čo je makroekonómia?", answer: "Štúdium ekonomiky ako celku, vrátane tém ako inflácia, nezamestnanosť a hospodársky rast" },
    { question: "Čo je mikroekonómia?", answer: "Štúdium ekonomického správania jednotlivcov a firiem, vrátane tém ako dopyt a ponuka na trhu" },
    { question: "Čo je dôchodkový systém?", answer: "Systém, ktorý poskytuje pravidelné platby jednotlivcom v dôchodkovom veku" }
];

const programmingQuestions = [
    { question: "Čo je programovanie?", answer: "Proces tvorby súborov inštrukcií, ktoré počítač vykonáva na riešenie určitého problému alebo vykonáva určitú úlohu." },
    { question: "Čo je programovací jazyk?", answer: "Formálny jazyk, ktorý počítač používa na komunikáciu s programátorom na vykonanie určitých úloh." },
    { question: "Čo je premenná?", answer: "Kontajner na ukladanie hodnôt údajov." },
    { question: "Čo je cyklus?", answer: "Programátorská konštrukcia, ktorá opakuje blok kódu." },
    { question: "Čo je pole?", answer: "Údajová štruktúra, ktorá uchováva kolekciu prvkov." },
    { question: "Čo je objektovo orientované programovanie?", answer: "Programovacia paradigma založená na koncepte „objektov“, ktoré môžu obsahovať údaje a kód: údaje vo forme polí a kód vo forme metód alebo funkcií." },
    { question: "Čo je funkcia?", answer: "Kód, ktorý je možné volať podľa mena a môže mu byť poslaný údaj na spracovanie." },
    { question: "Čo je rekurzia?", answer: "Programátorská technika, kde sa funkcia volá sama." },
    { question: "Čo je trieda?", answer: "Plán pre vytvorenie objektov, ktorý poskytuje počiatočné hodnoty pre stav (členské premenné) a implementácie správania (metódy alebo funkcie členov)." },
    { question: "Čo je ladenie?", answer: "Proces hľadania a odstraňovania chýb v počítačovom programe." },
    { question: "Čo je verziovacia kontrola?", answer: "Správa zmien dokumentov, počítačových programov, veľkých webových stránok a iných kolekcií informácií." },
    { question: "Čo je API?", answer: "Rozhranie aplikácie, súbor podprogramových definícií, protokolov a nástrojov na tvorbu softvéru." },
    { question: "Čo je algoritmus?", answer: "Presne definovaný postup na riešenie problému alebo triedy problémov." },
    { question: "Čo je syntax programovacieho jazyka?", answer: "Sada pravidiel, ktoré určujú štruktúru a význam platných výrazov v danom programovacom jazyku." },
    { question: "Čo je platforma v softvérovom inžinierstve?", answer: "Hardvérové alebo softvérové prostredie, na ktorom beží softvér." },
    { question: "Čo je kompilácia?", answer: "Proces prekladu zdrojového kódu programu do strojového kódu." },
    { question: "Čo je distribuovaný systém?", answer: "Systém, ktorý sa skladá z viacerých počítačov alebo zariadení, ktoré spolupracujú na riešení problému." },
    { question: "Čo je databáza?", answer: "Organizovaná zbierka údajov, zvyčajne uložených elektronicky v počítači." },
    { question: "Čo je webová aplikácia?", answer: "Aplikácia, ktorá sa spúšťa na webovom prehliadači a používa internetové technológie na interakciu so serverom." },
    { question: "Čo je grafické používateľské rozhranie?", answer: "Rozhranie, ktoré umožňuje používateľom interakciu s počítačom pomocou grafických prvkov, ako sú ikony, okná a tlačidlá." },
    { question: "Čo je bezpečnosť softvéru?", answer: "Proces ochrany softvéru pred neoprávneným prístupom, poškodením alebo zmenou." },
    { question: "Čo je testovanie softvéru?", answer: "Proces overovania a overovania softvéru na to, či funguje správne a splňuje požiadavky." },
    { question: "Čo je programátorský pseudokód?", answer: "Jazyk podobný programovaciemu jazyku, ktorý umožňuje popisovať algoritmy vo forme, ktorá je blízka ľudskému jazyku." },
    { question: "Čo je podmienka v programovaní?", answer: "Logická štruktúra, ktorá umožňuje vykonávanie rôznych činností na základe splnenia alebo nesplnenia určitého kritéria." },
    { question: "Čo je cyklus while?", answer: "Typ cyklu v programovaní, ktorý opakuje blok kódu, kým je podmienka vyhodnotená ako true." },
    { question: "Čo je cyklus for?", answer: "Typ cyklu v programovaní, ktorý opakuje blok kódu určený počet krát." },
    { question: "Čo je komentár v kóde?", answer: "Časť kódu, ktorá nie je vykonávaná a slúži na vysvetlenie účelu alebo funkcionality kódu." },
    { question: "Čo je programátorský debugovací nástroj?", answer: "Nástroj používaný programátormi na hľadanie a opravu chýb v kóde." },
    { question: "Čo je programátorská syntax?", answer: "Špecifická syntax používaná v danom programovacom jazyku na definíciu štruktúr a operácií." },
    { question: "Čo je programovací blok?", answer: "Súbor príkazov alebo inštrukcií, ktoré sú skupené spolu a vykonávajú sa ako jednotka." },
    { question: "Čo je programovací kompilátor?", answer: "Nástroj používaný na prekladanie zdrojového kódu do strojového kódu, ktorý počítač môže vykonať." },
    { question: "Čo je programovací interpret?", answer: "Nástroj používaný na priamu interpretáciu zdrojového kódu a jeho vykonávanie riadok po riadku." },
    { question: "Čo je programátorská knižnica?", answer: "Kolekcia funkcií alebo tried poskytovaných programovacím jazykom na zjednodušenie vývoja aplikácií." },
    { question: "Čo je programátorský framework?", answer: "Komplexná štruktúra alebo súbor nástrojov a knižníc, ktoré poskytujú základ pre vývoj softvéru." },
    { question: "Čo je programovací prostredie (IDE)?", answer: "Integrované vývojové prostredie, ktoré poskytuje programátorom nástroje na vývoj, ladenie a testovanie aplikácií." },
    { question: "Čo je programátorská pseudonymizácia?", answer: "Technika v programovaní, ktorá umožňuje skryť alebo abstrahovať komplexné funkcionality za jednoduchým rozhraním." },
    { question: "Čo je programátorská abstrakcia?", answer: "Proces oddeľovania detailov implementácie od funkcionality, čo umožňuje jednoduchšie použitie a zmeny kódu." },
    { question: "Čo je programátorská dedičnosť?", answer: "Vlastnosť objektovo orientovaného programovania, ktorá umožňuje triede zdediť vlastnosti a metódy inej triedy." },
    { question: "Čo je programátorská polymorfizmus?", answer: "Vlastnosť objektovo orientovaného programovania, ktorá umožňuje objektom správať sa rôznymi spôsobmi v závislosti od ich typu alebo triedy." },
    { question: "Čo je programátorská enkapsulácia?", answer: "Vlastnosť objektovo orientovaného programovania, ktorá umožňuje skryť detaily implementácie a poskytnúť prístup len k určitým častiam kódu." },
    { question: "Čo je programátorská modulárna štruktúra?", answer: "Technika v programovaní, ktorá umožňuje rozdelenie kódu do samostatných modulov alebo funkčných blokov, čo zjednodušuje správu a údržbu kódu." },
    { question: "Čo je programátorská efektivita?", answer: "Schopnosť programátora vytvárať efektívny a optimalizovaný kód s minimálnym využitím zdrojov." },
    { question: "Čo je programátorská bezpečnosť?", answer: "Vlastnosť softvéru, ktorá zabraňuje neoprávnenému prístupu, zmenám alebo poškodeniu údajov alebo funkcionality." },
    { question: "Čo je to podmienený príkaz?", answer: "Podmienený príkaz je programovací konštrukt, ktorý vykonáva určitý blok kódu iba v prípade, že je splnená určitá podmienka." },
    { question: "Čo je to premenná v programovaní?", answer: "Premenná v programovaní je symbolické označenie pre hodnotu, ktorá sa môže meniť počas behu programu." },
    { question: "Čo je to interpretácia v programovaní?", answer: "Interpretácia je proces priameho vykonávania zdrojového kódu programu riadok po riadku." },
    { question: "Čo je to syntax error?", answer: "Syntax error je chyba vo formálnych pravidlách programovacieho jazyka, ktorá zabraňuje správnemu vykonaniu programu." },
    { question: "Čo je to cyklomatická zložitosť?", answer: "Cyklomatická zložitosť je miera zložitosti programu založená na počte rôznych cest v jeho kontrolnom toku." },
    { question: "Čo je to programový bug?", answer: "Programový bug je chyba alebo nežiaduce správanie programu, ktoré je výsledkom programátorského alebo návrhového chybenia." },
    { question: "Čo je to deklarácia premennej?", answer: "Deklarácia premennej je proces definovania jej typu a názvu pred jej prvým použitím v programe." },
    { question: "Čo je to komentár v kóde?", answer: "Komentár v kóde je text, ktorý slúži na vysvetlenie účelu alebo funkcionality určitého časti kódu a nie je vykonávaný počítačom." },
    { question: "Čo je to programátorský pseudokód?", answer: "Programátorský pseudokód je spôsob popisu algoritmov pomocou štruktúrovaných textových popisov bez použitia konkrétnej syntaxe programovacieho jazyka." },
    { question: "Čo je to odľahčená metóda v programovaní?", answer: "Odľahčená metóda v programovaní je technika, pri ktorej sa zložitý úkon rozdelí do menších, jednoduchších úkonov." },
    { question: "Čo je to programátorský modul?", answer: "Programátorský modul je samostatná časť programu, ktorá obsahuje logický blok kódu so zoskupenými úlohami alebo funkciami." },
    { question: "Čo je to programátorský protokol?", answer: "Programátorský protokol je sada pravidiel a postupov, ktoré určujú komunikáciu medzi rôznymi časťami programu alebo medzi rôznymi programami." },
];

const computerGraphicsQuestions = [
    { question: "Čo je rasterizácia?", answer: "Proces konvertovania vektorových grafík na rastrové obrázky" },
    { question: "Čo je sledovanie lúčov?", answer: "Renderovacia technika na generovanie obrázka sledovaním cesty svetla ako pixelov na obrazovke" },
    { question: "Čo je antialiasing?", answer: "Technika používaná na vyhladenie hrubých okrajov v digitálnych obrázkoch" },
    { question: "Čo je polygon?", answer: "Uzavretý dvojrozmerný tvar tvorený priamkami" },
    { question: "Čo je počítačová grafika?", answer: "Počítačová grafika je oblasť informatiky zameraná na tvorbu a manipuláciu grafických obrázkov a animácií pomocou počítača." },
    { question: "Čo je pixel?", answer: "Pixel (z angl. picture element) je základná jednotka obrazu v počítačovej grafike, malý farebný bod, z ktorého sa skladá digitálny obraz." },
     { question: "Čo je animácia?", answer: "Animácia je proces vytvárania pohyblivých obrázkov alebo scén zobrazovaných v rýchlom sledovaní, čím vzniká ilúzia pohybu." },
    { question: "Čo je textúrovanie?", answer: "Textúrovanie je proces priraďovania textúry (obrázka) na povrch trojrozmerného modelu, čím sa modelu dodáva vizuálna detailnosť." },
    { question: "Čo je shader?", answer: "Shader je malý program používaný v počítačovej grafike na definovanie vzhľadu a správania sa povrchov trojrozmerných modelov." },
    { question: "Čo je antialiasing?", answer: "Antialiasing je technika používaná v počítačovej grafike na znižovanie alebo eliminovanie zubatosti (aliasingu) v grafických obrazoch." },
    { question: "Čo je rasterová grafika?", answer: "Rasterová grafika (bitmapová grafika) je spôsob reprezentácie grafických obrázkov pomocou siete pixelov, kde každý pixel má priradenú farbu." },
    { question: "Čo je vektorová grafika?", answer: "Vektorová grafika je spôsob reprezentácie grafických obrázkov pomocou geometrických objektov (ako sú čiary, oblúky, polygóny), ktoré sú definované matematickými vzťahmi." },
    { question: "Čo je 2D grafika?", answer: "2D grafika je druh počítačovej grafiky, ktorý sa zameriava na tvorbu a manipuláciu s dvorozmernými obrázkami alebo scénami." },
    { question: "Čo je 3D grafika?", answer: "3D grafika je druh počítačovej grafiky, ktorý sa zameriava na tvorbu a manipuláciu s trojrozmernými modelmi a scénami." },
    { question: "Čo je stínovanie?", answer: "Proces pridávania farby do počítačového generovaného obrazu na vytvorenie realistického vzhľadu" },
    { question: "Čo je mapovanie textúry?", answer: "Proces aplikácie dvojrozmerného obrazu na trojrozmerný povrch" },
    { question: "Čo je renderovanie?", answer: "Proces generovania obrazu z modelu pomocou počítačových programov" },
    { question: "Čo je počítačová animácia?", answer: "Proces tvorby pohyblivých obrazov pomocou počítača" },
    { question: "Čo je GPU?", answer: "Grafický spracovateľský čip, špecializovaný elektronický obvod určený na urýchlenie vytvárania a renderovania obrazov" },
    { question: "Čo sú vektorové grafiky?", answer: "Grafiky, ktoré sú definované pomocou 2D bodov spojených čiarami a krivkami tvoriacimi tvary" },
    { question: "Čo je vykresľovanie zložených scén?", answer: "Proces vytvárania obrazu z veľkého množstva komplexných objektov a scén" },
    { question: "Čo je farebná modelácia?", answer: "Proces určovania farby pre každý bod v digitálnom obraze" },
    { question: "Čo je animovaný film?", answer: "Film, ktorý je vytvorený ako postupnosť statických obrazov, ktoré sa rýchlo menia, aby vytvorili ilúziu pohybu" },
    { question: "Čo je simulácia fyziky?", answer: "Proces vytvárania fyzikálne správneho správania sa objektov v počítačovom prostredí" },
    { question: "Čo je post-processing efekt?", answer: "Efekt, ktorý sa aplikuje na obraz po renderovaní scény, aby sa dosiahol želaný vizuálny vzhľad" },
    { question: "Čo je modelovanie 3D objektov?", answer: "Proces vytvárania digitálneho modelu objektu s tromi rozmermi" },
    { question: "Čo je animačný storyboard?", answer: "Séria kreslených obrázkov alebo ilustrácií, ktoré popisujú postupnosť udalostí v animovanom filme" },
    { question: "Čo je textúrovanie v reálnom čase?", answer: "Technika aplikácie textúr na 3D modely, ktorá umožňuje zobrazenie detailných textúr bez významného poklesu výkonu" },
    { question: "Čo je rendering v reálnom čase?", answer: "Proces generovania obrázkov tak rýchlo, že sa zdá, že sa deje v reálnom čase" },
    { question: "Čo je ray tracing?", answer: "Ray tracing je technika používaná v počítačovej grafike na vytváranie fotorealistických obrázkov simulovaním skúmania cesty svetla v scéne." },
    { question: "Čo je grafický driver?", answer: "Grafický ovládač (driver) je softvér, ktorý umožňuje komunikáciu medzi operačným systémom a grafickým hardvérom, čo umožňuje správne zobrazovanie grafických informácií." },
    { question: "Čo je grafická karta?", answer: "Grafická karta je hardvérové zariadenie v počítači, ktoré je zodpovedné za výpočet a zobrazovanie grafiky na monitore." },
    { question: "Čo je grafický editor?", answer: "Grafický editor je softvér používaný na tvorbu, úpravu a manipuláciu s grafickými obrázkami a ich elementami." },
    { question: "Čo je grafický formát?", answer: "Grafický formát je špecifikácia, ktorá určuje spôsob kódovania a ukladania digitálnych obrázkov." },
    { question: "Čo je interaktívna počítačová grafika?", answer: "Počítačová grafika, ktorá reaguje na interakciu používateľa, ako sú dotyky, kliknutia a gestá" }
];

function getRandomQuestion(questions) {
    return questions[Math.floor(Math.random() * questions.length)];
}

document.getElementById("economyBtn").addEventListener("click", function() {
    const question = getRandomQuestion(economyQuestions);
    displayQuestion(question);
});

document.getElementById("programmingBtn").addEventListener("click", function() {
    const question = getRandomQuestion(programmingQuestions);
    displayQuestion(question);
});

document.getElementById("computerGraphicsBtn").addEventListener("click", function() {
    const question = getRandomQuestion(computerGraphicsQuestions);
    displayQuestion(question);
});

function displayQuestion(question) {
    document.getElementById("question").innerText = question.question;
    document.getElementById("questionContainer").style.display = "block";
    document.getElementById("showAnswerBtn").style.display = "inline";
    document.getElementById("answer").style.display = "none";
    document.getElementById("showAnswerBtn").onclick = function() {
        document.getElementById("answer").innerText = question.answer;
        document.getElementById("answer").style.display = "block";
        document.getElementById("showAnswerBtn").style.display = "none";
    };
}
