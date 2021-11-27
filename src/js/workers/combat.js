
on('clicked:repeating_combat:combat-roll', async(info) => {
  const rowAttributes = info.sourceAttribute.split('_');
  rowAttributes.pop();
  const rowPrefix = rowAttributes.join('_');

  getAttrs([`${rowPrefix}_weapon-type`], (attrs) => {
    const skill = Object.values(attrs)[0];
    console.log({skill});

    const template = '&{template:skilledCompRoll}';
    const name = '{{name=@{character_name}}}';
    const skillValue = `{{skillvalue=[[(@{${skill}})]]}}`;
    const fumble = `{{fumble=[[ceil(95+([[(@{${skill}})]])/20))]]}}`;
    const crit = `{{crit=[[ceil(([[(@{${skill}})]])/20)+1]]}}`;
    const extreme = `{{extreme=[[ceil(([[(@{${skill}})]])/5)+1]]}}`;
    const hard = `{{hard=[[ceil(([[(@{${skill}})]])/2)+1]]}}`;
    const success = `{{success=[[(@{${skill}})+(@{ILuck})[ILuck]]]}}`;
    const roll = '{{Roll=[[(1d100)[Roll]+(@{willpower})[Willpower]+(@{bonus})[Bonus]]]}}';
    const bonus = `{{bonus=[[@{bonus}]]}}`;
    const innateLuck = `{{innateLuck=[[@{ILuck}]]}}`;
    const skillName = `{{skillname=@{${rowPrefix}_weapon-name}}}`

    startRoll(`${template} ${name} ${skillValue} ${fumble} ${crit} ${extreme} ${hard} ${success} ${roll} ${skillName} ${bonus} ${innateLuck}`, ({results, rollId}) => {
      console.log({results, rollId});

      let computedRoll = results.Roll.result;
      if (computedRoll > 100) computedRoll = 100;
      if (computedRoll < 1) computedRoll = 1;

      let computedSuccess = results.success.result;
      if (computedSuccess > 100) computedSuccess = 100;

      console.log({results, bonus: results.bonus.result, computed: {roll: computedRoll, success: computedSuccess}});
      finishRoll(rollId, { Roll: computedRoll, success: computedSuccess});
    });
  });
})
