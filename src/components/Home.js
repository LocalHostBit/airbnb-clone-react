import React from 'react'
import Header from './Header'
import Banner from './Banner'
import Card from './Card'
import Footer from './Footer'
import "./Home.css"

function Home() {
    return (
        <div className='home'>
            <Header />
            <Banner />
            <div className='home__section'>
                <Card 
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    title="Espacios unicos"
                    description="Alojamientos que invitan a soñar"
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/4a2f688e-0b33-4feb-932f-494b9a37348c.jpg?im_w=720"
                    title="Experiencias online"
                    description="Un mundo de actividades únicas que podemos hacer juntos, aunque estemos separados."
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                    title="Alojamientos enteros"
                    description="Alojamientos enteros para disfrutarlos cómodamente con la familia o los amigos."
                />
            </div>
            <div className='home__section'>
                <Card 
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    title="Espacios unicos"
                    description="Alojamientos que invitan a soñar"
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/4a2f688e-0b33-4feb-932f-494b9a37348c.jpg?im_w=720"
                    title="Experiencias online"
                    description="Un mundo de actividades únicas que podemos hacer juntos, aunque estemos separados."
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                    title="Alojamientos enteros"
                    description="Alojamientos enteros para disfrutarlos cómodamente con la familia o los amigos."
                />
            </div>
            <Footer />
        </div>
    )
}

export default Home
