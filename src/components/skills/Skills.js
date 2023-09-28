
import './Skills.css'
const Skills = () => {
    return (
        <div className="w-75 bg-dark text-center skillsContainer">
            <h1 className="pb-4 ">
                Skills
            </h1>
            <p>
                A good example of a paragraph contains a topic sentence, details and a conclusion. 'There are many different kinds of animals that live in China. Tigers and leopards are animals that live in China's forests in the north. In the jungles, monkeys swing in the trees and elephants walk through the brush
            </p>
            <div className="d-flex mt-5" style={{'width':'100%'}}>
                <div className="w-100" style={{'marginTop':'60px'}}>
                    <h3>MY FOCUS</h3>
                    <hr/>
                    <h3>UI/UX Design</h3>
                    <h3>Responsive Design</h3>
                    <h3>Web Design</h3>
                    <h3>Mobile App Design</h3>
                </div>
                <div className="w-100">
                    <div className="progress w-75 m-2" style={{ 'borderRadius': 0, 'height': 30 }}>
                        <span className="progress-type text-white d-flex align-items-center p-2" style={{ 'backgroundColor': '#615f5f', 'width': '100px' }} >HTML / HTML5</span>
                        <div className="progress-bar bg-secondary" aria-valuemin="0" aria-valuemax="100" style={{ width: '60%' }} />
                    </div>

                    <div className="progress w-75 m-2" style={{ 'borderRadius': 0, 'height': 30 }}>
                        <span className="progress-type text-white d-flex align-items-center p-2" style={{ 'backgroundColor': '#615f5f', 'width': '100px' }} >CSS / CSS3</span>
                        <div className="progress-bar bg-secondary" aria-valuemin="0" aria-valuemax="100" style={{ width: '30%' }} />
                    </div>

                    <div className="progress w-75 m-2" style={{ 'borderRadius': 0, 'height': 30 }}>
                        <span className="progress-type text-white d-flex align-items-center p-2" style={{ 'backgroundColor': '#615f5f', 'width': '100px' }} >JavaScript</span>
                        <div className="progress-bar bg-secondary" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }} />
                    </div>

                    <div className="progress w-75 m-2" style={{ 'borderRadius': 0, 'height': 30 }}>
                        <span className="progress-type text-white d-flex align-items-center p-2" style={{ 'backgroundColor': '#615f5f', 'width': '100px' }} >Python</span>
                        <div className="progress-bar bg-secondary" aria-valuemin="0" aria-valuemax="100" style={{ width: '60%' }} />
                    </div>

                    <div className="progress w-75 m-2" style={{ 'borderRadius': 0, 'height': 30 }}>
                        <span className="progress-type text-white d-flex align-items-center p-2" style={{ 'backgroundColor': '#615f5f', 'width': '100px' }} >UI / UX</span>
                        <div className="progress-bar bg-secondary" aria-valuemin="0" aria-valuemax="100" style={{ width: '40%' }} />

                    </div>

                    <div className="progress w-75 m-2" style={{ 'borderRadius': 0, 'height': 30 }}>
                        <span className="progress-type text-white d-flex align-items-center p-2" style={{ 'backgroundColor': '#615f5f', 'width': '100px' }} >HTML / HTML5</span>
                        <div className="progress-bar bg-secondary" aria-valuemin="0" aria-valuemax="100" style={{ width: '60%' }} />
                    </div>

                    <div className="progress w-75 m-2" style={{ 'borderRadius': 0, 'height': 30 }}>
                        <span className="progress-type text-white d-flex align-items-center p-2" style={{ 'backgroundColor': '#615f5f', 'width': '100px' }} >CSS / CSS3</span>
                        <div className="progress-bar bg-secondary" aria-valuemin="0" aria-valuemax="100" style={{ width: '30%' }} />
                    </div>

                    <div className="progress w-75 m-2" style={{ 'borderRadius': 0, 'height': 30 }}>
                        <span className="progress-type text-white d-flex align-items-center p-2" style={{ 'backgroundColor': '#615f5f', 'width': '100px' }} >JavaScript</span>
                        <div className="progress-bar bg-secondary" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }} />
                    </div>

                    <div className="progress w-75 m-2" style={{ 'borderRadius': 0, 'height': 30 }}>
                        <span className="progress-type text-white d-flex align-items-center p-2" style={{ 'backgroundColor': '#615f5f', 'width': '100px' }} >Python</span>
                        <div className="progress-bar bg-secondary" aria-valuemin="0" aria-valuemax="100" style={{ width: '60%' }} />
                    </div>

                    <div className="progress w-75 m-2" style={{ 'borderRadius': 0, 'height': 30 }}>
                        <span className="progress-type text-white d-flex align-items-center p-2" style={{ 'backgroundColor': '#615f5f', 'width': '100px' }} >UI / UX</span>
                        <div className="progress-bar bg-secondary" aria-valuemin="0" aria-valuemax="100" style={{ width: '40%' }} />

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills