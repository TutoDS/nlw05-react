import { flexAlignment, flexSettings } from 'assets/styles/mixins';
import { rgba, shade, tint } from 'polished';
import styled, { css } from 'styled-components';

type FooterProps = {
	empty?: boolean;
};

type ThumbnailContainerProps = {
	thumbnail?: string;
};

type PlayButtonProps = {
	playing?: boolean;
};

export const Container = styled.div`
	width: 26.5rem;
	height: 100vh;

	${flexSettings('column')};
	${flexAlignment('center', 'space-between')}

	padding: 3rem 4rem;

	background-color: ${({ theme }) => theme.colors.primary[500]};
	color: ${({ theme }) => theme.colors.white};

	strong {
		font-family: Lexend, sans-serif;
		font-weight: 600;
	}
`;

export const PlayerHeader = styled.header`
	${flexSettings()};
	${flexAlignment('center')};

	gap: 1rem;

	> svg {
		width: 32px;
		height: 32px;

		color: ${({ theme }) => theme.colors.white};
	}
`;

export const EmptyPlayer = styled.div`
	width: 100%;
	height: 20rem;

	${flexSettings()};
	${flexAlignment('center', 'center')}

	padding: 4rem;
	text-align: center;
	border: 1.5px dashed ${({ theme }) => theme.colors.primary[300]};
	border-radius: 1.5rem;

	background: linear-gradient(
		143.8deg,
		${({ theme }) => rgba(theme.colors.primary[800], 0.8)} 0%,
		${({ theme }) => rgba(theme.colors.black, 0)}100%
	);

	box-shadow: ${({ theme }) => theme.shadows.default};
`;

export const Playing = styled.div`
	${flexSettings('column')};
	${flexAlignment('center', 'center')};

	strong {
		margin-top: 2rem;
		font: 600 1.25rem Lexend, sans-serif;
		line-height: 1.75rem;
		text-align: center;
	}

	span {
		margin-top: 1rem;
		font-size: 0.85rem;
		line-height: 1.25rem;
		color: ${({ theme }) => tint(0.65, theme.colors.gray[200])};
		text-align: center;
	}
`;

export const ThumbnailContainer = styled.div<ThumbnailContainerProps>`
	width: 100%;
	height: 20rem;

	padding: 4rem;
	text-align: center;
	border: 1.5px dashed ${({ theme }) => theme.colors.primary[300]};
	border-radius: 1.5rem;

	background-image: url(${({ thumbnail }) => thumbnail});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	/* background-blend-mode: overlay; */
	background-color: ${({ theme }) => theme.colors.boxBackground};

	box-shadow: ${({ theme }) => theme.shadows.default};
`;

export const PlayerFooter = styled.footer<FooterProps>`
	align-self: stretch;

	/* Empty */
	opacity: ${({ empty }) => (empty ? 0.5 : 1)};
`;

export const ProgressBar = styled.div`
	${flexSettings()};
	${flexAlignment('center')};
	gap: 0.5rem;

	font-size: 0.875rem;

	> span {
		display: inline-block;
		width: 4rem;
		text-align: center;
	}
`;

export const SliderContainer = styled.div`
	flex: 1;
`;

export const EmptySlider = styled.div`
	width: 100%;
	height: 4px;

	border-radius: 2px;

	background-color: ${({ theme }) => theme.colors.primary[300]};
`;

export const Buttons = styled.div`
	${flexSettings()};
	${flexAlignment('center', 'center')};

	gap: 1.5rem;

	margin-top: 2.5rem;
`;

const CSSButton = css`
	border: 0;
	font-size: 0;
	transition: all 0.5s ease-in-out;

	&:disabled {
		cursor: not-allowed;
	}
`;

export const Button = styled.button`
	${CSSButton};
	background-color: transparent;

	> svg {
		width: 1.5rem;
		height: 1.5rem;
		color: ${({ theme }) => theme.colors.gray[50]};
	}

	&:hover:not(:disabled) {
		> svg {
			color: ${({ theme }) => theme.colors.gray[200]};
		}
	}
`;

export const PlayButton = styled.button<PlayButtonProps>`
	${CSSButton};
	width: 4rem;
	height: 4rem;

	border-radius: 1rem;

	background-color: ${({ playing, theme }) =>
		playing ? shade(0.5, theme.colors.primary[400]) : theme.colors.primary[400]};

	> svg {
		width: 2rem;
		height: 2rem;
		color: ${({ theme }) => theme.colors.gray[50]};
	}

	&:hover:not(:disabled) {
		background-color: ${({ theme }) => shade(0.5, theme.colors.primary[400])};
	}
`;
