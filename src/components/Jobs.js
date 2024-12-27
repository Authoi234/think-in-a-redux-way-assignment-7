import React, { useEffect } from 'react';
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { editActive, fetchJobs } from '../features/job/jobSlice';

const Jobs = () => {
    const dispatch = useDispatch();
    const { isLoading, error, isError, jobs } = useSelector(state => state.job);
    const { filter, sort, search } = useSelector(state => state.filter);

    useEffect(() => {
        dispatch(fetchJobs())
        dispatch(editActive({}));
    }, [dispatch]);

    const filteredJobs = filter === "all" ? jobs : jobs.filter(job => job.type === filter);

    let sortedJobs;

    if (sort === "default") sortedJobs = filteredJobs;

    else if (sort === "highToLow") sortedJobs = [...filteredJobs]?.sort((a, b) => parseFloat(b.salary) - parseFloat(a.salary));

    else if (sort === "lowToHigh") sortedJobs = [...filteredJobs]?.sort((a, b) => parseFloat(a.salary) - parseFloat(b.salary));

    const ultimateJobs = search === "" ? sortedJobs : sortedJobs?.filter(job => job.title.toLowerCase().includes(search.toLowerCase()));

    let content;

    if (isLoading) content = <div className="loader"></div>

    if (!isLoading && isError) content = <p className='error'>There was an error occured: {error}</p>

    if (!isLoading && !isError && jobs.length > 0) content = ultimateJobs?.map(job => <Job key={job.id} job={job}></Job>);

    if (!isLoading && !isError && jobs.length === 0) content = <p>No Job Found</p>

    return (
        <div className="jobs-list">
            {content}
        </div>
    );
};

export default Jobs;