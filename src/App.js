import Root from "./routes/Root";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "./client";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <ToastContainer position="bottom-left"
                          autoClose={5000}
                          hideProgressBar={false}
                          newestOnTop={false}
                          closeOnClick
                          pauseOnFocusLoss
                          draggable
                          pauseOnHover
                          theme="light" rtl={true}/>
        <Root/>
      </QueryClientProvider>
  );
}

export default App;
