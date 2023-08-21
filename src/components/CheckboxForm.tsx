import React, { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import './Home.css';

interface Department {
  department: string;
  sub_departments: string[];
}

const handlestyle = { padding: 20, height: '60vh', width: 280, margin: '120px auto' };

const res: Department[] = [
  {
    "department": "Agriculture & fishing",
    "sub_departments": [
      "Agriculture",
      "Crops",
      "Farming Animals & Livestock",
      "Fishery & Aquaculture",
      "Ranching"
    ]
  },
  {
    "department": "Business Services",
    "sub_departments": [
      "Accounting & Accounting Services",
      "Auctions",
      "Business Services-General"
    ]
  }
];

const DepartmentList: React.FC = () => {
  const [showSubDepartments, setShowSubDepartments] = useState<{ [key: string]: boolean }>({});
  const [checked, setChecked] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    // Check if all sub-departments are checked for each department
    const updatedChecked = { ...checked };
    res.forEach(item => {
      const allSubDeptsChecked = item.sub_departments.every(subDept => updatedChecked[subDept]);
      updatedChecked[item.department] = allSubDeptsChecked;
    });
    setChecked(updatedChecked);
  }, [checked]);

  const handleDepartmentChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = { ...checked };
    newChecked[name] = event.target.checked;

    // Check/uncheck all sub-departments based on department checkbox
    if (event.target.checked) {
      res.find(item => item.department === name)?.sub_departments.forEach(subDept => {
        newChecked[subDept] = true;
      });
    } else {
      res.find(item => item.department === name)?.sub_departments.forEach(subDept => {
        newChecked[subDept] = false;
      });
    }

    setChecked(newChecked);
    setShowSubDepartments(prevShowSubDepartments => ({
      ...prevShowSubDepartments,
      [name]: event.target.checked
    }));
  };

  const handleSubDepartmentChange = ( subDept: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(prevChecked => ({
      ...prevChecked,
      [subDept]: event.target.checked
    }));
  };

  return (
    <div>
      <Grid>
        <Paper elevation={10} style={handlestyle}>
          {res.map((item, index) => (
            <div key={index} className='form'>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked[item.department] || false}
                    onChange={handleDepartmentChange(item.department)}
                  />
                }
                label={<span style={{ fontWeight: 'bold' }}>{item.department}</span>}
              />
              {showSubDepartments[item.department] && (
                <div>
                  {item.sub_departments.map((subDept, subIndex) => (
                    <FormControlLabel
                      key={subIndex}
                      control={
                        <Checkbox
                          checked={checked[subDept] || false}
                          onChange={handleSubDepartmentChange( subDept)}
                        />
                      }
                      label={subDept}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </Paper>
      </Grid>
    </div>
  );
};

export default DepartmentList;
