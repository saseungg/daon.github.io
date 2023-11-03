import Typography from 'typography'
import GitHubTheme from 'typography-theme-github'

GitHubTheme.overrideThemeStyles = () => {
  return {
    a: {
      boxShadow: `none`,
      textDecoration: `none`,
      color: `#0687f0`,
    },
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
      textDecoration: `none`,
    },

    'a:hover': {
      textDecoration: `none`,
    },

    h1: {
      lineHeight: 1.2,
      fontSize: '30px',
      fontFamily: 'GmarketSansMedium',
      paddingBottom: '10px',
    },

    h2: {
      lineHeight: 1.2,
      fontSize: '23px',
      marginTop: '56px',
      marginBottom: '20px',
      fontFamily: 'GmarketSansMedium',
      paddingBottom: '10px',
    },

    h3: {
      fontWeight: 600,
      fontFamily: 'Pretendard',
    },

    h4: {
      fontWeight: 600,
      fontSize: '17px',
      fontFamily: 'Pretendard',
    },

    ul: {
      marginBottom: '6px',
    },

    li: {
      marginBottom: '2px',
    },
  }
}

const typography = new Typography(GitHubTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
