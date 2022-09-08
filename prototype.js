function Etudiant ({nom, prenom,sexe,DDN, LDN, taille, poids, parcours, matricule}){
    this.nom = nom;
    this.prenom = prenom;
    this.sexe = sexe;
    this.DDN = DDN;
    this.LDN = LDN;
    this.taille = taille;
    this.poids = poids; 
    this.parcours = parcours;
    this.matricule = matricule;
}

Etudiant.prototype.creer_id = function(){
    const chaine = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_'
    let id = ''
    for (let i =0 ; i< 6; i++){
        const rand = Math.floor(( Math.random()*100)*0.63)
        id += chaine[rand]
    }

    return id
}

Etudiant.prototype.inscription = function(){
    const {nom, prenom, DDN, LDN, parcours, poids, taille, sexe, matricule} = this;
    const l = localStorage;
    
    const etu = {
        nom:nom, 
        prenom:prenom, 
        sexe:sexe, 
        DDN:DDN,
        LDN:LDN,
        taille:taille, 
        poids:poids, 
        matricule:matricule, 
        parcours:parcours,
        id: this.creer_id()
    }
    


    if (l.getItem('Etudiant') === null){
        let bd = []
        bd.push(etu)
        console.log('BD VIDE')
        l.setItem('Etudiant',JSON.stringify(bd))
    } else {
        let bd = JSON.parse(l.getItem('Etudiant'))
        bd.push(etu)
        l.setItem('Etudiant', JSON.stringify(bd))
    } 
}

Etudiant.prototype.update = function(id, object){
    let l = localStorage;

    let bd = JSON.parse(l.getItem("Etudiant"))
    bd.forEach((el, i) => {
        if(el.id === id){
            bd[i] = {id : id, ...object} 
        }
    })

    l.setItem('Etudiant', JSON.stringify(bd))
}


Etudiant.prototype.delete = function(id) {
    let l = localStorage
    let bd = JSON.parse(l.getItem('Etudiant'))
    bd.forEach((element,key) => {
        if(id ===element.id) {
            bd.splice(key, 1)
            l.setItem = ('Etudinat',JSON.stringify(bd))
        }
    });

}                   