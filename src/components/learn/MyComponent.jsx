import './style.css';

const MyComponent = () => {
    const hoidanit = [1,2,3] //string
    // const hoidanit = {
    //     name: "hoidanit",
    //     age : 25
    // }
    return (
        <>
        <div> 
        {JSON.stringify(hoidanit)} & hoidanit
        </div>
            <div>{ console.log ("ERIC")}</div>
        <div className='child' style={{borderRadius: "10px"}}>child</div>
      </>
  );
}

export default MyComponent;