import { useState } from 'react'


const WorkstyleForm = (props) => {

    const [workType, setWorkType] = useState('')
    const [workVibe, setWorkVibe] = useState('')


    return (
        <div className="workstyle-container">
            <form className="form-radios">
                <div className="workstyle-set" >
                    <span className="workstyle-question">What type of work do you mostly do?</span>
                    <div className="workstyle-answers">
                        <input type="radio" value={'A'} id="workTypeChoice1" checked={workType === 'A'} onChange={(e) => setWorkType(e.target.value)}/>
                        <label htmlFor="workTypeChoice1">Heads down, focus work</label>
                        <input type="radio" value={'B'} id="workTypeChoice2" checked={workType === 'B'} onChange={(e) => setWorkType(e.target.value)}/>
                        <label htmlFor="workTypeChoice2">Mix of focus and interactive work</label>
                        <input type="radio" value={'C'} id="workTypeChoice3" checked={workType === 'C'} onChange={(e) => setWorkType(e.target.value)}/>
                        <label htmlFor="workTypeChoice3">Interactive work with others</label>
                    </div>
                </div>
                <div className="workstyle-set" >
                    <span className="workstyle-question">What type of atmosphere helps you get your best work done?</span>
                    <div className="workstyle-answers">
                        <input type="radio" value={'1'} id="workVibeChoice1" checked={workVibe === '1'} onChange={(e) => setWorkVibe(e.target.value)}/>
                        <label htmlFor="workVibeChoice1">Mostly quiet, like a slow day at the library</label>
                        <input type="radio" value={'2'} id="workVibeChoice2" checked={workVibe === '2'} onChange={(e) => setWorkVibe(e.target.value)}/>
                        <label htmlFor="workVibeChoice2">Mostly dynamic, like a busy coffee shop</label>
                    </div>
                </div>
                <input className="input-button" type="submit" value="REGISTER" />
            </form>
        </div>
    )
}

export default WorkstyleForm