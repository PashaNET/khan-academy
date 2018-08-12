
let you = {
    name: "name",
    friends: []
};
let people = {
    you: ['Ol', 'Kos', 'Yul'],
    Ol: ['you', 'Ya'],
    Kos: ['Yul', 'Sash'],
    Yul: ['Mi', 'Ka']
};

function findFriendWithProfession(person, profession){
    let alreadyChecked = [],
        queue = people[person];

    while(queue.length > 0){
        let friend = queue.shift();
        if(!alreadyChecked.indexOf(friend) > -1){
            if(isPersonHasProffession(friend, profession)){
                console.log('Friend ' + friend + ' has needed knowledge');
                return true;
            } else {
                queue = queue.concat(people[friend]);
            }
        }
    }
}

function isPersonHasProffession(person, profession){
    return person.indexOf(profession) > -1;
}

findFriendWithProfession('you', 'ash');