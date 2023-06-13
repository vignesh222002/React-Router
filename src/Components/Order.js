import { useNavigate } from "react-router-dom"

export default function Order() {
    const navigate = useNavigate()

    return (
        <>
            <div>Order Confirmed</div>
            <button onClick={() => navigate(-1)}>Back</button>
        </>
    )
}