const ListItem = ({ data }) => {
  return (
    <div class="genre-counts" style={{ border: '1px solid black' }}>{data}
      <span class="count">0</span>
    </div>  
   
  )
}

const List = ({ data }) => {
  return (
    <div styles={{ display: 'flex', flexDirection: 'column' }}>
      {data.map(item => <ListItem key={item} data={item} />)}
    </div>
  )
}

export default List
