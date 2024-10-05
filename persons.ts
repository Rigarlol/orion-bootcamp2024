type Person = {
  id: number,
  name: string,
  bio: string
}

let list: Person[] = [
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

function returnBioPerson(id: number): string {
  let BioPerson = list.find(item => item.id === id);

  return BioPerson ? BioPerson.bio : 'Bio não econtrada para o id indicado';
}

function returnNamePerson(id: number): string {
  let BioPerson = list.find(item => item.id === id);

  return BioPerson ? BioPerson.name : 'Nome não econtrado para o id indicado';
}

function deletePerson(id: number): Person[] {
  return list.filter(item => item.id !== id);
}



function updatePerson(id: number, novoNome: string, novaBio: string): Person[] {
  return list.map(item => item.id === id ? { ...item, name: novoNome, bio: novaBio } : item);
}



//Retornar Bio
const form = document.getElementById('bioForm') as HTMLFormElement;
form.addEventListener('submit', function (event: Event) {
  event.preventDefault();


  const inputElement = document.getElementById('personId') as HTMLInputElement;
  let personId: number = parseInt(inputElement.value);


  let bio = returnBioPerson(personId);
  const bioResultElement = document.getElementById('bioResult') as HTMLParagraphElement;
  bioResultElement.innerText = bio;
});

//Retornar Nome
const nameForm = document.getElementById('nameForm') as HTMLFormElement;
nameForm.addEventListener('submit', function (event: Event) {
  event.preventDefault();
  const inputElement = document.getElementById('personIdName') as HTMLInputElement;
  let personId = parseInt(inputElement.value);
  let name = returnNamePerson(personId);
  const nameResultElement = document.getElementById('nameResult') as HTMLParagraphElement;
  nameResultElement.innerText = name;
});


//Deletar Pessoa
const deleteForm = document.getElementById('deleteForm') as HTMLFormElement;
deleteForm.addEventListener('submit', function (event: Event) {
  event.preventDefault();
  const inputElement = document.getElementById('personIdDelete') as HTMLInputElement;
  let personId = parseInt(inputElement.value);
  list = deletePerson(personId);
  const deleteResultElement = document.getElementById('deleteResult') as HTMLParagraphElement;
  deleteResultElement.innerText = `Item com ID ${personId} deletado.`;
});

//Atualizar Pessoa
const updateForm = document.getElementById('updateForm') as HTMLFormElement;
updateForm.addEventListener('submit', function (event: Event) {
  event.preventDefault();
  const inputElementId = document.getElementById('personIdUpdate') as HTMLInputElement;
  const inputElementName = document.getElementById('newName') as HTMLInputElement;
  const inputElementBio = document.getElementById('newBio') as HTMLInputElement;
  let personId = parseInt(inputElementId.value);
  let newName = inputElementName.value;
  let newBio = inputElementBio.value;

  list = updatePerson(personId, newName, newBio);
  const updateResultElement = document.getElementById('updateResult') as HTMLParagraphElement;
  updateResultElement.innerText = `Item com ID ${personId} atualizado.`;
});



//IMPERATIVO

function returnBioPersonImperative(id: number): string {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === id) {
      return list[i].bio;
    }
  }
  return 'Bio não econtrada para o id indicado';
}

function returnNamePersonImperative(id: number): string {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === id) {
      return list[i].name;
    }
  }
  return 'Nome não econtrada para o id indicado';
}

function deletePersonImperative(id: number): Person[] {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === id) {
      list.splice(i, 1);
      return list;
    }
  }
  return list;
}

function updatePersonImperative(id: number, novoNome: string, novaBio: string): Person[] {
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

const returnBioFormImperative = document.getElementById('returnBioFormImperative') as HTMLFormElement;
returnBioFormImperative.addEventListener('submit', function(event: Event) {
  event.preventDefault();
  const inputElementBio = document.getElementById('personIdBioImperative') as HTMLInputElement;
  const personId = parseInt(inputElementBio.value);
  const bioResultElement = document.getElementById('bioResultImperative') as HTMLParagraphElement;

  const bio = returnBioPersonImperative(personId);
  bioResultElement.innerText = bio;
});

// Retornar Nome (Imperativa)
const returnNameFormImperative = document.getElementById('returnNameFormImperative') as HTMLFormElement;
returnNameFormImperative.addEventListener('submit', function(event: Event) {
  event.preventDefault();
  const inputElementName = document.getElementById('personIdNameImperative') as HTMLInputElement;
  const personId = parseInt(inputElementName.value);
  const nameResultElement = document.getElementById('nameResultImperative') as HTMLParagraphElement;

  const name = returnNamePersonImperative(personId);
  nameResultElement.innerText = name;
});

// Deletar Pessoa (Imperativa)
const deletePersonFormImperative = document.getElementById('deletePersonFormImperative') as HTMLFormElement;
deletePersonFormImperative.addEventListener('submit', function(event: Event) {
  event.preventDefault();
  const inputElementDelete = document.getElementById('personIdDeleteImperative') as HTMLInputElement;
  const personId = parseInt(inputElementDelete.value);
  const deleteResultElement = document.getElementById('deleteResultImperative') as HTMLParagraphElement;

  deletePersonImperative(personId);
  deleteResultElement.innerText = `Item com ID ${personId} deletado.`;
});

// Atualizar Pessoa (Imperativa)
const updatePersonFormImperative = document.getElementById('updatePersonFormImperative') as HTMLFormElement;
updatePersonFormImperative.addEventListener('submit', function(event: Event) {
  event.preventDefault();
  const inputElementUpdateId = document.getElementById('personIdUpdateImperative') as HTMLInputElement;
  const inputElementNewName = document.getElementById('newNameImperative') as HTMLInputElement;
  const inputElementNewBio = document.getElementById('newBioImperative') as HTMLInputElement;

  const personId = parseInt(inputElementUpdateId.value);
  const newName = inputElementNewName.value;
  const newBio = inputElementNewBio.value;

  updatePersonImperative(personId, newName, newBio);
  const updateResultElement = document.getElementById('updateResultImperative') as HTMLParagraphElement;
  updateResultElement.innerText = `Item com ID ${personId} atualizado.`;
});


