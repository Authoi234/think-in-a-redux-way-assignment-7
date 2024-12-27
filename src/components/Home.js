import React from 'react';
import JobsSectTitle from './JobsSectTitle';
import Jobs from './Jobs';

const Home = () => {
    return (
        <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
            <JobsSectTitle></JobsSectTitle>
            <Jobs></Jobs>
        </main>
    );
};

export default Home;