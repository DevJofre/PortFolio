import { RiReactjsLine } from "react-icons/ri"
import { FaPython } from "react-icons/fa";
import { FaWordpressSimple } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si"
import { TbBrandJavascript } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";

const Technologies = () => {
    return(
        <div className="pd-24">
            <h2 className="my-20 text-center text-4xl">Tecnologias</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div >
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </div>
                <div className="p-4">
                    <FaPython className="text-7xl text-cyan-400"   />
                </div>
                <div className="p-4">
                    <FaWordpressSimple className="text-7xl text-cyan-500" />
                </div>
                <div className="p-4">
                    <TbBrandJavascript className="text-7xl text-green-500 " />
                </div>
                <div className="p-4">
                    <SiMongodb className="text-7xl text-cyan-500" />
                </div>
                <div className="p-4">
                    <BiLogoPostgresql className="text-7xl text-blue-400" />
                </div>
            </div>
        </div>
    )
}

export default Technologies