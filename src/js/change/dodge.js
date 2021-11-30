
on('change:Dexterity change:ILuck sheet:opened', function(){
  getAttrs(['Dexterity', 'ILuck'], (values) => {
    const dex = parseInt(values.Dexterity) || 0;
    const iLuck = parseInt(values.ILuck) || 0;
    setAttrs({Dodge: Math.round((dex + iLuck) / 2)});
  })
})
