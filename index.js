const form = document.getElementById('form')
const save = document.getElementById('save')


save.addEventListener('click', e => {
    e.preventDefault();

    const Sexe = () => {
        if(form[6].checked){
            return "HOMME"
        } else {
            return "FEMME"
        }
    }
    
    const object = {
        nom : form[0].value,
        prenom : form[1].value,
        LDN : form[2].value,
        DDN : form[3].value,
        taille : form[4].value,
        poids : form[5].value,
        sexe :Sexe(),
        parcours : form[8].value,
        matricule : form[9].value
    } 

    let etudiant = new Etudiant(object)
    etudiant.inscription()

    // console.log(object)
    location.pathname = '/index.html'
}, false)


