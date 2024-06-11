import TextField from '@mui/material/TextField';

function GeneralInformation(params: type) {
    return (
        <div className='mt-4'>

            <h6 className='mt-3'>DataTerrain Information</h6>
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
            </div>


            <h6 className='mt-3'>DataTerrain Information</h6>
            <div className="row">
                <div className="col-md-6 mb-3 mt-2">
                    <TextField className='bg-white' fullWidth label="Enter your City" id="fullWidth" />
                </div>

                <div className="col-md-6 mb-3 mt-2">
                    <TextField className='bg-white' fullWidth label="Enter your State" id="fullWidth" />
                </div>

                <div className="col-md-6 mb-3 mt-2">
                    <TextField className='bg-white' fullWidth label="Enter your ZIP code" id="fullWidth" />
                </div>

                <div className="col-md-6 mb-3 mt-2">
                    <TextField className='bg-white' fullWidth label="Enter your Country" id="fullWidth" />
                </div>

            </div>
        </div>
    )
}

export default GeneralInformation