// Import images
import { SiFiverr } from "react-icons/si";
import { SiUpwork } from "react-icons/si";
import codeShock from "../images/codeShock.png";
import beta from "../images/beta.png";

export const clientsHeading = 'Some of the brands that trust me';

export const clientsData = [
	{
		id: 1,
		title: 'Fiverr',
		img: <SiFiverr color='#0BB534' size={180}/>,
	},
	{
		id: 2,
		title: 'Upwork',
		img: <SiUpwork color='#0BB534' size={120}/>,
	},
	{
		id: 3,
		title: 'Code Shock',
		img: <img width={400} src={codeShock}  alt="" />,
	},
	{
		id: 4,
		title: 'Bestimate',
		img:<img width={120} src={beta} alt="" /> ,

	},
	
];

