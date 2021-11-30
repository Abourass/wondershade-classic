
on('change:Strength change:Constitution sheet:opened', function(){
  getAttrs(['Strength', 'Constitution'], (values) => {
    const str = parseInt(values.Strength) || 0;
    const con = parseInt(values.Constitution) || 0;
    if (str + con <= 85){
      setAttrs({MaxFortitude: 0});
    } else if (str + con > 85 && str + con <= 129){
      setAttrs({MaxFortitude: 1});
    } else if (str + con > 130){
      setAttrs({MaxFortitude: 2});
    }
  })
})
