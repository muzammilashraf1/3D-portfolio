import React from 'react';

const Experience = () => {
	return (
		<section id="resume" className='bg-white w-full'>
			<div className="flex flex-col py-10 md:flex-row justify-evenly mx-auto items-center relative text-center md:text-left max-w-7xl px-10 bg-white text-black">
				<h2 className="flex-initial self-center md:self-start p-10 underline min-w-[30%] text-xl">Skills</h2>
				<div className="flex-1">
					<p>JavaScript, React, Python, C++, Java, Git, Jenkins, Docker</p>
					Summary of relevant skills
				</div>
			</div>

      <hr />

			<div className="flex flex-col py-10  md:flex-row justify-evenly mx-auto items-center relative text-center md:text-left max-w-7xl px-10 bg-white text-black">
				<h2 className="flex-initial self-center md:self-start px-10 underline min-w-[30%] text-xl pt-5">Experience</h2>
				<div className="experience flex-1">
					<div className='pt-5'>
						<h3 className="text-3xl font-semibold	">Axonify</h3>
						<div className="">Software Developer JAN 2022 - Present</div>
						<br />
						<div>
							Integrated features from an acquired company (Nudge) into the Axonify's core platform.
						</div>
					</div>

					<div className='pt-5'>
						<h3 className="text-3xl font-semibold	">PlayStation - SIE</h3>
						<div className="">Software Developer SEP 2021 - DEC 2021</div>
						<br />
						<div>
							Integrated features from an acquired company (Nudge) into the Axonify's core platform.
						</div>
					</div>

					<div className='pt-5'>
						<h3 className="text-3xl font-semibold	">Axonify</h3>
						<div className="">JavaScript Developer JAN 2021 - APR 2021</div>
						<br />
						<div>
							Integrated features from an acquired company (Nudge) into the Axonify's core platform.
						</div>
					</div>

          <div className='pt-5'>
						<h3 className="text-3xl font-semibold	">Dematic</h3>
						<div className="">Software Developer SEP 2019 - DEC 2019</div>
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
						<div className="">FullStack Developer SEP 2019 - DEC 2019</div>
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
					</div>
				</div>
			</div>

      <hr />

      <div className="flex flex-col py-10 md:flex-row justify-evenly mx-auto items-center relative text-center md:text-left max-w-7xl px-10 bg-white text-black">
				<h2 className="flex-initial self-center md:self-start px-10 underline min-w-[30%] text-xl pt-5">Education</h2>
				<div className="experience flex-1">
					<div className='pt-5'>
						<h3 className="text-3xl font-semibold	">University of Waterloo</h3>
						<div className="">Bachelor of Computer Science - SEP 2017 - APR 2022</div>
						<br />
						<div>
							Integrated features from an acquired company (Nudge) into the Axonify's core platform.
						</div>
					</div>

					<div className='pt-5'>
						<h3 className="text-3xl font-semibold	">Bluevale Collegiate Institute</h3>
						<div className="">Ontario Scholar SEP 2014 - JUN 2017</div>
						<br />
						<div className='text-left space-y-2'>
							Top 25% in Canadian Computing Competition, and Euclid Math Competition.
              Peer Tutor for Grade 9 and 10 Math/Science. Did X-Country, Karate and Tennis.
						</div>
					</div>

				</div>
			</div>
		</section>
	);
};

export default Experience;
