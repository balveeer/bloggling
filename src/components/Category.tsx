import { Link } from "react-router-dom";

const category = [
  'Technology',
  'Lifestyle',
  'Travel',
  'Food',
  'Health and Fitness',
  'Business and Entrepreneurship',
  'Personal Development',
  'Arts and Culture',
  'Parenting',
  'Education',
  'Entertainment',
  'Sports'
];

function Category() {
  return (
    <div className="w-auto py-4">
    <h2 className="text-Black dark:text-white m-6 opacity-80 text-center uppercase font-medium text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl lg:mt-10 xl:mt-16">
      CATEGORIES
    </h2>
      <div className=" grid gap-2 md:gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4" >
        {category.map(cat=>
        <Link key={cat.slice(0,3)} to={`/category/${cat.split(" ").join("-").toLowerCase()}`} className="p-2 h-20 md:h-32 text-lg sm:text-xl lg:text-2xl 2xl:text-3xl font-bold text-white bg-gradient-to-br from-slate-800/90 via-purple-600/90 to-violet-900/90 rounded-xl cursor-pointer flex items-center justify-center hover:scale-y-105 duration-200 ">
            <span className="text-center">{cat}</span>
        </Link>
      )}
      </div>
    </div>
  )
}

export default Category