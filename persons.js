let list = [
    {
        "id": 1,
        "name": "Ada Lovelace",
        "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"
    },
    {
        "id": 2,
        "name": "Alan Turing",
        "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"
    },
    { "id": 3,
        "name": "Nikola Tesla",
        "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."
    },
    {
        "id": 4,
        "name": "Nicolau Copérnico",
        "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."
    }
];
function returnBioPerson(id) {
    let BioPerson = list.find(item => item.id === id);
    return BioPerson ? BioPerson.bio : 'Bio não econtrada para o id indicado';
}
function returnNamePerson(id) {
    let BioPerson = list.find(item => item.id === id);
    return BioPerson ? BioPerson.name : 'Nome não econtrado para o id indicado';
}
function deletePerson(id) {
    return list.filter(item => item.id !== id);
}
function updatePerson(id, novoNome, novaBio) {
    return list.map(item => item.id === id ? Object.assign(Object.assign({}, item), { name: novoNome, bio: novaBio }) : item);
}
function returnBioPersonImperative(id) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            return list[i].bio;
        }
    }
    return 'Bio não econtrada para o id indicado';
}
function returnNamePersonImperative(id) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            return list[i].name;
        }
    }
    return 'Nome não econtrada para o id indicado';
}
function deletePersonImperative(id) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            list.splice(i, 1);
            return list;
        }
    }
    return list;
}
function updatePersonImperative(id, novoNome, novaBio) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            list[i].name = novoNome;
            list[i].bio = novaBio;
            return list;
        }
    }
    return list;
}
console.log('Bio:', returnBioPerson(2));
console.log('Nome:', returnNamePerson(1));
console.log(deletePerson(3));
console.log(updatePerson(4, 'Luffy', 'Rei dos piratas'));
console.log('Bio:', returnBioPersonImperative(3));
console.log('Nome:', returnNamePersonImperative(2));
console.log(deletePersonImperative(1));
console.log(updatePersonImperative(4, 'Marie Curie', 'Braba da Quimica'));
