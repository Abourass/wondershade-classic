
on('change:Dexterity sheet:opened', function(){
  getAttrs(['Dexterity'], (values) => {
    const dex = parseInt(values.Dexterity) || 0;
    const Speed = Math.floor((dex / 10)) * 5;
    setAttrs({ Speed });
  })
})
