import React from 'react'
import DarkLogo from "../../assets/logo.png";

const Footer = () => {
    return (
        <>
            <footer>
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
                    rel="stylesheet"
                />
                <div className="bg-[#00022a] py-8">
                    <div className=" px-[8em] xl:px-[8em] 2xl:px-[10em]">
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-12 md:col-span-4">
                                <img src={DarkLogo} alt="" />
                                <p className="text-white text-justify my-3">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.
                                </p>
                                <ul className="flex bg-[#333555] rounded-full py-2 px-2 space-x-1 w-max">
                                    <li className="bg-white text-primary py-1 px-2 rounded-full">
                                        <i className="fab fa-youtube"></i>
                                    </li>
                                    <li className="bg-white text-primary py-1 px-2 rounded-full">
                                        <i className="fab fa-facebook"></i>
                                    </li>
                                    <li className="bg-white text-primary py-1 px-2 rounded-full">
                                        <i className="fab fa-linkedin"></i>
                                    </li>
                                    <li className="bg-white text-primary py-1 px-2 rounded-full">
                                        <i className="fab fa-instagram"></i>
                                    </li>
                                    <li className="bg-white text-primary py-1 px-2 rounded-full">
                                        <i className="fab fa-twitter"></i>
                                    </li>

                                </ul>
                            </div>
                            <div className="col-span-12 md:col-span-2">
                                <h2 className="text-white text-[20px] font-medium mb-3 font-manrope">
                                    Quick Links
                                </h2>
                                <ul className="text-md text-white list-style-none leading-8">
                                    <li>Home</li>
                                    <li>Courses</li>
                                    <li>Counselling</li>
                                    <li>Scholarships</li>
                                    <li>Contact us</li>

                                </ul>
                            </div>
                            <div className="col-span-12 md:col-span-3">
                                <h2 className="text-white text-[20px] font-medium mb-3 font-manrope">
                                    More to explore
                                </h2>
                                <ul className="text-md text-white list-style-none leading-8">
                                    <li>Common Application form</li>
                                    <li>Job Ready Courses</li>
                                    <li>Articles</li>
                                    <li>Visual Stories (English)</li>
                                    <li>Healthedu Academy</li>

                                </ul>
                            </div>
                            <div className="col-span-12 md:col-span-3">
                                <h2 className="text-white text-[20px] font-medium mb-3 font-manrope">
                                    Contact us
                                </h2>
                                <ul className="text-md text-white list-style-none leading-8">
                                    <li>
                                        <div className="flex">
                                            <div>
                                                <i className="text-secondary fas fa-map-marker-alt"></i>
                                            </div>
                                            <div className="ms-3 leading-6">
                                                Phone<br />
                                                8800 5652 00
                                            </div>
                                        </div>
                                    </li>
                                    <li className="my-3">
                                        <div className="flex">
                                            <div>
                                                <i className="text-secondary fas fa-envelope"></i>
                                            </div>
                                            <div className="ms-3 leading-6">
                                                Email<br />
                                                support@healthdu.in
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex">
                                            <div>
                                                <i className="text-secondary fas fa-map-marker-alt"></i>
                                            </div>
                                            <div className="ms-3 leading-6">
                                                Location<br />
                                                Rathinam Techzone Campus,
                                                Eachanari, Coimbatore,
                                                Tamil Nadu, India - 641021.
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>

                        </div>
                        <hr className="text-white mt-8 mb-4" />
                        <div className="md:flex justify-between">
                            <div className="md:flex">
                                <div className="text-white text-md">
                                    Terms & conditions
                                </div>
                                <div className="text-white text-md md:ms-3">
                                    Privacy Policy
                                </div>
                            </div>
                            <div>
                                <div className="text-white text-md">
                                    Copyright © 2025 Healthedu All rights reserved.
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer
