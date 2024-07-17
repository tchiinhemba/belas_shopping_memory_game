import "./styles.scss";
import { useNavigate } from "react-router-dom";
import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoInstagram,
  BiLogoYoutube,
} from "react-icons/bi";

import { assets } from "../../assets";

const Start = () => {
  const { callCenter, logo } = assets();
  const navigate = useNavigate();

  const handleClick = (navigate) => {
    navigate("/info");
  };

  return (
    <div className="wrapper_h">
      <div className="first_content_h">
        <div className="logo_container_h">
          <img src={logo} alt="Belas Logo" />
        </div>
        <div className="text_container_h">
          <p>SEJA BEM-VINDO AO</p>
          <p>
            <span>BELAS SHOPPING</span>.
          </p>
          <p>VAMOS TESTAR A</p>
          <p>
            <span>SUA BELA MEMÓRIA</span>?
          </p>
        </div>
      </div>

      <footer>
        <button
          className="btn_footer_h"
          onClick={() => {
            handleClick(navigate);
          }}
        >
          <strong>JOGAR</strong>
        </button>

        <div className="footer_container_h">
          <div className="image_container_h">
            <img src={callCenter} alt="Call Center" width="100px" />
          </div>

          <div className="phone_h">
            <span className="">+244 923 190 860</span>
          </div>

          <div className="social_container_h">
            <ul>
              <li>
                <BiLogoFacebook />
              </li>
              <li>
                <BiLogoLinkedin />
              </li>
              <li>
                <BiLogoInstagram />
              </li>
              <li>
                <BiLogoYoutube />
              </li>
            </ul>
            <span className="nossa_link_h">www.belasshopping.co.ao</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export { Start };
