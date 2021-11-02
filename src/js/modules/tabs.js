
["skills", "combat", "magic", "items"].forEach(button => {
  on(`clicked:${button}`, function() {
    setAttrs({ sheetTab: button });
  });
});
