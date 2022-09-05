import React from 'react';
import swAlert from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom';
import './search.css';






function Search() {

    const history = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value.trim();
        //console.log(keyword)

        if (keyword.length === 0){
            swAlert(<h5>Please insert a keyword</h5>)
        }else{
            history(`/results?keyword=${keyword}`);
            
            e.currentTarget.keyword.value = "";
            
        }
    }


  return (
    <form className='search' onSubmit={submitHandler}>
        <input className='search__input' type='text' name='keyword' placeholder='Search movie...'/>
        
        <button type='submit' className='search__btn'>Search</button>
        <button type='submit' className='search_btn-mobile'><i className='fas fa-search'/></button>
    </form>
  )
}

export default Search;