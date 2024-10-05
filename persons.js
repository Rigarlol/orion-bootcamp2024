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
    {
        "id": 3,
        "name": "Nikola Tesla",
        "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."
    },
    {
        "id": 4,
        "name": "Nicolau Copérnico",
        "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."
    }
];
//FUNCIONAIS
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
//Retornar Bio
const form = document.getElementById('bioForm');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputElement = document.getElementById('personId');
    let personId = parseInt(inputElement.value);
    let bio = returnBioPerson(personId);
    const bioResultElement = document.getElementById('bioResult');
    bioResultElement.innerText = bio;
});
//Retornar Nome
const nameForm = document.getElementById('nameForm');
nameForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputElement = document.getElementById('personIdName');
    let personId = parseInt(inputElement.value);
    let name = returnNamePerson(personId);
    const nameResultElement = document.getElementById('nameResult');
    nameResultElement.innerText = name;
});
//Deletar Pessoa
const deleteForm = document.getElementById('deleteForm');
deleteForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputElement = document.getElementById('personIdDelete');
    let personId = parseInt(inputElement.value);
    list = deletePerson(personId);
    const deleteResultElement = document.getElementById('deleteResult');
    deleteResultElement.innerText = `Item com ID ${personId} deletado.`;
});
//Atualizar Pessoa
const updateForm = document.getElementById('updateForm');
updateForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputElementId = document.getElementById('personIdUpdate');
    const inputElementName = document.getElementById('newName');
    const inputElementBio = document.getElementById('newBio');
    let personId = parseInt(inputElementId.value);
    let newName = inputElementName.value;
    let newBio = inputElementBio.value;
    list = updatePerson(personId, newName, newBio);
    const updateResultElement = document.getElementById('updateResult');
    updateResultElement.innerText = `Item com ID ${personId} atualizado.`;
});
//IMPERATIVO
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
// Retornar Bio (Imperativa)
const returnBioFormImperative = document.getElementById('returnBioFormImperative');
returnBioFormImperative.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputElementBio = document.getElementById('personIdBioImperative');
    const personId = parseInt(inputElementBio.value);
    const bioResultElement = document.getElementById('bioResultImperative');
    const bio = returnBioPersonImperative(personId);
    bioResultElement.innerText = bio;
});
// Retornar Nome (Imperativa)
const returnNameFormImperative = document.getElementById('returnNameFormImperative');
returnNameFormImperative.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputElementName = document.getElementById('personIdNameImperative');
    const personId = parseInt(inputElementName.value);
    const nameResultElement = document.getElementById('nameResultImperative');
    const name = returnNamePersonImperative(personId);
    nameResultElement.innerText = name;
});
// Deletar Pessoa (Imperativa)
const deletePersonFormImperative = document.getElementById('deletePersonFormImperative');
deletePersonFormImperative.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputElementDelete = document.getElementById('personIdDeleteImperative');
    const personId = parseInt(inputElementDelete.value);
    const deleteResultElement = document.getElementById('deleteResultImperative');
    deletePersonImperative(personId);
    deleteResultElement.innerText = `Item com ID ${personId} deletado.`;
});
// Atualizar Pessoa (Imperativa)
const updatePersonFormImperative = document.getElementById('updatePersonFormImperative');
updatePersonFormImperative.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputElementUpdateId = document.getElementById('personIdUpdateImperative');
    const inputElementNewName = document.getElementById('newNameImperative');
    const inputElementNewBio = document.getElementById('newBioImperative');
    const personId = parseInt(inputElementUpdateId.value);
    const newName = inputElementNewName.value;
    const newBio = inputElementNewBio.value;
    updatePersonImperative(personId, newName, newBio);
    const updateResultElement = document.getElementById('updateResultImperative');
    updateResultElement.innerText = `Item com ID ${personId} atualizado.`;
});
