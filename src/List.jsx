function List(){
    const fruits =[ {id: 1, name : "Apple" , calories: 95},
                    {id: 2, name : "Banana" , calories: 105},
                    {id: 3, name : "Grapes" , calories: 45},
                    {id: 4, name : "cononut" , calories: 110},  
                    {id: 5, name : "Pineapple" , calories: 75}];
    fruits.sort((a,b)=> a.calories - b.calories);
    const ListItems = fruits.map(fruit => <li key ={fruit.id}> {fruit.name}: &nbsp; <b>{fruit.calories}</b></li>);
    return (<ol>{ListItems}</ol>);
}
export default List