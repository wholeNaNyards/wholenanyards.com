import Typography from 'typography';
import lawtonTheme from 'typography-theme-lawton';

lawtonTheme.overrideThemeStyles = () => ({
  'a:hover': {
    textDecoration: 'none',
  },
  a: {
    fontWeight: '400',
  },
});

const typography = new Typography(lawtonTheme);

export default typography;
