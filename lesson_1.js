
const family_agent = {
  father: 'Juan Dela Cruz',
  mother: 'Maria Clara',
  firstChild: 'Coco Martin',
  secondChild: 'Darna Valentine',

  power : {
    father_power: 'fire',
    mother_power: 'water',
    firstChild_power: 'Sword Smith',
    secondChild_power: 'speed'
  }
};

const {father, mother, firstChild, secondChild, power: {father_power, mother_power, firstChild_power, secondChild_power}} = family_agent;

console.log(`The Superior in Family is ${father} that has a power of ${father_power}`);