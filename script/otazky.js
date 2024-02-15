const economyQuestions = [
    { question: "Čo je HDP?", answer: "Hrubý domáci produkt" },
    { question: "Čo je inflácia?", answer: "Všeobecný nárast cien a pokles kupnej sily peňazí" },
    { question: "Čo je recesia?", answer: "Obdobie dočasného ekonomického poklesu, počas ktorého sa obchodná a priemyselná aktivita znižuje" },
    { question: "Čo je dopyt a ponuka?", answer: "Vzťah medzi množstvom tovaru, ktorý výrobcovia chcú predať za rôzne ceny, a množstvom, ktoré spotrebitelia chcú kúpiť" },
    { question: "Čo je fiškálna politika?", answer: "Spôsob, akým vláda upravuje svoje úrovne výdavkov a daňové sadzby na monitorovanie a ovplyvňovanie ekonomiky krajiny" },
    { question: "Čo je monopol?", answer: "Situácia, v ktorej jedna firma alebo skupina vlastní všetok alebo takmer celý trh pre daný typ produktu alebo služby" },
    { question: "Čo je burza?", answer: "Systém výmeny, kde sa obchodujú cenné papiere, ako sú akcie a dlhopisy" },
    { question: "Čo je Federálna rezerva?", answer: "Centrálny bankovný systém Spojených štátov" },
    { question: "Čo je alternatívna cena?", answer: "Strata potenciálneho zisku z iných alternatív, keď sa vyberie jedna alternatíva" },
    { question: "Čo je deficit rozpočtu?", answer: "Keď výdavky prevyšujú príjmy po určitý čas" },
    { question: "Čo je trh práce?", answer: "Miesto, kde sa stretávajú ponuka a dopyt po pracovnej sile" },
    { question: "Čo je daňový systém?", answer: "Súbor zákonov a pravidiel, ktoré určujú, ako sa zberajú a spravujú dane" },
    { question: "Čo je podiel hrubého zisku?", answer: "Pomer čistého zisku k tržbám" },
    { question: "Čo je účetníctvo?", answer: "Systém zaznamenávania a analyzovania finančných transakcií podniku" },
    { question: "Čo je outsourcing?", answer: "Proces získavania služieb od externých dodávateľov namiesto vytvárania a udržiavania vlastných zdrojov" },
    { question: "Čo je trhová ekonomika?", answer: "Systém, v ktorom rozhodnutia o alokácii zdrojov a distribúcii tovarov a služieb robia jednotlivci a firmy na základe trhových síl" },
    { question: "Čo je úroková miera?", answer: "Cena, ktorú pôžičkári platia za používanie peňazí, zvyčajne vyjadrená ako percento z pôžičky" },
    { question: "Čo je makroekonómia?", answer: "Štúdium ekonomiky ako celku, vrátane tém ako inflácia, nezamestnanosť a hospodársky rast" },
    { question: "Čo je mikroekonómia?", answer: "Štúdium ekonomického správania jednotlivcov a firiem, vrátane tém ako dopyt a ponuka na trhu" },
    { question: "Čo je dôchodkový systém?", answer: "Systém, ktorý poskytuje pravidelné platby jednotlivcom v dôchodkovom veku" }
];

const programmingQuestions = [
    { question: "Čo je premenná?", answer: "Kontajner na ukladanie hodnôt údajov" },
    { question: "Čo je cyklus?", answer: "Programátorská konštrukcia, ktorá opakuje blok kódu" },
    { question: "Čo je pole?", answer: "Údajová štruktúra, ktorá uchováva kolekciu prvkov" },
    { question: "Čo je objektovo orientované programovanie?", answer: "Programovacia paradigma založená na koncepte „objektov“, ktoré môžu obsahovať údaje a kód: údaje vo forme polí a kód vo forme metód alebo funkcií" },
    { question: "Čo je funkcia?", answer: "Kód, ktorý je možné volať podľa mena a môže mu byť poslaný údaj na spracovanie" },
    { question: "Čo je rekurzia?", answer: "Programátorská technika, kde sa funkcia volá sama" },
    { question: "Čo je trieda?", answer: "Plán pre vytvorenie objektov, ktorý poskytuje počiatočné hodnoty pre stav (členské premenné) a implementácie správania (metódy alebo funkcie členov)" },
    { question: "Čo je ladenie?", answer: "Proces hľadania a odstraňovania chýb v počítačovom programe" },
    { question: "Čo je verziovacia kontrola?", answer: "Správa zmien dokumentov, počítačových programov, veľkých webových stránok a iných kolekcií informácií" },
    { question: "Čo je API?", answer: "Rozhranie aplikácie, súbor podprogramových definícií, protokolov a nástrojov na tvorbu softvéru" },
    { question: "Čo je algoritmus?", answer: "Presne definovaný postup na riešenie problému alebo triedy problémov" },
    { question: "Čo je syntax programovacieho jazyka?", answer: "Sada pravidiel, ktoré určujú štruktúru a význam platných výrazov v danom programovacom jazyku" },
    { question: "Čo je platforma v softvérovom inžinierstve?", answer: "Hardvérové alebo softvérové prostredie, na ktorom beží softvér" },
    { question: "Čo je kompilácia?", answer: "Proces prekladu zdrojového kódu programu do strojového kódu" },
    { question: "Čo je distribuovaný systém?", answer: "Systém, ktorý sa skladá z viacerých počítačov alebo zariadení, ktoré spolupracujú na riešení problému" },
    { question: "Čo je databáza?", answer: "Organizovaná zbierka údajov, zvyčajne uložených elektronicky v počítači" },
    { question: "Čo je webová aplikácia?", answer: "Aplikácia, ktorá sa spúšťa na webovom prehliadači a používa internetové technológie na interakciu so serverom" },
    { question: "Čo je grafické používateľské rozhranie?", answer: "Rozhranie, ktoré umožňuje používateľom interakciu s počítačom pomocou grafických prvkov, ako sú ikony, okná a tlačidlá" },
    { question: "Čo je bezpečnosť softvéru?", answer: "Proces ochrany softvéru pred neoprávneným prístupom, poškodením alebo zmenou" },
    { question: "Čo je testovanie softvéru?", answer: "Proces overovania a overovania softvéru na to, či funguje správne a splňuje požiadavky" }
];

const computerGraphicsQuestions = [
    { question: "Čo je rasterizácia?", answer: "Proces konvertovania vektorových grafík na rastrové obrázky" },
    { question: "Čo je sledovanie lúčov?", answer: "Renderovacia technika na generovanie obrázka sledovaním cesty svetla ako pixelov na obrazovke" },
    { question: "Čo je antialiasing?", answer: "Technika používaná na vyhladenie hrubých okrajov v digitálnych obrázkoch" },
    { question: "Čo je polygon?", answer: "Uzavretý dvojrozmerný tvar tvorený priamkami" },
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