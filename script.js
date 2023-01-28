console.log('Javascript is rad');
var number = 10;
var string = 'Yale'
var isRad = true;
var groceries = ['Milk', 'Eggs', 'Bread', 'Cheese']

function Groceries()
{
    for(var i=0; i<groceries.length; i++)
    {
        console.log(groceries[i]);
    }

}

Groceries();

document.getElementById('box').addEventListener('click', function(){
    alert('I got clicked');
})

