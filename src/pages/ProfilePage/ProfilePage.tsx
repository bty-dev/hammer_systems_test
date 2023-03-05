import React, {useEffect, useState} from 'react';

import classes from './ProfilePage.module.scss';
import {useLocation, useNavigate} from "react-router-dom";
import {useLazyGetPostQuery} from "../../store/api/placeholder.api";
import Loader from "../../components/Loader/Loader";

const ProfilePage = () => {
    const location = useLocation();
    const [fetchPost, {isLoading, isError, data}] = useLazyGetPostQuery();
    const [saveLoading, setSaveLoading] = useState(false);
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("")

    const [error, setError] = useState(false);

    const style = {
        borderColor: error ? "red" : "black",
    }

    useEffect(() => {
        fetchPost(+location.state.id);
    }, [])

    useEffect(() => {
        setTitle(data?.title || "")
        setBody(data?.body || "")
    }, [data])

    const saveHandler = () => {
        if (!title || !body) {
            setError(true);
            return;
        }
        setSaveLoading(true)
        setTimeout(() => {
            navigate("/", {
                state: {},
            })
        }, 1000)
    }

    const inputHandler = (type: string, value: string) => {
        setError(false);
        if (type === "title") {
            setTitle(value);
            return;
        }
        setBody(value);
    }

    return (
        <div className={classes.main}>
            {isError && <div>Error</div>}
            {(isLoading || saveLoading) && <Loader/>}
            {
                !isLoading && !saveLoading
                ?
                <div className={classes.main__content}>
                    <div className={classes.image__wrapper}>
                        <span className={classes.image__wrapper__id}>{data?.id}</span>
                    </div>
                    <div className={classes.input__container}>
                        <label className={classes.input__container__label} htmlFor="title">Title:</label>
                        <input style={style} onChange={(e) => inputHandler("title", e.target.value)} value={title} placeholder="title" className={classes.input__container__field} name="title" type="text"/>
                    </div>
                    <div className={classes.input__container}>
                        <label className={classes.input__container__label} htmlFor="body">Body:</label>
                        <textarea style={style} onChange={(e) => inputHandler("body", e.target.value)} value={body} placeholder="body" className={classes.input__container__field} name="title"/>
                    </div>
                    <button onClick={() => saveHandler()} className={classes.btn__save}>Save changes</button>
                </div>
                : null
            }
        </div>
    );
};

export default ProfilePage;