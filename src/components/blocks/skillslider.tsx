import { useEffect, useRef } from "react";
import Styles from "./slider.module.css";

const CertificateCard: React.FC = () => {
  return (
    <div className={`${Styles.hidescrollbar}  w-full overflow-x-auto`}>
      <ul className=" flex  items-center ">
        <li>
          <a href="">
            <div className="bg-gray-300 mx-3 sm:mx-4  md:w-64 md:h-40 w-52 h-32 rounded-lg flex-none"></div>
          </a>
        </li>
        <li>
          <a href="">
            <div className="bg-gray-300 mx-3 sm:mx-4  md:w-64 md:h-40 w-52 h-32 rounded-lg flex-none"></div>
          </a>
        </li>
        <li>
          <a href="">
            <div className="bg-gray-300 mx-3 sm:mx-4 md:w-64 md:h-40 w-52 h-32 rounded-lg flex-none"></div>
          </a>
        </li>
        <li>
          <a href="">
            <div className="bg-gray-300 mx-3 sm:mx-4 md:w-64 md:h-40 w-52 h-32 rounded-lg flex-none"></div>
          </a>
        </li>
        <li>
          <a href="">
            <div className="bg-gray-300 mx-3 sm:mx-4 md:w-64 md:h-40 w-52 h-32 rounded-lg flex-none"></div>
          </a>
        </li>
        <li>
          <a href="">
            <div className="bg-gray-300 mx-3 sm:mx-4 md:w-64 md:h-40 w-52 h-32 rounded-lg flex-none"></div>
          </a>
        </li>
        <li>
          <a href="">
            <div className="bg-gray-300 mx-3 sm:mx-4 md:w-64 md:h-40 w-52 h-32 rounded-lg flex-none"></div>
          </a>
        </li>
        <li>
          <a href="">
            <div className="bg-gray-300 mx-3 sm:mx-4 md:w-64 md:h-40 w-52 h-32 rounded-lg flex-none"></div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CertificateCard;
