import TextField from '@mui/material/TextField';

function AccountPreferences(params: type) {
    return (
        <div className='mt-4'>

            <h6 className='mt-3'>Profile Information</h6>
            <div className="row">

                <div className="col-md-6 mb-3 mt-2">
                    <TextField className='bg-white' fullWidth label="Enter your First name" id="fullWidth" />
                </div>

                <div className="col-md-6 mb-3 mt-2">
                    <TextField className='bg-white' fullWidth label="Enter your Last name" id="fullWidth" />
                </div>

                <div className="col-md-6 mb-3 mt-2">
                    <TextField className='bg-white' fullWidth label="Enter your Email ID" id="fullWidth" />
                </div>

                <div className="col-md-6 mb-3 mt-2">
                    <TextField className='bg-white' fullWidth label="Enter your Phone number" id="fullWidth" />
                </div>

                <div className="col-md-6 mb-3 mt-2">
                    <TextField className='bg-white' fullWidth label="Enter your Date of birth" id="fullWidth" />
                </div>

                <div className="col-md-6 mb-3 mt-2">
                    <TextField className='bg-white' fullWidth label="Enter your Blood Groupr" id="fullWidth" />
                </div>
                <div className="col-lg-12 col-md-4 mt-2">
                          <TextField
                            id="outlined-multiline-flexible"
                            label="Type your descriptions ... "
                            multiline
                            className="w-100 bg-white"
                            maxRows={8}
                            rows={3.7}
                          />
                        </div>
            </div>



        </div>
    )
}

export default AccountPreferences