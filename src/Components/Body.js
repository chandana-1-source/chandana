import React, { useState } from 'react'
import Image from '../Image/rr.jpg'
import ReactPlayer from 'react-player'
const Body = () => {
    const [likes, setLikes] = useState(0) // likes=15
    function count() {
        setLikes(likes + 1);  //(15+1)
    }
    const [text, setText] = useState('')
    function reset() {
        setText('')
    }

    const [fight, setFight] = useState([
        { fight: 'sukuna' },
        { fight: 'jogo' },
        {fight:'jujutsu'}
    ])
    const [index, setIndex] = useState(0)  // 1
    function change() {  //0+1%3
        const newIndex = (index + 1) % fight.length
        setIndex(newIndex)
    }
    return (
        <div>
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <img src={Image} alt="images" style={{ height: '200px', width: '300px'}}/> <br />
                <p>A flower, sometimes known as a bloom or blossom, is the reproductive structure found in flowering plants<br></br>
                Flowers produce gametophytes, which in flowering plants consist of a few haploid cells that produce gametes. <br></br>
                Flowers are introduced as the reproductive part of a plant.<br></br>
                They are not only involved in reproduction but are also a source of food for other living organisms.</p>
                <p>likes: {likes}</p>
                
                {/* destructuring */}
                <button onClick={count}>Like</button>
            </div>
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <label htmlFor="Name">Name : </label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <p>onutput : {text}</p>
                <button onClick={reset}>Reset</button>
            </div>
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                {/* pass down url link in url attribuite */}
                <ReactPlayer url={'https://www.youtube.com/watch?v=WcxMOcxGYRk'} height={200} controls />
                <div>
                    <p>i like this {fight[index].fight}</p>
                    <p>Dandelions by Ruth B. </p>
                    <button onClick={change}>Change me</button>
                </div>
            </div>
        </div>
    )
}
export default Body