
on('clicked:skillRoll', async(info) => {
  const template = '&{template:skilledCompRoll}';
  const name = '{{name=@{character_name}}}';
  const skill = info.htmlAttributes.title;
  const skillValue = `{{skillvalue=[[(@{${skill}})]]}}`;
  const fumble = `{{fumble=[[ceil(95+([[(@{${skill}})]])/20))]]}}`;
  const crit = `{{crit=[[ceil(([[(@{${skill}})]])/20)+1]]}}`;
  const extreme = `{{extreme=[[ceil(([[(@{${skill}})]])/5)+1]]}}`;
  const hard = `{{hard=[[ceil(([[(@{${skill}})]])/2)+1]]}}`;
  const success = `{{success=[[(@{${skill}})]]}}`;
  const roll = '{{Roll=[[1d100]]}}';
  const bonus = `{{bonus=[[@{bonus}]]}}`;
  const skillName = `{{skillname=${skill}}}`
  const {results, rollId} = await startRoll(`${template} ${name} ${skillValue} ${fumble} ${crit} ${extreme} ${hard} ${success} ${roll} ${skillName} ${bonus}`)
  console.log({results, rollId});
  let computed = results.Roll.result + results.bonus.result;
  if (computed > 100) computed = 100;
  if (computed < 1) computed = 1;
  finishRoll(rollId, { Roll: computed })
})
