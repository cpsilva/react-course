import './index.css'
import { createRoot } from "react-dom/client";

const el = document.getElementById("root");
const root = createRoot(el);
const tag = <strong>Hello react!</strong>;

root.render(<div>{tag}</div>);
