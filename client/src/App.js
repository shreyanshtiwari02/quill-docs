import TextEditor from "./TextEditor"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom"
import { v4 as uuidV4 } from "uuid"
import Home from "./HomePage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documents/:roomId" element={<TextEditor />} />
      </Routes>
    </Router>
  )
}

export default App
