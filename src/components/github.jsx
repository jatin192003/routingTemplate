import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Github = () => {

    const data = useLoaderData()

    return (
        <div>
            <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
                <img src={data.avatar_url} alt="Git picture" width={300} />
            </div>
        </div>
    );
}

export default Github;
