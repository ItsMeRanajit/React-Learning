import image from './assets/img.jpg'
function button () {
    let count = 0;
    const clicked = (e) =>{
        console.log(`${e} stop clicking me`);
        e.target.style.display = "none";
    }
    const clicktime = (e) =>{
        if(count < 3)
            count++;
        else {
            count++;
            console.log(`${e} stop you clicked me ${count} times`)
        }
        // console.log(`${e} stop clicking me`);
    }

    const clickInfo = (e) =>{
        console.log(e)
        //giving the event info
        count++;
        e.target.textContent = `Clicked me 🙂${count} times`
        //changing the content of the button
    }
    return(<><button onClick={(e) =>{ clickInfo(e)}}>Click me🙂</button>
    <img onClick={(e) => {clicked(e)}} src={image} alt="there was an image" /></>)
}
export default button