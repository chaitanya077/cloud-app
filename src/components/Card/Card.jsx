import React from "react";
// import styles from "./#card.module.css"
import styles from "./#card.module.css";
import Button  from "../Button/Button";
import Image from "next/image";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from "next/link";


// const data={
//   url
// }

function Card(props) {
  return (
    <div className={styles.mainCard}>
      <div className={styles.card}>
        <Image src={props.image} alt="icons" width={50} height={50}/>
        {/* style={width:"100%"}  */}
        <div className={styles.container} style={{margin:"10px 0"}}>
          <h4>
            {props.title}
          </h4>
          <p>{props.desc}</p>
        </div>
           <Link href={props.url}><u>Learn more</u></Link>
      </div>
    </div>
  );
}

export default Card;
