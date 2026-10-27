const iconColor = '#4527a4';

export const blockIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={512}
		height={512}
		viewBox="0 0 512 512"
		role="img"
		aria-label="Hero Section Block Editor Logo"
	>
		<defs>
			<linearGradient id="g1" x1="64" y1="64" x2="448" y2="448">
				<stop offset="0" stopColor="#2563EB" />
				<stop offset="1" stopColor="#14B8A6" />
			</linearGradient>

			<linearGradient id="g2" x1="120" y1="150" x2="392" y2="360">
				<stop offset="0" stopColor="#F59E0B" />
				<stop offset="1" stopColor="#FB7185" />
			</linearGradient>

			<filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
				<feDropShadow
					dx="0"
					dy="10"
					stdDeviation="14"
					floodColor="#0B1220"
					floodOpacity="0.18"
				/>
			</filter>
		</defs>

		<rect
			x="64"
			y="64"
			width="384"
			height="384"
			rx="84"
			fill="url(#g1)"
			filter="url(#shadow)"
		/>

		<rect
			x="116"
			y="116"
			width="280"
			height="280"
			rx="56"
			fill="#FFFFFF"
			fillOpacity="0.92"
		/>

		<rect
			x="148"
			y="154"
			width="216"
			height="120"
			rx="30"
			fill="url(#g2)"
		/>

		<path
			d="M168 186 H344"
			stroke="#FFFFFF"
			strokeWidth="16"
			strokeLinecap="round"
			opacity="0.9"
		/>

		<path
			d="M168 222 H302"
			stroke="#FFFFFF"
			strokeWidth="16"
			strokeLinecap="round"
			opacity="0.85"
		/>

		<rect
			x="168"
			y="246"
			width="120"
			height="22"
			rx="11"
			fill="#FFFFFF"
			opacity="0.92"
		/>

		<rect
			x="156"
			y="300"
			width="88"
			height="70"
			rx="18"
			fill={iconColor}
			opacity="0.92"
		/>

		<rect
			x="256"
			y="300"
			width="100"
			height="70"
			rx="18"
			fill={iconColor}
			opacity="0.72"
		/>

		<circle
			cx="346"
			cy="334"
			r="22"
			fill="#FFFFFF"
			opacity="0.95"
		/>

		<path
			d="M346 322 V346 M334 334 H358"
			stroke={iconColor}
			strokeWidth="6"
			strokeLinecap="round"
		/>
	</svg>
);


export const verticalLineIcon = <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 14.707 14.707'>
	<rect x='6.275' y='0' width='2.158' height='14.707' />
</svg>;

export const horizontalLineIcon = <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 357 357'>
	<path d='M357,204H0v-51h357V204z' />
</svg>;
