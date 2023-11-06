import { auth } from "../../fireBase.ts";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MenuItem = styled.div`
  position: absolute;
    top: 300px;
    right: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  svg {
    width: 30px;
    fill: white;
  }
  &.log-out {
    border-color: tomato;
    svg {
      fill: tomato;
    }
  }
`;

function LogoutButton () {

    const navigate = useNavigate();
    const onLogOut = async () => {

        const ok = window.confirm("Are you sure you want to log out?");
        if (ok) {
            await auth.signOut();
            navigate("/");
        }
    };

  return (
      <MenuItem onClick={onLogOut} className="log-out">
          <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
          >
              <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
              />
              <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z"
              />
          </svg>
      </MenuItem>
  );
}

export default LogoutButton;