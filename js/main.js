//MILESTONE 0
const teamMembers = [
    {
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "angela-caroll-chief-editor.jpg"
    },
    {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "walter-gordon-office-manager.jpg"
    },
    {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "angela-lopez-social-media-manager.jpg"
    },
    {
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "scott-estrada-developer.jpg"
    },
    {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "barbara-ramos-graphic-designer.jpg"
    }
];

//MILESTONE 1
// for (let i = 0; i < teamMembers.length; i++) {
//     const member = teamMembers[i];
//     console.log(`Nome: ${member.nome}`);
//     console.log(`Ruolo: ${member.ruolo}`);
//     console.log(`Foto: ${member.foto}`);
//     console.log("\n");
// }

//MILESTONE 2
const teamContainer = document.getElementById('team-container');

let currentRow;

for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];

    if (i % 3 === 0) {
    currentRow = document.createElement('div');
    currentRow.classList.add('row');
    teamContainer.appendChild(currentRow);
  }

    const card = document.createElement('div');
    card.classList.add('card', 'col', 'm-4');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body', 'text-center');

    for (let key in member) {
        if (key !== 'foto') {
            const memberParagraph = document.createElement('p');
            memberParagraph.textContent = member[key];
            cardBody.appendChild(memberParagraph);
        }
    }
    const img = document.createElement('img');
    img.src = 'img/' + member.foto;
    img.classList.add('card-img-top');

    card.appendChild(img);
    card.appendChild(cardBody);
    currentRow.appendChild(card);
}