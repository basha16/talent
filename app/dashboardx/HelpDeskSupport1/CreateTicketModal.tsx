
import React, { useEffect, useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const label = { inputProps: { "aria-label": "Checkbox demo" } };
import TextField from "@mui/material/TextField";


function CreateTicketModal() {
    const [age, setAge] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };


    return (
        <>
            <hr className="mt-0" />
            <div className="mt-2 p-3">
                <div className="row">

                    <div className="col-lg-12 col-md-4 mb-4">
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Choose or Drag your bug’s images"
                            multiline
                            className="w-100 bg-gray-100 text-center"
                            maxRows={8}
                            rows={3.4}
                        />
                    </div>
                    <div className="col-lg-6 col-md-4 mb-4">
                        <FormControl fullWidth className="bg-gray-100">
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Select Ticket Category"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className="col-lg-6 col-md-4 mb-4">
                        <FormControl fullWidth className="bg-gray-100">
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Select Ticket Types"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-md-12 mb-4">
                        <TextField className='bg-gray-100' fullWidth label="Enter Subject" id="fullWidth" />
                    </div>
                    <div className="col-lg-12 col-md-12 mb-4">
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Enter your descriptions"
                            multiline
                            className="w-100 bg-gray-100"
                            maxRows={8}
                            rows={3.4}
                        />
                    </div>

                    <div className="col-lg-12 col-md-12 text-center mt-3">
                        <button className="btn btnOutlineBlack me-3 mx-lg-2">Cancel</button>
                        <button className="btn btn-blue me-3 mx-lg-2">Save</button>
                    </div>


                </div>
            </div>

        </>
    )
}

export default CreateTicketModal;