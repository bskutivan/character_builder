const handlebars = require('handlebars')

function addProficientBonus (stat, level) {
    const statmod = statModifiers(stat);
    const profBonus = proficiencyBonus(level);
    const enhancedStat = statmod + profBonus;
    return enhancedStat;
}

function proficiencyBonus (level) {
    var bonus;
    switch (level) {
        case 1:
        case 2:
        case 3:
        case 4:
            bonus = 2
            break;
        case 5:
        case 6:
        case 7:
        case 8:
            bonus = 3 
            break;
        case 9:
        case 10:
        case 11:
        case 12:
            bonus = 4 
            break;
        case 13:
        case 14:
        case 15: 
        case 16:
            bonus = 5 
            break;
        case 17:
        case 18:
        case 19:
        case 20:
            bonus = 6
            break;
    }
    return bonus;
}

function statModifiers(Num) {
    const modifier = Math.floor((Num - 10)/2)
    return modifier
}

function getHp(Con, Class) {
    const conMod = statModifiers(Con);
     var hp;
     
     if (Class === "Fighter" || Class === "Paladin" || Class === "Ranger") {
         hp = conMod + 10;
     } else if (Class === "Barbarian") {
        hp = conMod + 12;
     } else if (Class === "Sorcerer" || Class === "Wizard") {
        hp = conMod + 6
     } else {
        hp = conMod + 8
     }
 
     return hp;
}
handlebars.registerHelper( "getClassInfo",
function(Class) {
    if (Class === "Wizard") {
        return`
        <div class="Proficiencies">
            <h2>Class Proficiencies</h2>
                <p><span>Armor:</span> None</p>
                <p><span>Weapons:</span> Daggers, darts, slings, quarterstaffs, light crossbows</p>
                <p><span>Tools:</span> None</p>
                <p><span>Saving Throws:</span> Intelligence, Wisdom</p>
                <p><span>Skills:</span> Choose two from Arcana, History, Insight, Investigation, Medicine, and Religion</p>
        </div>
        <div class="Features">
            <h2>Class Features<h2>
                <h3>Spellcasting</h3>
                    <p>As a student of arcane magic, you have a spellbook containing spells that show the first glimmerings of your true power.</p>
                <h5>Cantrips</h5>
                    <p>At 1st level, you know three cantrips of your choice from the wizard spell list.</p>
                    <p>You learn additional wizard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Wizard table.</p>

                <h5>Spellbook</h5>
                    <p>At 1st level, you have a spellbook containing six 1st- level wizard spells of your choice.</p>
                    <p>Your spellbook is the repository of the wizard spells you know, except your cantrips, which are fixed in your mind.</p>
                <h5>Preparing and Casting Spells</h5>
                    <p>Table: The Wizard shows how many spell slots you have to cast your spells of 1st level and higher.
                    <p>To cast one of these spells, you must expend a slot of the spell’s level or higher.
                    <p>You regain all expended spell slots when you finish a long rest.
                    <p>You prepare the list of wizard spells that are available for you to cast.
                    <p>To do so, choose a number of wizard spells from your spellbook equal to your Intelligence modifier + your wizard level (minimum of one spell). The spells must be of a level for which you have spell slots.</p>
                    <p>You can change your list of prepared spells when you finish a long rest. Preparing a new list of wizard spells requires time spent studying your spellbook and memorizing the incantations and gestures you must make to cast the spell: at least 1 minute per spell level for each spell on your list.</p>

        </div>
        `;
    } else if (Class === "Fighter") {
        return ``;
    } else if (Class === "Bard") {
        return ``;
    } else if (Class === "Sorcerer") {
        return ``;
    } else if (Class === "Druid") {
        return ``;
    } else if (Class === "Rogue") {
        return ``;
    } else if (Class === "Warlock") {
        return ``;
    } else if (Class === "Monk") {
        return ``;
    } else if (Class === "Ranger") {
        return ``;
    } else if (Class === "Barbarian") {
        return ``;
    } else if (Class === "Cleric") {
        return ``;
    } else if (Class === "Paladin") {
        return ``;
    }
})

module.exports = {addProficientBonus, statModifiers, getHp, proficiencyBonus};