
["skills", "combat", "magick", "items", 'journal'].forEach(button => {
  on(`clicked:${button}`, function() {
    setAttrs({ sheetTab: button });
  });
});

const spellCategories = [
  'wonderLvlSpell',
  'finesseClassLvlSpell',
  'cantripLvlSpell',
  'firstLvlSpell',
  'secondLvlSpell',
  'thirdLvlSpell',
  'fourthLvlSpell',
  'fifthLvlSpell',
  'sixthLvlSpell',
  'seventhLvlSpell',
  'eighthLvlSpell',
  'ninthLvlSpell',
]

spellCategories.forEach(button => {
  on(`clicked:${button}`, function() {
    setAttrs({ sheetMagicTab: button });

    // Add Border and Neon to the Active Category
    $20(`[name="act_${button}"]`).addClass('neon');
    // Make sure the class isn't on any other categories
    spellCategories.filter(cat => cat !== button).forEach(cat => {
      $20(`[name="act_${cat}"]`).removeClass('neon');
    })
  });
});

// Add the neon glow to active magick category when the spell sheet is opened
on('sheet:opened', function(){
  getAttrs(['sheetMagicTab'], ({sheetMagicTab}) => {
    // Add Border and Neon to the Active Category
    $20(`[name="act_${sheetMagicTab}"]`).addClass('neon');
  });
})
