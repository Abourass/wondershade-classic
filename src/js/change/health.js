
on('change:Strength change:Constitution sheet:opened', function(){
  getAttrs(['Strength', 'Constitution'], (values) => {
    const str = parseInt(values.Strength) || 0;
    const con = parseInt(values.Constitution) || 0;

    setAttrs({MaxHealth: Math.round(((str / 5) + (con / 5)) * 1.5)});
  })
})
