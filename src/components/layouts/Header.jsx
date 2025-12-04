// import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "../../assets/logo.png";
import { FaAngleDown } from "react-icons/fa6";
// import Button from "../Button";
import { Link } from "react-router-dom";
import Container from "../Container";
import Button from "../Button";

const Header = () => {
  return (
    <div className="">
      <Container>
        <Flex className={"flex justify-between"}>
          <div className="">
            <Link to={"/"}>
              <Image src={logo} />
            </Link>
          </div>
          <div className="">
            <ul className="flex items-center gap-x-8 font-openSans text-shadow-black">
              <li className="flex items-center font-openSans">
                <Link to={"/"}>
                  Home
                  <FaAngleDown />
                </Link>
              </li>
              <li className="flex items-center font-openSans">
                <Link to={"/about"}>
                  About
                  <FaAngleDown />
                </Link>
              </li>
              <li className="flex items-center font-openSans">
                <Link to={"/"}>
                  Service
                  <FaAngleDown />
                </Link>
              </li>
              <li className="flex items-center font-openSans">
                <Link to={"/"}>
                  Protfolio
                  <FaAngleDown />
                </Link>
              </li>
              <li className="flex items-center font-openSans">
                <Link to={"/"}>
                  Price
                  <FaAngleDown />
                </Link>
              </li>
              <li className="flex items-center font-openSans">
                <Link to={"/"}>
                  Blog
                  <FaAngleDown />
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <Button
              btnTxt={"Contact us"}
              className={"text-white hover:bg-amber-400 font-openSans"}
            />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
