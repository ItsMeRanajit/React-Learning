// import style from './button2.module.css' //importing button css  
function Button2(){
    const styles = {
        width: "100px",
        height: "30px",
        fontSize: "10px",
        backgroundColor: "#ff6e87",
        boxShadow: "0px 1px 3px black",
        margin: "5px",
        borderRadius: "5px"
    }
    // this is how to apply inline style in react 
    return(
        <button style={styles}>giving inline css</button>
    );
}
export default Button2;
// this is added due to maintain a clean structure of the files spearating their css and jsx files combined in a FileSystemDirectoryReader. which will be imported by the app or some else file to use these components

//inline css is preffered to use when the design is minimal