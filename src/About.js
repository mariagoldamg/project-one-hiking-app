import { data } from './data';
import { useState} from 'react';

function About(){

    const [view, setView] = useState(0);
    const {title,image,length,elevation} = data[view];

    const previousView =()=>{
        setView((view)=>{
            view--;
            if (view<0){
                return data.length-1
            }
            return view;
        })
    }

    const nextView = ()=>{
        setView ((view)=>{
            view++;
            if(view>data.length-1){
                view=0;
            }
            return view;
        })
    }

    return (<div>
        <div className="container">
            <h1>Welcome to <span> EPIC HIKES</span></h1>
        </div>
        <div className="container">
            <p className='par'>Created in 2020, and currently funded by the Local Guides Foundation, <span className="orange">Epic Hike</span> is a non-profit NGO committed to the promotion of Armenia as a hiking and ecotourism destination for international visitors and locals alike. Whether a seasoned nature enthusiast or someone simply eager to begin exploring, Epic Hike is here to help connect everyone to all that Armenia has to offer. With our free hiking app, website, and information center in downtown Yerevan,  <span className="orange">we're making hiking in Armenia easy and fun for all.</span>

All of our efforts are aimed at<span className="orange"> the primary goal ofrural development, helping local communities by bringing in new opportunities and building a holistic ecotourism system.</span>  To ensure hikers have a great experience, we have helped to develop over 70 hiking trails accessible for free through our platforms, all of which adhere to internationally recognized trail development guidelines.

We have also curated a growing database of 75 accommodations, 20+ recommended guides, and 100+ points of interest which give hikers not just practical information but also historical and cultural information along every trail.

We also enact community development programs aimed at spreading the ideals of  <span className="orange">nature preservation, hiking culture, and ecotourism</span>. A trail club for youth education and a volunteer trail maintenance group are just the start of community-focused initiatives in Armenia.</p>
        </div>

<div className="container">
    <h2> {title}</h2>
</div>

<div className="container">
   <img src = {image} width="500px" alt="pic"/>
</div>

<div className='container'>
<h3> Length: <span>{length}  </span>  Elevation: <span>{elevation}</span> </h3>
</div>

<div className=" containerOne">
    <button className='btn' onClick = {previousView}>Previous</button>
    <button className='btn' onClick = {nextView}>Next</button>
</div>



        </div> )
}

export default About;