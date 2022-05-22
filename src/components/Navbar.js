import React from 'react';
import Resume from '../assets/resume.pdf';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/mylogo.png';
import { useState } from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
	const [ isNavOpen, setisNavOpen ] = useState(false);
	const [ isiconNavOpen, setisiconNavOpen ] = useState(false);
	return (
		<div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-10">
			<div>
				<img src={Logo} alt="" className=" w-[38px]" />
			</div>
			<ul className=" hidden md:flex">
				<li className=" hover:text-pink-600 duration-300">
					<Link to="home" smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className=" hover:text-pink-600 duration-300">
					<Link to="about" smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li className=" hover:text-pink-600 duration-300">
					<Link to="skills" smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li className=" hover:text-pink-600 duration-300">
					<Link to="work" smooth={true} duration={500}>
						Work
					</Link>
				</li>
				<li className=" hover:text-pink-600 duration-300">
					<Link to="contact" smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>
			{/* hamburger */}
			<div className="md:hidden z-10">
				{!isNavOpen && (
					<FaBars
						onClick={() => {
							setisNavOpen(!isNavOpen);
						}}
					/>
				)}
				{isNavOpen && (
					<FaTimes
						onClick={() => {
							setisNavOpen(!isNavOpen);
						}}
					/>
				)}
			</div>
			{/* mobile menu */}
			{isNavOpen && (
				<ul
					className={
						!isNavOpen ? (
							'slide-hidden'
						) : (
							'mobile-menu duration-500 fixed top-0 left-0 bg-[#0a192f] w-full h-screen flex flex-col justify-center items-center'
						)
					}
				>
					<li className="py-5 text-2xl duration-300 hover:text-pink-600">
						<Link
							onClick={() => {
								setisNavOpen(!isNavOpen);
							}}
							to="home"
							smooth={true}
							duration={500}
						>
							Home
						</Link>
					</li>
					<li className="py-5 text-2xl duration-300 hover:text-pink-600">
						<Link
							onClick={() => {
								setisNavOpen(!isNavOpen);
							}}
							to="about"
							smooth={true}
							duration={500}
						>
							About
						</Link>
					</li>
					<li className="py-5 text-2xl duration-300 hover:text-pink-600">
						<Link
							onClick={() => {
								setisNavOpen(!isNavOpen);
							}}
							to="skills"
							smooth={true}
							duration={500}
						>
							Skills
						</Link>
					</li>
					<li className="py-5 text-2xl duration-300 hover:text-pink-600">
						<Link
							onClick={() => {
								setisNavOpen(!isNavOpen);
							}}
							to="work"
							smooth={true}
							duration={500}
						>
							Work
						</Link>
					</li>
					<li className="py-5 text-2xl duration-300 hover:text-pink-600">
						<Link
							onClick={() => {
								setisNavOpen(!isNavOpen);
							}}
							to="contact"
							smooth={true}
							duration={500}
						>
							Contact
						</Link>
					</li>
				</ul>
			)}
			{/* social icons */}
			<div className="hidden lg:flex flex-col fixed top-[35%] left-0">
				<ul>
					<li className=" w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-600">
						<a
							target="_blank"
							rel="noreferrer"
							href="https://www.linkedin.com/in/"
							className="flex justify-between items-center w-full text-gray-300"
						>
							Linkedin <FaLinkedin size={30} />
						</a>
					</li>
					<li className=" w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333]">
						<a
							target="_blank"
							rel="noreferrer"
							href="https://www.github.com/"
							className="flex justify-between items-center w-full text-gray-300"
						>
							Github <FaGithub size={30} />
						</a>
					</li>
					<li className=" w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-red-500">
						<a
							target="_blank"
							rel="noreferrer"
							href="mailto:atolagbedt@gmail.com"
							className="flex justify-between items-center w-full text-gray-300"
						>
							Email <HiOutlineMail size={30} />
						</a>
					</li>
					<li className=" w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-green-600">
						<a href={Resume} className="flex justify-between items-center w-full text-gray-300">
							Resume <BsFillPersonLinesFill size={30} />
						</a>
					</li>
				</ul>
			</div>
			{/* social icons mobile */}
			<div className="mobile-icons fixed bottom-3 right-3 lg:hidden z-10 ">
				<menu className={!isiconNavOpen ? ' scale-y-0 duration-300' : ' scale-y-100 duration-300'}>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.linkedin.com/in/"
						className="flex justify-between mt-2 items-center w-full text-gray-300 rounded-[50%] bg-blue-600 p-3"
					>
						<FaLinkedin size={20} />
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.github.com/"
						className="flex justify-between mt-2 items-center w-full text-gray-300 rounded-[50%] bg-[#333] p-3"
					>
						<FaGithub size={20} />
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="mailto:atolagbedt@gmail.com"
						className="flex justify-between mt-2 items-center w-full text-gray-300 rounded-[50%] bg-red-500 p-3"
					>
						<HiOutlineMail size={20} />
					</a>
					<a
						href={Resume}
						className="flex justify-between mt-1 items-center w-full text-gray-300 rounded-[50%] bg-green-500 p-3"
					>
						<BsFillPersonLinesFill size={20} />
					</a>
				</menu>
				<span
					onClick={() => setisiconNavOpen(!isiconNavOpen)}
					className=" flex p-3 rounded-[50%] bg-red-500 cursor-pointer mt-4"
				>
					<FaTimes
						className={isiconNavOpen ? 'rotate-0 duration-300' : ' rotate-45 duration-200 '}
						size={20}
					/>
				</span>
			</div>
		</div>
	);
}
