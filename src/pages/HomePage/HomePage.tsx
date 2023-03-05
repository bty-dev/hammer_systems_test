import React from 'react';
import {useGetPostsQuery, useLazyGetPostQuery} from "../../store/api/placeholder.api";

import classes from './HomePage.module.scss';
import {useNavigate} from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const HomePage = () => {
    const {isLoading, isError, data} = useGetPostsQuery();
    const navigate = useNavigate();


    const clickHandler = (id: number) => {
       navigate("/profile", {
           state: {
               id
           }
       });
    }

    return (
        <div className={classes.main}>
            {isError && <div>Error</div>}
            {isLoading && <Loader/>}
            {
                !isLoading
                ?
                    <div className={classes.table__wrapper}>
                        <table>
                            <thead>
                            <tr>
                                <th>User Id</th>
                                <th>id</th>
                                <th>title</th>
                                <th>body</th>
                            </tr>

                            </thead>
                            {
                                data?.map(item => (
                                    <tbody onClick={() => clickHandler(item.id)} key={item.id}>
                                    <tr>
                                        <td>{item.userId}</td>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.body}</td>
                                    </tr>
                                    </tbody>
                                ))
                            }
                        </table>
                    </div>
                : null
            }

        </div>
    );
};

export default HomePage;