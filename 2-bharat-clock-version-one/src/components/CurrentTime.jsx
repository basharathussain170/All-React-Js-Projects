function CurrentTime(){
  let date=new Date()
  return <p className="lead">This is current time:{date.toLocaleDateString()} - {date.toLocaleTimeString()}</p>
}
export default CurrentTime