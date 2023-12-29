console.log('hello from overlay.js')

const overlay = document.createElement('div');
overlay.id = 'remy-overlay';
const styles = {
  backgroundColor: 'rgba(0,0,0,0.5)',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  position: 'fixed',
  zIndex: 5000,
  width: '100%',
  height: '100%',
  display: 'flex',
  fontSize: '2rem',
  top: 0,
  left: 0,
}
Object.assign(overlay.style, styles);

overlay.innerHTML = `
  <h1>Overlay</h1>
  <p>Overlay content</p>
`;
document.body.appendChild(overlay);

