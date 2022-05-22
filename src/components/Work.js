import React from 'react';

// images
import Todo from '../assets/todo.jpg';
import Ecommerce from '../assets/ecommerce2.jpg';
import Country from '../assets/countries.jpg';


export default function Work() {
	return (
		<div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">Work</p>
					<p className="py-6">{'// Check out some of my recent work'}</p>
				</div>
				{/* grid container */}
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 rounded-lg">
					{/* card */}
					<div
						style={{ backgroundImage: `url(${Todo})` }}
						className="group shadow-xl shadow-[#0a192f] container rounded-lg flex justify-center items-center mx-auto content-div"
					>
						{/* hover effect  */}
						<div className="duration-300 scale-y-0 group-hover:scale-y-100 ">
							<span className="text-xl font-bold text-white px-8 flex tracking-wider items-center justify-center text-center">
								<h2 className="w-100 inline-block">Todo app with vanilla js and SASS</h2>
							</span>
							<div className="pt-8 text-center">
								<a href="#">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-yellow-300 duration-300">
										Demo
									</button>
								</a>
								<a href="#">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-yellow-300 duration-300">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					{/* card */}
					<div
						style={{ backgroundImage: `url(${Ecommerce})` }}
						className="group shadow-xl shadow-[#0a192f] container rounded-lg flex justify-center items-center mx-auto content-div"
					>
						{/* hover effect  */}
						<div className="duration-300 scale-y-0 group-hover:scale-y-100">
							<span className="text-xl font-bold text-white px-8 flex tracking-wider items-center justify-center text-center">
								<h2 className="w-100 inline-block">Ecommerce website with vanilla js and SASS</h2>
							</span>
							<div className="pt-8 text-center">
								<a href="#">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-yellow-300 duration-300">
										Demo
									</button>
								</a>
								<a href="#">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-yellow-300 duration-300">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					{/* card */}
					<div
						style={{ backgroundImage: `url(${Country})` }}
						className="group shadow-xl shadow-[#0a192f] container rounded-lg flex justify-center items-center mx-auto content-div"
					>
						{/* hover effect  */}
						<div className="duration-300 scale-y-0 group-hover:scale-y-100">
							<span className="text-xl font-bold text-white px-8 flex tracking-wider items-center justify-center text-center">
								<h2 className="w-100 inline-block">Countries app using vanilla js and countries API</h2>
							</span>
							<div className="pt-8 text-center">
								<a href="#">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-yellow-300 duration-300">
										Demo
									</button>
								</a>
								<a href="#">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-yellow-300 duration-300">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
