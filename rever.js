let friends = ["John", "May", "Snap", "Jack"];
let reversed_friends =[];
for (let i = friends.length - 1; i >= 0; i-- ){
    let friend = friends[i];
    reversed_friends.push(friend);
}
console.log(reversed_friends);