const select1 = document.querySelector('.char-race');
const select2 = document.querySelector('.char-class');


async function newCharacterFormHandler(event) {
    event.preventDefault();

    const charName = document.querySelector('.char-name').value.trim();
    const charRace = select1.options[select1.selectedIndex].value;
    const charClass = select2.options[select2.selectedIndex].value;
    const charStr = document.querySelector('.char-str').value.trim();
    const charDex = document.querySelector('.char-dex').value.trim();
    const charCon = document.querySelector('.char-con').value.trim();
    const charInt = document.querySelector('.char-int').value.trim();
    const charWis = document.querySelector('.char-wis').value.trim();
    const charCha = document.querySelector('.char-cha').value.trim();

    console.log(charName);
    console.log(charRace);
    console.log(charClass);

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