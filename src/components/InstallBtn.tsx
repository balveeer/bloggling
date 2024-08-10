// import { useState } from 'react'
// import {Load} from './index'
// function InstallBtn() {
//     const [load, setLoad] = useState(false);
//     let installPrompt = null;

//     window.addEventListener("beforeinstallprompt", (event) => {
//         event.preventDefault();
//         installPrompt = event;
//         installButton.removeAttribute("hidden");
//     });
//   return (<button
//     className={`w-32 text-center inline-block hover:drop-shadow-lg px-6 py-2 duration-200 text-green-500 hover:text-white  hover:dark:bg-green-600 hover:bg-green-600  rounded-xl hover:rounded-s-xl ${load?" bg-green-600":"bg-white"} `}
//     onClick={handleInstall}
//   >{load?<Load/>:"Install Bloggling"}
    
//   </button>
//   )
// }

// export default InstallBtn