const ListItem = ({ data }) => {
  return (
    <div style={{ border: '1px solid black' }}>{data}</div>
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
