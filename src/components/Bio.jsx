import React, { useContext } from 'react';
import Image from 'gatsby-image';

import { mediaMax } from '@divyanshu013/media';
import { rhythm } from '../utils/typography';
import { getTheme } from '../utils/theme';
import ThemeContext from './ThemeContext';

const Bio = ({ author }) => {
	const { theme } = useContext(ThemeContext);
	const { color, secondary } = getTheme(theme);
	return (
		<div
			css={{
				display: `grid`,
				gridTemplateColumns: 'auto auto',
				alignItems: 'start',
				a: {
					color: '#18BC74',
					borderBottomColor: color,
					'&:hover, &:focus': {
						borderBottomStyle: 'solid',
						borderBottomColor: color,
					},
				},
				[mediaMax.small]: {
					gridTemplateColumns: 'auto',
				},
			}}
		>
			<Image
				fixed={author.avatar.childImageSharp.fixed}
				alt={author}
				css={{
					marginTop: 8,
					marginRight: rhythm(1),
					borderRadius: `100%`,
					opacity: 0.87,
					[mediaMax.small]: {
						marginBottom: 8,
					},
				}}
				imgStyle={{
					objectFit: 'contain',
					objectPosition: '0 center',
					borderRadius: `50%`,
				}}
			/>
			<div css={{ fontSize: 16, color: secondary }}>
				<p dangerouslySetInnerHTML={{ __html: author.bio }} />
				<p dangerouslySetInnerHTML={{ __html: author.social }} />
			</div>
		</div>
	);
};

export default Bio;
