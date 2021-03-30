import Logo from '../Logo';

const styles = {
  header: {
    minHeight: 80,
    backgroundColor: 'palevioletred',
  },
};

const AppBar = () => (
  <header style={styles.header}>
    {' '}
    <Logo text="HELLO FROM VASA" />
  </header>
);

export default AppBar;
