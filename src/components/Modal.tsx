import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
function Modal({ open,type, onClose }: { open: boolean;type:"verification"|"authentication"; onClose: any }) {
  if (!open) return <> </>;
  return ReactDOM.createPortal(
    <div
      onClick={(e)=>onClose(e)}
      className="fixed left-0 top-0 z-20 w-full h-screen overflow-y-auto overflow-x-hidden outline-none flex justify-center items-center backdrop-blur-md"
    >
      <div className="h-96 w-96 bg-violet-300/70 dark:bg-gray-700 border-2 rounded-lg z-20 p-auto py-8 relative" onClick={(e)=>e.stopPropagation()}>
        <button onClick={(e)=>onClose(e)} className="px-2 rounded-lg absolute hover:bg-white bg-purple-200 top-2 right-4 text-2xl">
          X
        </button>
        <h2 className="h-20 w-full text-xl font-semibold text-center ">
        {type=="authentication"?"Not logged in":"Verify Email"}
        </h2>
        <p className="w-full text-lg text-gray-700 dark:text-gray-300 text-center">
          {type=="authentication"?"You need to log in first...":"You need to Verify Account First..."}
        </p>
        <div className="w-96 h-24 items-center flex justify-center gap-2 ">
          {type=="authentication"?
          <><Link to='/login'>
          <button  className="h-12 px-4 bg-black text-white font-semibold text-center ring-white rounded-lg hover:bg-white hover:text-black hover:border-black border-2">
            Login
          </button></Link>
          <Link to='/signup'>
          <button  className="h-12 px-4 bg-black text-white font-semibold text-center ring-white rounded-lg hover:bg-white hover:text-black hover:border-black border-2">
            Sign Up
          </button></Link></>:
          <Link to='/verify-email'>
          <button  className="h-12 px-4 bg-black text-white font-semibold text-center ring-white rounded-lg hover:bg-white hover:text-black hover:border-black border-2">
            Verify Email
          </button></Link>}
          
        </div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
