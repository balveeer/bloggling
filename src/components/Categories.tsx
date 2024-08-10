import React, { useId,useState } from "react";
const category = [
  "Technology",
  "Nature",
  "Health",
  "Business",
  "Politics",
  "Entertainment",
  "Science",
  "Travel",
  "Food",
  "Sports",
  "Education",
  "Arts"
];

function Categories({props,defaultValue=[],onCatChange,className}:any,ref:any ) {
  const [selectedCat, setSelectedCat] = React.useState<string[]>([])
  const [options, setOptions] = useState(category)
  const id = useId();

  React.useEffect(()=>{
    if(defaultValue) {
      let tempArr:any[] = [];
      options.map((cat)=>{defaultValue.includes(cat)?tempArr.push("✅"+cat):tempArr.push(cat)});
      setOptions(tempArr)
      setSelectedCat(defaultValue);
    }
  },[])
  const handleCategories = (cat:string)=>{
    if(!selectedCat.includes(cat.slice(1))) {
      let tempArr:string[] = [...options];
      tempArr[tempArr.indexOf(cat)] ="✅"+ cat  
      setOptions(tempArr)
      setSelectedCat([...selectedCat,cat])
    }
    onCatChange([...selectedCat,cat])
  }
  const deleteCat=(cat:any)=>{
    let tempArr:string[] = [...options];
    tempArr[tempArr.indexOf("✅"+ selectedCat[cat])] = tempArr[tempArr.indexOf("✅"+ selectedCat[cat])].slice(1)
    setOptions(tempArr)
    const tempList = selectedCat.filter((ele) => selectedCat.indexOf(ele) != cat)
    setSelectedCat(tempList);
    onCatChange(tempList)
  }
  return (
    <div className={`${className}`} 
    {...props}
    ref={ref}
    value={selectedCat} >
        <label className=" dark:text-white mb-1 pl-1" htmlFor={id} >
            Categories
        </label>
        <div className="w-full flex grow gap-1 flex-wrap transition duration-300 select-none">
        {selectedCat.map((cat,index)=>
        <span key={String(index)}
        className="rounded-2xl font-semibold text-xs bg-gray-300 dark:bg-gray-700 dark:text-white p-2 cursor-pointer">{cat} <span onClick={()=>deleteCat(index)} className="rounded-2xl bg-gray-200 dark:bg-gray-500 p-1 h-4 w-4" >❌</span></span>
        )}
        </div>
      <select
        id={id}
        onChange={(e)=>handleCategories(e.target.value)}
        className={`w-full my-2 px-3 py-2 rounded-lg bg-white text-black dark:text-white outline-none focus:bg-gray-50 dark:bg-gray-700 focus:dark:bg-gray-600 dark:focus:ring-gray-400 duration-200 border border-gray-200 dark:border-gray-600 peer focus:ring-2 ring-gray-400 pr-12`}
      >
        {options?.map((option,index) => (
          <option className="" key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Categories);