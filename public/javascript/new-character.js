const { json } = require("sequelize/types");

async function newCharacterFormHandler(event) {
    const charName = document.querySelector('.char-name').value.trim();
    const charRace = document.querySelector('.char-race').value();
    const charClass = documet.querySelector('.char-class').value();
    const charStr = document.querySelector('.char-str').value().trim();
    const charDex = document.querySelector('.char-dex').value().trim();
    const charCon = document.querySelector('.char-con').value().trim();
    const charInt = document.querySelector('.char-int').value().trim();
    const charWis = document.querySelector('.char-wis').value().trim();
    const charCha = document.querySelector('.char-cha').value().trim();

    if (charName && charRace && charClass && charStr && charDex && charCon && charInt && charWis && charCha) {
        const response = await fetch("/api/character", {
            method: 'post',
            body: JSON.stringify({
                charName,
                charRace,
                charClass,
                charStr,
                charDex,
                charCon,
                charInt,
                charWis,
                charCha
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        
        if (response.ok) {
			document.location.replace('/dashboard');
		} else {
			alert(response.statusText);
		}
    }
}


document.querySelector('.new-character-form').addEventListener('submit', newCharacterFormHandler);