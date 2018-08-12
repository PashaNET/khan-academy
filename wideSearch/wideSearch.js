//list of people with professions
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
        let person = queue.shift();
        if(!alreadyChecked.indexOf(person) > -1){
            if(isPersonHasProffession(profession)){
                console.log('Friend ' + person + ' has needed knowledge');
                return true;
            } else {
                queue.concat(people[person]);
            }
        }
    }
}

findFriendWithProfession('you', 'ash');