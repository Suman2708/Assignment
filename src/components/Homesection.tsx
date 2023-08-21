import React, { useEffect, useState } from "react";
import './Home.css';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import PersonIcon from '@mui/icons-material/Person';
// import { Divider } from "@mui/material";
import CheckboxForm from './CheckboxForm'
interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const Homesection: React.FC = () => {
  const [details, setdetails] = useState<Post[]>([]);

  const logout = () => {
    localStorage.removeItem("signUp");
    window.location.reload();
  };

  const deleteAccount = () => { 
    localStorage.clear();
    window.location.reload();
  };

  const getdetail = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data: Post[] = await res.json();
    console.log(data);
    if (data) {
      setdetails(data);
    } else {
      alert("error");
    }
  };
  
  useEffect(() => {
    getdetail();
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'userId',
      headerName: 'UserID',
      width: 150,
      editable: true,
    },
    {
      field: 'title',
      headerName: 'Title',
      width: 500,
      editable: true,
    },
    {
      field: 'body',
      headerName: 'Body',
      width: 500,
      editable: true,
    },
  ];

  const rows = details;

  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={logout} className="logout">LogOut</button>
      <button onClick={deleteAccount} className="delete">Delete</button>
      <p> <PersonIcon /> {localStorage.getItem('name')}</p>
      <div>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
          />
        </Box>
      </div>
      <div className="divider">
        <h4>Please  select   Department   and    Subdepartment</h4>
      </div>
      
        <CheckboxForm />
      
    </div>
  );
};

export default Homesection;
