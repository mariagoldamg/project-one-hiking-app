import { data } from './data';
import { useState} from 'react';
import Social from './SocialMedia';
import DifficultyFilter from './DifficultyFilter';


function Hikes (){

    const [hikes, setHikes] = useState(data);

    const [showText, setShowText] = useState (false);

    const chosenHikes = (level) => {
        const newHikes = data.filter (element =>
        element.level ===level);
        setHikes(newHikes);
    }

const showTextClick = (item) =>{
    item.showMore =!item.showMore
    setShowText (!showText)
}
    return (<div>
        <div className='container'>
<h1>Let's Hike something <span>epic!</span></h1>
        </div>
        <DifficultyFilter filteredHikes={chosenHikes} />
<div className='hikes'>
    {hikes.map((item) =>{
        const {id,image,title,length,elevation,level, description, showMore} = item
        return (
            <div key={id}>
                <div className='hike-card'>
                    <h2>{id} - {title}</h2>
                    <img src= {image} width ='400px' alt="hikes"/>
                    <h3><span>Legth: </span>{length} <span>Elevation: </span> {elevation}</h3>
                    <h3><span> Difficulty: </span>{level}</h3>
                    <p className='description'>{showMore ? description : description.substring(0,100) + "..."} 
                    <button className='showBtn' onClick = {()=>showTextClick(item)}>{showMore ? "Show less" : "Show more"}</button> </p>
                </div>
            </div>
        )
    })}
</div>
<br></br>
<div className='container'>
<h2>Hike with <span className='orange'>Epic Hikes</span></h2></div>
<Social/>
        </div> )

}


export default Hikes;