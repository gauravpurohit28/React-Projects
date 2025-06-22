import React from 'react';
import Header from '../others/Header';
import CreateTask from '../others/CreateTask';
import AllTask from '../others/AllTask';

const AdminDashboard = () => {
    return ( 
        <>
        <Header />
        <CreateTask />
        <AllTask />
        </>
     );
}
 
export default AdminDashboard;