
["skills", "combat", "magick", "items", 'journal'].forEach(button => {
  on(`clicked:${button}`, function() {
    setAttrs({ sheetTab: button });
  });
});

[
  {soft: 'wonderLvlSpell', txt: 'Wonder'},
  {soft: 'firstLvlSpell', txt: '1st'},
  {soft: 'secondLvlSpell', txt: '2nd'},
  {soft: 'thirdLvlSpell', txt: '3rd'},
  {soft: 'fourthLvlSpell', txt: '4th'},
  {soft: 'fifthLvlSpell', txt: '5th'},
  {soft: 'sixthLvlSpell', txt: '6th'},
  {soft: 'seventhLvlSpell', txt: '7th'},
  {soft: 'eighthLvlSpell', txt: '8th'},
  {soft: 'ninthLvlSpell', txt: '9th'},
].map(e => e.soft).forEach(button => {
  on(`clicked:${button}`, function() {
    setAttrs({ sheetMagicTab: button });
  });
});
