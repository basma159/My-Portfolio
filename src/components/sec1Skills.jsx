import Headsection from "./headSection";
import SkillCircle from "./skillCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// 1️⃣ ضيفي أسطر الـ CSS دي عشان التنسيق يظبط
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function SecOne() {
    return (
        <section id="skills" className="w-full flex justify-center scroll-mt-28 mt-5" data-aos="fade-up">
            <div className="container w-full flex flex-col gap-3">
                <Headsection
                    text1={"Technical Expertise"}
                    text2={"Front-End Skills"}
                    text3={"The front-end technologies I use to build modern, responsive web experiences."}
                />

                {/* 2️⃣ إضافة الخيارات لـ Swiper وتغليف العناصر بـ SwiperSlide */}
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                    className="w-full py-8"
                >
                    <SwiperSlide>
                        <SkillCircle
                            title="HTML5"
                            levelText="Advanced"
                            strokeColor="text-yellow-500"
                            progressPercent={90}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <SkillCircle
                            title="CSS3"
                            levelText="Advanced"
                            strokeColor="text-red-600"
                            progressPercent={80}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <SkillCircle
                            title="JavaScript"
                            levelText="Medium"
                            strokeColor="text-green-600"
                            progressPercent={80}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <SkillCircle
                            title="React.js"
                            levelText="Junior"
                            strokeColor="text-cyan-400"
                            progressPercent={40}
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <SkillCircle
                            title="Tailwind Css"
                            levelText="Advanced"
                            strokeColor="text-pink-600"
                            progressPercent={90}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SkillCircle
                            title="Responsive"
                            levelText="Very Good"
                            strokeColor="text-purple-600"
                            progressPercent={70}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}

export default SecOne;