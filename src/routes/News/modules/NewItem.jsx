import React from "react";
import classes from "./../news.module.scss";
import Image from "../../../components/ui/Image";
import Title from "../../../components/ui/Title";
import {TextCenter} from "../../../components/ui/Text";

const NewItem = (
    {data}
) => {

    return (
        <div className={classes.news}>
            <Image sizeWidth="40%">
                <img src={data.image} alt="image"/>
            </Image>
            <div className={classes.news__body}>
                <Title>{data.title}</Title>
                <TextCenter>{data.description}</TextCenter>

            </div>



        </div>
    )
}

export default NewItem;