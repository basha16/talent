
import Switch from '@mui/material/Switch';

function SecurityInformation(params: type) {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    return (
        <>
            <div className="row">
                <div className="col-lg-6 border-r border-black pt-3">
                    <span className="border-b-2 border-black text-blue">Password Management</span>

                    <ul className='mt-4'>
                        <li className='d-flex justify-content-between py-2'>
                            <span className='text-dark-two text-[14px]'>Login Verification</span>
                            <Switch {...label} defaultChecked />
                        </li>

                        <li className='d-flex justify-content-between py-2'>
                            <span className='text-dark-two text-[14px]'>Email Verification</span>
                            <Switch {...label} defaultChecked />
                        </li>

                        <li className='d-flex justify-content-between py-2'>
                            <span className='text-dark-two text-[14px]'>Message Verification</span>
                            <Switch {...label} defaultChecked />
                        </li>

                        <li className='d-flex justify-content-between py-2'>
                            <span className='text-dark-two text-[14px]'>Request Verification</span>
                            <Switch {...label} defaultChecked />
                        </li>

                    </ul>
                </div>

                <div className="col-lg-6 pt-3">
                    <span className="border-b-2 border-black text-blue">Password Security</span>

                    <ul className='mt-4'>
                        <li className='d-flex justify-content-between py-2'>
                            <span className='text-dark-two text-[14px]'>Password Change</span>
                           <button className='btn btn-blue  h-[40px!important]'>Change</button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SecurityInformation;