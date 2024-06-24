import  { useState, useEffect } from 'react';

const Carrosel = () => {
    const [images] = useState([
        'carros.jpg',
        'carros1.jpg',
        'flash.jpg',
        'planetas.jpg'
    ]);
    
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 4000);

        return () => clearInterval(interval);
    }, [currentIndex, images.length]);

    return (
        <div className="flex justify-center items-center mb-10 mt-4">
                <div className="max-w-lg mx-auto">
                <img src={images[currentIndex]} alt={`Imagem ${currentIndex + 1}`} className="w-full" />
                </div>
            </div>
    );
};
export default Carrosel;