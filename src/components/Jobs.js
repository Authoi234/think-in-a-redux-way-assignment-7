import React, { useEffect, useState } from 'react';
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { editActive, fetchJobs } from '../features/job/jobSlice';

const Jobs = () => {
    const dispatch = useDispatch();
    const {isLoading, error, isError,jobs} = useSelector(state => state.job);
    
    useEffect(() => {
        dispatch(fetchJobs())
        dispatch(editActive({}));
    }, [dispatch]);

    let content;

    if (isLoading) content = <div className="loader"></div>

    if (!isLoading && isError) content = <p className='error'>There was an error occured: {error}</p>

    if (!isLoading && !isError && jobs.length > 0) content = jobs.map(job => <Job key={job.id} job={job}></Job>);

    if (!isLoading && !isError && jobs.length === 0) content = <p>No Job Found</p>

    return (
        <div className="jobs-list">
            {content}
        </div>
    );
};

export default Jobs;