import React from 'react';
import Story from './Story';
import './StoryReel.css';

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story 
                image='https://static.scientificamerican.com/sciam/cache/file/4E0744CD-793A-4EF8-B550B54F7F2C4406.jpg'
                profileSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/220px-Outdoors-man-portrait_%28cropped%29.jpg'
                title="Ahmed Memed"
            />
            <Story 
                image='https://media.wired.com/photos/5d09594a62bcb0c9752779d9/125:94/w_1994,h_1500,c_limit/Transpo_G70_TA-518126.jpg'
                profileSrc='https://www.yourtango.com/sites/default/files/image_blog/types-guys-who-stay-single-men.jpg'
                title="John Stephens"
            />
            <Story 
                image='https://i.pcmag.com/imagery/roundups/03238eOHzMtNAsyU8sWbsXV-1.1600107026.fit_lim.size_1182x667.jpg'
                profileSrc='https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190925152622-freddy-mcconnell.jpg'
                title="Steven Jameson"
            />
            <Story 
                image='https://i.pinimg.com/originals/16/dc/0f/16dc0f4ce0cc2126e145e7225104962a.jpg'
                profileSrc='https://www.donegallive.ie/resizer/420/315/true/GN4_DAT_16732044.jpg--man_about_town__a_beginner_s_guide_to_manscaping.jpg'
                title="Sanny Miller"
            />
            <Story 
                image='https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg'
                profileSrc='https://pbs.twimg.com/media/Emg6e7sU0AA8hIO.jpg'
                title="Linus"
            />
        </div>
    )
}

export default StoryReel
