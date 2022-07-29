//import { example } from './data.js';

import data from './data/athletes/athletes.js';

for (let i = 0; i<= data.athletes.length;i++){
  console.log(data.athletes[i].team);
  console.log(data.athletes[i].name);
  console.log(data.athletes[i].sport);
  console.log(data.athletes[i].medal);

}
console.log(data.athletes);
