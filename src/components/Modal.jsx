import { FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Modal({ isOpen, onClose, title, children }) {
    const [previewImage, setPreviewImage] = useState(null);

    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                <div className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl p-6 relative shadow-lg">

                    {/* Botão fechar */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                    >
                        <FaTimes size={22} />
                    </button>

                    <h2 className="text-2xl font-bold mb-4">{title}</h2>

                    {/* Tudo que vem do App.jsx aparece aqui (texto, vídeo, imagens, etc) */}
                    {children}

                </div>
            </div>

            {/* Lightbox */}
            {previewImage && (
                <div
                    className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4"
                    onClick={() => setPreviewImage(null)}
                >
                    <img
                        src={previewImage}
                        className="max-w-[90vw] max-h-[90vh] rounded shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
}