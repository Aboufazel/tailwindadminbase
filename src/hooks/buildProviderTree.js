const buildProviderTree = (componentsWithProps) => {
  const initialComponent = ({children})=> <>{children}</>

    return  componentsWithProps.reduce(
        (AccumulateComponents , [Provider , props={}])=>{
            return({children})=>{
                return(
                    <AccumulateComponents>
                        <Provider {...props}>
                            {children}
                        </Provider>
                    </AccumulateComponents>
                )
            }
        }
    , initialComponent)
}

export default buildProviderTree;