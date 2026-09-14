import {Friend, Colleague, EmailContact} from './myTypes'
import { friends, colleagues } from './01-basics'

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}
console.log(highestExtension(colleagues.current));

// Function to add colleague to the colleagues list addind extention as highest extension + 1
function addColleague(
    cs: Colleague[],
    name: string,
    department: string,
    email: string
  ): void {
    const highestExtColleague = highestExtension(cs);
    const newColleague: Colleague = {
      name,
      department,
      contact: {
        email,
        extension: highestExtColleague.contact.extension + 1,
      },
    };
    cs.push(newColleague);
  }

  addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

// function to sort colleagues
function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number
): EmailContact[] {
    const sorted =colleagues.sort(sorter); //Colleague[] inferred
    const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }))
    return result;
}

console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));

// find friends function that searches an array of friends for those that satisfy a criterion
function findFriends(
    fs: Friend[],
    criterion: (f: Friend) => boolean
): Friend[] {
    return fs.filter(criterion);
}

console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));
