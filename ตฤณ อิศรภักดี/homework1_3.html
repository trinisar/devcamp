const axios = require('axios');

const fetchData = async () => {
    try {
        const response = await axios.get('https://dev.codekit.co/devcamp-api/friends.txt');
      
        const allFriends = response.data;

        const result = allFriends
            .filter(friend => friend.gender == "male" && friend.friends.length >= 2 )
            .map(friend => {
                const balanceNumber = parseFloat(friend.balance.replace(/[$,]/g, '')) / 10;
                return {
                    name: friend.name,
                    gender: friend.gender,
                    company: friend.company,
                    email: friend.email,
                    friends: friend.friends.map(f => f.name),
                    balance: `$${balanceNumber.toFixed(2)}`
                };
            });

        console.log(result);

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();