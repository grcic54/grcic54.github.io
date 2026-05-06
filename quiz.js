const pitanja = [
    {
        tekst: "Što mislite o ubojstvu starice lihvarke Aljone Ivanovne?",
        opcije: [
            { tekst: "To nije zločin; njezina smrt spasit će stotine mladih života.", lik: "raskoljnikov" },
            { tekst: "To je strašan grijeh! Nitko nema pravo oduzeti ljudski život.", lik: "sonja" },
            { tekst: "Zločin je društveno nekoristan i loš za osobnu reputaciju.", lik: "luzin" }
        ]
    },
    {
        tekst: "Kako biste reagirali da u kafiću sretnete pijanog i propalog Marmeladova?",
        opcije: [
            { tekst: "Saslušat ću njegovu ispovijest i dati mu zadnji novac za obitelj.", lik: "raskoljnikov" },
            { tekst: "Pokušat ću mu konkretno pomoći, otpratiti ga kući i trijezniti ga.", lik: "razumihin" },
            { tekst: "Promatrat ću ga s gađenjem; sam je kriv za svoju propast.", lik: "luzin" }
        ]
    },
    {
        tekst: "Sestra se želi udati za bogatog, ali bezdušnog čovjeka kako bi vas financijski spasila. Vaša reakcija?",
        opcije: [
            { tekst: "Nikada! Radije ću gladovati nego dopustiti takvu žrtvu.", lik: "raskoljnikov" },
            { tekst: "Ako je to jedini spas za obitelj, moramo prihvatiti tu sudbinu.", lik: "sonja" },
            { tekst: "To je razumna odluka kojom svi dobivaju ono što im treba.", lik: "luzin" }
        ]
    },
    {
        tekst: "Kako se nosite s osjećajem krivnje nakon što učinite nešto loše?",
        opcije: [
            { tekst: "Krivnja ne postoji ako je cilj bio viši; muči me samo vlastita slabost.", lik: "raskoljnikov" },
            { tekst: "Prihvaćam patnju, molim za oprost i vjerujem u iskupljenje.", lik: "sonja" },
            { tekst: "Krivnja je besmislena, ionako ništa na ovom svijetu nema stvarnu vrijednost.", lik: "svidrigajlov" }
        ]
    },
    {
        tekst: "Istražitelj Porfiri Petrovič vas sumnjiči za zločin. Kako se ponašate tijekom ispitivanja?",
        opcije: [
            { tekst: "Pokušat ću ga nadmudriti hladnom logikom i teorijom.", lik: "raskoljnikov" },
            { tekst: "Suočit ću se s njim otvoreno i braniti prijatelja pod svaku cijenu.", lik: "razumihin" },
            { tekst: "Ignorirat ću njegove igrice i gledati kako da izvučem vlastitu korist.", lik: "luzin" }
        ]
    },
    {
        tekst: "Što za vas predstavlja Biblija i priča o Lazarovom uskrsnuću?",
        opcije: [
            { tekst: "To je jedina nada za spasenje i dokaz da svaka duša može oživjeti.", lik: "sonja" },
            { tekst: "Zanimljiva priča, ali u stvarnom svijetu bolesni i mrtvi ne ustaju.", lik: "svidrigajlov" },
            { tekst: "Moralna bajka, važna za neuke ljude, ali beskorisna u praksi.", lik: "luzin" }
        ]
    },
    {
        tekst: "Najbolji prijatelj se zatvorio u sobu, bolestan je i ponaša se sumnjivo. Kako mu pomažete?",
        opcije: [
            { tekst: "Neću ga ostaviti samog; donijet ću mu hranu, liječnika i paziti na njega.", lik: "razumihin" },
            { tekst: "Bit ću uz njega u tišini i moliti se za njegov umorni duh.", lik: "sonja" },
            { tekst: "Pustit ću ga na miru, svatko se mora sam nositi sa svojim ludilom.", lik: "svidrigajlov" }
        ]
    },
    {
        tekst: "Koja je Vaša vizija sretnog i uspješnog života?",
        opcije: [
            { tekst: "Završiti studij, pošteno raditi i pomagati onima koje volim.", lik: "razumihin" },
            { tekst: "Steći ugled, bogatstvo i osigurati visok društveni status.", lik: "luzin" },
            { tekst: "Živjeti slobodno, bez ikakvih moralnih i društvenih okova.", lik: "svidrigajlov" }
        ]
    },
    {
        tekst: "Kako gledate na Sibir i kaznu prisilnog rada?",
        opcije: [
            { tekst: "Kao priliku za potpuno duhovno čišćenje i novi početak života.", lik: "sonja" },
            { tekst: "Kao nepravedan poraz moje volje i dokaz da nisam uspio.", lik: "raskoljnikov" },
            { tekst: "Radije bih si oduzeo život nego dopustio da me strpaju u okove.", lik: "svidrigajlov" }
        ]
    },
    {
        tekst: "Netko Vas lažno optuži za krađu. Kako reagirate?",
        opcije: [
            { tekst: "Planut ću od bijesa i agresivno dokazati istinu i raskrinkati lažljivca.", lik: "razumihin" },
            { tekst: "Plakat ću i trpjeti nepravdu, vjerujući da će istina sama izaći na vidjelo.", lik: "sonja" },
            { tekst: "Iskoristit ću tu situaciju kako bih pokazao svoju moralnu nadmoć.", lik: "svidrigajlov" }
        ]
    }
];

let trenutnoPitanje = 0;

let bodovi = {
    raskoljnikov: 0,
    sonja: 0,
    luzin: 0,
    svidrigajlov: 0,
    razumihin: 0
};

const opisiLikova = {
    raskoljnikov: {
        ime: "Rodion Raskoljnikov",
        emoji: "🪓",
        tekst: "Ti si ponosan intelektualac koji vjeruje da su neki ljudi iznad zakona, a da su ostali jednostavno obični..."
    },
    sonja: {
        ime: "Sonja Marmeladova",
        emoji: "🕯️",
        tekst: "Ti si veoma duhovna osoba, voliš pomagati drugima i ne kritiziraš ljude na temelju njhovih postupaka, već kakvi su u duši."
    },
    luzin: {
        ime: "Petar Lužin",
        emoji: "💵",
        tekst: "Ti si veoma hladan i egoističan čovjek, voliš moć i status ti je bitna karakteristika."
    },
    svidrigajlov: {
        ime: "Svidrigajlov",
        emoji: "🥷",
        tekst: "Ti si zagonetan i mračan lik, tuđi osjećaji ti nisu veoma bitni, ali si inteligentan i duhovit."
    },
    razumihin: {
        ime: "Dmitrij Razumihin",
        emoji: "🤝",
        tekst: "Ti si odan i pouzdan prijatelj, uvijek si spreman pomoći i vjeruješ da je dobrota najvažnija osobina koju čovjek može imati."
    }
};

const kvizDiv = document.getElementById("quiz");


function prikaziPitanje() {
    if (trenutnoPitanje >= pitanja.length) {
        prikaziRezultat();
        return;
    }

    const p = pitanja[trenutnoPitanje];

    let opcijeHTML = "";
    p.opcije.forEach((opcija, index) => {
        opcijeHTML += `
            <button onclick="odaberi(${index})"
                class="w-full text-left p-4 border border-gray-200 rounded-xl hover:bg-blue-50 hover:border-blue-300 transition duration-200 active:scale-98 font-medium text-gray-700">
                ${opcija.tekst}
            </button>
        `;
    });

    kvizDiv.innerHTML = `
        <div class="bg-white rounded-2xl shadow-xl p-8 transition-all duration-300">
            <div class="flex justify-between items-center mb-4">
                <span class="text-sm text-gray-500 font-semibold tracking-wide uppercase">
                    Pitanje ${trenutnoPitanje + 1} od ${pitanja.length}
                </span>
            </div>

            <div class="w-full bg-gray-100 rounded-full h-2 mb-8">
                <div class="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style="width: ${((trenutnoPitanje + 1) / pitanja.length) * 100}%">
                </div>
            </div>
            
            <h2 class="text-xl font-bold mb-6 text-gray-800 leading-snug">${p.tekst}</h2>
    
            <div class="space-y-3">
                ${opcijeHTML}
            </div>
        </div>
    `;
}


function prikaziRezultat() {
    let pobjednik = "razumihin"; 
    let max = -1;

    for (const lik in bodovi) {
        if (bodovi[lik] > max) {
            max = bodovi[lik];
            pobjednik = lik;
        }
    }

    const r = opisiLikova[pobjednik];

    kvizDiv.innerHTML = `
        <div class="bg-white rounded-2xl shadow-xl p-8 text-center transition-all duration-300">
            <div class="text-7xl mb-4 animate-bounce">${r.emoji}</div>
            <span class="text-xs font-bold uppercase tracking-widest text-blue-600">Tvoj rezultat</span>
            <h2 class="text-3xl font-extrabold mt-1 mb-4 text-gray-800">${r.ime}</h2>
            <p class="text-gray-600 mb-8 leading-relaxed text-base">${r.tekst}</p>

            <button onclick="restart()"
                class="w-full bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition duration-200 font-semibold shadow-md shadow-blue-200">
                Igraj ponovno
            </button>

            <button onclick="window.location.href='/'"
                class="w-full bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition duration-200 font-semibold shadow-md shadow-green-200 mt-3">
                Početna stranica
            </button>
        </div>
    `;
}


function odaberi(index) {
    const p = pitanja[trenutnoPitanje];
    const lik = p.opcije[index].lik;

    if (bodovi[lik] !== undefined) {
        bodovi[lik]++;
    }

    trenutnoPitanje++;

    setTimeout(() => {
        prikaziPitanje();
    }, 200);
}


function restart() {
    trenutnoPitanje = 0;

    for (const lik in bodovi) {
        bodovi[lik] = 0;
    }

    prikaziPitanje();
}



prikaziPitanje();