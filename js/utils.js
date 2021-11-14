// fetch('./json/users.json')


fetch('https://raw.githubusercontent.com/aunimhsn/data-format/main/json/users.json')
.then((response) => { return response.json() })
.then((data) => { 

    console.log(data);


    // TP 1. ----

    // 1
    console.log(data.users.length);

    // 2
    console.log(data.users[1].company);

    // 3
    console.log(data.users[1].friends[2].name);

    // 4
    console.log(data.users[0].eyeColor);

    // 5
    let addresses = [];
    data.users.forEach((user) => { 
        addresses.push(user.address); 
    });
    console.log(addresses);

    // 6
    let usersFavoriteFruitStrawberryCount = 0;
    data.users.forEach((user) => { 
        if (user.favoriteFruit === 'strawberry') usersFavoriteFruitStrawberryCount++;
    });
    console.log(usersFavoriteFruitStrawberryCount + ' users love strawberries !');

    // 7
    let unreadMessages = 0;
    data.users.forEach((user) => { 
        if (user.name === 'Brianna Huffman') {
            unreadMessages = user.greeting.replace(/[^0-9]/g,'');
        }
    });
    console.log(unreadMessages);

    // 8
    let maleUsersPercentage = 0.00;
    let maleCount = 0;
    data.users.forEach((user) => { 
        if (user.gender === 'male') maleCount++
    });
    maleUsersPercentage = (maleCount / data.users.length) * 100;
    console.log(maleUsersPercentage.toFixed(2) + '%');

    // 9
    let femaleAgeAverage = 0.0;
    let femaleUsersAges = [];
    data.users.forEach((user) => { 
        if (user.gender === 'female') femaleUsersAges.push(user.age);
    });
    femaleAgeAverage = femaleUsersAges.reduce((a, b) => a + b) / femaleUsersAges.length;
    console.log(femaleAgeAverage);

    // 10
    let usersBalanceCleaned = []; 
    data.users.forEach((user) => { 
        userBalance = user.balance.split(',').join('').substring(1);
        usersBalanceCleaned.push(parseFloat(userBalance));
    });
    let usersBalanceSum = usersBalanceCleaned.reduce((a, b) => a + b);
    console.log('$' + usersBalanceSum.toFixed(2));

    // 11
    let city = '';
    data.users.forEach((user) => { 
        if (user.name === 'Zelma Sutton') {
            city = user.address.split(',')[1].trim();
        }
    });
    console.log(city);


    // TP 2. ----

    // 1
    let data_1 = JSON.parse(JSON.stringify(data))
    data_1.users.splice(1, 1);
    console.log(data_1);

    // 2 
    let data_2 = JSON.parse(JSON.stringify(data))
    data_2.users[2].friends.push({ id: 3, name: 'John Doe'});
    console.log(data_2);

    // 3 
    let data_3 = JSON.parse(JSON.stringify(data))
    data_3.users[3].phone = '+1 (954) 421-6824';
    console.log(data_3);

    // 4 
    let data_4 = JSON.parse(JSON.stringify(data))
    let firstCompany = data_4.users[0].company;
    data_4.users[0].company = [firstCompany, 'MONIKA'];
    console.log(data_4);

    // 5
    let data_5 = JSON.parse(JSON.stringify(data))
    data_5.users.forEach((user) => {
        let names = ([user.name.split(' ')[0], user.name.split(' ')[1]])
        delete user.name;
        user.firstName = names[0];
        user.lastName = names[1];
    });
    console.log(data_5);

    // 6
    let data_6 = JSON.parse(JSON.stringify(data));
    let lastUser = data_6.users[data_6.users.length - 1];
    let laborumTagIndex = lastUser.tags.indexOf('laborum');
    lastUser.tags.splice(laborumTagIndex, 1);
    console.log(data_6);

    // 7
    let data_7 = JSON.parse(JSON.stringify(data))
    data_7.users.forEach((user) => {
        user.age++;
    });
    console.log(data_7);
    

});


