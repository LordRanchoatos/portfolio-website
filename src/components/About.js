import React from 'react';
import Myresume from '../assets/resume.pdf';
import { HiArrowNarrowRight } from 'react-icons/hi';
const About = () => {
	return (
		<div name="about" className="w-full h-[98vh] bg-[#0a192f] text-gray-300">
			<div className="flex flex-col justify-center items-center w-full h-full px-8 sm:px-20">
				<div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
					<div className="sm:text-right pb-8">
						<p className="text-4xl inline border-b-4 border-pink-600 font-bold">About</p>
					</div>
				</div>
				<div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
					<div>
						<p className="sm:text-right text-3xl font-bold">
							Hi, I'm Atolagbe David Tolulope, nice to meet you. Please take a look around.
						</p>
					</div>
					<div>
						<p className=" text-lg">
							I am passionate about building excellent software that improves the lives of those around
							me. I specialize in creating software for clients ranging from individuals and
							small-businesses all the way to large enterprise corporations. What would you do if yo had a
							software expert at your fingertips?
						</p>
						<a href={Myresume}>
							<button className="text-white group mt-6 border-2 px-6 py-3 flex items-center my-2 hover:bg-pink-600 duration-300">
								Download Resume
								<span className="group-hover:rotate-90 duration-300">
									<HiArrowNarrowRight className=" ml-3" />
								</span>
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
