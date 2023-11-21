import {useGetAllAccountPerson} from "../../../hooks/coding";

const CreateAccountDefaultPerson = () => {

    const {data , isLoading , isRefetching , isError} = useGetAllAccountPerson('getAllAccountPersonLink')

    console.log(data , "get all account person data")
    return("create account default person")
}

export default CreateAccountDefaultPerson;