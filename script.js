const form = document.getElementById('form');
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const tel = document.getElementById('tel');
const email = document.getElementById('email');
const adresse = document.getElementById('adresse');
const tbody = document.getElementById('tbody');
const categorie = document.getElementById('categorie');



let clients= [
    {
        nom : "NIANG",
        prenom : "Mamadou",
        tel : "77 123 45 67",
        email : "niang@gmail.com",
        adesse :"Yenne",

    }
]

let dettes = [
    {
        id : 1,
        client : "NIANG Mamadou",
        montant : 10000,
        date : "2021-08-12",
        categorie : "Fidele",
        description : "Achat de 10 sacs de riz",
        etat : "Non paye",
        
    }
]
document.addEventListener("DOMContentLoaded", () => {
    genererTr(clients)

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let valid = true
        for (let i = 0; i < form.length - 1; i++) {
            if (form[i].value == "") {
                valid = false
                form[i].nextElementSibling.textContent = "Le champ est obligatoire"
                form[i].nextElementSibling.classList.add('text-danger')
            }
        }
        if (valid == true) {
            clients.push({
                nom: nom.value,
                prenom: prenom.value,
                tel: tel.value,
                email: email.value,
                adesse: adresse.value,
            })
        }
        genererTr(clients)
    })
});


function genererTr(clients) {
    tbody.innerHTML = ""
    for (let resultat of clients) {
        tbody.innerHTML += `<tr class="">
                                <td scope="row">${resultat.email}</td>
                                <td>${resultat.nom}</td>
                                <td>${resultat.prenom}</td>
                                <td>${resultat.adesse}</td>
                                <td>${resultat.tel}</td>
                            </tr>`
    }
}

