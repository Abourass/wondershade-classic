
["skills", "combat", "magick", "items", 'journal'].forEach(button => {
  on(`clicked:${button}`, function() {
    setAttrs({ sheetTab: button });
  });
});
