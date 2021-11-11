
on('clicked:magickRoll', async(info) => {
  const template = '&{template:skilledCompRoll}';
  const name = '{{name=@{character_name}}}';
  const spell = info.htmlAttributes.title;
  const skillValue = `{{skillvalue=[[(@{Unsanity})]]}}`;
  const fumble = `{{fumble=[[ceil(95+([[(@{Unsanity})]])/20))]]}}`;
  const crit = `{{crit=[[ceil(([[(@{Unsanity})]])/20)+1]]}}`;
  const extreme = `{{extreme=[[ceil(([[(@{Unsanity})]])/5)+1]]}}`;
  const hard = `{{hard=[[ceil(([[(@{Unsanity})]])/2)+1]]}}`;
  const success = `{{success=[[(@{Unsanity})]]}}`;
  const roll = '{{Roll=[[1d100]]}}';
  const skillName = `{{skillname=@{${spell}}}}`
  const {results, rollId} = await startRoll(`${template} ${name} ${skillValue} ${fumble} ${crit} ${extreme} ${hard} ${success} ${roll} ${skillName}`)
  console.log({results, rollId});

  const total = results.Roll.result;
  let computed = total + 20;
  if (computed > 100) computed = 100;
  finishRoll(rollId, { Roll: computed })
})
