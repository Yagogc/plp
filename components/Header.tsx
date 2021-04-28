const Header = () => {
  const numberOfLikes = 0
  return (
    <header className="bg-white border-gray-400 border-solid shadow border-b-1">
      <div className="container flex flex-row-reverse p-2">
        <button className="px-3 py-1 text-lg font-bold text-white bg-purple-800 border-2 border-purple-800 rounded hover:bg-purple-600">{`${numberOfLikes} 👍`}</button>
      </div>
    </header>
  )
}

export { Header }
