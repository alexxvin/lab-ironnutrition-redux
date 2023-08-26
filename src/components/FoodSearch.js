import { Divider, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { changeSearchTerm } from '../store';

function FoodSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.food.searchTerm;
  });

  const handleSearchTermChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };
  return (
    <div>
      <Divider>Search</Divider>
      <label>Search</label>
      <Input value={searchTerm} onChange={handleSearchTermChange}></Input>
    </div>
  );
}

export default FoodSearch;
