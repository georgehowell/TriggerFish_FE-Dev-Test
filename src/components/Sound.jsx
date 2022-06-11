// import { render } from '@react-three/fiber';
// import Howl from 'howler';
// const audioClip = [ {audio: 'ambient01.mp3', label: "drum & base"} ]

// const soundPlay = (src) => {
//     const audio = new Howl({
//         src,
//         html5: true
//     })
//     audio.play();


// RenderButton = () => {
//     return audioClip.map((soundObj, index) => {
//         return (
//             <button key={index} onClick={() => this.soundPlay(soundObj.audio)}>{soundObj.label}</button>
//         )
//     })
// }

// render()
//     return (
//         <div>
//             {this.RenderButton()}
//         </div>
//     )
//     }
            
const Sound = () => {

    return (
            <audio src="/audio/ambient01.mp3" preload="metadata" type="audio/mpeg" >
                Your browser does not support the audio element.
            </audio>
        )
  }
  export default Sound