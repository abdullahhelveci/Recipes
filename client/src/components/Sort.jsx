
const Sort = ({setOrder}) => {
  return (
    <select onChange={(e) => setOrder(e.target.value)} defaultValue='time' className="rounded-md p-1">
              <option disabled value='time'>Süreye Göre</option>
              <option value='asc'>Artan</option>
              <option value='desc'>Azalan</option>
            </select>
  )
}

export default Sort