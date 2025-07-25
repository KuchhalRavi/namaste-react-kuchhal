import { useRouteError } from 'react-router';
const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Oops!! Error Occured!!</h1>
            <h2>Try Again</h2>
            <h3>{err.status} :- {err.statusText}</h3>
        </div>
    )
}
export default Error;