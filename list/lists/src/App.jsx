// import Fruits1 from "./component/Fruits1.jsx"


export default function App() 
{
  const fruits = [
    { name: "Apple", calories: 95 },
    { name: "Banana", calories: 105 },
    { name: "Cherry", calories: 50 },
    { name: "Pineapple", calories: 452 },
    { name: "Elderberry", calories: 73 },
  ];
  

  // const modified = fruits.map((fruit)=><li>{fruits.name} has {fruits.calories}</li>)
const modified = fruits.map(fruit => (
    <li>
      {fruit.name} has {fruit.calories} calories
    </li>
  ));
  return 
  <ol>
    {modified}
  </ol>
}
