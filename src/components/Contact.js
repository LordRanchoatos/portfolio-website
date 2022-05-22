import React from 'react';
// icons
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
	return (
		<div name="contact" className="w-full h-screen bg-[#0a192f] p-8 flex flex-col justify-center items-center ">
			<form
				action="https://getform.io/f/d13a333b-85fc-4e24-9b04-863d3cf6576e"
				method="POST"
				className="flex flex-col max-w-[600px] w-full"
			>
				<div className="pb-8">
					<p className="border-b-4 border-pink-600 text-4xl text-gray-300 font-bold inline">Contact</p>
					<p className="py-6 text-gray-300">
						// Submit the form below or send an email :{' '}
						<a className=" text-pink-600" href="mailto:rasheedw622@gmail.com">
							David
						</a>
					</p>
				</div>
				<input className=" rounded-sm  bg-[#ccd6f6] p-2" type="text" placeholder="Name" name="name" />
				<input className=" rounded-sm my-4 bg-[#ccd6f6] p-2" type="email" placeholder="Email" name="email" />
				<textarea
					className=" rounded-sm bg-[#ccd6f6] p-2"
					name="message"
					placeholder="Message here..."
					rows="10"
				/>
				<button className="text-white border-2 hover:bg-pink-600 px-4 py-3 my-8 duration-500 mx-auto flex items-center">
					Let's Collaborate
				</button>
			</form>
			<div className="icons flex mt-4">
				<a
					target="_blank"
					rel="noreferrer"
					href="https://www.linkedin.com/in/"
					className=" ml-4 flex justify-between mt-1 items-center w-full text-gray-300 rounded-[50%] bg-blue-600 p-3"
				>
					<FaLinkedin size={20} />
				</a>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://www.github.com"
					className="flex justify-between mt-1 items-center w-full text-gray-300 rounded-[50%] bg-[#333] p-3 ml-4 "
				>
					<FaGithub size={20} />
				</a>
				<a
					target="_blank"
					rel="noreferrer"
					href="mailto:atolagbedt@gmail.com"
					className="flex justify-between mt-1 items-center w-full text-gray-300 rounded-[50%] bg-red-500 p-3 ml-4 "
				>
					<HiOutlineMail size={20} />
				</a>
			</div>
		</div>
	);
};

export default Contact;
