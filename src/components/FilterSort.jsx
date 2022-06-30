import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import { getBooks } from '../Redux/AppReducer/actions';

const FilterSort = () => {
   const dispatch=useDispatch()
  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategory=searchParams.getAll("category")
  //for sort
  const urlSort = searchParams.get("sortBy")
  const [category, setCategory] = useState(urlCategory || []);
  const [sortBy, setSortBy] = useState(urlSort || "");

  

  const handleCheckbox = (e) => {
    const option = e.target.value;
    //if option is already present then remove it else add it
    let newCategory = [...category];
    if (category.includes(option)) {
      //if present then remove it
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      //if not add it
      newCategory.push(option);
    }
    setCategory(newCategory);
  };

  // console.log(category); for checked which are clicked
  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  //when ever category changes we will update in url
  useEffect(() => {
    if (category || sortBy) {
      let params = {}
      category && (params.category = category)
      sortBy && (params.sortBy=sortBy)
      setSearchParams(params);
      //  dispatch(getBooks({ params: { category}}));
    }
  }, [category,dispatch,setSearchParams]);
  //when ever sort changes we will update in url

//   useEffect(() => {
//     if (sortBy) {
//       const params = {
//         category: searchParams.getAll("category"),
//         sortBy,
//       };
   
//       setSearchParams(params);
//   }
// },[sortBy,setSearchParams,searchParams])
  
  return (
    <div>
      <h3>FilterSort</h3>
      <div>
        <div>
          <input
            type="checkbox"
            onChange={handleCheckbox}
            value="Novel"
            checked={category.includes("Novel")}
          />

          <label>Novel</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handleCheckbox}
            value="Science_Fiction"
            checked={category.includes("Science_Fiction")}
          />
          <label>Science_Fiction </label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handleCheckbox}
            value="Motivational"
            checked={category.includes("Motivational")}
          />
          <label>Motivational</label>
        </div>
        <div>
          <input
            type="checkbox"
            onChange={handleCheckbox}
            value="Thriller"
            checked={category.includes("Thriller")}
          />
          <label>Thriller</label>
        </div>
      </div>
      <h3>Sort</h3>
      <div onChange={handleSort}>
        <input
          value="asc"
          name="sortBy"
          type="radio"
          defaultChecked={sortBy === "asc"}
        />
        Asending
        <input
          value="desc"
          name="sortBy"
          type="radio"
          defaultChecked={sortBy === "desc"}
        />
        Desending
      </div>
    </div>
  );
}

export default FilterSort