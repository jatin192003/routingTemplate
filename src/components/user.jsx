import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {

    const {userid} = useParams()

    return (
        <div className='text-center'> 
            User: {userid}
        </div>
    );
}

export default User;
