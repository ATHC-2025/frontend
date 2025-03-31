import SearchIcon from "../_assets/svgs/SearchIcon";




export default function HeaderLocationSearch(){

  return (
    <label className="hidden lg:block grow max-w-[280px] bg-[#f5f7fa]  text-[#718ebf] rounded-[40px] relative focus-within:outline-solid focus-within:outline-[#718ebf]">
      <span className="absolute top-1/2 -translate-y-1/2 left-[15px]">
        <SearchIcon />
      </span>
      <span className="sr-only">Enter a location</span>
      <input
        className="block w-full px-[45px] py-2 placeholder:text-[#718ebf] focus:outline-none"
        placeholder="Enter a location"
      />
    </label>
  )
}