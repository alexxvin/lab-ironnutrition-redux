import AddFoodForm from './components/AddFoodForm';
import FoodList from './components/FoodList';
import FoodSearch from './components/FoodSearch';

function App() {
  return (
    <div className="App">
      <FoodSearch />
      <AddFoodForm />
      <FoodList />
    </div>
  );
}

export default App;
