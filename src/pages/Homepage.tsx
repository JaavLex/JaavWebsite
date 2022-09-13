import Title from '../components/global/Title';

export default function Homepage() {
	return (
		<div className="Homepage">
			<div className="avatar">
				<div className="w-48 rounded-full">
					<img src="https://avatars.githubusercontent.com/u/50820503?v=4" />
				</div>
			</div>
			<div className="px-4 py-32 mx-auto max-w-screen-xl lg:items-center lg:flex">
				<div className="max-w-3xl mx-auto text-center">
					<h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
						Full-Stack Dev
					</h1>

					<p className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl">
						Hey I'm Alexandre Javet - Discover more about my work and my projects!
						Come with me on the adventure of the never ending learning! Discover the
						world of frontend, backend, and devops with me!l
					</p>

					<div className="flex flex-wrap justify-center mt-8 gap-4">
						<a
							className="block w-full px-12 py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring"
							href="/introduction"
						>
							Enter the website
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
