import {
	FiGithub,
	FiTwitter,
	FiLinkedin,
	FiInstagram,
} from 'react-icons/fi';
import { TbBrandFiverr } from "react-icons/tb";
const socialLinks = [
	{
		id: 1,
		icon: <TbBrandFiverr />,
		url: 'https://www.fiverr.com/hussain_code',
	},
	{
		id: 2,
		icon: <FiGithub />,
		url: 'https://github.com/MuhammadHussain-code',
	},
	{
		id: 3,
		icon: <FiTwitter />,
		url: 'https://twitter.com/@muhammad3221',
	},
	{
		id: 4,
		icon: <FiLinkedin />,
		url: 'https://linkedin.com/in/muhammad-hussain-834b38a0',
	},
	{
		id: 5,
		icon: <FiInstagram />,
		url: 'https://www.instagram.com/muhammadhussain99100/',
	},
];

const AppFooter = () => {
	return (
		<div className="container mx-auto">
			
			<div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
					<p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
						Follow me
					</p>
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>
				{/* <AppFooterCopyright /> */}
			</div>
		</div>
	);
};

export default AppFooter;
