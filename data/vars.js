function dynamicSort(property) {
  let sortOrder = 1;
  if (property[0] === "-"){
      sortOrder = -1;
      property = property.substr(1);
  }
  return function (a,b) {
      const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
  }
}

module.exports = {
  attackTypes: ['Physical', 'Magical', 'Other'],
  forces: ['Health', 'Arcana', 'Sanity'],
  stats: {
    top: [
      {shortTxt: 'Str', fullTxt: 'Strength'},
      {shortTxt: 'Int', fullTxt: 'Intelligence'},
      {shortTxt: 'Dex', fullTxt: 'Dexterity'},
      {shortTxt: 'Cha', fullTxt: 'Charisma'},
    ],
    bottom: [
      {shortTxt: 'Con', fullTxt: 'Constitution'},
      {shortTxt: 'Pow', fullTxt: 'Power'},
      {shortTxt: 'Luck', fullTxt: 'Luck'},
      {shortTxt: 'I. Luck', fullTxt: 'ILuck'},
    ]
  },
  skills: {
    left: [
      { name: 'Alertness', value: 20 },
      { name: 'Animal Handling', value: 5},
      { name: 'Athletics', value: 10 },
      { name: 'Art', value: 0 },
      { name: 'Barter', value: 5 },
      { name: 'Craft', value: 0 },
      { name: 'Deception', value: 10 },
      { name: 'Disguise', value: 5 },
      { name: 'Dodge', value: 20 },
    ].sort(dynamicSort('name')),
    middle: [
      { name: 'Drive / Pilot', value: 20 },
      { name: 'History', value: 10 },
      { name: 'Intimidation', value: 5 },
      { name: 'Medicine', value: 1 },
      { name: 'Nature', value: 5 },
      { name: 'Navigate', value: 15 },
      { name: 'Occult', value: 0 },
      { name: 'Performance', value: 5},
      { name: 'Persuade', value: 10},
    ].sort(dynamicSort('name')),
    right: [
      { name: 'Machinery', value: 5 },
      { name: 'Science', value: 10 },
      { name: 'Search', value: 10 },
      { name: 'Speed', value: 0 },
      { name: 'Sleight of Hand', value: 5},
      { name: 'Stealth', value: 10},
      { name: 'Survival', value: 10},
      { name: 'Unsanity', value: 0},
      { name: 'Vibe Check', value: 15},
    ].sort(dynamicSort('name')),
  },
  spellSlots: [
    {num: 1, txt: '1st'},
    {num: 2, txt: '2nd'},
    {num: 3, txt: '3rd'},
    {num: 4, txt: '4th'},
    {num: 5, txt: '5th'},
    {num: 6, txt: '6th'},
    {num: 7, txt: '7th'},
    {num: 8, txt: '8th'},
    {num: 9, txt: '9th'},
  ],
}
