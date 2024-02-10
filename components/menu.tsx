"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Menu = ({ currentPage }: { currentPage: string }) => {
  const [isServicesMenuVisible, setIsServicesMenuVisible] = useState(false);
  const [isAboutMenuVisible, setIsAboutMenuVisible] = useState(false);

  const isCurrentPage = (page: string) => {
    return currentPage === page ? "underline" : "no-underline";
  };

  return (
    <>
      <div className="md:hidden">
        <header className="w-full h-16 bg-orange drop-shadow-lg">
          <Image
            src={"/mandariinimedia_logo_vaaka_valkea.png"}
            alt="logo"
            width="144"
            height="74"
            className="w-32"
            priority
          />
          <label className="w-full">
            <input type="checkbox" />
            <span className="menu">
              <span className="hamburger"></span>
            </span>
            <ul className="w-3/4">
              <li className="lg:block text-gray-100 text-xl lg:text-2xl md:inline-block md:mt-0 px-4">
                MITEN VOIN AUTTAA?
              </li>
              <li>
                <Link
                  className="lg:block text-gray-100 text-xl lg:text-2xl md:inline-block md:mt-0 px-4 pl-8"
                  key="mitä teen"
                  href="/vastuullinen-sisallontuotanto"
                >
                  Vastuullinen sisällöntuotanto{" "}
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="icon align-middle -rotate-90 w-3"
                  />
                </Link>
              </li>
              <li>
                <Link
                  className="lg:block text-gray-100 text-xl lg:text-2xl md:inline-block md:mt-0 px-4 pl-8"
                  key="mitä teen"
                  href="/viestinnan-palvelut"
                >
                  Muut viestinnän palvelut{" "}
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="icon align-middle -rotate-90 w-3"
                  />
                </Link>
              </li>
              <li
                className="lg:block text-gray-100 text-xl lg:text-2xl md:inline-block md:mt-0 px-4"
                key="portfolio"
              >
                TUTUSTUTAAN!
              </li>
              <li>
                <Link
                  className="lg:block text-gray-100 text-xl lg:text-2xl md:inline-block md:mt-0 px-4 pl-8"
                  key="mitä teen"
                  href="/sananen-minusta"
                >
                  Sananen minusta{" "}
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="icon align-middle -rotate-90 w-3"
                  />
                </Link>
              </li>
              <li>
                <Link
                  className="lg:block text-gray-100 text-xl lg:text-2xl md:inline-block md:mt-0 px-4 pl-8"
                  key="mitä teen"
                  href="/vastuullisuus"
                >
                  Vastuullisuudesta{" "}
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="icon align-middle -rotate-90 w-3"
                  />
                </Link>
              </li>
              <li>
                <Link
                  className="lg:block text-gray-100 text-xl lg:text-2xl md:inline-block md:mt-0 px-4"
                  key="portfolio"
                  href="/#portfolio"
                >
                  PORTFOLIO{" "}
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="icon align-middle -rotate-90 w-3"
                  />
                </Link>
              </li>
              <li>
                <Link
                  className="lg:block text-gray-100 text-xl lg:text-2xl md:inline-block md:mt-0 px-4"
                  key="yhdeydenotto"
                  href="/#yhteydenotto"
                >
                  OTAHAN YHTEYTTÄ{" "}
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="icon align-middle -rotate-90 w-3"
                  />
                </Link>
              </li>
            </ul>
          </label>
        </header>
      </div>
      <div className="hidden md:block">
        <header className="bg-orange">
          <div className="flex flex-wrap items-center justify-evenly max-w-4xl mx-auto">
            <nav className={`block flex items-center w-auto h-32`}>
              <div
                className={`lg:block text-gray-100 text-xl lg:text-2xl md:inline-block md:mt-0 px-4 no-underline select-menu ${
                  isServicesMenuVisible ? "active" : ""
                }`}
                onClick={() => {
                  setIsServicesMenuVisible(!isServicesMenuVisible);
                }}
              >
                <div className="text-gray-100">
                  <span className="sBtn-text cursor-pointer">
                    MITEN VOIN AUTTAA?{" "}
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`icon align-middle ${
                        isServicesMenuVisible ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                  <i className="bx bx-chevron-down"></i>
                </div>

                <ul className="options hidden ">
                  <li className="option">
                    <Link
                      href="/vastuullinen-sisallontuotanto"
                      className="option-text"
                    >
                      Vastuullinen sisällöntuotanto
                    </Link>
                  </li>
                  <li className="option">
                    <Link href="/viestinnan-palvelut" className="option-text">
                      Muut viestinnän palvelut
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                className={`lg:block text-gray-100 text-xl lg:text-2xl md:inline-block md:mt-0 px-4 no-underline select-menu ${
                  isAboutMenuVisible ? "active" : ""
                }`}
                onClick={() => {
                  setIsAboutMenuVisible(!isAboutMenuVisible);
                }}
              >
                <div className="text-gray-100">
                  <span className="sBtn-text cursor-pointer">
                    TUTUSTUTAAN!{" "}
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`icon align-middle ${
                        isAboutMenuVisible ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                  <i className="bx bx-chevron-down"></i>
                </div>

                <ul className="options hidden ">
                  <li className="option">
                    <Link href="/sananen-minusta" className="option-text">
                      Sananen minusta
                    </Link>
                  </li>
                  <li className="option">
                    <Link href="/vastuullisuus" className="option-text">
                      Vastuullisuudesta
                    </Link>
                  </li>
                </ul>
              </div>
              <Link
                className={`lg:block text-gray-100 text-xl lg:text-2xl md:inline-block md:mt-0 px-4 ${isCurrentPage(
                  "portfolio"
                )}`}
                key="portfolio"
                href="/portfolio"
              >
                PORTFOLIO
              </Link>
              <Link
                className={`lg:block text-gray-100 text-xl lg:text-2xl md:inline-block md:mt-0 px-4 no-underline`}
                key="yhdeydenotto"
                href="/#yhteydenotto"
              >
                OTAHAN YHTEYTTÄ
              </Link>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};

export default Menu;
