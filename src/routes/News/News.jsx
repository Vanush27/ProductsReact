import React from "react";
import ContextData from "../../context/Data/ContextData";
import NewItem from "./modules/NewItem";
import NET from "../../network";
import Office from "../../layuots/office/Office";

const News = () => {

    const {stateData, dispatchData} = React.useContext(ContextData);

    const news = stateData.news;

    React.useEffect(() => {
        const fetchNews = async () => {

            try {
                const response = await fetch(`${NET.APP_URL}/news`);
                if (response.status === 200) {
                    const result = await response.json();
                    dispatchData({
                        type: "FETCH_NEWS",
                        payload: result
                    })
                }
            } catch (e) {
                console.log(e);
            }
        }

        fetchNews();

    }, []);

    return (

        <Office>
            {news.map((elem, index) => {
                return (
                    <NewItem data={elem} key={index}/>
                )
            })}
        </Office>

    );
}

export default News;