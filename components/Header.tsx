import { LikeList } from './LikeList'

const Header = () => {
  return (
    <header className="bg-white border-gray-400 border-solid shadow border-b-1">
      <div className="container flex flex-row-reverse p-2 mx-auto">
        <LikeList />
      </div>
    </header>
  )
}

export { Header }
