import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"
import {
    FiHome,
    FiBriefcase,
    FiBookOpen,
    FiAward,
    FiCpu,
    FiFolder,
    FiMail
} from "react-icons/fi";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const BASE_PATH = import.meta.env.BASE_URL;

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false);
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="container mx-auto flex justify-between items-center px-6 py-4">

                {/* Logo + Título */}
                <div
                    className="flex items-center cursor-pointer text-blue-400"
                    onClick={() => handleScroll("inicio")}
                >
                    {/* Logo */}
                    <img
                        src={BASE_PATH + 'logo.png'}
                        alt="Logo"
                        className="w-8 h-8 mr-2"
                    />

                    {/* Texto */}
                    <h1 className="text-2xl font-bold">
                        Portfólio
                    </h1>
                </div>

                {/* Menu Desktop */}
                <ul className="hidden md:flex gap-8 font-medium text-gray-700">

                    <li className="cursor-pointer flex items-center gap-2 hover:text-blue-400"
                        onClick={() => handleScroll("inicio")}>
                        <FiHome /> Início
                    </li>

                    <li className="cursor-pointer flex items-center gap-2 hover:text-blue-400"
                        onClick={() => handleScroll("experiencias")}>
                        <FiBriefcase /> Experiências
                    </li>

                    <li className="cursor-pointer flex items-center gap-2 hover:text-blue-400"
                        onClick={() => handleScroll("formacoes")}>
                        <FiBookOpen /> Acadêmico
                    </li>

                    <li className="cursor-pointer flex items-center gap-2 hover:text-blue-400"
                        onClick={() => handleScroll("certificacoes")}>
                        <FiAward /> Certificações
                    </li>

                    <li className="cursor-pointer flex items-center gap-2 hover:text-blue-400"
                        onClick={() => handleScroll("skills")}>
                        <FiCpu /> Skills
                    </li>

                    <li className="cursor-pointer flex items-center gap-2 hover:text-blue-400"
                        onClick={() => handleScroll("projetos")}>
                        <FiFolder /> Projetos
                    </li>

                    <li className="cursor-pointer flex items-center gap-2 hover:text-blue-400"
                        onClick={() => handleScroll("contato")}>
                        <FiMail /> Contato
                    </li>
                </ul>

                {/* Botão Mobile */}
                <button
                    className="md:hidden text-2xl text-gray-700"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Menu Mobile */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-lg py-4">
                    <ul className="flex flex-col gap-6 items-center font-medium text-gray-700">

                        <li className="cursor-pointer flex items-center gap-2 hover:text-blue-400"
                            onClick={() => handleScroll("inicio")}>
                            <FiHome /> Início
                        </li>

                        <li className="cursor-pointer flex items-center gap-2 hover:text-blue-400"
                            onClick={() => handleScroll("experiencias")}>
                            <FiBriefcase /> Experiências
                        </li>

                        <li className="cursor-pointer flex items-center gap-2 hover:text-blue-400"
                            onClick={() => handleScroll("formacoes")}>
                            <FiBookOpen /> Acadêmico
                        </li>

                        <li className="cursor-pointer flex items-center gap-2 hover:text-blue-400"
                            onClick={() => handleScroll("certificacoes")}>
                            <FiAward /> Certificações
                        </li>

                        <li className="cursor-pointer flex items-center gap-2 hover:text-blue-400"
                            onClick={() => handleScroll("skills")}>
                            <FiCpu /> Skills
                        </li>

                        <li className="cursor-pointer flex items-center gap-2 hover:text-blue-400"
                            onClick={() => handleScroll("projetos")}>
                            <FiFolder /> Projetos
                        </li>

                        <li className="cursor-pointer flex items-center gap-2 hover:text-blue-400"
                            onClick={() => handleScroll("contato")}>
                            <FiMail /> Contato
                        </li>

                    </ul>
                </div>
            )}
        </nav>
    );
}