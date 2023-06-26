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

for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];
    const memberInfo = document.createElement('div');
    memberInfo.classList.add('py-3')
    for (let key in member) {
        const memberParagraph = document.createElement('p');
        memberParagraph.textContent = `${key} : ${member[key]}`;
        memberInfo.appendChild(memberParagraph);
    }
    teamContainer.appendChild(memberInfo);
}