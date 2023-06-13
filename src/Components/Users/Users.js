import { Outlet, useParams, useSearchParams } from "react-router-dom";

export default function Users() {
    let [searchParams, setParams] = useSearchParams()
    let showActiveUsers = searchParams.get('filter') === 'active'

    return (
        <>
        <h2>User 1</h2>
        <h2>User 2</h2>
        <h2>User 3</h2>
        <Outlet />
        <div>
            <button onClick={() => setParams({ filter : 'active' })}>Show Active Users</button>
            <button onClick={() => setParams({})}>Show All Users</button>
            {
                showActiveUsers ? (
                    <h2>Showed Active Users</h2>
                ) : (
                    <h2>Showed All Users</h2>
                )
            }
        </div>
        </>
    )
}