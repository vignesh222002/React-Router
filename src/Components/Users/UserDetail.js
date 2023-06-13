import { useParams } from "react-router-dom"

export default function UserDetail() {
    const param = useParams()
    const userId = param.userId

    return <div>User Detail of {userId}</div>
}