import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeJob, createJob } from '../features/job/jobSlice';
import { useNavigate } from 'react-router-dom';

const AddFormPage = () => {
    const [salary, setSalary] = useState(0);
    const [type, setType] = useState('');
    const [deadline, setDeadline] = useState("");
    const [title, setTitle] = useState("");
    const [editMode, setEditMode] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isLoading, isError, editing, error} = useSelector(state => state.job);

    const reset = () => {
        setSalary(0);
        setType("");
        setDeadline("");
        setTitle("");
    };

    useEffect(() => {
        const { id, title, salary, deadline, type } = editing || {};
        if (editing?.id) {
            setEditMode(true);
            setTitle(title);
            setType(type);
            setSalary(salary);
            setDeadline(deadline);
        } else {
            reset();
            setEditMode(false);
        }
    }, [editing]);

    const handleCreate = (e) => {
        e.preventDefault();

        const data = {
            title,
            type,
            salary,
            deadline,
        };

        dispatch(createJob(data));
        reset();
        e.target.reset();
        navigate("/");
    };

    const handleEdit = (e) => {
        e.preventDefault();
        dispatch(changeJob({
            id: editing.id,
            data: {
                title,
                type,
                salary,
                deadline,
            }
        }))
        reset();
        setEditMode(false);       
        e.target.reset();
        navigate("/");
    };

    return (
        <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
            <h1 className="mb-10 text-center lws-section-title">{editMode ? "Edit" : "Add New"} Job</h1>

            <div className="max-w-3xl mx-auto">
                <form className="space-y-6" onSubmit={editMode ? handleEdit : handleCreate}>
                    <div className="fieldContainer">
                        <label for="lws-JobTitle" className="text-sm font-medium text-slate-300">Job Title</label>
                        <select onChange={e => setTitle(e.target.value)} id="lws-JobTitle" name="lwsJobTitle" required value={title}>
                            <option value="" hidden selected>Select Job</option>
                            <option value="Software Engineer" selected={title === "Software Engineer"}>Software Engineer</option>
                            <option value="Software Developer" selected={title === "Software Developer"}>Software Developer</option>
                            <option value="Full Stack Developer" selected={title === "Full Stack Developer"}>Full Stack Developer</option>
                            <option value="MERN Stack Developer" selected={title === "MERN Stack Developer"}>MERN Stack Developer</option>
                            <option value="DevOps Engineer" selected={title === "DevOps Engineer"}>DevOps Engineer</option>
                            <option value="QA Engineer" selected={title === "QA Engineer"}>QA Engineer</option>
                            <option value="Product Manager" selected={title === "Product Manager"}>Product Manager</option>
                            <option value="Social Media Manager" selected={title === "Social Media Manager"}>Social Media Manager</option>
                            <option value="Senior Executive" selected={title === "Senior Executive"}>Senior Executive</option>
                            <option value="Junior Executive" selected={title === "Junior Executive"}>Junior Executive</option>
                            <option value="Android App Developer" selected={title === "Android App Developer"}>Android App Developer</option>
                            <option value="IOS App Developer" selected={title === "IOS App Developer"}>IOS App Developer</option>
                            <option value="Frontend Developer" selected={title === "Frontend Developer"}>Frontend Developer</option>
                            <option value="Frontend Engineer" selected={title === "Frontend Engineer"}>Frontend Engineer</option>
                        </select>
                    </div>

                    <div className="fieldContainer">
                        <label for="lws-JobType">Job Type</label>
                        <select id="lws-JobType" value={type} name="lwsJobType" onChange={(e) => setType(e.target.value)} required>
                            <option value="" hidden selected={type === ""}>Select Job Type</option>
                            <option value={"Full Time"} selected={type === 'Full Time'}>Full Time</option>
                            <option value={"Internship"} selected={type === 'Internship'}>Internship</option>
                            <option value={"Remote"} selected={type === 'Remote'}>Remote</option>
                        </select>
                    </div>

                    <div className="fieldContainer">
                        <label for="lws-JobSalary">Salary</label>
                        <div className="flex border rounded-md shadow-sm border-slate-600">
                            <span className="input-tag">BDT</span>
                            <input type="number" name="lwsJobSalary" id="lws-JobSalary" value={salary} onChange={(e) => setSalary(e.target.value)} required className="!rounded-l-none !border-0"
                                placeholder="20,00,000" />
                        </div>
                    </div>

                    <div className="fieldContainer">
                        <label for="lws-JobDeadline">Deadline</label>
                        <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} name="lwsJobDeadline" id="lws-JobDeadline" required />
                    </div>

                    <div className="text-right">
                        <button type="submit" id="lws-submit" className="cursor-pointer btn btn-primary w-fit" disabled={isLoading}>
                            {editMode ? "Edit" : "Submit"}
                        </button>
                    </div>
                    {
                        !isLoading && isError && <p className="error">An Error Occured: {error}</p>
                    }
                </form>
            </div>
        </main>
    );
};

export default AddFormPage;