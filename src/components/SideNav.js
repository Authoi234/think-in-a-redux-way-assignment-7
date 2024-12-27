import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { editActive } from '../features/job/jobSlice';
import { changeFilter } from '../features/filter/filterSlice';

const SideNav = () => {
    const dispatch = useDispatch();

    return (
        <div className="sidebar">
            <nav>
                <ul className="space-y-4">
                    <li>
                        <a className="main-menu menu-active" id="lws-alljobs-menu" onClick={() => dispatch(changeFilter("all"))}>
                            <i className="fa-solid fa-briefcase"></i>
                            <span> All Available Jobs</span>
                        </a>
                        <ul className="space-y-6 lg:space-y-2 ">
                            <li>
                                <a className="sub-menu" id="lws-internship-menu" onClick={() => dispatch(changeFilter("Internship"))}>
                                    <i className="fa-solid fa-stop !text-[#FF5757]"></i>
                                    Internship
                                </a>
                            </li>
                            <li>
                                <a className="sub-menu" id="lws-fulltime-menu" onClick={() => dispatch(changeFilter("Full Time"))}>
                                    <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
                                    Full Time
                                </a>
                            </li>
                            <li>
                                <a className="sub-menu" id="lws-remote-menu" onClick={() => dispatch(changeFilter("Remote"))}>
                                    <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
                                    Remote
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to={'/job/addoredit'} onClick={() => dispatch(editActive({}))} className="main-menu" id="lws-addJob-menu">
                            <i className="fa-solid fa-file-circle-plus"></i>
                            <span>Add NewJob</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SideNav;