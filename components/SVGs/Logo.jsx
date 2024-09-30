import Svg, { G, Path } from "react-native-svg";
const Logo = ({ color }) => (
	<Svg
		viewBox="0 6 90 96"
		height={50}
		width={90}
	>
		<G fill={color}>
			<Path
				d="M68 6H16C7.178 6 0 13.178 0 22V86C0 94.822 7.178 102 16 102H68A4 4 0 0 0 72 98V34A4 4 0 0 0 68 30H16C11.589 30 8 26.411 8 22S11.589 14 16 14H68A4 4 0 0 0 68 6M16 38H64V94H16C11.589 94 8 90.411 8 86V35.835A15.9 15.9 0 0 0 16 38"
				fill={color}
			/>
			<Path
				d="M68 18H16A4 4 0 0 0 16 26H68A4 4 0 0 0 68 18"
				fill={color}
			/>
			<Path
				d="M86 6C80.486 6 76 10.486 76 16V86C76 86.621 76.145 87.233 76.422 87.789L82.422 99.789A4.001 4.001 0 0 0 89.578 99.789L95.578 87.789A4 4 0 0 0 96 86V16C96 10.486 91.514 6 86 6M86 14C87.103 14 88 14.897 88 16V22H84V16C84 14.897 84.897 14 86 14M86 89.056L84 85.056V30H88V85.056z"
				fill={color}
			/>
			<Path
				d="M20 70H52A4 4 0 0 0 56 66V50A4 4 0 0 0 52 46H20A4 4 0 0 0 16 50V66A4 4 0 0 0 20 70M24 54H48V62H24z"
				fill={color}
			/>
			<Path
				d="M20 82H52A4 4 0 0 0 52 74H20A4 4 0 0 0 20 82"
				fill={color}
			/>
		</G>
	</Svg>
);
export default Logo;
