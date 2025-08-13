import "./App.css";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { RiHome8Fill } from "react-icons/ri";
function App() {
  toast.success("hello There");
  return (
    <>
      <Button>
        Click me
        <RiHome8Fill />
      </Button>
      <h1>Coming soon</h1>
      <ToastContainer />
    </>
  );
}

export default App;
