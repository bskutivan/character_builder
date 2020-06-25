//FIGHTER

const fighter = 'https://api.open5e.com/classes/fighter/'
async function getFighter() {
	const response = await fetch('https://api.open5e.com/classes/fighter/');
    const data = await response.json();
    const { name, prof_armor, prof_weapons, prof_tools, prof_saving_throws, prof_skills } = data;

    document.getElementById('barb').textContent = name;
    document.getElementById('armor').textContent = prof_armor;
    document.getElementById('weapons').textContent = prof_weapons;
    document.getElementById('tools').textContent = prof_tools;
    document.getElementById("throws").textContent = prof_saving_throws;
    document.getElementById('skills').textContent = prof_skills;
	console.log(data);
}
getFighter();

// WIZARD
const wizard = 'https://api.open5e.com/classes/wizard/'
async function getWizard() {
	const response = await fetch('https://api.open5e.com/classes/wizard/');
    const data = await response.json();
    const { name, prof_armor, prof_weapons, prof_tools, prof_saving_throws, prof_skills } = data;

    document.getElementById('wiz').textContent = name;
    document.getElementById('armor-w').textContent = prof_armor;
    document.getElementById('weapons-w').textContent = prof_weapons;
    document.getElementById('tools-w').textContent = prof_tools;
    document.getElementById("throws-w").textContent = prof_saving_throws;
    document.getElementById('skills-w').textContent = prof_skills;
	console.log(data);
}
getWizard();

// CLERIC
const cleric = 'https://api.open5e.com/classes/cleric/'
async function getCleric() {
	const response = await fetch('https://api.open5e.com/classes/cleric/');
    const data = await response.json();
    const { name, prof_armor, prof_weapons, prof_tools, prof_saving_throws, prof_skills } = data;

    document.getElementById('cler').textContent = name;
    document.getElementById('armor-c').textContent = prof_armor;
    document.getElementById('weapons-c').textContent = prof_weapons;
    document.getElementById('tools-c').textContent = prof_tools;
    document.getElementById("throws-c").textContent = prof_saving_throws;
    document.getElementById('skills-c').textContent = prof_skills;
	console.log(data);
}
getCleric();

//ROGUE
const rogue = 'https://api.open5e.com/classes/rogue/'
async function getRogue() {
	const response = await fetch('https://api.open5e.com/classes/rogue/');
    const data = await response.json();
    const { name, prof_armor, prof_weapons, prof_tools, prof_saving_throws, prof_skills } = data;

    document.getElementById('ro').textContent = name;
    document.getElementById('armor-r').textContent = prof_armor;
    document.getElementById('weapons-r').textContent = prof_weapons;
    document.getElementById('tools-r').textContent = prof_tools;
    document.getElementById("throws-r").textContent = prof_saving_throws;
    document.getElementById('skills-r').textContent = prof_skills;
	console.log(data);
}
getRogue();

//RANGER
const ranger = 'https://api.open5e.com/classes/ranger/'
async function getRanger() {
	const response = await fetch('https://api.open5e.com/classes/ranger/');
    const data = await response.json();
    const { name, prof_armor, prof_weapons, prof_tools, prof_saving_throws, prof_skills } = data;

    document.getElementById('ran').textContent = name;
    document.getElementById('armor-ra').textContent = prof_armor;
    document.getElementById('weapons-ra').textContent = prof_weapons;
    document.getElementById('tools-ra').textContent = prof_tools;
    document.getElementById("throws-ra").textContent = prof_saving_throws;
    document.getElementById('skills-ra').textContent = prof_skills;
	console.log(data);
}
getRanger();

