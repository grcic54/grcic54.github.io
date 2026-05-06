const pitanja = [
    {
        tekst: "Što mislite o ubojstvu stare lihvarice Aljone Ivanovne?",
        opcije: [
            { tekst: "To nije zločin ako znači da će stotine drugih ljudi imati bolji život.", lik: "raskoljnikov" },
            { tekst: "To je užasno! Ne želim ni pomišljati o tome.", lik: "sonja" },
            { tekst: "Mislim da je zločin društveno nekoristan i moralno neprihvatljiv.", lik: "luzin" }
        ]
    },
    {
        tekst: "Kako biste reagirali da u kafiću naletite na pijanog i propalog Marmeladova?",
        opcije: [
            { tekst: "Saslušat ću ga i, ako treba, dati mu svoj novac za njegovu obitelj.", lik: "raskoljnikov" },
            { tekst: "Pomogao/la bih mu, da se ne bi slučajno ozlijedio ili nešto napravio.", lik: "razumihin" },
            { tekst: "Gadio bi mi se, ne bih ga htio niti gledati, to je odurno.", lik: "luzin" }
        ]
    },
    {
        tekst: "Sestra se želi udati za bogatog, ali užasnog i bezvrijednog čovjeka kako bi vas financijski spasila. Vaša reakcija?",
        opcije: [
            { tekst: "Nema šanse, samo zato što ima novaca ne znači da bi se trebala udati za njega.", lik: "raskoljnikov" },
            { tekst: "Ako je to potrebno da spasi obitelj, razumijem to.", lik: "sonja" },
            { tekst: "S time bih se složio/la, ipak ćemo dobiti novac pa nije tako loše.", lik: "luzin" }
        ]
    },
    {
        tekst: "Kako se nosite s osjećajem krivnje nakon što učinite nešto loše?",
        opcije: [
            { tekst: "Ne vjerujem u krivnju ako s time dobim nešto što želim, ili još bolje ostali beneficiraju od toga.", lik: "raskoljnikov" },
            { tekst: "Prihvaćam da sam napravio/la grešku i tražim oprost.", lik: "sonja" },
            { tekst: "To nema smisla, zašto bih se uopće osjećao loše.", lik: "svidrigajlov" }
        ]
    },
    {
        tekst: "Istražitelj Porfiri Petrovič Vas sumnjiči za zločin. Kako se ponašate tijekom ispitivanja?",
        opcije: [
            { tekst: "Pokušao/la bih ga nadmudriti i uvjeriti da nisam krivac.", lik: "raskoljnikov" },
            { tekst: "Rekao/la bih istinu i pokušao/la bih razvedriti situaciju.", lik: "razumihin" },
            { tekst: "Ignorirao/la bih njegovo optuživanje i pokušao/la bih se izbaviti iz te situacije.", lik: "luzin" }
        ]
    },
    {
        tekst: "Što za Vas predstavlja Biblija i priča o Lazarovom uskrsnuću?",
        opcije: [
            { tekst: "Ona za mene predstavlja nadu za ovaj svijet.", lik: "sonja" },
            { tekst: "Zanimljiva je, ali me uopće ne interesira.", lik: "svidrigajlov" },
            { tekst: "Ne interesira me baš, nemam nikakvu korist od nje.", lik: "luzin" }
        ]
    },
    {
        tekst: "Najbolji prijatelj se zatvorio u sobu, bolestan je i ponaša se sumnjivo. Kako mu pomažete?",
        opcije: [
            { tekst: "Ostao/la bih uz njega, pozvao/la bih mu liječnika i nudio/la mu svoju podršku.", lik: "razumihin" },
            { tekst: "Bio/la bih uz njega i pokušao/la bih mu pomoći.", lik: "sonja" },
            { tekst: "Pustio/la bih ga na miru, ne bih se baš zamarao s time, svi su kad tad bolesni.", lik: "svidrigajlov" }
        ]
    },
    {
        tekst: "Koja je Vaša vizija sretnog i uspješnog života?",
        opcije: [
            { tekst: "Pronaći dobar posao, ostvariti stabilan život i pronaći smisao u svakodnevnom životu.", lik: "razumihin" },
            { tekst: "Biti na visokoj socijalnoj razini gdje me svi poštuju i služe.", lik: "luzin" },
            { tekst: "Biti slobodan, bez da marim za nekim pravilima i moralima.", lik: "svidrigajlov" }
        ]
    },
    {
        tekst: "Kako gledate na Sibir i kaznu prisilnog rada?",
        opcije: [
            { tekst: "Malo je strašan, no vidim da bi osoba ondje mogla dosta psihički napredovati.", lik: "sonja" },
            { tekst: "Vidim to kao poraz i bezvezan zakon koji, se iskreno, ne treba pratiti.", lik: "raskoljnikov" },
            { tekst: "Radije bih pobjegao/la i započeo/la nov život.", lik: "svidrigajlov" }
        ]
    },
    {
        tekst: "Netko Vas lažno optuži za krađu. Kako reagirate?",
        opcije: [
            { tekst: "Ne bih to mogao/la trpjeti, našao bih način da dokažem da nisam krivac.", lik: "razumihin" },
            { tekst: "Rasplakao/la bih se i nadao da će se istina sama otkriti.", lik: "sonja" },
            { tekst: "Poludio/la bih na njega, ne može me samo tako optuživati.", lik: "svidrigajlov" }
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