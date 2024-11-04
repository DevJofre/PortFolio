import { RiReactjsLine } from "react-icons/ri"
import { FaPython } from "react-icons/fa";
import { FaWordpressSimple } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si"
import { TbBrandJavascript } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
}) 

const Technologies = () => {
    return(
        <div className="pd-24">
            <motion.h2 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 1.5 }} className="my-20 text-center text-4xl">Tecnologias</motion.h2>
            <motion.div whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 1.5 }} className="flex flex-wrap items-center justify-center gap-4">
                <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)}>
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="p-4">
                    <FaPython className="text-7xl text-cyan-400"   />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(5)} className="p-4">
                    <FaWordpressSimple className="text-7xl text-cyan-500" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(2)} className="p-4">
                    <TbBrandJavascript className="text-7xl text-green-500 " />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(6)} className="p-4">
                    <SiMongodb className="text-7xl text-cyan-500" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(4)} className="p-4">
                    <BiLogoPostgresql className="text-7xl text-blue-400" />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies