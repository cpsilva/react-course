import './index.css'
import { createRoot } from "react-dom/client";
import First from './components/basics/first';

const el = document.getElementById("root");
const root = createRoot(el);

root.render(<div><First></First></div>);
