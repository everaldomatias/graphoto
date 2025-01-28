import "@/styles/components/image-viewer.scss"
import { useState } from "react"

interface ImageViewerProps {
    images: string[]
    initialIndex: number
    onClose: () => void
}

export default function ImageViewer({ images, initialIndex, onClose }: ImageViewerProps) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex)

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    return (
        <div className="image-viewer">
            <div className="overlay" onClick={onClose}></div>
            <div className="viewer-content">
            <button className="close-button" onClick={onClose}>✕</button>
            <button className="nav-button prev" onClick={handlePrev}>←</button>
            <img src={images[currentIndex]} alt={`Imagem ${currentIndex + 1}`} />
            <button className="nav-button next" onClick={handleNext}>→</button>
            </div>
        </div>
    )
}