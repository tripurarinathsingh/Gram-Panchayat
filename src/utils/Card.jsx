import { Link } from "react-router-dom"
export default function Card(props){
    return(
        <>
        <div className="bg-slate-200 m-2 p-2 flex-wrap rounded-xl">
            <div className="w-30% m-2 p-2 text-center border bg-slate-400 border-gray-400">
                <Link to="/admin">{props.title}</Link>
                
            </div>
            <div className="w-30% m-2 p-2 text-center border border-blue-400">{props.content}</div>
        </div>
        </>
    )
}