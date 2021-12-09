
on('change:Sanity sheet:opened', function(){
  getAttrs(['Sanity'], (values) => {
    const sanity = parseInt(values.Sanity) || 0;
    setAttrs({Unsanity: sanity});
  })
})
