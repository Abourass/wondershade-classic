
const spellCategories = [
  'wonderLvlSpell',
  'finesseClassLvlSpell',
  'cantripLvlSpell',
  'firstLvlSpell',
  'secondLvlSpell',
  'thirdLvlSpell',
  'fourthLvlSpell',
  'fifthLvlSpell',
  'sixthLvlSpell',
  'seventhLvlSpell',
  'eighthLvlSpell',
  'ninthLvlSpell',
]

spellCategories.forEach(id => {
  on(`clicked:repeating_spell-${id}:magick-roll`, async(info) => {
    const rowAttributes = info.sourceAttribute.split('_');
    rowAttributes.pop();
    const rowPrefix = rowAttributes.join('_');
    
    const template = '&{template:skilledCompRoll}';
    const name = '{{name=@{character_name}}}';
    const skillValue = `{{skillvalue=[[(@{Unsanity})]]}}`;
    const fumble = `{{fumble=[[ceil(95+([[(@{Unsanity})]])/20))]]}}`;
    const crit = `{{crit=[[ceil(([[(@{Unsanity})]])/20)+1]]}}`;
    const extreme = `{{extreme=[[ceil(([[(@{Unsanity})]])/5)+1]]}}`;
    const hard = `{{hard=[[ceil(([[(@{Unsanity})]])/2)+1]]}}`;
    const success = `{{success=[[(@{Unsanity})+(@{ILuck})[ILuck]]]}}`;
    const roll = '{{Roll=[[(1d100)[Roll]+(@{willpower})[Willpower]+(@{bonus})[Bonus]]]}}';
    const bonus = `{{bonus=[[@{bonus}]]}}`;
    const innateLuck = `{{innateLuck=[[@{ILuck}]]}}`;
    const skillName = `{{skillname=@{${rowPrefix}_spellName}}}`
  
    const {results, rollId} = await startRoll(`${template} ${name} ${skillValue} ${fumble} ${crit} ${extreme} ${hard} ${success} ${roll} ${skillName} ${bonus} ${innateLuck}`)
    console.log({results, rollId});
  
    let computedRoll = results.Roll.result;
    if (computedRoll > 100) computedRoll = 100;
    if (computedRoll < 1) computedRoll = 1;
  
    let computedSuccess = results.success.result;
    if (computedSuccess > 100) computedSuccess = 100;
  
    console.log({results, bonus: results.bonus.result, computed: {roll: computedRoll, success: computedSuccess}});
    finishRoll(rollId, { Roll: computedRoll, success: computedSuccess});
  })
})


