const fs = require('fs');
const csvWriter = require('csv-writer').createObjectCsvWriter({
    path: 'db/users.csv',
    header: [
        {id: 'name', title: 'FIRST_NAME'},
        {id: 'surname', title: 'SECOND_NAME'},
        {id: 'sex', title: 'SEX'},
        {id: 'age', title: 'AGE'},
        {id: 'department', title: 'DEPARTMENT'},
        {id: 'car', title: 'CAR'}
    ]
});

data = JSON.parse(fs.readFileSync('db/users.json', 'utf8'));

csvWriter.writeRecords(data)
    .then(() => {
        console.log("Job's jone!")
        console.log(data);
});


