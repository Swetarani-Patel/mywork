import React from "react";
import "./_header.scss";
 
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import {IoMdNotifications} from "react-icons/io";
import {MdApps} from "react-icons/md";
const Header = ({handl}) => {
  return (
    <div className="border border-dark header">
      <FaBars className="header__menu" size={26} onClick={()=>{handl()}} />

      <img
        src="https://pngimg.com/uploads/youtube/youtube_PNG2.png"
        alt=""
        className="header__logo"
      />

      <form>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="header__icons">
        <IoMdNotifications size={28}/>
        <MdApps size={28}/>
        <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="" />
      </div>
    </div>
  );
};

export default Header;
