
on('clicked:skillRoll', async(info) => {
  const template = '&{template:skilledCompRoll}';
  const name = '{{name=@{character_name}}}';
  const skill = info.htmlAttributes.title;
  const skillValue = `{{skillvalue=[[(@{${skill}})]]}}`;
  const fumble = `{{fumble=[[ceil(95+([[(@{${skill}})]])/20))]]}}`;
  const crit = `{{crit=[[ceil(([[(@{${skill}})]])/20)+1]]}}`;
  const extreme = `{{extreme=[[ceil(([[(@{${skill}})]])/5)+1]]}}`;
  const hard = `{{hard=[[ceil(([[(@{${skill}})]])/2)+1]]}}`;
  const success = `{{success=[[(@{${skill}})+(@{ILuck})[I Luck]]]}}`;
  const roll = '{{Roll=[[1d100]]}}';
  const bonus = `{{bonus=[[@{bonus}]]}}`;
  const innateLuck = `{{innateLuck=[[@{ILuck}]]}}`;
  const skillName = `{{skillname=${skill}}}`;
  
  const {results, rollId} = await startRoll(`${template} ${name} ${skillValue} ${fumble} ${crit} ${extreme} ${hard} ${success} ${roll} ${skillName} ${bonus} ${innateLuck}`)
  let computedRoll = results.Roll.result + results.bonus.result;
  if (computedRoll > 100) computedRoll = 100;
  if (computedRoll < 1) computedRoll = 1;

  let computedSuccess = results.success.result;
  if (computedSuccess > 100) computedSuccess = 100;

  console.log({results, bonus: results.bonus.result, computed: {roll: computedRoll, success: computedSuccess}});
  finishRoll(rollId, { Roll: computedRoll, success: computedSuccess});
})
