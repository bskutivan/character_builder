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

module.exports = {addProficientBonus, statModifiers, getHp, proficiencyBonus};