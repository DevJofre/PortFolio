import { CONTACT } from "."

const Contact = () => {
    return (
      <div className=" border-t border-stone-900 pb-20">
        <h2 className=" my-10 text-center text-4xl " > Entre em contato </h2>
        <div className="text-center tracking-tighter" >
            <p className="my-4" >
                {CONTACT.phoneNo}
            </p>
            <a href="a" className="border-b" >
            {CONTACT.email}
            </a>
        </div>
      </div> 
    )
}

export default Contact