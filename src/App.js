import foods from './foods.json';
import './App.css';
import { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
function App() {
  const [foodList, setFoodList] = useState(foods);
  const [showAddFood, setShowAddFood] = useState(false);
  const addFoodToList = (newFood) => {
    const updatedFoodList = [...foodList, newFood];
    setFoodList(updatedFoodList);
  };

  const filterFood = (searchTerm) => {
    let searchList = foodList.filter((food) => {
      return food.name.includes(searchTerm);
    });
  };

  const deleteFood = (foodName) => {
    const filteredFoodList = foodList.filter((food) => {
      return food.name !== foodName;
    });
    setFoodList(filteredFoodList);
  };

  const toggleShowAddFoodForm = () => {
    setShowAddFood(!showAddFood);
  };
  return (
    <div className="App">
      <Search searchFood={filterFood} />

      <Button onClick={toggleShowAddFoodForm}>
        {showAddFood ? 'Hide Form' : 'Add New Food'}
      </Button>

      {showAddFood && <AddFoodForm addFood={addFoodToList} />}

      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodList.map((food) => {
          return <FoodBox deleteFood={deleteFood} food={food} />;
        })}
      </Row>
    </div>
  );
}

export default App;
