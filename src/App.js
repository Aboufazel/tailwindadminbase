import Root from "./routes/Root";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "./client";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import buildProviderTree from "./hooks/buildProviderTree";
import useWindowSize from "./hooks/useWindowSize";
import {useEffect, useState} from "react";
import MobileAccess from "./components/access/mobileAccess";

const ProviderTree = buildProviderTree([
    [QueryClientProvider , {client:queryClient}],
])
function App() {
    const {isTabletOrMobile} =useWindowSize();
    const [isMobile,setIsMobile]=useState(false);

    useEffect(()=>{
        setIsMobile(isTabletOrMobile);
    },[isTabletOrMobile])

  if(isMobile){
      return(
         <MobileAccess/>
      )
  }
  else {
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
}

export default App;
