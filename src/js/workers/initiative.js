
on('clicked:initRoll', async(info) => {
  const template = '&{template:initRoll}';
  const name = '{{name=@{character_name}}}';
  const skill = info.htmlAttributes.title;
  const skillModifier = `{{skillModifier=[[(@{${skill}})]]}}`;
  const roll = '{{Roll=[[(1d20)[Roll]+(@{initiative})[Initiative]]]}}';

  const {results, rollId} = await startRoll(`${template} ${name} ${skillModifier} ${roll}`);

  finishRoll(rollId, { Roll: results.Roll.result });
})
