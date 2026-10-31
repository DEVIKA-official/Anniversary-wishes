import { motion } from "framer-motion";
import {
Clock3,
BookHeart,
Cpu,
GraduationCap,
HeartHandshake
} from "lucide-react";

import "./AnimeNavbar.css";

const links=[

{
icon:<Clock3 size={20}/>,
title:"Timeline"
},

{
icon:<BookHeart size={20}/>,
title:"Story"
},

{
icon:<Cpu size={20}/>,
title:"IEEE"
},

{
icon:<GraduationCap size={20}/>,
title:"Graduation"
},

{
icon:<HeartHandshake size={20}/>,
title:"Memories"
}

];

function AnimeNavbar(){

return(

<motion.nav

className="animeNav"

initial={{y:-120}}

animate={{y:0}}

transition={{
duration:1.1,
type:"spring"
}}

>

<div className="logo">

✨ DreamBook

</div>

<div className="navLinks">

{

links.map((item,index)=>(

<motion.div

className="navItem"

key={index}

whileHover={{

y:-8,
scale:1.08

}}

transition={{

type:"spring"

}}

>

<div className="iconCircle">

{item.icon}

</div>

<span>

{item.title}

</span>

</motion.div>

))

}

</div>

</motion.nav>

)

}

export default AnimeNavbar;