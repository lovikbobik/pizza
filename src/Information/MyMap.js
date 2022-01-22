import {YMaps, Map, Placemark} from 'react-yandex-maps';
import "./Map.css"
import Modal from "./Modal";
import React, {useState} from "react";
import Loader from "../Loader/Loader";
import {useHttp} from "../hooks/http.hook";

function MyMap() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <YMaps>
            <div style={{height: '70vh', width: '100%'}}>
                <Map style={{height: '80vh', width: '100%'}}
                     defaultState={{center: [43.024486, 131.893748], zoom: 17}}>
                    <Placemark className={"wrapper"}
                               geometry={[43.024486, 131.893748]}
                               properties={{
                                   balloonContentHeader: 'Pizza',
                                   balloonContentBody: 'рейтинг: 4,9',
                                   backdrop: false
                               }}
                               options={{
                                   preset: 'islands#redIcon',
                                   iconImageSize: [40, 40],
                                   openEmptyBalloon: true,
                                   backdrop: false
                               }}
                               modules={["geoObject.addon.balloon"]}
                               onClick={() => {
                                   setModalOpen(true);
                               }}
                    />
                    {modalOpen && <Modal setOpenModal={setModalOpen} />}
                </Map>
            </div>
        </YMaps>
    )
};

export default MyMap;