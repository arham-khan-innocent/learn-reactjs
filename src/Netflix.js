import React from "react";
import Card from './Card';
function Netflix()
{
    return(
        <React.Fragment>

            <h1 className="heading_style">List of top 5 Netflix Series in 2022</h1>

            <Card
                imageSrc = 'https://wallpapercave.com/wp/wp4056410.jpg'
                heading = 'DARK'
                title = 'A Netflix Original Series'
                link = '#'
            />

            <Card
                imageSrc = 'https://wallpapercave.com/wp/wp4056410.jpg'
                heading = 'DARK'
                title = 'A Netflix Original Series'
                link = '#'
            />

            <Card
                imageSrc = 'https://wallpapercave.com/wp/wp4056410.jpg'
                heading = 'DARK'
                title = 'A Netflix Original Series'
                link = '#'
            />
            <Card
                imageSrc = 'https://wallpapercave.com/wp/wp4056410.jpg'
                heading = 'DARK'
                title = 'A Netflix Original Series'
                link = '#'
            />
            
        </React.Fragment>
    )
}

export default Netflix;