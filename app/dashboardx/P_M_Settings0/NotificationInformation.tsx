import Switch from "@mui/material/Switch";

function NotificationInformation(params: type) {
  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <>
      <div className="row">
        <div className="col-lg-6 border-r border-black pt-3">
          <span className="border-b-2 border-black text-blue">
            Notification Management
          </span>

          <ul className="mt-4">
            <li className="d-flex justify-content-between py-2">
              <span className="text-dark-two text-[14px]">Security Alerts</span>
              <Switch {...label} defaultChecked />
            </li>

            <li className="d-flex justify-content-between py-2">
              <span className="text-dark-two text-[14px]">Email Alerts</span>
              <Switch {...label} defaultChecked />
            </li>

            <li className="d-flex justify-content-between py-2">
              <span className="text-dark-two text-[14px]">Message Alerts</span>
              <Switch {...label} defaultChecked />
            </li>

            <li className="d-flex justify-content-between py-2">
              <span className="text-dark-two text-[14px]">Request Alerts</span>
              <Switch {...label} defaultChecked />
            </li>
            <li className="d-flex justify-content-between py-2">
              <span className="text-dark-two text-[14px]">
                Device Login Alerts
              </span>
              <Switch {...label} defaultChecked />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NotificationInformation;
