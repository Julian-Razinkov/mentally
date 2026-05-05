import { AppBarLink } from "./AppBarLink"
import { House, BookHeart, Smile } from 'lucide-react'

//TODO: Change the tailwind theme to be according to figma

export const AppBar = () => {
  return (
    <div className="flex justify-between bg-green-950 mx-auto my-5 rounded-4xl h-20 items-center px-5">
      <nav className="flex items-center space-x-10 px-10 h-full">
        <AppBarLink title="Home" icon={<House />} />
        <AppBarLink title="Mood log" icon={<Smile />} />
        <AppBarLink title="Journal" icon={<BookHeart />} />
      </nav>
      <div className="h-12 w-12 rounded-[50%] bg-green-600 relative">
        <div className="absolute translate-x-4.5 translate-y-2.5">U</div>
      </div>
    </div>
  )
}