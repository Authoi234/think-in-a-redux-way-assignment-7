import React from 'react';
import { useDispatch } from 'react-redux';
import { changeSearch, changeSort } from '../features/filter/filterSlice';

const JobsSectTitle = () => {
    const dispatch = useDispatch();

    return (
        <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
            <h1 className="lws-section-title">All Available Jobs</h1>
            <div className="flex gap-4">
                <div className="search-field group flex-1">
                    <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
                    <input type="text" placeholder="Search Job" onChange={(e) => dispatch(changeSearch(e.target.value))} className="search-input" id="lws-searchJob" />
                </div>
                <select id="lws-sort" onChange={e => dispatch(changeSort(e.target.value))} name="sort" autoComplete="sort" className="flex-1">
                    <option value="default">Default</option>
                    <option value="lowToHigh">Salary (Low to High)</option>
                    <option value="highToLow">Salary (High to Low)</option>
                </select>
            </div>
        </div>
    );
};

export default JobsSectTitle;