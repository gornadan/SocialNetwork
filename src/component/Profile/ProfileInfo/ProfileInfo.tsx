import React from 'react';
import classes from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return <div>
        <div>
            <img src='http://proklumbu.com/wp-content/uploads/2017/06/tomswallpapers.com-9250.jpg'/>
        </div>
        <div>
            <img
                src='http://185504.selcdn.ru/static/mv-flowers.reshop.by/catalog/404/16942458315ec39932dd4b7_medium.jpg'/>
        </div>
        <div className={classes.descriptionBlock}> ava + description</div>




    </div>


}

export default ProfileInfo;