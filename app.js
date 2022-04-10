let friends = ['Steven', 'Jason', 'Sharry'];

localStorage.setItem('friends',JSON.stringify(friends));
localStorage.setItem('name','Steven');
localStorage.setItem('age',38);

let myFriends = JSON.parse(localStorage.getItem('friends'));
myFriends.forEach(e => {
    console.log(e);
})