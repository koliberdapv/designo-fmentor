import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './components/ui';
import pages from './data/pages';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {pages.map((page, index) => {
            const { name, path, ElementName } = page;
            return (
              <Route
                index={name === 'homepage'}
                key={index}
                path={path}
                element={<ElementName />}
              />
            );
          })}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
