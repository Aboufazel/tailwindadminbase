import Root from "./routes/Root";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "./client";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import buildProviderTree from "./hooks/buildProviderTree";

const ProviderTree = buildProviderTree([
    [QueryClientProvider , {client:queryClient}],
])
function App() {

  return (
      <ProviderTree>
          <ToastContainer position="bottom-left"
                          autoClose={5000}
                          style={{fontFamily:"Estedad"}}
                          hideProgressBar={false}
                          newestOnTop={false}
                          closeOnClick
                          pauseOnFocusLoss
                          draggable
                          pauseOnHover
                          theme="light" rtl={true}/>
        <Root/>
      </ProviderTree>
  );
}

export default App;
