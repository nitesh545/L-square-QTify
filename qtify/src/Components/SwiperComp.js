// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// // import { Navigation, Pagination } from "swiper/modules";
// // import "swiper/css";
// // import "swiper/css/navigation";
// // import "swiper/css/pagination";
// import SongCard from "./SongCard";

// export default function SwiperComp({ topAlbums }) {
//     return (
//         <Swiper
//             effect="coverflow"
//             grabCursor={true}
//             centeredSlides={true}
//             loop={true}
//             slidesPerView="auto"
//             spaceBetween={0}
//             className="swiper-container"
//         >
//             {/* {topAlbums.map((card) => {
//                 return (
//                     <SwiperSlide key={card.id}>
//                         <SongCard
//                             image={card.image}
//                             follows={card.follows}
//                             title={card.title}
//                         />
//                     </SwiperSlide>
//                 );
//             })} */}
//         </Swiper>
//     );
// }

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SongCard from "./SongCard";
import leftimg from "../Assets/left.png";
import rightimg from "../Assets/right.png";

export default function SwiperComp({ album, text }) {
    console.log(album);
    if (!album) {
        return null;
    }
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={6}
            navigation
            loop={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        >
            {album.map((card) => {
                return (
                    <SwiperSlide key={card.id}>
                        <SongCard
                            image={card.image}
                            follows={
                                text === "Likes" ? card.likes : card.follows
                            }
                            title={card.title}
                            text={text}
                        />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}
