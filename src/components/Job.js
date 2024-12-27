import React from 'react';
import numberWithCommas from '../utils/numberWithCommas';
import { useDispatch } from 'react-redux';
import { editActive, removeJob } from '../features/job/jobSlice';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const dispatch = useDispatch();

    let color;

    if (job?.type === "Remote") color = "#56E5C4";

    if (job?.type === "Internship") color = "#FF5757";

    if (job?.type === "Full Time") color = "#FF8A00";

    const handleDelete = () => {
        dispatch(removeJob(job.id));
    }

    return (
        <div className="lws-single-job">
            <div className="flex-1 min-w-0">
                <h2 className="lws-title">{job.title}</h2>
                <div className="job-footers">
                    <div className="lws-type">
                        {/* <!-- Fulltime - #FF8A00,  --><!-- Internship - #FF5757,  --><!-- Remote - #56E5C4,  --> */}
                        <i className={`fa-solid fa-stop !text-[${color}] text-lg mr-1.5`}></i>
                        {job.type}
                    </div>
                    <div className="lws-salary">
                        <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
                        BDT {numberWithCommas(job.salary)}
                    </div>
                    <div className="lws-deadline">
                        <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
                        Closing on {job.deadline}
                    </div>
                </div>
            </div>
            <div className="mt-5 flex lg:mt-0 lg:ml-4">
                <span className="hidden sm:block">
                    <Link to={"/job/addoredit"}>
                        <button type="button" className="lws-edit btn btn-primary" onClick={() => dispatch(editActive(job))}>
                            <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
                            Edit
                        </button>
                    </Link>
                </span>

                <span className="sm:ml-3">
                    <button type="button" className="lws-delete btn btn-danger " onClick={handleDelete}>
                        <i className="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
                        Delete
                    </button>
                </span>
            </div>
        </div>
    );
};

export default Job;