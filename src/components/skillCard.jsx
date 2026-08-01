import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const SkillCircle = ({ title, levelText, strokeColor, progressPercent = 75 }) => {
    // حسابات الـ SVG لتحديد طول القوس
    const radius = 50;
    const circumference = 2 * Math.PI * radius; // حوالي 314
    const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

    return (
        <div className="flex flex-col items-center gap-3">
            {/* Container الدائرة */}
            <div className="relative w-36 h-36 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                    {/* الدائرة الخلفية (الرمادية) */}
                    <circle
                        cx="72"
                        cy="72"
                        r={radius}
                        className="text-gray-800"
                        strokeWidth="8"
                        stroke="currentColor"
                        fill="transparent"
                    />
                    {/* الدائرة الملونة (التقدم) */}
                    <circle
                        cx="72"
                        cy="72"
                        r={radius}
                        className={`${strokeColor} transition-all duration-1000 ease-out`}
                        strokeWidth="8"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                    />
                </svg>

                {/* النص أو اللوجو اللي في النص */}
                <div className="absolute text-center">
                    <span className="text-lg font-bold text-white block">{levelText}</span>
                </div>
            </div>

            {/* اسم التقنية تحت الدائرة */}
            <h3 className="text-gray-200 font-semibold text-base">{title}</h3>
        </div>
    );
};

export default SkillCircle;