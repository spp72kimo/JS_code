// reverse array 

const friends = ["Harry", "Ron", "Snap"];
const reversed_friends = [];

for (let i = friends.length-1 ; i >= 0; i--){
    console.log(friends[i]);
    reversed_friends.push(friends[i]);
}

console.log('friends:' ,friends);
console.log('reversed_friends:', reversed_friends);