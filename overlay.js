console.log('hello from overlay.js')


//set all body styles to unset
const body = document.body;


const overlay = document.createElement('div');
overlay.id = 'remy-overlay';

const styles = {
  backgroundColor: 'rgba(0,0,0,0.5)',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  color: 'red',
  position: 'fixed',
  zIndex: 5000,
  flexDirection: 'column',
  width: '100vw',
  height: '100%',
  display: 'flex',
  fontSize: '2rem',
  fontFamily: "Helvetica",
  top: 0,
  left: 0,
}
Object.assign(overlay.style, styles);
overlay.style.all = 'unset !important';
overlay.innerHTML = `
  <h1>Overlay</h1>
  <p>Overlay content</p>
`;

// append child above body
body.insertBefore(overlay, body.firstChild);

