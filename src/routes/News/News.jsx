import React from "react";
import classes from "../../style.module.scss";
import Navbar from "../../modules/Navigation/Navbar";
import Header from "../../modules/Navigation/Header";
import ContextData from "../../context/Data/ContextData";

const News = () => {

    const {stateData, dispatchData} = React.useContext(ContextData);

    const news = stateData.news;

    React.useEffect(() => {
        const fetchNews = async () => {

            try {
                const response = await fetch("http://localhost:3004/news");
                if (response.status === 200) {
                    const result = await response.json();
                    dispatchData({
                        type : "FETCH_NEWS",
                        payload : result
                    })
                }
            } catch (e) {
                console.log(e);
            }
        }

        fetchNews();

    }, []);

    return (

        <div className={classes.main}>
            <div className={classes.main__navigition}><Navbar/></div>
            <div className={classes.main__content}>
                <Header/>
                {news.map((elem,index)=>{
                    return(
                        <div key={index}>
                            <div>{elem.title}</div>
                            <div>{elem.description}</div>
                            <div>{elem.category}</div>
                            <div><img src={elem.image} alt=""/></div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default News;