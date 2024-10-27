import ComponentC from './ComponentC.jsx'
function ComponentB(props){
    return(
        <div className="box">
            <h1 className="p-5">ComponentB</h1>
            {/* <ComponentC user={props.user}/> prop chain */}
            <ComponentC />
        </div>
    )
}
export default ComponentB