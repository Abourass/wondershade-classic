
on('change:Power sheet:opened', function(){
  getAttrs(['Power'], (values) => {
    const pow = parseInt(values.Power) || 0;
    setAttrs({MaxSanity: pow});
  })
})
