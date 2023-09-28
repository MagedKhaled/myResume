import './AboutMe.css'
import pdf from './attachments/lab1.pdf'

const AboutMe = () => {
    return(
        <div className="aboutMeContainer w-75">
            <div>
                <h1 className="">About Me</h1>
            </div>
            <div>
                <p>A good example of a paragraph contains a topic sentence, details and a conclusion. 'There are many different kinds of animals that live in China. Tigers and leopards are animals that live in China's forests in the north. In the jungles, monkeys swing in the trees and elephants walk through the brush
                A good example of a paragraph contains a topic sentence, details and a conclusion. 'There are many different kinds of animals that live in China. Tigers and leopards are animals that live in China's forests in the north. In the jungles, monkeys swing in the trees and elephants walk through the brush
                A good example of a paragraph contains a topic sentence, details and a conclusion. 'There are many different kinds of animals that live in China. Tigers and leopards are animals that live in China's forests in the north. In the jungles, monkeys swing in the trees and elephants walk through the brush.</p>
                <a href={pdf} download={"myResume"} target='_blank'><button>Download Resume</button></a>
            </div>
        </div>
    )
    
}


export default AboutMe