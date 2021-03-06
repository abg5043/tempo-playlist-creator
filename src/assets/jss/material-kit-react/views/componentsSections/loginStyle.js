import { container } from 'assets/jss/material-kit-react.js';

import image from 'assets/img/sign.jpg';

const loginStyle = {
  section: {
    minHeight: '50vh',
    maxHeight: '200px',
    overflow: 'hidden',
    padding: '70px 0',
    backgroundPosition: 'top center',
    backgroundSize: 'cover',
    margin: '0',
    border: '0',
    display: 'flex',
    alignItems: 'center',
    backgroundImage: `url(${image})`,
  },
  container,
  form: {
    margin: '0',
  },
  alignCenter: {
    alignContent: 'center',
  },
  cardHeader: {
    width: 'auto',
    textAlign: 'center',
    marginLeft: '20px',
    marginRight: '20px',
    marginTop: '-40px',
    padding: '20px 0',
    marginBottom: '15px',
  },
  cardBody: {
    width: 'auto',
    textAlign: 'center',
    marginLeft: '20px',
    marginRight: '20px',
    marginTop: '-20px',
    padding: '40px 0',
  },
  socialIcons: {
    maxWidth: '24px',
    marginTop: '0',
    width: '100%',
    transform: 'none',
    left: '0',
    top: '0',
    height: '100%',
    lineHeight: '41px',
    fontSize: '20px',
  },
  divider: {
    marginTop: '30px',
    marginBottom: '0px',
    textAlign: 'center',
  },
  cardFooter: {
    paddingTop: '0rem',
    border: '0',
    borderRadius: '6px',
    justifyContent: 'center !important',
  },
  socialLine: {
    marginTop: '1rem',
    textAlign: 'center',
    padding: '0',
  },
  inputIconsColor: {
    color: '#495057',
  },
  subtitle: {
    fontSize: '1.313rem',
    maxWidth: '500px',
    margin: '10px auto 0',
  },
};

export default loginStyle;
