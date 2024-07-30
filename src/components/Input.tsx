import  React,{ useId } from "react";

const Input:any = React.forwardRef(function Input(
  { label, limit, outOf = 255, type = "text", className = "",placeholder="", imageTitle="", ...props }:{label:string,limit:number,outOf:number,type:string,className:string,imageTitle?:string, placeholder:string},
  ref
) {
  const id = useId();
  return (
    <div className="w-full relative dark:text-white">
      {label && (
        <span className="flex justify-between w-full px-2">
          <label className=" mb-1 pl-1" htmlFor={id}>
            {label}
          </label>
        </span>
      )}
      <input
        type={type}
        title={imageTitle}
        placeholder={placeholder}
        className={`w-full px-3 py-2 rounded-lg bg-white text-black dark:text-white outline-none focus:bg-gray-50 dark:bg-gray-700 focus:dark:bg-gray-600 dark:focus:ring-gray-400 duration-200 border border-gray-200 dark:border-gray-600 peer focus:ring-2 ring-purple-400 pr-12 ${className} `}
        //@ts-ignore
        ref={ref}
        id={id}
        {...props}
      />
      {limit ? (
        <span className="hidden peer-focus:inline-block absolute right-0 rounded-3xl font-bold text-xs bg-green-600/80 text-white m-2 p-2">
          {limit}/{outOf}
        </span>
      ) : (
        ""
      )}
    </div>
  );
});

export default Input;
