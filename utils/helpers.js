const handlebars = require('handlebars');

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

function getspellBonus(stat, level) {
    const statbonus = statModifiers(stat);
    const profMod = proficiencyBonus(level);
    return statbonus + profMod + 8;
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

function getSpellSave(level, stat){
    const profBonus = proficiencyBonus(level);
    const statMod = statModifiers(stat);
    var spellSave = 8 + profBonus + statMod;
    return spellSave;
}

function getSpellAttack(level, stat){
    const profBonus = proficiencyBonus(level);
    const statMod = statModifiers(stat);
    var spellAttack = profBonus + statMod;
    return spellAttack;
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
        return `
        <h2> Class Proficiencies </h2>

            <p>Armor: All armor, shields</p>
            <p>Weapons: Simple weapons, martial weapons</p>
            <p>Tools: None</p>
            <p>Saving Throws: Strength, Constitution</p>
            <p>Skills: Choose two skills from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, and Survival</p>
            <br>
        <h2> Class Features </h2>
        <br>
        <h3>Fighting Style</h3>
            <p>You adopt a particular style of fighting as your specialty.</p>
            <p>Choose one of the following options.</p>
            <p>You can’t take a Fighting Style option more than once, even if you later get to choose again.</p>
            <br>
        <h4>Archery</h4>
            <p>You gain a +2 bonus to attack rolls you make with ranged weapons.</p>

        <h4>Defense</h4>
            <p>While you are wearing armor, you gain a +1 bonus to AC.</p>
            <br>
        <h4>Dueling</h4>
        
            <p>When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.</p>
            <br>
        <h4>Two-Weapon Fighting</h4>

            <p>When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.</p>
            <br>
        <h3>Second Wind</h3>
            <p>You have a limited well of stamina that you can draw on to protect yourself from harm.</p>
            <p>On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level.</p>
            <p>Once you use this feature, you must finish a short or long rest before you can use it again.</p>
        `;
    } else if (Class === "Bard") {
        return `
        <h2> Class proficiencies </h2>
        Armor: Light armor
        Weapons: Simple weapons, hand crossbows, longswords, rapiers, shortswords
        Tools: Three musical instruments of your choice
        Saving Throws: Dexterity, Charisma
        Skills: Choose any three
        <br>
    <h2> Class Features </h2>
    <br>
    <h3> Spellcasting </h3>
        <p>You have learned to untangle and reshape the fabric of reality in harmony with your wishes and music.</p>

        <p>Your spells are part of your vast repertoire, magic that you can tune to different situations.</p>
        <br>
    <h4> Cantrips </h4>
        <p> You know two cantrips of your choice from the bard spell list.
    <h4> Spell Slots</h4>
        <p> The Bard table shows how many spell slots you have to cast your bard spells of 1st level and higher.</p>
        <p> To cast one of these spells, you must expend a slot of the spell’s level or higher. You regain all expended spell slots when you finish a long rest.</p>
    <h4> Spells Known </h4>
        <p> You know four 1st-level spells of your choice from the bard spell list. </p>

        <p> The Spells Known column of the Bard table shows when you learn more bard spells of your choice. </p>

        <p> Each of these spells must be of a level for which you have spell slots, as shown on the table. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.</p>

        <p> Additionally, when you gain a level in this class, you can choose one of the bard spells you know and replace it with another spell from the bard spell list, which also must be of a level for which you have spell slots.</p>
        <br>
    <h4> SpellCasting Ability </h4>
        <p> Your magic comes from the heart and soul you pour into the performance of your music or oration.</p>
        <p> You use your Charisma whenever a spell refers to your spellcasting ability.</p>
        <p>In addition, you use your Charisma modifier when setting the saving throw DC for a bard spell you cast and when making an attack roll with one.</p>

        <p>Spell save DC = 8 + your proficiency bonus + your Charisma modifier</p>
    
        <p>Spell attack modifier = your proficiency bonus + your Charisma modifier</p>
        <br>
    <h4> Ritual Casting </h4>
        <p>You can cast any bard spell you know as a ritual if that spell has the ritual tag.</p>
        <br>
    <h4> Spellcasting Focus </h4>
        <p>You can use a musical instrument (see Equipment) as a spellcasting focus for your bard spells.</p>
        <br>
    <h3> Bardic inspiration <h3> 
        <p> You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. </p>

        <p> Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes.</p>
        <p> The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the GM says whether the roll succeeds or fails.</p>
        <p> Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.</p>
        
        <p>You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.</p>
        
        <p>Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level.</p>
        `;
    } else if (Class === "Sorcerer") {
        return `
        <h2> Class Proficiencies </h2>
            <p>Armor: None</p>
            <p>Weapons: Daggers, darts, slings, quarterstaffs, light crossbows</p>
            <p>Tools: None</p>
            <p>Saving Throws: Constitution, Charisma</p>
            <p>Skills: Choose two from Arcana, Deception, Insight, Intimidation, Persuasion, and Religion</p>
            <br>
        <h2> Class Features </h2>
            <br>
            <h3> Spellcasting </h3>
                <p>An event in your past, or in the life of a parent or ancestor, left an indelible mark on you, infusing you with arcane magic. This font of magic, whatever its origin, fuels your spells.</p>
                <br>
                <h4> Cantrips </h4>
                    <p>At 1st level, you know four cantrips of your choice from the sorcerer spell list.</p>
                    <p>You learn additional sorcerer cantrips of your choice at higher levels, as shown in the Cantrips Known column of Table: The Sorcerer.</p>
                    <br>
                <h4>Spell Slots</h4>
                    <p>Table: The Sorcerer shows how many spell slots you have to cast your spells of 1st level and higher.</p>
                    <p>To cast one of these sorcerer spells, you must expend a slot of the spell’s level or higher. You regain all expended spell slots when you finish a long rest.</p>
                    <br>
                    <p>For example, if you know the 1st-level spell burning hands and have a 1st-level and a 2nd-level spell slot available, you can cast burning hands using either slot.</p>
                    <br>
                <h4> Spells Known </h4>
                    <p>You know two 1st-level spells of your choice from the sorcerer spell list.</p>
                    <p>The Spells Known column of Table: The Sorcerer shows when you learn more sorcerer spells of your choice.</p>
                    <p>Each of these spells must be of a level for which you have spell slots. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.</p>
                    <br>
                    <p>Additionally, when you gain a level in this class, you can choose one of the sorcerer spells you know and replace it with another spell from the sorcerer spell list, which also must be of a level for which you have spell slots.</p>
                    <br>
                <h4> Spell casting ability <h4>
                    <p>Charisma is your spellcasting ability for your sorcerer spells, since the power of your magic relies on your ability to project your will into the world.</p>
                    <p>You use your Charisma whenever a spell refers to your spellcasting ability.</p>
                    <p>In addition, you use your Charisma modifier when setting the saving throw DC for a sorcerer spell you cast and when making an attack roll with one.</p>
                    <br>
                    <p>Spell save DC = 8 + your proficiency bonus + your Charisma modifier</p>
                <h4> Spellcasting Focus <h4>
                    <p> You can use an arcane focus as a spellcasting focus for your sorcerer spells. </p>
            <h3> Sorcerous Origin </h3>
                <p>Choose a sorcerous origin, which describes the source of your innate magical power.</p>
                <br>
                <p>Your choice grants you features when you choose it at 1st level and again at 6th, 14th, and 18th level.</p>
        `;
    } else if (Class === "Druid") {
        return `
        <h2> Class Proficiencies </h2>
            <p>Armor: Light armor, medium armor, shields (druids will not wear armor or use shields made of metal)</p>
            <p>Weapons: Clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears</p>
            <p>Tools: Herbalism kit</p>
            <p>Saving Throws: Intelligence, Wisdom</p>
            <p>Skills: Choose two from Arcana, Animal Handling, Insight, Medicine, Nature, Perception, Religion, and Survival</p>
            <br>
        <h2> Class Features </h2>
            <br>
            <h3>Druidic</h3>
                <p>You know Druidic, the secret language of druids.</p>
                <p>You can speak the language and use it to leave hidden messages. </p>
                <p>You and others who know this language automatically spot such a message.</p>
                <p>Others spot the message’s presence with a successful DC 15 Wisdom (Perception) check but can’t decipher it without magic.</p>
            <h3>Spellcasting</h3>
                <p>Drawing on the divine essence of nature itself, you can cast spells to shape that essence to your will.</p>
                <br>
                <h4> Cantrips </h4>
                    <p>At 1st level, you know two cantrips of your choice from the druid spell list.</p>
                    <p>You learn additional druid cantrips of your choice at higher levels, as shown in the Cantrips Known column of Table: The Druid.</p>
                <h4>Preparing and Casting spells</h4>
                    <p>Table: The Druid shows how many spell slots you have to cast your spells of 1st level and higher.</p>
                    <p>To cast one of these druid spells, you must expend a slot of the spell’s level or higher.</p>
                    <p>You regain all expended spell slots when you finish a long rest.</p>
                    <br>
                    <p>You prepare the list of druid spells that are available for you to cast, choosing from the druid spell list.</p>
                    <p>When you do so, choose a number of druid spells equal to your Wisdom modifier + your druid level (minimum of one spell).</p>
                    <p>The spells must be of a level for which you have spell slots.</p>
                    <br>
                    <p>For example, if you are a 3rd-level druid, you have four 1st-level and two 2nd-level spell slots.</p>
                    <p>With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination.</p>
                    <p>If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn’t remove it from your list of prepared spells.</p>
                    <br>
                    <p>You can also change your list of prepared spells when you finish a long rest.</p>
                    <p>Preparing a new list of druid spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.</p>
                    <br>
                <h4>Spellcasting Ability</h4>
                    <p>Wisdom is your spellcasting ability for your druid spells, since your magic draws upon your devotion and attunement to nature.</p>
                    <p>You use your Wisdom whenever a spell refers to your spellcasting ability.</p>
                    <p>In addition, you use your Wisdom modifier when setting the saving throw DC for a druid spell you cast and when making an attack roll with one.</p>
                    <br>
                    <p>Spell save DC = 8 + your proficiency bonus + your Wisdom modifier</p>
                    <br>
                    <p>Spell attack modifier = your proficiency bonus + your Wisdom modifier</p>
                    <br>
                <h4>Ritual Casting</h4>
                    <p>You can cast a druid spell as a ritual if that spell has the ritual tag and you have the spell prepared.</p>
                    <br>
                <h4>Spellcasting Focus</h4>
                    <p>You can use a druidic focus (see Equipment) as a spellcasting focus for your druid spells.</p>
                    <br>
        `;
    } else if (Class === "Rogue") {
        return `
        <h2> Class Proficiencies </h2>
        Armor: Light armor
        Weapons: Simple weapons, hand crossbows, longswords, rapiers, shortswords
        Tools: Thieves’ tools
        Saving Throws: Dexterity, Intelligence
        Skills: Choose four from Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight of Hand, and Stealth
        <br>
    <h2> Class Features </h2>
    <br>
    <h3>Expertise</h3>
        <p> At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves’ tools.</p>
        <p> Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.</p>
        <br>
        <p> At 6th level, you can choose two more of your proficiencies (in skills or with thieves’ tools) to gain this benefit.</p>
        <br>
    <h3> Sneak Attack </h3>
        <p> Beginning at 1st level, you know how to strike subtly and exploit a foe’s distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll.</p>
        <p> The attack must use a finesse or a ranged weapon.</p>
        <br>
        <p>You don’t need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn’t incapacitated, and you don’t have disadvantage on the attack roll.<p>
        <br>
    <h3> Thieves' Cant </h3>
        <p> During your rogue training you learned thieves’ cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation.</p>
        <p> Only another creature that knows thieves’ cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly.</p>

        <p> In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves’ guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run.</p>
        `;
    } else if (Class === "Warlock") {
        return `
        <h2> Class Proficiencies </h2>
            <p>Weapons: Simple weapons</p>
            <p>Tools: None</p>
            <p>Saving Throws: Wisdom, Charisma</p>
            <p>Skills: Choose two skills from Arcana, Deception, History, Intimidation, Investigation, Nature, and Religion</p>
            <p>Armor: Light armor</p>
            <br>
        <h2> Class Features </h2>
            <br>
            <h3> Otherwordly Patron </h3>
                <p>At 1st level, you have struck a bargain with an otherworldly being of your choice.</p>
                <br>
                <p>Your choice grants you features at 1st level and again at 6th, 10th, and 14th level.</p>
                <br>
                <p>The beings that serve as patrons for warlocks are mighty inhabitants of other planes of existence—not gods, but almost godlike in their power.
                <p>Various patrons give their warlocks access to different powers and invocations, and expect significant favors in return.</p>
                <p>Some patrons collect warlocks, doling out mystic knowledge relatively freely or boasting of their ability to bind mortals to their will.</p>
                <p>Other patrons bestow their power only grudgingly, and might make a pact with only one warlock.</p>
                <p>Warlocks who serve the same patron might view each other as allies, siblings, or rivals.</p>
                <br>
            <h3> Pact Magic </h3>
                <p>Your arcane research and the magic bestowed on you by your patron have given you facility with spells.</p>
                <br>
                <h4>Cantrips</h4>
                    <p>You know two cantrips of your choice from the warlock spell list.</p>
                    <p>You learn additional warlock cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Warlock table.</p>
                    <br>
                <h4>Spell Slots</h4>
                    <p>Table: The Warlock shows how many spell slots you have. The table also shows what the level of those slots is; all of your spell slots are the same level.</p>
                    <p>To cast one of your warlock spells of 1st level or higher, you must expend a spell slot.</p>
                    <p>You regain all expended spell slots when you finish a short or long rest.</p>
                    <p>For example, when you are 5th level, you have two 3rd-level spell slots.</p>
                    <p>To cast the 1st-level spell thunderwave, you must spend one of those slots, and you cast it as a 3rd-level spell.</p>
                    <br>
                <h4>Spellcasting Ability</h4>
                    <p>At 1st level, you know two 1st-level spells of your choice from the warlock spell list.</p>
                    <p>The Spells Known column of Table: The Warlock shows when you learn more warlock spells of your choice of 1st level and higher.</p>
                    <p>A spell you choose must be of a level no higher than what’s shown in the table’s Slot Level column for your level.</p>
                    <p>When you reach 6th level, for example, you learn a new warlock spell, which can be 1st, 2nd, or 3rd level. Additionally, when you gain a level in this class, you can choose one of the warlock spells you know and replace it with another spell from the warlock spell list, which also must be of a level for which you have spell slots.</p>
                    <br>
                <h4>Spellcasting Focus</h4>
                    <p>You can use an arcane focus as a spellcasting focus for your warlock spells.<p>
                    <br>
                    
        `;
    } else if (Class === "Monk") {
        return `
    <h2> Class Proficiencies </h2>
        <p>Armor: None</p>
        <p>Weapons: Simple weapons, shortswords</p>
        <p>Tools: Choose one type of artisan’s tools or one musical instrument</p>
        <p>Saving Throws: Strength, Dexterity</p>
        <p>Skills: Choose two from Acrobatics, Athletics, History, Insight, Religion, and Stealth</p>
        <br>
    <h2> Class Features </h2>
    <h3> Unarmored Defense </h3>
        <p>Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.<p>
        <br>
    <h3> Martial Arts <h3>
     <p> At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don’t have the two- handed or heavy property. </p>
     <p> You gain the following benefits while you are unarmed or wielding only monk weapons and you aren’t wearing armor or wielding a shield: </p>
     <ul>
        <li> You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons. </li>
        <li> You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of Table: The Monk </li>
        <li> When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. <li>
        <li> For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven’t already taken a bonus action this turn. </li>
     </ul>
     <p> Certain monasteries use specialized forms of the monk weapons. </p>
     <p> For example, you might use a club that is two lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade (called a kama). </p>
     <p> Whatever name you use for a monk weapon, you can use the game statistics provided for the weapon. </p>
        `;
    } else if (Class === "Ranger") {
        return `
        <h2> Class Proficiencies </h2>
            <p>Armor: Light armor, medium armor, shields</p>
            <p>Weapons: Simple weapons, martial weapons</p>
            <p>Tools: None</p>
            <p>Saving Throws: Strength, Dexterity</p>
            <p>Skills: Choose three from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival</p>
            <br>
        <h2> Class Features </h2>
            <br>
            <h3> Favored Enemy </h3>
                <p>Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.</p>
                <br>
                <p> Choose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead.</p>
                <p> Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.</p>
                <br>
                <p> You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.</p>
                <br>
                <p> When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.</p>
                <br>
                <p> You choose one additional favored enemy, as well as an associated language, at 6th and 14th level.</p>
                <p> As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures.</p>
            <h3> Natural Explorer </h3>
                <p>You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions.
                <p>Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, or swamp. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you’re proficient in.
                <br>
                <p>While traveling for an hour or more in your favored terrain, you gain the following benefits:
                <ul>
                    <li>Difficult terrain doesn’t slow your group’s travel.</li>
                    <li>Your group can’t become lost except by magical means.</li>
                    <li>Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.</li>
                    <li>If you are traveling alone, you can move stealthily at a normal pace.</li>
                    <li>When you forage, you find twice as much food as you normally would.</li>
                    <li>While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.</li>
                </ul>
                <p>You choose additional favored terrain types at 6th and 10th level<p>

        `;
    } else if (Class === "Barbarian") {
        return `
        <h2> Class Proficiencies </h2>
            <p>Armor: Light armor, medium armor, shields</p>
            <p>Weapons: Simple weapons, martial weapons</p>
            <p>Tools: None</p>
            <p>Saving Throws: Strength, Constitution</p>
            <p>Skills: Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival</p>
        
        <h2> Class Features </h2>
        <br>
        <h3> Rage </h3>
            <p>In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.</p>

            <p>While raging, you gain the following benefits if you aren’t wearing heavy armor:</p>
        <ul>
            <li>You have advantage on Strength checks and Strength saving throws.</li>
            <li>When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table.</li>
            <li>You have resistance to bludgeoning, piercing, and slashing damage.</li>
            <li>If you are able to cast spells, you can’t cast them or concentrate on them while raging.</li>
        <ul>
        
        <p>Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven’t attacked a hostile creature since your last turn or taken damage since then.</p>
        <p>You can also end your rage on your turn as a bonus action.</p>
        
        <p>Once you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again.</p>
        <br>

        <h3> Unarmored Defense </h3>
        <p> While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit. </p>

        `;
    } else if (Class === "Cleric") {
        return `
            <h2> Class Proficiencies </h2>
                <p>Armor: Light armor, medium armor, shields</p>
                <p>Weapons: Simple weapons</p>
                <p>Tools: None</p>
                <p>Saving Throws: Wisdom, Charisma</p>
                <p>Skills: Choose two from History, Insight, Medicine, Persuasion, and Religion</p>
                <br>
            <h2> Class Features </h2>
                <br>
                <h3> Spellcasting </h3>
                    <p>As a conduit for divine power, you can cast cleric spells.</p>
                    <br>
                    <h4> Cantrips </h4>
                        <p>At 1st level, you know three cantrips of your choice from the cleric spell list.</p>
                        <p>You learn additional cleric cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Cleric table.</p>
                    <h4> Preparing and Casting Spells </h4>
                        <p>The Cleric table shows how many spell slots you have to cast your spells of 1st level and higher.</p>
                        <p>To cast one of these spells, you must expend a slot of the spell’s level or higher. You regain all expended spell slots when you finish a long rest.</p>
                        <br>
                        <p>You prepare the list of cleric spells that are available for you to cast, choosing from the cleric spell list.</p>
                        <p>When you do so, choose a number of cleric spells equal to your Wisdom modifier + your cleric level (minimum of one spell). The spells must be of a level for which you have spell slots.</p>
                        <br>
                        <p>For example, if you are a 3rd-level cleric, you have four 1st-level and two 2nd-level spell slots.</p>
                        <p>With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination.</p>
                        <p>If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn’t remove it from your list of prepared spells.</p>
                        <br>
                        <p>You can change your list of prepared spells when you finish a long rest.</p>
                        <p>Preparing a new list of cleric spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.</p>
                        <br>
                    <h4> Spellcasting Ability </h4>
                        <p>The power of your spells comes from your devotion to your deity.</p>
                        <p>You use your Wisdom whenever a cleric spell refers to your spellcasting ability.</p>
                        <p>In addition, you use your Wisdom modifier when setting the saving throw DC for a cleric spell you cast and when making an attack roll with one.</p>
                        <br>
                        <p>Spell save DC = 8 + your proficiency bonus + your Wisdom modifier</p>
                        <br>
                        <p>Spell attack modifier = your proficiency bonus + your Wisdom modifier</p>
                        <br>
                    <h4> Ritual Casting </h4>
                        <p> You can cast a cleric spell as a ritual if that spell has the ritual tag and you have the spell prepared. </p>
                        <br>
                    <h4> Spellcasting Focus </h4>
                        <p>You can use a holy symbol (see Equipment) as a spellcasting focus for your cleric spells. </p>
                        <br>
                <h3> Divine Domain </h3>
                    <p>Choose one domain related to your deity. Your chosen domain grants you domain spells and other features when you choose it at 1st level. </p>
                    <p>It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels.</p>
                    <br>
                    <h4> Domain spells <h4>
                        <p>Each domain has a list of spells—its domain spells— that you gain at the cleric levels noted in the domain description.</p>
                        <p>Once you gain a domain spell, you always have it prepared, and it doesn’t count against the number of spells you can prepare each day.</p>
                        <br>
                        <p>If you have a domain spell that doesn’t appear on the cleric spell list, the spell is nonetheless a cleric spell for you</p>
                    
        `;
    } else if (Class === "Paladin") {
        return `
        <h2> Class Proficiencies </h2>
            <p>Armor: All armor, shields</p>
            <p>Weapons: Simple weapons, martial weapons</p>
            <p>Tools: None</p>
            <p>Saving Throws: Wisdom, Charisma</p>
            <p>Skills: Choose two from Athletics, Insight, Intimidation, Medicine, Persuasion, and Religion</p>
            <br>
        <h2> Class Features </h2>
            <br>
            <h3> Divine Sense </h3>
                <p>The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears.</p>
                <p>As an action, you can open your awareness to detect such forces. </p>
                <p>Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover.</p>
                <p>You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity.</p>
                <p>Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the hallow spell.</p>
                <br>
                <p>You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses.</p>
                <br>
            <h3>Lay on Hands</h3>
                <p>Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest.</p>
                <p>With that pool, you can restore a total number of hit points equal to your paladin level × 5.</p>
                <br>
                <p>As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool.</p>
                <br>
                <p>Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it.</p>
                <p>You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one.</p>
                <br>
                <p>This feature has no effect on undead and constructs.</p>
        `;
    }
})

handlebars.registerHelper("getRaceInfo", function(Race) {
    if (Race === "Dwarf") {
        return `
        <h2> ${Race} Info </h2>
        <p><span>Ability Score Increase: Your Constitution score increases by 2.

        <p><span>Age:</span> Dwarves mature at the same rate as humans, but they’re considered young until they reach the age of 50. On average, they live about 350 years.</p>
        
        <p><span>Alignment:</span> Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.</p>
        
        <p><span>Size:</span> Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.</p>
        
        <p><span>Speed:</span> Your base walking speed is 25 feet. Your speed is not reduced by wearing heavy armor.</p>
        
        <p><span>Darkvision:</span> Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.</p>
        
        <p><span>Dwarven Resilience:</span> You have advantage on saving throws against poison, and you have resistance against poison damage.</p>
        
        <p><span>Dwarven Combat Training:</span> You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.</p>
        
        <p><span>Tool Proficiency:</span> You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools.</p>
        
        <p><span>Stonecunning:</span> Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.</p>
        
        <p><span>Languages:</span> You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.</p>
        `
    } else if (Race === "Elf") {
        return `
        <h2> ${Race} Info </h2>
            <p><span>Ability Score Increase:</span> Your Dexterity score increases by 2.</p>

            <p><span>Age:</span> Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.</p>
            
            <p><span>Alignment:</span> Elves love freedom, variety, and self- expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others’ freedom as well as their own, and they are more often good than not. The drow are an exception; their exile has made them vicious and dangerous. Drow are more often evil than not.</p>
            
            <p><span>Size:</span> Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.</p>
            
            <p><span>Speed:</span> Your base walking speed is 30 feet.</p>
            
            <p><span>Darkvision:</span> Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.</p>
            
            <p><span>Keen Senses:</span> You have proficiency in the Perception skill.</p>
            
            <p><span>Fey Ancestry:</span> You have advantage on saving throws against being charmed, and magic can’t put you to sleep.</p>
            
            <p><span>Trance:</span> Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.</p>
            
            <p><span>Languages:</span> You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.</p>
        `
    } else if (Race === "Halfling") {
        return `
        <h2> ${Race} Info </h2>
        <p><span>Ability Score Increase:</span> Your Dexterity score increases by 2.</p>

        <p><span>Age:</span> A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.</p>
            
        <p><span>Alignment:</span> Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.</p>
            
        <p><span>Size:</span> Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.</p>
            
        <p><span>Speed:</span> Your base walking speed is 25 feet.</p>
            
        <p><span>Lucky:</span> When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.</p>
            
        <p><span>Brave:</span> You have advantage on saving throws against being frightened.</p>
            
        <p><span>Halfling Nimbleness:</span> You can move through the space of any creature that is of a size larger than yours.</p>
            
        <p><span>Languages:</span> You can speak, read, and write Common and Halfling. The Halfling language isn’t secret, but halflings are loath to share it with others. They write very little, so they don’t have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling.</p>
        `
    } else if (Race === "Human") {
        return `
        <h2> ${Race} Info </h2>
            Ability Score Increase: Your ability scores each increase by 1.

            Age: Humans reach adulthood in their late teens and live less than a century.
        
            Alignment: Humans tend toward no particular alignment. The best and the worst are found among them.
        
            Size: Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.
        
            Speed: Your base walking speed is 30 feet.
        
            Languages: You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.
        `
    } else if (Race === "Dragonborn") {
        return `
        <h2> ${Race} Info </h2>
            Ability Score Increase: Your Strength score increases by 2, and your Charisma score increases by 1.

            Age: Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.

            Alignment: Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil. Most dragonborn are good, but those who side with evil can be terrible villains.

            Size: Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.

            Speed: Your base walking speed is 30 feet.

            Draconic Ancestry: You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.

            Breath Weapon: You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation.

            When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level.

            Table: Draconic Ancestry
            Dragon	Damage Type	Breath Weapon
            Black	Acid	5 by 30 ft. line (Dex. save)
            Blue	Lightning	5 by 30 ft. line (Dex. save)
            Brass	Fire	5 by 30 ft. line (Dex. save)
            Bronze	Lightning	5 by 30 ft. line (Dex. save)
            Copper	Acid	5 by 30 ft. line (Dex. save)
            Gold	Fire	15 ft. cone (Dex. save)
            Green	Poison	15 ft. cone (Con. save)
            Red	Fire	15 ft. cone (Dex. save)
            Silver	Cold	15 ft. cone (Con. save)
            White	Cold	15 ft. cone (Con. save)
            After you use your breath weapon, you can’t use it again until you complete a short or long rest.

            Damage Resistance: You have resistance to the damage type associated with your draconic ancestry.

            Languages: You can speak, read, and write Common and Draconic. Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants.
        `
    } else if (Race === "Half-Elf") {
        return `
        <h2> ${Race} Info </h2>
            Ability Score Increase: Your Charisma score increases by 2, and two other ability scores of your choice increase by 1.

            Age: Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.
            
            Alignment: Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent others’ demands, and sometimes prove unreliable, or at least unpredictable.
            
            Size: Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.
            
            Speed: Your base walking speed is 30 feet.
            
            Darkvision: Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.
            
            Fey Ancestry: You have advantage on saving throws against being charmed, and magic can’t put you to sleep.
            
            Skill Versatility: You gain proficiency in two skills of your choice.
            
            Languages: You can speak, read, and write Common, Elvish, and one extra language of your choice.
        `
    } else if (Race === "Half-Orc") {
        return `
        <h2> ${Race} Info </h2>
            Ability Score Increase: Your Strength score increases by 2, and your Constitution score increases by 1.
            Age: Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.
            Alignment: Half-orcs inherit a tendency toward chaos from their orc parents and are not strongly inclined toward good. Half-orcs raised among orcs and willing to live out their lives among them are usually evil.
            Size: Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium.
            Speed: Your base walking speed is 30 feet.
            Darkvision: Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.
            Menacing: You gain proficiency in the Intimidation skill.
            Relentless Endurance: When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a long rest.
            Savage Attacks: When you score a critical hit with a melee weapon attack, you can roll one of the weapon’s damage dice one additional time and add it to the extra damage of the critical hit.
            Languages: You can speak, read, and write Common and Orc. Orc is a harsh, grating language with hard consonants. It has no script of its own but is written in the Dwarvish script.
        `
    } else if (Race === "Tiefling") {
        return `
        <h2> ${Race} Info </h2>
            Ability Score Increase: Your Intelligence score increases by 1, and your Charisma score increases by 2.

            Age: Tieflings mature at the same rate as humans but live a few years longer.
            
            Alignment: Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not, an independent nature inclines many tieflings toward a chaotic alignment.
            
            Size: Tieflings are about the same size and build as humans. Your size is Medium.
            
            Speed: Your base walking speed is 30 feet.
            
            Darkvision: Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.
            
            Hellish Resistance: You have resistance to fire damage.
            
            Infernal Legacy. You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.
            
            Languages: You can speak, read, and write Common and Infernal.
        `
    } else if (Race === "Gnome") {
        return `
        <h2> ${Race} Info </h2>
            Ability Score Increase: Your Intelligence score increases by 2.

            Age: Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.
            
            Alignment: Gnomes are most often good. Those who tend toward law are sages, engineers, researchers, scholars, investigators, or inventors. Those who tend toward chaos are minstrels, tricksters, wanderers, or fanciful jewelers. Gnomes are good-hearted, and even the tricksters among them are more playful than vicious.
            
            Size: Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small.
            
            Speed: Your base walking speed is 25 feet.
            
            Darkvision: Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.
            
            Gnome Cunning: You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.
            
            Languages: You can speak, read, and write Common and Gnomish. The Gnomish language, which uses the Dwarvish script, is renowned for its technical treatises and its catalogs of knowledge about the natural world.
        `
    }
    
    
})


module.exports = {addProficientBonus, statModifiers, getHp, proficiencyBonus, getspellBonus, getSpellSave, getSpellAttack};