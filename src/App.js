import paintings from './paintings.json';
import PaintingList from './components/PaintingList/PaintingList';
import Panel from './components/Panel/Panel';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Notification from './components/Notification/Notification';
import Layout from './components/Layout/Layout';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const App = () => {
  return (
    <Layout>
      <ColorPicker options={colorPickerOptions} />
      <Notification text="CSS modules is so bad" type="error" />
      <Notification text="CSS modules is pretty good" type="success" />
      <Panel title="React is cool">
        <p>Vasa hiiii</p>
      </Panel>
      <Panel>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit in diam</p>
      </Panel>

      <PaintingList paintings={paintings} />
    </Layout>
  );
};

export default App;
