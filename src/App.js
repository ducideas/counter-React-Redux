
import './App.css';
import Demo from './components/withRedux/Demo';
import { MultipleCounterRedux } from './components/withRedux/MultipleCounterRedux';
import SingleCounterRedux from './components/withRedux/SingleCounterRedux';
import SingleCounter from './components/withoutRedux/SingleCounter';
import MultipleCounter from './components/withoutRedux/MultipleCounter';

function App() {
  return (
    <div style={{display: 'flex', justifyContent:'center'}}>
      <h3>1. Single Counter Without Redux</h3>
      <SingleCounter />
      <h3>2. Multiple Counter Without Redux</h3>
      <MultipleCounter />
      <h3>3. Single Counter With Redux</h3>
      <SingleCounterRedux />
      <h3>4. Multiple Counter With Redux</h3>
      <MultipleCounterRedux/>
    </div>
  );
}
export default App;
