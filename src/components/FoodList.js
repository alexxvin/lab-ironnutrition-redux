import { useDispatch, useSelector } from 'react-redux';
import { Card, Col, Button, Row } from 'antd';
import { removeFood } from '../store';

function FoodList() {
  const dispatch = useDispatch();

  const foodList = useSelector(({ food: { data, searchTerm } }) => {
    return data.filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleFoodDelete = (food) => {
    dispatch(removeFood(food.id));
  };

  const renderedFood = foodList.map((food) => {
    return (
      <Col key={food.id}>
        <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
          <img src={food.image} height={60} alt="food" />
          <p>Calories: {food.calories}</p>
          <p>Servings: {food.servings}</p>
          <p>
            <b>Total Calories: {food.calories * food.servings}</b> kcal
          </p>
          <Button onClick={() => handleFoodDelete(food)} type="primary">
            Delete
          </Button>
        </Card>
      </Col>
    );
  });
  return (
    <div>
      FOOD LIST
      <Row style={{ width: '100 %', justifyContent: 'center' }}>
        {renderedFood}
      </Row>
    </div>
  );
}

export default FoodList;
