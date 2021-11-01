const buttonlist = ["skills", "combat", "magic", "items"];
buttonlist.forEach(button => {
  on(`clicked:${button}`, function() {
    setAttrs({ sheetTab: button });
  });
});
