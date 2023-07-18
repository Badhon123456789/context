import React, { useContext } from 'react';
import { FirstName} from './App';

const ComB = () => {
    const user = useContext(FirstName)
    
    return <> <h1>My name is {user.name} {user.nickName}</h1>
     <p>I read in class {user.class}</p>
     <p>My E-mail : {user.email}</p>
     </>
};

export default ComB;