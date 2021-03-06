import { cardTitle, title, subTitle } from 'assets/jss/material-kit-react.js';
import imagesStyle from 'assets/jss/material-kit-react/imagesStyles.js';

const loginStyle = {
  section: {
    padding: '70px 0',
    textAlign: 'center',
  },
  title: {
    ...title,
    color: '#000000',
    marginBottom: '1rem',
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none',
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cardTitle,
  smallTitle: {
    color: '#6c757d',
  },
  description: {
    color: '#999',
  },
  justifyCenter: {
    justifyContent: 'center !important',
  },
  alignCenter: {
    alignItems: 'center',
  },
  socials: {
    marginTop: '0',
    width: '100%',
    transform: 'none',
    left: '0',
    top: '0',
    height: '100%',
    lineHeight: '41px',
    fontSize: '20px',
    color: '#999',
  },
  margin5: {
    margin: '5px',
  },
  subTitle,
};

export default loginStyle;
