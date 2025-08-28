function UserGreeting(props){
  
       return(props.isLoggedin ? <h2 className="welcome-msg">Welcome {props.username}</h2> :
        <h2 className="not">User not found</h2>
       ) 
   
   
}
export default UserGreeting