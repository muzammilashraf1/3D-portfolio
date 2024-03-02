import React from 'react';

const Experience = () => {
	return (
		<section id="resume" className='bg-white w-full py-10'>
			<h2 className="text-center p-3 underline min-w-[30%] text-4xl text-black">
				My Resume
			</h2>
			<div className="flex flex-col py-10 md:flex-row justify-evenly mx-auto items-center relative text-center md:text-left max-w-7xl px-10 bg-white text-black">
				<h2 className="flex-initial self-center md:self-start p-10 underline decoration-4 decoration-green-500 min-w-[30%] text-xl">Skills</h2>
				<div className="flex-1">
					<div>Programming Languages: C, Java, Python, JavaScript </div>
					<div>	Libraries / Frameworks: React, Tailwind CSS, Bootstrap, Scikit Learn, NumPy</div>
					<div>	Other: Git, Unix Tools, Bash, HTML, CSS
					</div>
				</div>
			</div>

			<hr />

			<div className="flex flex-col py-10  md:flex-row justify-evenly mx-auto items-center relative text-center md:text-left max-w-7xl px-10 bg-white text-black">
				<h2 className="flex-initial self-center md:self-start px-10 underline decoration-4 decoration-blue-500 min-w-[30%] text-xl pt-5">Experience</h2>
				<div className="experience flex-1">
					<div className='pt-5'>
						<h3 className="text-3xl font-semibold	">Nautics Technology</h3>
						<div className="">May 2022 - August 2022</div>
						<br />
						<ul className='marker:text-green list-outside list-disc ml-6 text-left space-y-2'>
							<li>
								Assisted in managing safety databases, ensuring accuracy and completeness of data entry
							</li>
						</ul>
					</div>

					<div className='pt-5'>
						<h3 className="text-3xl font-semibold	">Block On Block</h3>
						<div className="">May 2023 - August 2023</div>
						<br />
						<ul className='marker:text-green list-outside list-disc ml-6 text-left space-y-2'>
							<li>
								Assisted in ordering and receiving parts and supplies
							</li>
							<li>
								Prepared invoice and recorded payment using computer systems.
							</li>
							<li>
								Printed completed bank reconciliation
							</li>
						</ul>
					</div>

					{/* <div className='pt-5'>
						<h3 className="text-3xl font-semibold	">Axonify</h3>
						<div className="">JavaScript Developer (Co-op) JAN 2021 - APR 2021</div>
						<br />
						<ul className='marker:text-green list-outside list-disc ml-6 text-left space-y-2'>
							<li>
								Developed a browser video game in JavaScript using Axonify's proprietary game engine and wrote a tutorial guide for new developers
							</li>
							<li>
								Upgraded Axonify's core web product from jQuery 1.7 to jQuery 3.5, and created customized ESLint rules to identify and auto-fix
								most of the deprecated jQuery functions
							</li>
							<li>
								Integrated new API endpoints with Backbone.js and Marionette.js to upload SCORM modules asynchronously to improve performance
							</li>
						</ul>
					</div> */}

					{/* <div className='pt-5'>
						<h3 className="text-3xl font-semibold	">Dematic</h3>
						<div className="">Software Developer (Co-op) SEP 2019 - DEC 2019</div>
						<br />
						<ul className='marker:text-green list-outside list-disc ml-6 text-left space-y-2'>
							<li>
								Developed an Angular WebApp to monitor telemetry data from a warehouse automation system
							</li>
							<li>
								Improved the runtime of creating virtual machines on Microsoft Azure by over 45%, by combining related Azure CLI code into PowerShell
								scripts and utilizing parallel processing in Bash scripts
							</li>
							<li>
								Created a Python script that generates patch notes between different application versions
							</li>
						</ul>
					</div>

					<div className='pt-5'>
						<h3 className="text-3xl font-semibold	">Bronte College</h3>
						<div className="">FullStack Developer (Co-op) SEP 2019 - DEC 2019</div>
						<br />
						<ul className='marker:text-green list-outside list-disc ml-6 text-left space-y-2'>
							<li>
								Developed an employee dashboard system in Ruby on Rails to digitalize HR activity in Bronte College
							</li>
							<li>
								Integrated Microsoft Graph API to synchronize Outlook Calendar events with a local calendar in a Rails application. This was done by
								scheduling background jobs to periodically scrape for new events on Outlook
							</li>
							<li>
								Implemented user authentication with OAuth 2.0 authorization using Microsoft Graph API, and routed uploads to Microsoft Azure
							</li>
						</ul>
					</div> */}
				</div>
			</div>

			<hr />

			<div className="flex flex-col py-10 md:flex-row justify-evenly mx-auto items-center relative text-center md:text-left max-w-7xl px-10 bg-white text-black">
				<h2 className="flex-initial self-center md:self-start px-10 underline decoration-4 decoration-red-500 min-w-[30%] text-xl pt-5">Education</h2>
				<div className="experience flex-1">
					<div className='pt-5'>
						<h3 className="text-3xl font-semibold	">University of Toronto</h3>
						<div className="">Honour's Bachelor of Science - SEP 2021 - Present</div>
						<br />
						<div className=''>
							<p>
							Third Year Computer Science & Mathematics major at the University of Toronto.
							</p>
						</div>
						<div className='py-2'>
							<p>
							Relevant Coursework: Data Structures & Algorithms, Software Design, Systems Programming, 
								Machine Learning, Computer Organization, Theory of Computation, Linear Algebra,
								Multivariable Calculus, Discrete Mathematics
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
