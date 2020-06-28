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

handlebars.registerHelper("getRaceInfo", function(Race) {
    if (Race === "Dwarf") {
        return `
        <h2 class="font-black text-center text-lg m-2 border-b border-black"> ${Race} Info </h2>
        <p class="m-2"><span class="font-black">Ability Score Increase:</span> Your Constitution score increases by 2.

        <p class="m-2"><span class="font-black">Age:</span> Dwarves mature at the same rate as humans, but they’re considered young until they reach the age of 50. On average, they live about 350 years.</p>
        
        <p class="m-2"><span class="font-black">Alignment:</span> Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.</p>
        
        <p class="m-2"><span class="font-black">Size:</span> Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.</p>
        
        <p class="m-2"><span class="font-black">Speed:</span> Your base walking speed is 25 feet. Your speed is not reduced by wearing heavy armor.</p>
        
        <p class="m-2"><span class="font-black">Darkvision:</span> Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.</p>
        
        <p class="m-2"><span class="font-black">Dwarven Resilience:</span> You have advantage on saving throws against poison, and you have resistance against poison damage.</p>
        
        <p class="m-2"><span class="font-black">Dwarven Combat Training:</span> You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.</p>
        
        <p class="m-2"><span class="font-black">Tool Proficiency:</span> You gain proficiency with the artisan’s tools of your choice:</span> smith’s tools, brewer’s supplies, or mason’s tools.</p>
        
        <p class="m-2"><span class="font-black">Stonecunning:</span> Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.</p>
        
        <p class="m-2"><span class="font-black">Languages:</span> You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.</p>
        `
    } else if (Race === "Elf") {
        return `
        <h2 class="font-black text-center text-lg m-2 border-b border-black"> ${Race} Racial Info </h2>
            <p class="m-2"><span class="font-black">Ability Score Increase:</span> Your Dexterity score increases by 2.</p>

            <p class="m-2"><span class="font-black">Age:</span> Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.</p>
            
            <p class="m-2"><span class="font-black">Alignment:</span> Elves love freedom, variety, and self- expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others’ freedom as well as their own, and they are more often good than not. The drow are an exception; their exile has made them vicious and dangerous. Drow are more often evil than not.</p>
            
            <p class="m-2"><span class="font-black">Size:</span> Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.</p>
            
            <p class="m-2"><span class="font-black">Speed:</span> Your base walking speed is 30 feet.</p>
            
            <p class="m-2"><span class="font-black">Darkvision:</span> Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.</p>
            
            <p class="m-2"><span class="font-black">Keen Senses:</span> You have proficiency in the Perception skill.</p>
            
            <p class="m-2"><span class="font-black">Fey Ancestry:</span> You have advantage on saving throws against being charmed, and magic can’t put you to sleep.</p>
            
            <p class="m-2"><span class="font-black">Trance:</span> Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.</p>
            
            <p class="m-2"><span class="font-black">Languages:</span> You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.</p>
        `
    } else if (Race === "Halfling") {
        return `
        <h2 class="font-black text-center text-lg m-2 border-b border-black"> ${Race} Info </h2>
        <p class="m-2"><span class="font-black">Ability Score Increase:</span> Your Dexterity score increases by 2.</p>

        <p class="m-2"><span class="font-black">Age:</span> A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.</p>
            
        <p class="m-2"><span class="font-black">Alignment:</span> Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.</p>
            
        <p class="m-2"><span class="font-black">Size:</span> Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.</p>
            
        <p class="m-2"><span class="font-black">Speed:</span> Your base walking speed is 25 feet.</p>
            
        <p class="m-2"><span class="font-black">Lucky:</span> When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.</p>
            
        <p class="m-2"><span class="font-black">Brave:</span> You have advantage on saving throws against being frightened.</p>
            
        <p class="m-2"><span class="font-black">Halfling Nimbleness:</span> You can move through the space of any creature that is of a size larger than yours.</p>
            
        <p class="m-2"><span class="font-black">Languages:</span> You can speak, read, and write Common and Halfling. The Halfling language isn’t secret, but halflings are loath to share it with others. They write very little, so they don’t have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling.</p>
        `
    } else if (Race === "Human") {
        return `
        <h2 class="font-black text-center text-lg m-2 border-b border-black"> ${Race} Info </h2>
        <p class="m-2"><span class="font-black">Ability Score Increase:</span> Your ability scores each increase by 1.</p>

        <p class="m-2"><span class="font-black">Age:</span> Humans reach adulthood in their late teens and live less than a century.</p>
        
        <p class="m-2"><span class="font-black">Alignment:</span> Humans tend toward no particular alignment. The best and the worst are found among them.</p>
        
        <p class="m-2"><span class="font-black">Size:</span> Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.</p>
        
        <p class="m-2"><span class="font-black">Speed:</span> Your base walking speed is 30 feet.</p>
        
        <p class="m-2"><span class="font-black">Languages:</span> You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues:</span> Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.</p>
        `
    } else if (Race === "Dragonborn") {
        return `
        <h2 class="font-black text-center text-lg m-2 border-b border-black"> ${Race} Info </h2>
        <p class="m-2"><span class="font-black">Ability Score Increase:</span> Your Strength score increases by 2, and your Charisma score increases by 1.</p>

        <p class="m-2"><span class="font-black">Age:</span> Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.</p>

        <p class="m-2"><span class="font-black">Alignment:</span> Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil. Most dragonborn are good, but those who side with evil can be terrible villains.</p>

        <p class="m-2"><span class="font-black">Size:</span> Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.</p>

        <p class="m-2"><span class="font-black">Speed:</span> Your base walking speed is 30 feet.</p>

        <p class="m-2"><span class="font-black">Draconic Ancestry:</span> You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.</p>

        <p class="m-2"><span class="font-black">Breath Weapon:</span> You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation.</p>

            <p>When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level.</p>

            <h3 class="font-black text-xl m-2 border-b border-black">Table: Draconic Ancestry</h3>
            <p>After you use your breath weapon, you can’t use it again until you complete a short or long rest.</p>

            <table class="mb-4">
            <tr>
                <th class="w-32">Dragon</th>
                <th class="w-32">Damage Type</th>
                <th class="w-32">Breath weapon</th>
                <th class="w-32">Save</th>
            </tr>
            <tr>
                <td class="text-center">Black</td>
                <td class="text-center">Acid</td>
                <td class="text-center">5 by 30ft.</td>
                <td class="text-center">Dex</td>
            </tr>
            <tr>
                <td class="text-center">Blue</td>
                <td class="text-center">Lightning</td>
                <td class="text-center">5 by 30ft.</td>
                <td class="text-center">Dex</td>
            </tr>
                <tr>
                <td class="text-center">Brass</td>
                <td class="text-center">Fire</td>
                <td class="text-center">5 by 30ft.</td>
                <td class="text-center">Dex</td>
            </tr>
                <tr>
                <td class="text-center">Bronze</td>
                <td class="text-center">Lightning</td>
                <td class="text-center">5 by 30ft.</td>
                <td class="text-center">Dex</td>
            </tr>
                <tr>
                <td class="text-center">Copper</td>
                <td class="text-center">Acid</td>
                <td class="text-center">5 by 30ft.</td>
                <td class="text-center">Dex</td>
            </tr>
                <tr>
                <td class="text-center">Gold</td>
                <td class="text-center">Fire</td>
                <td class="text-center">15 ft. cone</td>
                <td class="text-center">Dex</td>
            </tr>
                <tr>
                <td class="text-center">Green</td>
                <td class="text-center">Poison</td>
                <td class="text-center">15 ft. cone</td>
                <td class="text-center">Con</td>
            </tr>
                <tr>
                <td class="text-center">Red</td>
                <td class="text-center">Fire</td>
                <td class="text-center">15 ft. cone</td>
                <td class="text-center">Dex</td>
            </tr>
                <tr>
                <td class="text-center">Silver</td>
                <td class="text-center">Cold</td>
                <td class="text-center">15 ft. cone</td>
                <td class="text-center">Con</td>
            </tr>
                <tr>
                <td class="text-center">white</td>
                <td class="text-center">Cold</td>
                <td class="text-center">15 ft. cone</td>
                <td class="text-center">Con</td>
            </tr>
        </table>

            <p class="m-2"><span class="font-black">Damage Resistance:</span> You have resistance to the damage type associated with your draconic ancestry.</p>

            <p class="m-2"><span class="font-black">Languages:</span> You can speak, read, and write Common and Draconic. Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants.</p>
        `
    } else if (Race === "Half-Elf") {
        return `
        <h2 class="font-black text-center text-lg m-2 border-b border-black"> ${Race} Info </h2>
        <p class="m-2"><span class="font-black">Ability Score Increase:</span> Your Charisma score increases by 2, and two other ability scores of your choice increase by 1.</p>
    
        <p class="m-2"><span class="font-black">Age:</span> Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.</p>
            
        <p class="m-2"><span class="font-black">Alignment:</span> Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent others’ demands, and sometimes prove unreliable, or at least unpredictable.</p>
            
        <p class="m-2"><span class="font-black">Size:</span> Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.</p>
            
        <p class="m-2"><span class="font-black">Speed:</span> Your base walking speed is 30 feet.
            
        <p class="m-2"><span class="font-black">Darkvision:</span> Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.</p>
            
        <p class="m-2"><span class="font-black">Fey Ancestry:</span> You have advantage on saving throws against being charmed, and magic can’t put you to sleep.</p>
            
        <p class="m-2"><span class="font-black">Skill Versatility:</span> You gain proficiency in two skills of your choice.</p>
            
        <p class="m-2"><span class="font-black">Languages:</span> You can speak, read, and write Common, Elvish, and one extra language of your choice.</p>
        `
    } else if (Race === "Half-Orc") {
        return `
        <h2 class="font-black text-center text-lg m-2 border-b border-black"> ${Race} Info </h2>
        <p class="m-2"><span class="font-black">Ability Score Increase:</span> Your Strength score increases by 2, and your Constitution score increases by 1.</p>
        <p class="m-2"><span class="font-black">Age:</span> Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.</p>
        <p class="m-2"><span class="font-black">Alignment:</span> Half-orcs inherit a tendency toward chaos from their orc parents and are not strongly inclined toward good. Half-orcs raised among orcs and willing to live out their lives among them are usually evil.</p>
        <p class="m-2"><span class="font-black">Size:</span> Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium.</p>
        <p class="m-2"><span class="font-black">Speed:</span> Your base walking speed is 30 feet.</p>
        <p class="m-2"><span class="font-black">Darkvision:</span> Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.</p>
        <p class="m-2"><span class="font-black">Menacing:</span> You gain proficiency in the Intimidation skill.</p>
        <p class="m-2"><span class="font-black">Relentless Endurance:</span> When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a long rest.</p>
        <p class="m-2"><span class="font-black">Savage Attacks:</span> When you score a critical hit with a melee weapon attack, you can roll one of the weapon’s damage dice one additional time and add it to the extra damage of the critical hit.</p>
        <p class="m-2"><span class="font-black">Languages:</span> You can speak, read, and write Common and Orc. Orc is a harsh, grating language with hard consonants. It has no script of its own but is written in the Dwarvish script.</p>
        `
    } else if (Race === "Tiefling") {
        return `
        <h2 class="font-black text-center text-lg m-2 border-b border-black"> ${Race} Info </h2>
        <p class="m-2"><span class="font-black">Ability Score Increase:</span> Your Intelligence score increases by 1, and your Charisma score increases by 2.</p>

        <p class="m-2"><span class="font-black">Age:</span> Tieflings mature at the same rate as humans but live a few years longer.</p>
            
        <p class="m-2"><span class="font-black">Alignment:</span> Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not, an independent nature inclines many tieflings toward a chaotic alignment.</p>
            
        <p class="m-2"><span class="font-black">Size:</span> Tieflings are about the same size and build as humans. Your size is Medium.</p>
            
        <p class="m-2"><span class="font-black">Speed:</span> Your base walking speed is 30 feet.</p>
            
        <p class="m-2"><span class="font-black">Darkvision:</span> Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.
            
        <p class="m-2"><span class="font-black">Hellish Resistance:</span> You have resistance to fire damage.</p>
            
        <p class="m-2"><span class="font-black">Infernal Legacy:</span> You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.</p>
            
        <p class="m-2"><span class="font-black">Languages:</span> You can speak, read, and write Common and Infernal.</p>
        `
    } else if (Race === "Gnome") {
        return `
        <h2 class="font-black text-center text-lg m-2 border-b border-black"> ${Race} Info </h2>
        <p class="m-2"><span class="font-black">Ability Score Increase:</span> Your Intelligence score increases by 2.</p>

        <p class="m-2"><span class="font-black">Age:</span> Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.</p>
            
        <p class="m-2"><span class="font-black">Alignment:</span> Gnomes are most often good. Those who tend toward law are sages, engineers, researchers, scholars, investigators, or inventors. Those who tend toward chaos are minstrels, tricksters, wanderers, or fanciful jewelers. Gnomes are good-hearted, and even the tricksters among them are more playful than vicious.</p>
            
        <p class="m-2"><span class="font-black">Size:</span> Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small.</p>
            
        <p class="m-2"><span class="font-black">Speed:</span> Your base walking speed is 25 feet.</p>
            
        <p class="m-2"><span class="font-black">Darkvision:</span> Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.</p>
            
        <p class="m-2"><span class="font-black">Gnome Cunning:</span> You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.</p>
            
        <p class="m-2"><span class="font-black">Languages:</span> You can speak, read, and write Common and Gnomish. The Gnomish language, which uses the Dwarvish script, is renowned for its technical treatises and its catalogs of knowledge about the natural world.</p>
        `
    }
    
    
})


module.exports = {addProficientBonus, statModifiers, getHp, proficiencyBonus, getSpellSave, getSpellAttack};