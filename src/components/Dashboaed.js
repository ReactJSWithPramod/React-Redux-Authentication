import React from 'react';
import dashboarddata from '../data/dashboard.json';

import { Table } from 'reactstrap';
import './Dashboard.scss';
const Dashboard = () => {
    return (
        <div className="dashboard-container">
        <Table striped classNam="dashboard-table">
            <thead>
                <tr className="table-headers">
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
            {dashboarddata.map((data,index) => {
                
                return (
                    <>
                        <tr key={index}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.age}</td>
                            <td>{data.email}</td>
                            <td>{data.gender}</td>
                            <td>{data.phoneNo}</td>
                        </tr>
                    </>
                )
                
            })}
                
            </tbody>
        </Table>
        
        </div>
    )
}

export default Dashboard;