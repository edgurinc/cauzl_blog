import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { mediaMax } from '@divyanshu013/media';
import { rhythm } from '../utils/typography';
import { getTheme } from '../utils/theme';
import ThemeContext from './ThemeContext';

const Bio = () => {
	const data = useStaticQuery(graphql`
		query BioQuery {
			avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
				childImageSharp {
					fixed(width: 64, height: 64) {
						...GatsbyImageSharpFixed
					}
				}
			}
			site {
				siteMetadata {
					author
					social {
						twitter
					}
				}
			}
		}
	`);

	const { author, social } = data.site.siteMetadata;
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
				fixed={data.avatar.childImageSharp.fixed}
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
					borderRadius: `50%`,
				}}
			/>
			<div css={{ fontSize: 16, color: secondary }}>
				<p>
					The official blog of <a href="https://www.cauzl.com"> Cauzl. </a>
					Cauzl is a platform for learninng cauals inference, econometrics,
					and statistics.
				</p>
				<p>
					You may follow us on <a href={social.twitter}>twitter</a> or join our{' '}
					<a href={social.newsletter}>newsletter</a> for latest updates.
				</p>
			</div>
		</div>
	);
};

export default Bio;
