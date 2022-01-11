import './App.css';
import ColorPicker from './components/ColorPicker';
import HoursMinutesSeconds from './components/HoursMinutesSeconds';
import TextBoxes from './components/TextBoxes';

function App() {
  const sectionStyle = {
    display: 'block',
    margin: '2rem 1rem',
    padding: '2rem',
    borderBottom: '2px solid #c9c9c9',
  };

  return (
    <div >
      <section style={sectionStyle}>
        <p>Your Tasks:
          <ul style={{ lineHeight: '1.5', fontSize: '1.2rem' }}>
            <li>Read each component source and create a list of tests</li>
            <li>Implement the tests for one component using either cypress or react-testing-library</li>
            <li>Implement the tests for another component using your other choice</li>
          </ul>
        </p>
      </section>
      <section style={sectionStyle}>
        <h2>TextBoxes.js</h2>
        <TextBoxes />
      </section>
      <section style={sectionStyle}>
        <h2>HoursMinutesSeconds.js</h2>
        <HoursMinutesSeconds />
      </section>
      <section style={sectionStyle}>
        <h2>ColorPicker.js</h2>
        <ColorPicker />
      </section>
    </div>
  );
}

export default App;
