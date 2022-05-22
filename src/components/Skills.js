import React from 'react';


// images
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JAVASCRIPT from '../assets/javascript.png';
import REACT from '../assets/react.png';
import FIREBASE from '../assets/firebase.png';
import TAILWIND from '../assets/tailwind.png';
import LINUX from '../assets/linux.png';
import GIT from '../assets/git.png';

export default function Skills() {
	return (
		<div name="skills" className="w-full h-full bg-[#0a192f] text-gray-300">
			{/* container */}
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div>
					<p className=" text-3xl font-bold inline border-b-4 border-pink-600">Skills</p>
					<p className="py-4">// These are some the technologies work with.</p>
				</div>
				{/* container for skills */}
				<div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 py-8">
					<div className="flex flex-col pt-4 items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="mx-auto w-16" src={HTML} alt="html icon" />
						<p className="my-4">HTML</p>
					</div>
					<div className="flex flex-col pt-4 items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="mx-auto w-16" src={CSS} alt="html icon" />
						<p className="my-4">CSS</p>
					</div>
					<div className="flex flex-col pt-4 items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="mx-auto w-16" src={JAVASCRIPT} alt="html icon" />
						<p className="my-4">Javascript</p>
					</div>
					<div className="flex flex-col pt-4 items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="mx-auto w-16" src={TAILWIND} alt="html icon" />
						<p className="my-4">Tailwind CSS</p>
					</div>
					<div className="flex flex-col pt-4 items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="mx-auto w-16" src={REACT} alt="html icon" />
						<p className="my-4">React js</p>
					</div>
					<div className="flex flex-col pt-4 items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="mx-auto w-16" src={GIT} alt="html icon" />
						<p className="my-4">Git</p>
					</div>
					<div className="flex flex-col pt-4 items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="mx-auto w-16" src={FIREBASE} alt="html icon" />
						<p className="my-4">Firebase</p>
					</div>
					<div className="flex flex-col pt-4 items-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="mx-auto w-16" src={LINUX} alt="html icon" />
						<p className="my-4">Linux</p>
					</div>
				</div>
			</div>
		</div>
	);
}
